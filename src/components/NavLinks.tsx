
import { NavLink } from "react-router-dom";
import { Home, Book, Users, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  horizontal?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ horizontal = false, onClick }: NavLinksProps) => {
  const links = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Courses", path: "/courses", icon: <Book size={18} /> },
    { name: "Faculty", path: "/faculty", icon: <Users size={18} /> },
    { name: "Announcements", path: "/announcements", icon: <Bell size={18} /> },
  ];

  const navLinkClass = horizontal 
    ? "text-sm font-medium transition-colors hover:text-primary" 
    : "nav-link";

  return (
    <ul className={cn("space-y-1", horizontal && "space-y-0 flex gap-6")}>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) => 
              cn(navLinkClass, isActive && (horizontal ? "text-primary font-semibold" : "active"))
            }
            onClick={onClick}
          >
            {!horizontal && link.icon}
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
