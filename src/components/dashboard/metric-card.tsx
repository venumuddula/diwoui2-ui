import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Text } from "@/lib/design-system/typography";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg?: string;
  description?: string;
  trend?: {
    value: number;
    direction: "up" | "down" | "neutral";
  };
  className?: string;
  showProgress?: boolean;
  progress?: number;
  progressColors?: {
    from: string;
    to: string;
  };
}

export function MetricCard({
  title,
  value,
  icon,
  iconBg,
  description,
  trend,
  className,
  showProgress = false,
  progress = 0,
  progressColors = {
    from: "from-red-500",
    to: "to-blue-500",
  }
}: MetricCardProps) {
  return (
    <Card className={cn(
      "transition-all duration-300 border border-gray-200 dark:border-gray-800 bg-card shadow-sm hover:shadow-md hover:ring-1 hover:ring-red-400/20 rounded-2xl overflow-hidden metric-card",
      className
    )}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <Text as="h3" color="muted" size="sm" className="font-normal">
            {title}
          </Text>
          <div className={cn("p-2 rounded-full", iconBg || "bg-red-50 dark:bg-red-900/20")}>
            {icon}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="text-4xl font-semibold text-foreground">
            {value}
          </div>
        </div>
        
        {showProgress && (
          <div className="mt-4">
            <div className="relative h-2 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className={cn(
                  "absolute top-0 left-0 h-full bg-gradient-to-r", 
                  progressColors.from,
                  progressColors.to
                )} 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {description && (
          <div className="mt-2">
            <Text color="muted" size="sm">{description}</Text>
          </div>
        )}
        
        {trend && (
          <div className="mt-2 flex items-center">
            <span
              className={cn(
                "text-xs font-medium",
                trend.direction === "up" ? "text-green-500" : 
                trend.direction === "down" ? "text-red-500" : 
                "text-muted-foreground"
              )}
            >
              {trend.direction === "up" && "+"}
              {trend.value}%
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}
