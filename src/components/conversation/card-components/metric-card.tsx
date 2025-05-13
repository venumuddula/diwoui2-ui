import { BaseCard } from "./base-card";
import { cn } from "@/lib/utils";

interface MetricItem {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "neutral";
}

interface MetricCardProps {
  title?: string;
  description?: string;
  metrics: MetricItem[];
  className?: string;
}

export function MetricCard({ title, description, metrics, className }: MetricCardProps) {
  return (
    <BaseCard
      title={title}
      description={description}
      className={cn("bg-card metric-card", className)}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-1 p-2 rounded-md",
              index !== metrics.length - 1 && "sm:border-r"
            )}
          >
            <div className="text-xs font-medium text-muted-foreground">
              {metric.label}
            </div>
            <div className="text-2xl font-bold">{metric.value}</div>
            {metric.change !== undefined && (
              <div
                className={cn(
                  "text-xs font-medium",
                  metric.trend === "up" && "text-green-600 dark:text-green-400",
                  metric.trend === "down" && "text-red-600 dark:text-red-400",
                  metric.trend === "neutral" && "text-muted-foreground"
                )}
              >
                {metric.change > 0 && "+"}
                {metric.change}% {metric.trend === "up" ? "increase" : metric.trend === "down" ? "decrease" : ""}
              </div>
            )}
          </div>
        ))}
      </div>
    </BaseCard>
  );
}
