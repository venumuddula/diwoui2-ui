
import React from "react";
import { cn } from "@/lib/utils";
import { themeConfig } from "./theme";

/**
 * Base text component with size, weight, color variants
 */
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "primary" | "error" | "success";
  align?: "left" | "center" | "right";
  as?: React.ElementType;
  truncate?: boolean;
}

export function Text({
  size = "md",
  weight = "normal",
  color = "default",
  align = "left",
  as: Component = "p",
  truncate = false,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        // Size
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl",
        
        // Weight
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "semibold" && "font-semibold",
        weight === "bold" && "font-bold",
        
        // Color
        color === "default" && "text-foreground",
        color === "muted" && "text-muted-foreground",
        color === "primary" && "text-primary",
        color === "error" && "text-destructive",
        color === "success" && "text-green-600 dark:text-green-400",
        
        // Alignment
        align === "left" && "text-left",
        align === "center" && "text-center",
        align === "right" && "text-right",
        
        // Truncation
        truncate && "truncate",
        
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Heading component for consistent titles
 */
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  color?: "default" | "muted" | "primary";
}

export function Heading({
  level = 2,
  size,
  weight,
  align = "left",
  color = "default",
  className,
  children,
  ...props
}: HeadingProps) {
  // Map heading level to default size if not specified
  const defaultSizes: Record<number, "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"> = {
    1: "4xl",
    2: "3xl",
    3: "2xl",
    4: "xl",
    5: "lg",
    6: "md",
  };
  
  const finalSize = size || defaultSizes[level];
  const defaultWeight = level <= 2 ? "bold" : "semibold";
  const finalWeight = weight || defaultWeight;
  
  // Fix: Use React.createElement instead of dynamic JSX element to properly type the component
  return React.createElement(
    `h${level}`,
    {
      className: cn(
        // Size
        finalSize === "xs" && "text-xs",
        finalSize === "sm" && "text-sm",
        finalSize === "md" && "text-base",
        finalSize === "lg" && "text-lg",
        finalSize === "xl" && "text-xl",
        finalSize === "2xl" && "text-2xl",
        finalSize === "3xl" && "text-3xl",
        finalSize === "4xl" && "text-4xl",
        
        // Weight
        finalWeight === "normal" && "font-normal",
        finalWeight === "medium" && "font-medium",
        finalWeight === "semibold" && "font-semibold",
        finalWeight === "bold" && "font-bold",
        
        // Color
        color === "default" && "text-foreground",
        color === "muted" && "text-muted-foreground",
        color === "primary" && "text-primary",
        
        // Alignment
        align === "left" && "text-left",
        align === "center" && "text-center",
        align === "right" && "text-right",
        
        "tracking-tight",
        className
      ),
      ...props
    },
    children
  );
}

/**
 * Label component for form fields and sections
 */
export function Label({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={cn(
        "text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  );
}

/**
 * Caption for supplementary text such as image captions
 */
export function Caption({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"figcaption">) {
  return (
    <figcaption
      className={cn(
        "text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
