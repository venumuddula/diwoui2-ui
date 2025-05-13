import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { AlertSeverity, severityColorMap } from "@/types/alerts";

interface AlertCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  severity: AlertSeverity;
  time: string;
  action: string;
}

export function AlertCard({
  id,
  title,
  description,
  category,
  severity,
  time,
  action,
}: AlertCardProps) {
  const navigate = useNavigate();

  const getBorderColor = () => {
    return severityColorMap[severity].border;
  };

  const getCategoryBgColor = () => {
    return severityColorMap[severity].bg + " " + severityColorMap[severity].text;
  };

  const getActionColor = () => {
    return severityColorMap[severity].action;
  };

  const getActionHoverBgColor = () => {
    // Extract the color name from the action color class (e.g., "text-red-500" -> "red")
    const colorMatch = severityColorMap[severity].action.match(/text-([a-z]+)-\d+/);
    const colorName = colorMatch ? colorMatch[1] : "gray";
    return `hover:bg-${colorName}-100 dark:hover:bg-${colorName}-900/30`;
  };

  const handleActionClick = () => {
    // Navigate to the conversation page with the appropriate action context
    navigate(`/conversation/action/${action}/${id}`);
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card className={cn(
      "w-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:ring-1 hover:ring-red-400/20 overflow-hidden border-l-4 flex flex-col bg-card rounded-2xl relative alert-card",
      getBorderColor()
    )}>
      {severity === "critical" && <div className="critical-dot"></div>}
      <div className="p-5 flex-grow">
        <div className="mb-3">
          <div className={cn(
            "inline-block px-3 py-1 rounded-sm mb-2",
            getCategoryBgColor()
          )}>
            {category}
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-border flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{time}</p>
        <Button
          variant="ghost"
          onClick={handleActionClick}
          className={cn(
            "text-sm font-medium py-1 px-2 rounded-md transition-colors",
            getActionColor(),
            getActionHoverBgColor()
          )}
        >
          {capitalizeFirstLetter(action)}
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Button>
      </div>
    </Card>
  );
}
