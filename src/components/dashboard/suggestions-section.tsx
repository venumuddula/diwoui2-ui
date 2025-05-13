
import { Button } from "@/components/ui/button";
import { AlertCard } from "@/components/dashboard/alert-card";
import { cn } from "@/lib/utils";
import { Grid2X2, List, AlertTriangle } from "lucide-react";
import { useDashboardStore } from "@/store/dashboardStore";

export function SuggestionsSection() {
  const { viewMode, alerts, actions } = useDashboardStore();

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Attention Required</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "card" ? "default" : "outline"}
            size="sm"
            onClick={() => actions.setViewMode("card")}
            className={cn(
              "h-8 w-8 p-0",
              viewMode === "card" ? "bg-red-600 hover:bg-red-700 text-white" : ""
            )}
            aria-label="Card view"
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => actions.setViewMode("list")}
            className={cn(
              "h-8 w-8 p-0",
              viewMode === "list" ? "bg-red-600 hover:bg-red-700 text-white" : ""
            )}
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className={cn(
        "grid gap-6",
        viewMode === "card" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            id={alert.id}
            title={alert.title}
            description={alert.description}
            category={alert.category}
            severity={alert.severity as "low" | "medium" | "high" | "critical"}
            time={alert.time}
            action={alert.action}
          />
        ))}
      </div>
    </div>
  );
}
