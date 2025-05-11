
import { SidebarContent, Sidebar as SidebarComponent } from "@/components/ui/sidebar";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <SidebarComponent>
      <div className="pt-6"></div>
      <SidebarContent>
        <NavLinks />
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
