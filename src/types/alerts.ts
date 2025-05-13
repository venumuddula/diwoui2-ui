
/**
 * Standard severity levels for alerts and notifications
 */
export type AlertSeverity = "low" | "medium" | "high" | "critical";

/**
 * Maps severity levels to semantic status types
 */
export const severityToStatus: Record<AlertSeverity, "info" | "success" | "warning" | "error"> = {
  low: "info",
  medium: "warning",
  high: "success",
  critical: "error"
};

/**
 * Maps severity levels to colors for UI components
 */
export const severityColorMap = {
  low: {
    border: "border-l-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-800 dark:text-blue-300",
    action: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
  },
  medium: {
    border: "border-l-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20", 
    text: "text-yellow-800 dark:text-yellow-300",
    action: "text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
  },
  high: {
    border: "border-l-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-800 dark:text-green-300", 
    action: "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
  },
  critical: {
    border: "border-l-red-500", 
    bg: "bg-red-50 dark:bg-red-900/20",
    text: "text-red-800 dark:text-red-300",
    action: "text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
  }
};
