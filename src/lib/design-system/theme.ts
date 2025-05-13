
/**
 * Central theme configuration with semantic color variables and design tokens
 * This provides a single source of truth for the application's visual design
 */

export const themeConfig = {
  // Core semantic colors
  colors: {
    // Semantic intention colors
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
      muted: 'hsl(var(--primary) / 0.8)',
      subtle: 'hsl(var(--primary) / 0.2)',
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))',
    },
    
    // Status colors for alerts and notifications
    status: {
      info: 'hsl(210 100% 52%)', // Blue
      success: 'hsl(142 71% 45%)', // Green
      warning: 'hsl(38 92% 50%)',  // Orange/Amber
      error: 'hsl(0 84% 60%)',     // Red
    },
    
    // Severity levels with semantic meaning
    severity: {
      low: '#3B82F6',    // Blue - Info
      medium: '#F59E0B', // Amber - Warning
      high: '#10B981',   // Green - Success
      critical: '#EF4444' // Red - Error
    }
  },
  
  // Spacing and layout tokens
  spacing: {
    page: {
      xs: '0.5rem',     // 8px
      sm: '1rem',       // 16px
      md: '1.5rem',     // 24px
      lg: '2rem',       // 32px
      xl: '3rem',       // 48px
    },
    component: {
      xs: '0.25rem',    // 4px
      sm: '0.5rem',     // 8px
      md: '1rem',       // 16px
      lg: '1.5rem',     // 24px
    }
  },
  
  // Typography scale
  typography: {
    fontFamily: {
      sans: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      md: '1rem',        // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  
  // Container sizes
  containers: {
    xs: '20rem',      // 320px
    sm: '30rem',      // 480px
    md: '45rem',      // 720px
    lg: '60rem',      // 960px
    xl: '72rem',      // 1152px
    '2xl': '82.5rem', // 1320px
    full: '100%',
  },

  // Animation durations and easings
  animation: {
    durations: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
    easings: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.7' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-5px)' },
      },
      buttonPulse: {
        '0%': { boxShadow: '0 0 0 0 rgba(234, 0, 0, 0.5)' },
        '70%': { boxShadow: '0 0 0 10px rgba(234, 0, 0, 0)' },
        '100%': { boxShadow: '0 0 0 0 rgba(234, 0, 0, 0)' }
      },
      dotPulse: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '70%': { transform: 'scale(2.5)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '0' }
      }
    }
  },
  
  // Border radius scale
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },
};

/**
 * Helper type for accessing theme values with TypeScript support
 */
export type ThemeConfig = typeof themeConfig;

/**
 * Helper function to access theme values
 * @example const primaryColor = theme('colors.primary');
 */
export function theme<T>(path: string): T | undefined {
  const keys = path.split('.');
  let value: any = themeConfig;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return undefined;
  }
  
  return value as T;
}
