
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import Dashboard from "@/pages/Dashboard";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="catalyst-theme">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1">
            <Dashboard />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
