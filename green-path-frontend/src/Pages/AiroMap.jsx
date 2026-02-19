import React from "react";
import MapComponent from "../components/MapComponent";
import IncidentReport from "../components/IncidentReport";

function AiroMap() {
    return (
        <div className="max-w-7xl space-y-4 py-6 md:py-16 mx-auto px-4 pb-10">    
            <div className="mt-16 max-w-md">
                <IncidentReport />
            </div>
            <MapComponent />
        </div>
    );
}

export default AiroMap;
