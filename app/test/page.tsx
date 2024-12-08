"use client";

import dynamic from "next/dynamic";
import React from "react";
import { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });

// Custom marker icons
const startIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const endIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// const waypointIcon = new Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// Routes data
const routes = [
  {
    id: "VIN004",
    color: "#FF0000",
    polyline: [
      [24.873953, 66.967482],
      [24.875899, 66.963534],
      [24.877442, 66.964441],
      [24.875739, 66.96746],
      [24.877785, 66.967803],
    ] as LatLngExpression[],
    markers: [
      {
        position: [24.87421, 66.967636] as LatLngExpression,
        icon: startIcon,
        popup: "Start Point - Route VIN004",
      },
      {
        position: [24.843613, 66.995502] as LatLngExpression,
        icon: endIcon,
        popup: "End Point - Route VIN004",
      },
    ],
  },
  {
    id: "VIN002",
    color: "#00FF00",
    polyline: [
      [24.853738, 67.028795],
      [24.851129, 67.029745],
      [24.85157, 67.031697],
      [24.850838, 67.032048],
      [24.846611, 67.024845],
    ] as LatLngExpression[],
    markers: [
      {
        position: [24.853686, 67.028874] as LatLngExpression,
        icon: startIcon,
        popup: "Start Point - Route VIN002",
      },
      {
        position: [24.86153, 67.005633] as LatLngExpression,
        icon: endIcon,
        popup: "End Point - Route VIN002",
      },
    ],
  },
  {
    id: "VIN006",
    color: "#0000FF",
    polyline: [
      [24.890539, 66.956005],
      [24.887916, 66.957569],
      [24.889025, 66.959749],
      [24.88936, 66.973977],
      [24.891584, 66.979288],
    ] as LatLngExpression[],
    markers: [
      {
        position: [24.898853, 66.953979] as LatLngExpression,
        icon: startIcon,
        popup: "Start Point - Route VIN006",
      },
      {
        position: [24.867745, 67.018181] as LatLngExpression,
        icon: endIcon,
        popup: "End Point - Route VIN006",
      },
    ],
  },
];

export default function Map() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={[24.8607, 67.0011]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {routes.map((route) => (
          <React.Fragment key={route.id}>
            {/* Polyline */}
            <Polyline positions={route.polyline} color={route.color} weight={4}>
              <Popup>{`Route ${route.id}`}</Popup>
            </Polyline>
            {/* Markers */}
            {route.markers.map((marker, index) => (
              <Marker key={index} position={marker.position} icon={marker.icon}>
                <Popup>{marker.popup}</Popup>
              </Marker>
            ))}
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
}
