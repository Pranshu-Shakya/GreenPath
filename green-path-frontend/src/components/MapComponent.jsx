import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    MapContainer,
    TileLayer,
    Polyline,
    Marker,
    Popup,
    useMap
} from "react-leaflet";

import L from "leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Auto-fit map to routes
function FitBounds({ routes }) {

    const map = useMap();

    useEffect(() => {

        if (!routes.length) return;

        const bounds = [];

        routes.forEach(route => {
            route.geometry.coordinates.forEach(coord => {
                bounds.push([coord[1], coord[0]]);
            });
        });

        map.fitBounds(bounds, { padding: [50, 50] });

    }, [routes]);

    return null;
}

function MapComponent() {

    const [routes, setRoutes] = useState([]);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const getRoute = async () => {

        if (!start || !end) {
            alert("Enter source and destination");
            return;
        }

        try {

            const response = await axios.get(
                `http://localhost:4000/route?start=${start}&end=${end}`
            );

            console.log("Frontend received routes:", response.data);

            setRoutes(response.data);

        } catch (err) {
            console.error(err);
        }
    };

    const colors = ["green", "blue", "red"];

    const startCoords = start ? start.split(",").map(Number) : null;
    const endCoords = end ? end.split(",").map(Number) : null;

    return (
        <div>

            <h3>Enter coordinates:</h3>

            <input
                placeholder="Start (longitude,latitude)"
                value={start}
                onChange={(e) => setStart(e.target.value)}
            />

            <input
                placeholder="End (longitude,latitude)"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
            />

            <button onClick={getRoute}>
                Find Jogging Routes
            </button>

            <MapContainer
                center={[26.8467, 80.9462]}
                zoom={13}
                style={{ height: "500px", width: "600px", marginTop: "20px" }}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FitBounds routes={routes} />

                {/* Start marker */}
                {startCoords && (
                    <Marker position={[startCoords[1], startCoords[0]]}>
                        <Popup>Start</Popup>
                    </Marker>
                )}

                {/* End marker */}
                {endCoords && (
                    <Marker position={[endCoords[1], endCoords[0]]}>
                        <Popup>End</Popup>
                    </Marker>
                )}

                {/* Routes */}
                {routes.map((route, index) => {

                    const positions = route.geometry.coordinates.map(
                        coord => [coord[1], coord[0]]
                    );

                    return (
                        <Polyline
                            key={index}
                            positions={positions}
                            color={colors[index]}
                            weight={6}
                            opacity={0.8}
                        />
                    );
                })}

            </MapContainer>

            <h3>Route Scores:</h3>

            {routes.map((route, index) => (

                <div key={index}>
                    Route {index + 1} |
                    Distance: {(route.distance / 1000).toFixed(2)} km |
                    Time: {(route.duration / 60).toFixed(1)} min |
                    Health Score: {route.healthScore?.toFixed(2) ?? "N/A"}
                </div>

            ))}

        </div>
    );
}

export default MapComponent;
