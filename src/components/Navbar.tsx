
import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Notifications from "./Notifications";

const Navbar = () => {
  const { toggle } = useSidebar();
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4">
          {!isMobile ? (
            <Button variant="ghost" size="icon" onClick={toggle}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <div className="px-7">
                  <NavLinks onClick={() => document.body.click()} />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
        <div className="flex-1">
          <span className="text-xl font-bold">CS Department</span>
        </div>
        <div className="flex items-center gap-2">
          <Notifications />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
