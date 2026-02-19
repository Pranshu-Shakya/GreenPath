import React from "react";
import MapComponent from "../components/MapComponent";
import IncidentReport from "../components/IncidentReport";

function AiroMap() {
    return (
        <div className=" space-y-4 px-6 py-6 md:py-8 mx-auto pb-10 bg-linear-to-b from-[#FFEFEF] via-[#756AB6]/40 to-[#FFEFEF] min-h-screen">
            <div className="mt-16 max-w-md">
                <IncidentReport />
            </div>
            <MapComponent />
        </div>
    );
}

export default AiroMap;
