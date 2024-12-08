"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Map as LeafletMap } from "leaflet"; // Ensure this is imported for type
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useVehicles } from "@/hooks/use-vehicles";
import { cn } from "@/lib/utils";

// Custom marker icon
const vehicleIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  onVehicleSelect: (id: string) => void;
  selectedVehicleId: string | null;
}

export default function Map({ onVehicleSelect, selectedVehicleId }: MapProps) {
  const { vehicles } = useVehicles();
  const [map] = useState<LeafletMap | null>(null);

  
  useEffect(() => {
    if (map && selectedVehicleId) {
      const vehicle = vehicles.find((v) => v.vehicleNumber === selectedVehicleId);
      if (vehicle) {
        // Get the latest location update for the selected vehicle
        const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];
        map.setView([latestUpdate.latitude, latestUpdate.longitude], 15);
      }
    }
  }, [selectedVehicleId, vehicles, map]);

  return (
    <MapContainer
      center={[24.8607, 67.0011]}
      zoom={13}
      className={cn("h-full w-full")}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.map((vehicle) => {
        // Get the latest location update for each vehicle
        const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];

        return (
          <Marker
            key={vehicle.vehicleNumber}
            position={[latestUpdate.latitude, latestUpdate.longitude]}
            icon={vehicleIcon}
            eventHandlers={{
              click: () => onVehicleSelect(vehicle.vehicleNumber),
            }}
          >
            <Popup offset={[0, -20]}>
              <div className="p-0">
                <h3 className="font-semibold">{vehicle.vehicleNumber}</h3>
                <p>Area: {latestUpdate.area}</p>
                <p>Time: {latestUpdate.time}</p>
                <p>Date: {latestUpdate.date}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
