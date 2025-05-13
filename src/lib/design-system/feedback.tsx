
import React from "react";
import { cn } from "@/lib/utils";
import { Loader2, AlertCircle, CheckCircle, Info, AlertTriangle, Brain } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

/**
 * Loading states for components and pages
 */
interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullPage?: boolean;
  center?: boolean;
  animationType?: "spinner" | "thinking";
}

export function Loading({
  size = "md",
  text = "Loading...",
  fullPage = false,
  center = true,
  animationType = "spinner",
  className,
  ...props
}: LoadingProps) {
  const content = (
    <div
      className={cn(
        "flex items-center gap-2",
        center && "justify-center",
        fullPage && "h-full w-full min-h-[200px]",
        className
      )}
      {...props}
    >
      {animationType === "spinner" ? (
        <Loader2
          className={cn(
            "animate-spin",
            size === "sm" && "h-4 w-4",
            size === "md" && "h-5 w-5",
            size === "lg" && "h-6 w-6"
          )}
        />
      ) : (
        <div className="relative">
          <Brain
            className={cn(
              size === "sm" && "h-4 w-4",
              size === "md" && "h-5 w-5",
              size === "lg" && "h-6 w-6",
              "text-primary"
            )}
          />
          <div className={cn(
            "absolute top-0 left-0 right-0 bottom-0 rounded-full",
            "border-t-2 border-primary animate-pulse"
          )} />
          <div className={cn(
            "absolute top-0 left-0 right-0 bottom-0",
            "flex items-center justify-center"
          )}>
            <div className={cn(
              "bg-primary/20 rounded-full animate-ping",
              size === "sm" && "h-2 w-2",
              size === "md" && "h-3 w-3",
              size === "lg" && "h-4 w-4"
            )} />
          </div>
        </div>
      )}
      {text && (
        <span className={cn(
          "text-muted-foreground",
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-base"
        )}>
          {text}
        </span>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        {content}
      </div>
    );
  }

  return content;
}

/**
 * Empty state component for when no data is available
 */
interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function EmptyState({
  title = "No data available",
  message = "There's nothing to display at the moment.",
  icon,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 min-h-[200px]",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
      <h3 className="font-semibold text-lg mb-1 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{message}</p>
      {action}
    </div>
  );
}

/**
 * Status message component for feedback
 */
interface StatusMessageProps {
  status: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function StatusMessage({
  status,
  title,
  children,
  className,
}: StatusMessageProps) {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
  };
  
  const Icon = icons[status];
  
  return (
    <Alert
      className={cn(
        status === "info" && "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/50",
        status === "success" && "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/50",
        status === "warning" && "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/50",
        status === "error" && "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50",
        className
      )}
    >
      <Icon className={cn(
        "h-4 w-4",
        status === "info" && "text-status-info",
        status === "success" && "text-status-success",
        status === "warning" && "text-status-warning",
        status === "error" && "text-status-error",
      )} />
      {title && (
        <AlertTitle className={cn(
          "mb-1",
          status === "info" && "text-blue-800 dark:text-blue-300",
          status === "success" && "text-green-800 dark:text-green-300",
          status === "warning" && "text-amber-800 dark:text-amber-300",
          status === "error" && "text-red-800 dark:text-red-300",
        )}>
          {title}
        </AlertTitle>
      )}
      <AlertDescription className={cn(
        "text-sm",
        status === "info" && "text-blue-700 dark:text-blue-400",
        status === "success" && "text-green-700 dark:text-green-400",
        status === "warning" && "text-amber-700 dark:text-amber-400",
        status === "error" && "text-red-700 dark:text-red-400",
      )}>
        {children}
      </AlertDescription>
    </Alert>
  );
}
