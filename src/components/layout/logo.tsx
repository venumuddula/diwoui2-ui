import { useTheme } from "@/lib/theme-provider";

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo-dark.png" : "/logo.png";
  
  return (
    <img 
      src={logoSrc} 
      alt="Catalyst AI" 
      className={className}
    />
  );
} 