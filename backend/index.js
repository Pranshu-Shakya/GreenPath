import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 4000;

// Get routes from OSRM
async function getRoutes(start, end) {

    const routes = [];

    const [startLon, startLat] = start.split(",").map(Number);
    const [endLon, endLat] = end.split(",").map(Number);

    const midLon = (startLon + endLon) / 2;
    const midLat = (startLat + endLat) / 2;

    // generate circular waypoint offsets (~300–500m radius)
    const radius = 0.004;

    const waypointOffsets = [
        [0, 0], // direct route

        [radius, 0],
        [-radius, 0],

        [0, radius],
        [0, -radius],

        [radius, radius],
        [-radius, -radius]
    ];

    for (const [dx, dy] of waypointOffsets) {

        try {

            let url;

            if(dx === 0 && dy === 0) {

                url =
                `https://router.project-osrm.org/route/v1/foot/${start};${end}?overview=full&geometries=geojson`;

            } else {

                const wpLon = midLon + dx;
                const wpLat = midLat + dy;

                url =
                `https://router.project-osrm.org/route/v1/foot/${start};${wpLon},${wpLat};${end}?overview=full&geometries=geojson`;
            }

            const response = await axios.get(url);

            if(response.data.routes.length > 0) {

                const route = response.data.routes[0];

                // prevent duplicate routes
                const isDuplicate = routes.some(r =>
                    Math.abs(r.distance - route.distance) < 50
                );

                if(!isDuplicate)
                    routes.push(route);
            }

            if(routes.length === 3)
                break;

        } catch(e) {}
    }

    console.log("Jogging routes generated:", routes.length);
    console.log(routes)

    return routes;
}







// Get pollution data (OpenAQ)
async function getPollution(lat, lon) {
	try {
		const url = `https://api.openaq.org/v2/latest?coordinates=${lat},${lon}`;

		const response = await axios.get(url);

		if (response.data.results.length === 0) return 100; // default pollution

		const measurements = response.data.results[0].measurements;

		const pm25 = measurements.find((m) => m.parameter === "pm25");

		return pm25 ? pm25.value : 100;
	} catch (error) {
		return 100;
	}
}

// Calculate health score
async function calculateHealthScore(route) {
	const coordinates = route.geometry.coordinates;

	let totalPollution = 0;
	let count = 0;

	// sample every 10th point to reduce API calls
	for (let i = 0; i < coordinates.length; i += 100) {
		const [lon, lat] = coordinates[i];

		const pollution = await getPollution(lat, lon);

		totalPollution += pollution;
		count++;
	}

	return count === 0 ? 100 : totalPollution / count;
}

// Main API
app.get("/route", async (req, res) => {

    const { start, end } = req.query;

    const candidateRoutes = await getRoutes(start, end);
    console.log("Candidate routes:", candidateRoutes);

    const scoredRoutes = [];

    for(const route of candidateRoutes) {

        const pollution = await calculateHealthScore(route);

        const distance = route.distance;

        scoredRoutes.push({
            distance,
            duration: route.duration,
            geometry: route.geometry,
            healthScore: pollution,

            // combined cost
            cost: pollution * 0.7 + (distance/1000) * 0.3
        });
    }

    // sort by cost
    scoredRoutes.sort((a,b)=>a.cost-b.cost);

    // select top 3 with diversity constraint
    const selected = [];

    for(const route of scoredRoutes){

        if(selected.length === 0){
            selected.push(route);
            continue;
        }

        const tooSimilar = selected.some(r =>
            Math.abs(r.distance - route.distance) < 2000 &&
            Math.abs(r.healthScore - route.healthScore) < 20
        );

        if(!tooSimilar)
            selected.push(route);

        if(selected.length === 3)
            break;
    }

    res.json(selected);
});


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Welcome to the Cleanest Route Finder API!");
});
