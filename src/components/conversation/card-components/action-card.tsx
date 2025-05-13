
import { Button } from "@/components/ui/button";
import { BaseCard } from "./base-card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Action } from "@/types/conversation";
import { AlertSeverity } from "@/types/alerts";
import { getSeverityStyle } from "@/lib/severity-styles";

interface ActionContext {
  [key: string]: string;
}

interface ActionCardProps {
  title?: string;
  description?: string;
  context?: ActionContext;
  action?: Action;
  actions?: Action[];
  className?: string;
  severity?: AlertSeverity;
}

export function ActionCard({ 
  title, 
  description, 
  context, 
  action, 
  actions, 
  className,
  severity = "medium" 
}: ActionCardProps) {
  // Support both single action and multiple actions
  const actionItems = actions || (action ? [action] : []);
  
  // Get action color from severity
  const actionColor = getSeverityStyle(severity, "action");

  return (
    <BaseCard
      title={title || "Recommended Action"}
      description={description}
      className={cn("bg-card", className)}
      severity={severity}
    >
      <div className="flex flex-col gap-3">
        {context && Object.keys(context).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2 p-2 bg-muted/50 rounded-md">
            {Object.entries(context).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-xs font-medium text-muted-foreground capitalize">
                  {key}
                </span>
                <span className="text-sm text-foreground">{value}</span>
              </div>
            ))}
          </div>
        )}
        
        {actionItems.length > 0 && (
          <div className="flex flex-col gap-2">
            {actionItems.map((actionItem, index) => (
              <div key={index} className="flex flex-col gap-1">
                <Button
                  variant="ghost"
                  className={cn("justify-between w-full", actionColor)}
                  onClick={actionItem.onClick}
                >
                  <span>{actionItem.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                {actionItem.description && (
                  <p className="text-xs text-muted-foreground px-2">{actionItem.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </BaseCard>
  );
}
