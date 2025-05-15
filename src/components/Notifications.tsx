
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface Notification {
  id: number;
  title: string;
  content: string;
  date: string;
  isNew: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "New Announcement",
    content: "Fall Registration is now open for all students",
    date: "Just now",
    isNew: true
  },
  {
    id: 2,
    title: "Upcoming Event",
    content: "Guest lecture on AI Ethics this Friday",
    date: "2 hours ago",
    isNew: true
  },
  {
    id: 3,
    title: "Course Update",
    content: "CSC315 assignment deadline extended to next week",
    date: "Yesterday",
    isNew: false
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [open, setOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Count unread notifications
    const count = notifications.filter(notification => notification.isNew).length;
    setUnreadCount(count);
  }, [notifications]);

  const handleNotificationClick = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => 
        notification.id === id 
          ? { ...notification, isNew: false } 
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, isNew: false }))
    );
    toast({
      title: "Notifications",
      description: "All notifications marked as read",
    });
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length > 0 ? (
            <div>
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-4 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer ${
                    notification.isNew ? 'bg-muted/30' : ''
                  }`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-sm flex items-center">
                        {notification.title}
                        {notification.isNew && (
                          <Badge variant="secondary" className="ml-2">New</Badge>
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.content}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{notification.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No new notifications
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
