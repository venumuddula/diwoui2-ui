
import { AlertSeverity } from "@/types/alerts";

/**
 * Maps severity levels to semantic colors and styles
 */
export const severityStyleMap: Record<AlertSeverity, {
  border: string;
  bg: string;
  text: string;
  action: string;
  color: string;
  hoverBg?: string;
}> = {
  low: {
    border: "border-l-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-800 dark:text-blue-300",
    action: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
    color: "blue",
    hoverBg: "hover:bg-blue-100 dark:hover:bg-blue-900/30"
  },
  medium: {
    border: "border-l-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-800 dark:text-amber-300",
    action: "text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300",
    color: "amber",
    hoverBg: "hover:bg-amber-100 dark:hover:bg-amber-900/30"
  },
  high: {
    border: "border-l-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-800 dark:text-green-300",
    action: "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300",
    color: "green",
    hoverBg: "hover:bg-green-100 dark:hover:bg-green-900/30"
  },
  critical: {
    border: "border-l-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    text: "text-red-800 dark:text-red-300",
    action: "text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300",
    color: "red",
    hoverBg: "hover:bg-red-100 dark:hover:bg-red-900/30"
  }
};

/**
 * Returns all style classes for a severity level as an object
 */
export function getSeverityStyles(severity: AlertSeverity) {
  return severityStyleMap[severity];
}

/**
 * Returns specific style class for a severity level
 */
export function getSeverityStyle(severity: AlertSeverity, styleType: keyof typeof severityStyleMap[AlertSeverity]) {
  return severityStyleMap[severity][styleType];
}

/**
 * Maps severity levels to status indicators
 */
export const severityToStatus: Record<AlertSeverity, "info" | "warning" | "success" | "error"> = {
  low: "info",
  medium: "warning",
  high: "success",
  critical: "error"
};
