# Project Structure Documentation

## Directory Structure

```
project-root/
├── public/                    # Static assets served directly
│   ├── MockDocs/             # PDF files for the app
│   ├── logo-dark.png         # Dark mode logo
│   ├── logo.png              # Light mode logo
│   └── robots.txt            # Search engine instructions
├── src/                       # Source code
│   ├── components/           # Reusable UI components
│   │   ├── conversation/     # Conversation view components
│   │   │   ├── card-components/  # Different card types for messages
│   │   │   ├── message.tsx   # Message component
│   │   │   └── message-input.tsx # Message input component
│   │   ├── dashboard/        # Dashboard-specific components
│   │   ├── layout/           # Layout components (navbar, sidebar)
│   │   ├── theme-toggle.tsx  # Theme switcher component
│   │   └── ui/               # UI component library (shadcn)
│   ├── hooks/                # Custom React hooks
│   │   ├── use-debounce.tsx  # Debounce utility hook
│   │   └── use-mobile.tsx    # Responsive design hook
│   ├── lib/                  # Utilities and helpers
│   │   ├── conversation-utils.ts  # Conversation helper functions
│   │   ├── design-system/    # Design system components/utilities
│   │   ├── mock-data.ts      # Temporary mock data
│   │   ├── severity-styles.ts # Severity styling utilities
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── utils.ts          # General utility functions
│   ├── pages/                # Page components
│   │   ├── Conversation.tsx  # Conversation page
│   │   ├── Dashboard.tsx     # Dashboard/home page
│   │   ├── Index.tsx         # Root page (being phased out)
│   │   └── NotFound.tsx      # 404 page
│   ├── store/                # State management
│   │   ├── conversationStore.ts # Conversation state
│   │   ├── dashboardStore.ts    # Dashboard state
│   │   └── sidebarStore.ts      # Sidebar state
│   ├── styles/               # CSS files
│   │   └── animations.css    # Animation definitions
│   ├── types/                # TypeScript type definitions
│   │   ├── alerts.ts         # Alert-related types
│   │   └── conversation.ts   # Conversation-related types
│   ├── App.tsx               # Main application component with routing
│   ├── index.css             # Global styles
│   └── main.tsx              # Application entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Files and Their Purposes

### Root Configuration
- **vite.config.ts**: Configuration for the Vite build tool
- **tailwind.config.ts**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript compiler options

### Application Entry Points
- **src/main.tsx**: Application entry point that renders the root React component
- **src/App.tsx**: Main component with routing configuration
- **src/index.css**: Global CSS styles

### State Management
- **src/store/conversationStore.ts**: Manages conversation state using Zustand
- **src/store/dashboardStore.ts**: Manages dashboard metrics and alerts
- **src/store/sidebarStore.ts**: Controls sidebar collapse/expand state

### Core Features
- **src/pages/**: Contains main page components
- **src/components/conversation/**: Components for the conversation/chat interface
- **src/components/dashboard/**: Components for the analytics dashboard
- **src/lib/design-system/**: Design system implementation with theming

### UI Framework
- **src/components/ui/**: Shadcn UI components (buttons, cards, etc.)
- **src/lib/theme-provider.tsx**: Theme context provider for light/dark mode

### Utilities
- **src/lib/utils.ts**: General utility functions
- **src/lib/conversation-utils.ts**: Helper functions for conversation processing
- **src/lib/severity-styles.ts**: Centralized severity styling utilities

### Data Types
- **src/types/alerts.ts**: Type definitions for alerts and severity levels
- **src/types/conversation.ts**: Type definitions for conversation messages and cards

## Architecture Overview

The project follows a modular architecture with clear separation of concerns between UI components, state management, and business logic. It uses Zustand for state management, React Router for navigation, and a custom design system built on Tailwind CSS.