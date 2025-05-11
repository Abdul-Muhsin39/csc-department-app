
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-muted">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-md p-1.5">
              <div className="w-6 h-6 text-primary-foreground font-bold flex items-center justify-center">
                CS
              </div>
            </div>
            <span className="font-semibold text-lg hidden md:inline-block">Computer Science Department</span>
          </Link>
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="py-4">
                <NavLinks onClick={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="ml-auto flex items-center gap-6 pr-6">
            <NavLinks horizontal={true} />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
