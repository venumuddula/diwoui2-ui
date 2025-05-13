import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Severity levels for alerts
				severity: {
					low: '#3B82F6',    // Blue - Info
					medium: '#F59E0B', // Amber - Warning
					high: '#10B981',   // Green - Success
					critical: '#EF4444' // Red - Error
				},
				// Status colors
				status: {
				  info: 'hsl(210 100% 52%)', // Blue
				  success: 'hsl(142 71% 45%)', // Green
				  warning: 'hsl(38 92% 50%)',  // Orange/Amber
				  error: 'hsl(0 84% 60%)',     // Red
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'button-pulse': {
					'0%': { boxShadow: '0 0 0 0 rgba(234, 0, 0, 0.5)' },
					'70%': { boxShadow: '0 0 0 10px rgba(234, 0, 0, 0)' },
					'100%': { boxShadow: '0 0 0 0 rgba(234, 0, 0, 0)' }
				},
				'dot-pulse': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'70%': { transform: 'scale(2.5)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'button-pulse': 'button-pulse 2s infinite',
				'dot-pulse': 'dot-pulse 2s infinite'
			},
			// Animation timings
			transitionDuration: {
				'fast': 'var(--animation-fast)',
				'normal': 'var(--animation-normal)',
				'slow': 'var(--animation-slow)',
			},
			// Typography
			fontFamily: {
				sans: [
					'Roboto',
					'-apple-system', 
					'BlinkMacSystemFont', 
					'Segoe UI', 
					'Helvetica Neue', 
					'Arial', 
					'sans-serif'
				],
				mono: [
					'ui-monospace', 
					'SFMono-Regular', 
					'Menlo', 
					'Monaco', 
					'Consolas', 
					'Liberation Mono', 
					'Courier New', 
					'monospace'
				],
				roboto: ['Roboto', 'sans-serif'],
			},
			boxShadow: {
				'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
				'hard': '0 8px 30px rgba(0, 0, 0, 0.15)',
				'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			},
			// Grid system
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function({ addUtilities }) {
			addUtilities({
				'.overflow-wrap-anywhere': {
					'overflow-wrap': 'anywhere',
					'word-break': 'break-word',
					'hyphens': 'auto'
				}
			})
		})
	],
} satisfies Config;
