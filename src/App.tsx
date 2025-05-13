
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import Dashboard from "@/pages/Dashboard";
import Conversation from "@/pages/Conversation";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import { isAuthenticated } from "@/lib/auth";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider defaultTheme="system" storageKey="catalyst-theme">
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex w-full mt-16">
        <Sidebar />
        <main className="flex-1 w-full overflow-auto h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  </ThemeProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout><Dashboard /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/conversation/new" element={
            <ProtectedRoute>
              <Layout><Conversation /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/conversation/:id" element={
            <ProtectedRoute>
              <Layout><Conversation /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/conversation/action/:action/:alertId" element={
            <ProtectedRoute>
              <Layout><Conversation /></Layout>
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <ProtectedRoute>
              <Layout><NotFound /></Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
