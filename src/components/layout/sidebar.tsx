import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { conversationHistory } from "@/lib/mock-data";
import { ArrowLeft, ArrowRight, Home, Menu, Plus, X } from "lucide-react";
import { Logo } from "./logo";
import { useSidebarStore } from "@/store/sidebarStore";

export function SidebarTrigger() {
  const { open, openSidebar, closeSidebar } = useSidebarStore();
  
  // Toggle sidebar open/close
  const toggleSidebar = () => {
    if (open) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 text-gray-600 dark:text-gray-300"
      onClick={toggleSidebar}
    >
      {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      <span className="sr-only">{open ? "Close" : "Open"} sidebar</span>
    </Button>
  );
}

export function Sidebar() {
  const { collapsed, open, setCollapsed, toggleCollapsed, openSidebar, closeSidebar } = useSidebarStore();
  const isMobile = useIsMobile();
  const location = useLocation();

  // If we've switched from mobile to desktop, close the mobile sidebar
  // And if we've switched to mobile, always ensure sidebar is expanded
  useEffect(() => {
    if (!isMobile && open) {
      closeSidebar();
    }
    
    // Always ensure sidebar is expanded in mobile view
    if (isMobile && collapsed) {
      setCollapsed(false);
    }
  }, [isMobile, open, collapsed, closeSidebar, setCollapsed]);

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isMobile && open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 flex h-[calc(100vh-4rem)] flex-col border-r bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out",
          collapsed && !isMobile ? "w-[70px]" : "w-[250px]",
          isMobile ? (open ? "translate-x-0" : "-translate-x-full") : ""
        )}
      >
        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Toggle button */}
          {!isMobile && (
            <div className={cn(
              "flex mb-4 pb-3 border-b",
              collapsed ? "justify-center" : "justify-end"
            )}>
              <button
                className={cn(
                  "flex items-center justify-center p-1.5 rounded-md",
                  "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                  "transition-colors duration-200"
                )}
                onClick={toggleCollapsed}
                title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {collapsed ? 
                  <ArrowRight className="h-5 w-5 transition-transform duration-300" /> : 
                  <ArrowLeft className="h-5 w-9 transition-transform duration-300" />
                }
                <span className="sr-only">{collapsed ? "Expand" : "Collapse"} sidebar</span>
              </button>
            </div>
          )}
          
          <nav className="grid gap-1 px-2 transition-opacity duration-300">
            {/* Catalyst Hub link */}
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  collapsed && "justify-center px-0",
                  location.pathname === "/" ? "bg-red-600 hover:bg-red-700 text-white" : "text-gray-600 dark:text-gray-300"
                )}
              >
                <Home className={cn("h-5 w-5", !collapsed && "mr-2")} />
                {!collapsed && <span>Catalyst Hub</span>}
              </Button>
            </Link>
            
            {/* New Analysis link */}
            <Link to="/conversation/new">
              <Button
                variant={location.pathname === "/conversation/new" ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  collapsed && "justify-center px-0",
                  location.pathname === "/conversation/new" ? "bg-red-600 hover:bg-red-700 text-white" : "text-gray-600 dark:text-gray-300"
                )}
              >
                <Plus className={cn("h-5 w-5", !collapsed && "mr-2")} />
                {!collapsed && <span>New Analysis</span>}
              </Button>
            </Link>
          </nav>
          
          {/* Past conversations */}
          <div className="mt-6 transition-opacity duration-300">
            <div className={cn("mb-2 px-4", collapsed && "text-center")}>
              {!collapsed && <span className="text-xs font-medium text-gray-500 dark:text-gray-400">RECENT CONVERSATIONS</span>}
            </div>
            <nav className="grid gap-1 px-2">
              {!collapsed && conversationHistory.map((conversation) => (
                <Link key={conversation.id} to={`/conversation/${conversation.id}`}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start whitespace-normal text-left h-auto",
                      location.pathname === `/conversation/${conversation.id}` ? 
                        "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400" : 
                        "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <span className="break-words">{conversation.title}</span>
                  </Button>
                </Link>
              ))}
              {collapsed && (
                <div className="py-2">
                  {/* Placeholder for collapsed state - intentionally empty */}
                </div>
              )}
            </nav>
          </div>
        </div>
      </aside>
      
      {/* Main content spacer to push content when sidebar is open on desktop */}
      {!isMobile && (
        <div className={cn("transition-all duration-300 ease-in-out", collapsed ? "w-[70px]" : "w-[250px]")} />
      )}
    </>
  );
}
