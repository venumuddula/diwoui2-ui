
import { create } from 'zustand';
import { metricData, alertData } from '@/lib/mock-data';

type ViewMode = "card" | "list";

interface DashboardState {
  greeting: string;
  formattedDate: string;
  metrics: typeof metricData;
  alerts: typeof alertData;
  viewMode: ViewMode;
  actions: {
    getGreeting: () => string;
    formatCurrentDate: () => string;
    refreshMetrics: () => void;
    setViewMode: (mode: ViewMode) => void;
  };
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  greeting: '',
  formattedDate: '',
  metrics: metricData,
  alerts: alertData,
  viewMode: "card",
  
  actions: {
    getGreeting: () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good morning";
      if (hour < 18) return "Good afternoon";
      return "Good evening";
    },
    
    formatCurrentDate: () => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(currentDate);
    },
    
    refreshMetrics: () => set({ metrics: metricData }),
    
    setViewMode: (mode) => set({ viewMode: mode }),
  }
}));
