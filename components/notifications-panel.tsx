import { Bell, LucideUserRound } from "lucide-react";
import { PiBroadcast, PiBugBeetleLight } from "react-icons/pi";

const notifications = [
  {
    type: "bug",
    message: "You have a bug that needs...",
    time: "9 minutes ago",
    avatar: "/detailed-insect.png",
  },
  {
    type: "user",
    message: "New user registered",
    time: "57 minutes ago",
    avatar: "/abstract-geometric-shapes.png",
  },
  {
    type: "bug",
    message: "You have a bug that needs...",
    time: "12 hours ago",
    avatar: "/detailed-insect.png",
  },
  {
    type: "subscription",
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    avatar: "/subscription-concept.png",
  },
];

const activities = [
  {
    message: "You have a bug that needs...",
    time: "Just now",
    avatar: "/images/A1.png",
  },
  {
    message: "Released a new version",
    time: "59 minutes ago",
    avatar: "/images/A2.png",
  },
  {
    message: "Submitted a bug",
    time: "12 hours ago",
    avatar: "/images/A3.png",
  },
  {
    message: "Modified a data in Page X",
    time: "Today, 11:59 AM",
    avatar: "/images/A4.png",
  },
  {
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    avatar: "/images/A5.png",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "/images/DP1.png" },
  { name: "Drew Cano", avatar: "/images/DP2.png" },
  { name: "Orlando Diggs", avatar: "/images/DP3.png" },
  { name: "Andi Lane", avatar: "/images/DP4.png" },
  { name: "Kate Morrison", avatar: "/images/DP5.png" },
  { name: "Koray Okumus", avatar: "/images/DP1.png" },
];

export function NotificationsPanel() {
  return (
    <div className="w-80 bg-background border-l border-border flex flex-col">
      {/* Header */}
      <div className="p-4  border-border">
        <h2 className="font-semibold text-foreground">Notifications</h2>
      </div>

      {/* Notifications */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-[#E3F5FF] text-[#1C1C1C]">
                {notification.type === "bug" ? (
                  <PiBugBeetleLight className="w-5 h-5" />
                ) : notification.type === "user" ? (
                  <LucideUserRound className="w-4 h-4" />
                ) : notification.type === "subscription" ? (
                  <PiBroadcast className="w-4 h-4" />
                ) : (
                  <Bell className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  {notification.message}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="border-t border-border p-4">
          <h3 className="font-semibold text-foreground mb-4">Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                {activity.avatar ? (
                  <img
                    src={activity.avatar}
                    alt={activity.message}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm">
                    A
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div className="border-t border-border p-4">
          <h3 className="font-semibold text-foreground mb-4">Contacts</h3>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                {contact.avatar ? (
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm">
                    {contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <span className="text-sm text-foreground">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
