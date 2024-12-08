"use client"

type Coordinates = [number, number];

const Route1: Coordinates[] = [
  [24.873953, 66.967482],
  [24.875899, 66.963534],
  [24.877442, 66.964441],
  [24.875739, 66.96746],
  [24.877785, 66.967803],
  [24.895003, 66.990635],
  [24.899928, 66.998045],
  [24.901936, 66.997971],
  [24.906963, 66.997824],
  [24.905922, 66.995768],
  [24.90327, 66.995527],
  [24.897359, 66.987747],
  [24.894108, 66.989659],
  [24.8903, 66.984956],
  [24.886571, 66.990736],
  [24.879551, 66.995845],
  [24.867217, 66.999432],
  [24.861933, 67.000082],
  [24.860761, 67.001146],
  [24.85557, 66.999036],
  [24.851796, 66.992956],
  [24.850178, 66.994588],
  [24.848041, 66.995323],
  [24.846456, 66.993063],
  [24.845097, 66.99287],
  [24.840558, 66.988598],
  [24.826596, 66.979972],
  [24.82558, 66.981924],
  [24.826016, 66.98238],
  [24.825494, 66.982093],
  [24.826667, 66.979836],
  [24.840569, 66.98844],
  [24.844369, 66.991491],
  [24.846093, 66.99154],
  [24.848755, 66.996597],
  [24.849023, 66.999849],
  [24.85176, 66.998591],
  [24.853804, 67.00146],
  [24.853729, 67.003801],
  [24.85347, 67.002799],
  [24.852321, 67.003266],
  [24.850061, 66.99918],
  [24.847162, 67.00009],
  [24.844954, 66.999612],
  [24.844515, 67.00163],
  [24.84511, 66.997626],
  [24.843663, 66.996592],
  [24.843665, 66.995527]
]

const RouteTwo: Coordinates[]  = [
  [24.853738, 67.028795],
  [24.851129, 67.029745],
  [24.85157, 67.031697],
  [24.850838, 67.032048],
  [24.846611, 67.024845],
  [24.850872, 67.018621],
  [24.855652, 67.008893],
  [24.85371, 67.005536],
  [24.8645, 66.998482],
  [24.863171, 66.992612],
  [24.871463, 66.985516],
  [24.871104, 66.984654],
  [24.870727, 66.98485],
  [24.871418, 66.98449],
  [24.87147, 66.985646],
  [24.863187, 66.992664],
  [24.864532, 66.998425],
  [24.862643, 66.999863],
  [24.862541, 67.000671],
  [24.869261, 67.010568],
  [24.866996, 67.012572],
  [24.869826, 67.015293],
  [24.866817, 67.01838],
  [24.864918, 67.018593],
  [24.862255, 67.020092],
  [24.87158, 67.034971],
  [24.872818, 67.035835],
  [24.871938, 67.043531],
  [24.870452, 67.047696],
  [24.872187, 67.042303],
  [24.872853, 67.037328],
  [24.872798, 67.035559],
  [24.871887, 67.034051],
  [24.874302, 67.031147],
  [24.873747, 67.030216],
  [24.875442, 67.028279],
  [24.873675, 67.022445],
  [24.87566, 67.020893],
  [24.876793, 67.020775],
  [24.879392, 67.01747],
  [24.877453, 67.014535],
  [24.877146, 67.012188],
  [24.87779, 67.009416],
  [24.880373, 67.005441],
  [24.880079, 66.998287],
  [24.879442, 66.995723],
  [24.886571, 66.990736],
  [24.890417, 66.984775],
  [24.889182, 66.983032],
  [24.890012, 66.981353],
  [24.891031, 66.979465],
  [24.892737, 66.978402],
  [24.895192, 66.973798],
  [24.896877, 66.975319],
  [24.895666, 66.973137],
  [24.892788, 66.978441],
  [24.890601, 66.980595],
  [24.889517, 66.983031],
  [24.890479, 66.984681],
  [24.886571, 66.990736],
  [24.879551, 66.995845],
  [24.867217, 66.999432],
  [24.861933, 67.000082],
  [24.860761, 67.001146]
]




const Route3: Coordinates[] = [
          [24.890539, 66.956005],
          [24.887916, 66.957569],
          [24.889025, 66.959749],
          [24.88936, 66.973977],
          [24.891584, 66.979288],
          [24.889599, 66.983416],
          [24.911209, 67.012659],
          [24.910825, 67.031336],
          [24.908416, 67.031219],
          [24.907715, 67.038071],
          [24.907175, 67.038151],
          [24.90684, 67.035364],
          [24.904038, 67.033891],
          [24.903968, 67.030908],
          [24.901532, 67.03043],
          [24.892304, 67.030946],
          [24.888699, 67.031908],
          [24.887391, 67.033019],
          [24.879795, 67.023568],
          [24.87432, 67.019823],
          [24.859492, 67.0048],
          [24.858032, 67.002778],
          [24.860761, 67.001146],
          [24.855207, 66.998668],
          [24.853073, 66.994549],
          [24.853996, 66.993994],
          [24.853502, 66.99183],
          [24.854135, 66.988188],
          [24.856749, 66.987095],
          [24.861334, 66.987028],
          [24.863969, 66.986113],
          [24.870654, 66.976921],
          [24.87127, 66.977425],
          [24.869745, 66.979776],
          [24.868738, 66.981306],
          [24.868306, 66.980582],
          [24.864825, 66.985619],
          [24.862258, 66.98699],
          [24.864582, 66.991468],
      ]



import { useState } from "react";

import { NotificationCenter } from "@/components/notification/notification-center";

import { useRouter } from "next/navigation"
import { Bell, Search, Settings, Binoculars } from "lucide-react";

import { Input } from "@/components/ui/input";

export  function Header() {
    const router = useRouter();

  const handleRedirect = () => {
    router.push("/vehical-journey"); // Redirect to the /home route
  };
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">Vehicle Journey</h1>
                <div className="w-[200px]">
                    <Input 
                        type="search"
                        placeholder="Search vehicles..."
                        className="h-8 w-[150px] lg:w-[200px]"
                    />
                </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell className="h-4 w-4" />
                </Button>
                
                <Button variant="ghost" size="icon" onClick={handleRedirect}>
                    <Binoculars className="h-4 w-4" />
                 </Button>
                <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </div>
    </header>
  )
}




export default function Dashboard() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  // const [CoordinatesMap, setCoordinates] = useState<Coordinates[]>([])
  const [isPanelOpen] = useState(true); 
 

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-background">
      <Header />

      <div className="relative flex flex-1 overflow-hidden">
        {/* Main Map  */}
        <div className="relative flex-1">
          <Map />
        </div>

        {/* Side Panel */}
        <div className={`w-96 transform transition-transform duration-300 ease-in-out
          ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="h-full border-l bg-background">
          
            
            <VehicleList
              onVehicleSelect={setSelectedVehicleId}
              selectedVehicleId={selectedVehicleId}
            />
           
            {selectedVehicleId && (
              <VehicleDetailPanel
                vehicleId={selectedVehicleId}
                onClose={() => setSelectedVehicleId(null)}
              />
            )}
          </div>
        </div>
        
        {/* Notification Center */}
        <NotificationCenter />
      </div>
    </main>
  );
}

















import { useVehicles } from "@/hooks/use-vehicles";
import { cn } from "@/lib/utils";
import {
 
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
  const Vehicles = vehicles.slice(0, 3);
  const routes = ['Route 1', 'Route 2', 'Route 3']
  const updatedVehicles = Vehicles.map((vehicle, index) => ({
    ...vehicle, // Spread the existing object properties
    route: routes[index] // Add the 'route' key with the corresponding value
  }));
  
  const [activeRoute, setActiveRoute] = useState<Coordinates[]>([]);
  const handleRouteChange = (routeKey: string): void => {

    switch (routeKey) { 
      case "Route 1":
        setActiveRoute(Route1);
        console.log("Active Route set to VIN004:", activeRoute);
        break;
      case "Route 2":
        setActiveRoute(Route1);
        console.log('route 2')
        console.log("Active Route set to VIN002:", activeRoute);
        break;
      case "Route 3":
        setActiveRoute(Route1);
        console.log("Active Route set to VIN006:",activeRoute);
        break;
      default:
        console.log("Invalid route key");
        setActiveRoute([]);
    }
  };

  
// console.log(Vehicles)
  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Vehicles Journey Overview</h2>
        <div className="space-y-2">
          {updatedVehicles.map((vehicle) => {
            // Get the latest location update for each vehicle
            const latestUpdate = vehicle.locationUpdates[vehicle.locationUpdates.length - 1];
            
            return (
              <button
                key={vehicle.vehicleNumber}
                onClick={() => {onVehicleSelect(vehicle.vehicleNumber)
                                handleRouteChange(vehicle.route)
                }}
                className={cn(
                  "w-full rounded-lg border p-4 text-left transition-colors hover:bg-accent",
                  selectedVehicleId === vehicle.vehicleNumber && "border-primary bg-accent"
                )}
              >
                <div className="flex items-center justify-between">
               
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5" />
                    <div>
                      <h3 className="font-medium">{vehicle.route}</h3>
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




import { useVehicle } from "@/hooks/use-vehicle";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import {

  MoreVertical,
  
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
        <h2 className="text-lg font-semibold">Routes</h2>
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
                <h3 className="font-medium">Route Detail:</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              
              <InfoCard
                icon={<Clock className="h-4 w-4" />}
                label="Current Position"
                value={`${latestLocation.time} on ${latestLocation.date} now at ${latestLocation.area}`}
              />
            </div>
          </div>

          <Separator />

          {/* Timeline */}
          <div>
            <h3 className="mb-4 font-medium">Landmarks in route:</h3>
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






import { MapContainer, TileLayer, Marker, Polyline,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Custom marker icon
const vehicleIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const GreenIcon = new Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
const RedIcon = new Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png ",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


export  function Map() {

  
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
     
       {Route1.map((coor, index) => (
        <Marker key={`Route1-${index}`} position={coor} icon={vehicleIcon}>
          <Popup>
            <h3>Route 1</h3>
            <p>Latitude: {coor[0]}</p>
            <p>Longitude: {coor[1]}</p>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={Route1} color="blue" />
      {RouteTwo.map((coor, index) => (
        <Marker key={`Route1-${index}`} position={coor} icon={GreenIcon}>
          <Popup>
            <h3>Route 2</h3>
            <p>Latitude: {coor[0]}</p>
            <p>Longitude: {coor[1]}</p>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={RouteTwo} color="green" />
      {Route3.map((coor, index) => (
        <Marker key={`Route1-${index}`} position={coor} icon={RedIcon}>
          <Popup>
            <h3>Route 3</h3>
            <p>Latitude: {coor[0]}</p>
            <p>Longitude: {coor[1]}</p>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={Route3} color="red" />

      

    
    </MapContainer>
  );
}
