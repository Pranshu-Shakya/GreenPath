import React, { useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Loader2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAiroMap } from "../Hooks/useMap";

const INCIDENT_TYPES = [
  "FIRE",
  "CONSTRUCTION",
  "TRAFFIC",
  "INDUSTRIAL",
  "GARBAGE_BURNING",
  "ROAD_DUST",
];

// Severity mapping (UI → internal value)
const SEVERITY_LABELS = {
  1: "Low",
  3: "Moderate",
  5: "High",
};

function IncidentReport() {
  const [open, setOpen] = useState(false);

  const { reportIncident, loading, error } = useAiroMap();

  const [incidentType, setIncidentType] = useState("");
  const [coords, setCoords] = useState(null);

  // internal numeric value (1–5)
  const [severity, setSeverity] = useState(1);

  /* ===========================
     FETCH CURRENT LOCATION
  =========================== */
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setCoords({ lat, lng });
        console.log("📍 Coordinates fetched:", { lat, lng });
      },
      () => {
        alert("Please allow location access");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  /* ===========================
     SUBMIT INCIDENT
  =========================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!incidentType || !coords) {
      alert("Please select incident type and fetch location");
      return;
    }

    const incidentPayload = {
      type: incidentType,
      lat: coords.lat,
      long: coords.lng,
      severity:severity*20, // numeric value (1–5)
    };

    console.log("🚨 Sending payload:", incidentPayload);

    await reportIncident(incidentPayload);

    setOpen(false);
  };

  return (
    <div className="w-full">

      {/* ===== TAB / TOGGLE ===== */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-fit flex items-center gap-2
          px-4 py-3 rounded-xl
          bg-[#F4ECF7]
          border border-[#E2BBE9]
          text-[#756AB6]
          shadow-md hover:bg-[#EDE3F3]
        "
      >
        <AlertTriangle size={18} />
        <span className="font-medium">Report Incident</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* ===== FORM ===== */}
      {open && (
        <div className="mt-4 bg-[#F4ECF7] border border-[#E2BBE9] rounded-2xl p-5 shadow-md">

          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-4 items-end w-full"
          >

            {/* INCIDENT TYPE */}
            <div className="flex-1 min-w-[180px]">
              <label className="text-sm text-[#6B5FA7] font-medium">
                Incident Type
              </label>
              <select
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg bg-white border border-[#E2BBE9]
                           text-[#6B5FA7] focus:outline-none focus:ring-2 focus:ring-[#756AB6]"
              >
                <option value="">Select incident</option>
                {INCIDENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>

            {/* SEVERITY (ALWAYS VISIBLE) */}
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm text-[#6B5FA7] font-medium">
                Severity:{" "}
                <span className="font-semibold text-[#756AB6]">
                  {SEVERITY_LABELS[
                    severity === 1 ? 1 : severity <= 3 ? 3 : 5
                  ]}
                </span>
              </label>

              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={severity}
                onChange={(e) =>
                  setSeverity(Number(e.target.value))
                }
                className="w-full mt-1 accent-[#756AB6]"
              />

              <div className="flex justify-between text-xs text-[#6B5FA7] mt-1">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
              </div>
            </div>

            {/* FETCH LOCATION */}
            <button
              type="button"
              onClick={fetchLocation}
              className="
                min-w-[200px] h-[42px]
                flex items-center justify-center gap-2
                px-4 py-2 rounded-lg
                bg-[#756AB6] text-white
                shadow-md hover:opacity-90
              "
            >
              <MapPin size={18} />
              Use Current Location
            </button>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="
                min-w-[180px] h-[42px]
                flex items-center justify-center gap-2
                px-4 py-2 rounded-lg
                bg-[#756AB6] text-white
                shadow-md hover:opacity-90
                disabled:opacity-60
              "
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Reporting
                </>
              ) : (
                "Report Incident"
              )}
            </button>
          </form>

          {coords && (
            <p className="text-xs text-green-600 mt-3">
              Location captured ({coords.lat.toFixed(4)},{" "}
              {coords.lng.toFixed(4)})
            </p>
          )}

          
        </div>
      )}
    </div>
  );
}

export default IncidentReport;
