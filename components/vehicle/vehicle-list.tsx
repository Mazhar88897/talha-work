"use client";

import { useVehicles } from "@/hooks/use-vehicles";
import { cn } from "@/lib/utils";
import {
  Circle,
  Clock,
  MapPin,
  Truck,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface VehicleListProps {
  onVehicleSelect: (id: string) => void;
  selectedVehicleId: string | null;
}

export function VehicleList({ onVehicleSelect, selectedVehicleId }: VehicleListProps) {
  const { vehicles } = useVehicles();

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Vehicles Overview</h2>
        <div className="space-y-2">
          {vehicles.map((vehicle) => {
            // Get the latest location update for each vehicle
            const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];
            
            return (
              <button
                key={vehicle.vehicleNumber}
                onClick={() => onVehicleSelect(vehicle.vehicleNumber)}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-colors hover:bg-accent",
                  selectedVehicleId === vehicle.vehicleNumber && "border-primary bg-accent"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5" />
                    <div>
                      <h3 className="font-medium">{vehicle.vehicleNumber}</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                  {/* Display the latest area */}
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{latestUpdate?.area}</span>
                  </div>
                  {/* Display the latest time */}
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{latestUpdate?.time}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}

function StatusIndicator({ status }: { status: string }) {
  const colors = {
    active: "text-green-500",
    idle: "text-yellow-500",
    offline: "text-gray-500",
  };

  return (
    <div className="flex items-center gap-1">
      <Circle className={cn("h-3 w-3 fill-current", colors[status as keyof typeof colors])} />
      <span className="text-sm capitalize">{status}</span>
    </div>
  );
}
