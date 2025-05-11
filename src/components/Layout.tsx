
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {!isMobile && <Sidebar />}
        <div className="flex flex-1 flex-col">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="bg-primary text-primary-foreground py-4 text-center text-sm">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} Computer Science Department</p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
