"use client";

import { useVehicle } from "@/hooks/use-vehicle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Battery,
  Clock,
  MapPin,
  MoreVertical,
  Navigation,
  Power,
  Truck,
  X,
} from "lucide-react";

interface VehicleDetailPanelProps {
  vehicleId: string;
  onClose: () => void;
}

export function VehicleDetailPanel({
  vehicleId,
  onClose,
}: VehicleDetailPanelProps) {
  const { vehicle } = useVehicle(vehicleId);

  if (!vehicle) return null;

  // Get the most recent location update (assuming the latest entry is the most recent update)
  const latestLocation = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];

  return (
    <div className="absolute inset-y-0 right-0 w-96 border-l bg-background">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <h2 className="text-lg font-semibold">Vehicle Details</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-6 p-4">
          {/* Vehicle Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Truck className="h-8 w-8" />
              <div>
                <h3 className="font-medium">{vehicle.vehicleNumber}</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <InfoCard
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={latestLocation.area}
              />
              <InfoCard
                icon={<Clock className="h-4 w-4" />}
                label="Last Update"
                value={`${latestLocation.time} on ${latestLocation.date}`}
              />
            </div>
          </div>

          <Separator />

          {/* Timeline */}
          <div>
            <h3 className="mb-4 font-medium">Recent Activity</h3>
            <div className="space-y-4">
              {vehicle.locationUpdates.map((event, index) => (
                <div key={index} className="flex gap-3">
                  <Clock className="h-4 w-4 shrink-0" />
                  <div>
                    <p className="text-sm">{event.area}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border p-3">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="font-medium">{value}</p>
    </div>
  );
}
