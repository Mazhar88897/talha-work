"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "absolute right-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-80 transform border-l border-t rounded-t-md bg-background transition-transform duration-300 shadow-lg",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-7rem)]">
          <div className="p-4">
            <NotificationItem
              type="warning"
              title="Low Battery Alert"
              description="Vehicle XYZ-123 battery level below 20%"
              time="2 mins ago"
            />
            <NotificationItem
              type="error"
              title="Vehicle Offline"
              description="Lost connection with ABC-789"
              time="5 mins ago"
            />
            <NotificationItem
              type="info"
              title="Route Update"
              description="DEF-456 has completed its route"
              time="10 mins ago"
            />
          </div>
        </ScrollArea>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
      </Button>
    </>
  );
}

function NotificationItem({
  type,
  title,
  description,
  time,
}: {
  type: "warning" | "error" | "info";
  title: string;
  description: string;
  time: string;
}) {
  const colors = {
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className="mb-4 rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <div className={cn("h-2 w-2 rounded-full", colors[type])} />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="mt-1 text-xs text-muted-foreground">{time}</p>
        </div>
      </div>
    </div>
  );
}