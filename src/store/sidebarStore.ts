
import { create } from 'zustand';

interface SidebarState {
  collapsed: boolean;
  open: boolean;
  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  collapsed: localStorage.getItem('catalyst-sidebar-state') === 'collapsed',
  open: false,
  toggleCollapsed: () => set((state) => {
    const newCollapsedState = !state.collapsed;
    localStorage.setItem('catalyst-sidebar-state', newCollapsedState ? 'collapsed' : 'expanded');
    return { collapsed: newCollapsedState };
  }),
  setCollapsed: (collapsed) => set(() => {
    localStorage.setItem('catalyst-sidebar-state', collapsed ? 'collapsed' : 'expanded');
    return { collapsed };
  }),
  openSidebar: () => set({ open: true }),
  closeSidebar: () => set({ open: false }),
}));
