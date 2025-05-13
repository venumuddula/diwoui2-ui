
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/layout/sidebar";
import { Logo } from "@/components/layout/logo";
import { userProfile } from "@/lib/mock-data";
import { Cog, LogOut, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { getCurrentUser, logout } from "@/lib/auth";
import { toast } from "@/hooks/use-toast";

export function Navbar() {
  const isMobile = useIsMobile();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been successfully logged out",
    });
    logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white dark:bg-gray-900 px-4 md:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        {isMobile && <SidebarTrigger />}
        <Logo className="h-8" />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 cursor-pointer bg-red-600 text-white">
              <AvatarImage src={userProfile.avatar} alt={currentUser?.name || userProfile.name} />
              <AvatarFallback>{(currentUser?.name || userProfile.name).charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-1" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{currentUser?.name || userProfile.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {currentUser?.username || userProfile.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Cog className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
