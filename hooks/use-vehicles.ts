"use client";

import { useState, useEffect } from "react";
import { Vehicle, LocationUpdate, mockVehicles } from "@/vehicleData/data3"

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(mockVehicles.slice(0, 50));

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((vehicle) => {
          const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];
          
          // Generate new random latitude and longitude close to the last update
          const newLatitude = latestUpdate.latitude + (Math.random() - 0.5) * 0.001;
          const newLongitude = latestUpdate.longitude + (Math.random() - 0.5) * 0.001;
          
          // Create a new location update
          const newUpdate: LocationUpdate = {
            date: latestUpdate.date, // Or update to the current date if needed
            time: latestUpdate.time,
            latitude: newLatitude,
            longitude: newLongitude,
            area: latestUpdate.area // Or update the area if needed
          };

          // Add the new update to the locationUpdates array
          return {
            ...vehicle,
            locationUpdates: [...vehicle.locationUpdates, newUpdate]
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { vehicles };
}
