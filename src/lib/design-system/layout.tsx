
import React from "react";
import { cn } from "@/lib/utils";
import { themeConfig } from "./theme";

/**
 * Container component with predefined max widths
 */
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof themeConfig.containers;
  centered?: boolean;
  noPadding?: boolean;
}

export function Container({ 
  size = "lg", 
  centered = true, 
  noPadding = false,
  className, 
  children, 
  ...props 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full",
        centered && "mx-auto",
        !noPadding && "px-4 md:px-6",
        className
      )}
      style={{ maxWidth: themeConfig.containers[size] }}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Standard page section with consistent spacing
 */
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
}

export function Section({
  spacing = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacing !== "none" && [
          spacing === "xs" && "py-2",
          spacing === "sm" && "py-4",
          spacing === "md" && "py-6",
          spacing === "lg" && "py-10",
          spacing === "xl" && "py-16",
        ],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

/**
 * Grid layout component with responsive column configuration
 */
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "xs" | "sm" | "md" | "lg";
}

export function Grid({
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "md",
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        columns.sm && `grid-cols-${columns.sm}`,
        columns.md && `md:grid-cols-${columns.md}`,
        columns.lg && `lg:grid-cols-${columns.lg}`,
        columns.xl && `xl:grid-cols-${columns.xl}`,
        gap === "xs" && "gap-2",
        gap === "sm" && "gap-4",
        gap === "md" && "gap-6",
        gap === "lg" && "gap-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Flexible stack component for vertical or horizontal layouts
 */
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  wrap?: boolean;
}

export function Stack({
  direction = "column",
  gap = "md",
  align = "start",
  justify = "start",
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "stretch" && "items-stretch",
        justify === "start" && "justify-start",
        justify === "center" && "justify-center",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        justify === "around" && "justify-around",
        wrap && "flex-wrap",
        gap === "xs" && "gap-2",
        gap === "sm" && "gap-3",
        gap === "md" && "gap-4",
        gap === "lg" && "gap-6",
        gap === "xl" && "gap-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
