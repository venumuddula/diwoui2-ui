import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AlertSeverity, severityColorMap } from "@/types/alerts";

interface BaseCardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  borderColor?: string;
  severity?: AlertSeverity;
  flat?: boolean;
}

export function BaseCard({
  title,
  description,
  children,
  className,
  headerClassName,
  contentClassName,
  borderColor,
  severity,
  flat = false,
}: BaseCardProps) {
  // Use severity for border color if provided
  const borderStyle = severity 
    ? severityColorMap[severity].border
    : borderColor;

  return (
    <Card className={cn(
      "w-full overflow-hidden", 
      borderStyle,
      "metric-card",
      className
    )}>
      {(title || description) && (
        <CardHeader className={cn("pb-2", headerClassName)}>
          {title && <CardTitle className="text-md font-medium text-foreground">{title}</CardTitle>}
          {description && (
            <CardDescription className="text-xs text-muted-foreground">{description}</CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent className={cn("pt-3", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}
