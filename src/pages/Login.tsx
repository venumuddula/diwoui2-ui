import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authenticateUser, setAuthSession, isAuthenticated } from "@/lib/auth";
import { toast } from "@/hooks/use-toast";
import { Logo } from "@/components/layout/logo";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // If user is already authenticated, redirect to dashboard
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const user = authenticateUser(username, password);
      
      if (user) {
        setAuthSession(user);
        toast({
          title: "Success",
          description: `Welcome back, ${user.name}!`,
        });
        navigate("/");
      } else {
        toast({
          title: "Authentication Failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-12 w-full max-w-md">
        <div className="flex items-center">
          <Logo className="h-12" />
        </div>

        <div className="w-full px-8 py-10 rounded-2xl border shadow-sm bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-center mb-8">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <Input
                type="text"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md h-12"
              />
            </div>
            
            <div className="space-y-1">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md h-12"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full h-12 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium" 
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
