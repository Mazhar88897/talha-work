"use client";
import { useRouter } from "next/navigation"
import { Bell, Search, Settings, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
    const router = useRouter();

  const handleRedirect = () => {
    router.push("/vehical-journey"); // Redirect to the /home route
  };
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4">
            <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold">DHA Vehicle Tracker</h1>
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
