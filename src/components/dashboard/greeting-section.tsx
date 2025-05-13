
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { userProfile } from "@/lib/mock-data";
import { Plus } from "lucide-react";
import { useDashboardStore } from "@/store/dashboardStore";
import { Heading, Text } from "@/lib/design-system/typography";

export function GreetingSection() {
  const { actions } = useDashboardStore();
  const greeting = actions.getGreeting();
  const formattedDate = actions.formatCurrentDate();
  const firstName = userProfile.name.split(" ")[0];
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-foreground dark:text-gray-200">{greeting}, </span> 
          <span className="name-gradient">{firstName}</span>
        </h1>
        <Text color="muted" className="mt-1">{formattedDate}</Text>
      </div>
      <div className="sm:ml-auto">
        <Link to="/conversation/new">
          <Button className="font-medium bg-red-600 hover:bg-red-700 text-white pulse-animation">
            <Plus className="mr-2 h-4 w-4" /> New Analysis
          </Button>
        </Link>
      </div>
    </div>
  );
}
