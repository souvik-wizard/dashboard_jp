import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
    avatar: "/diverse-group-activity.png",
  },
  {
    message: "Released a new version",
    time: "59 minutes ago",
    avatar: "/release.jpg",
  },
  {
    message: "Submitted a bug",
    time: "12 hours ago",
    avatar: "/placeholder-cvjj1.png",
  },
  {
    message: "Modified a data in Page X",
    time: "Today, 11:59 AM",
    avatar: "/abstract-data-flow.png",
  },
  {
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    avatar: "/delete.jpg",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "/natali.jpg" },
  { name: "Drew Cano", avatar: "/drew.jpg" },
  { name: "Orlando Diggs", avatar: "/orlando.jpg" },
  { name: "Andi Lane", avatar: "/andi.jpg" },
  { name: "Kate Morrison", avatar: "/kate.jpg" },
  { name: "Koray Okumus", avatar: "/koray.jpg" },
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
              <Avatar className="w-8 h-8">
                <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {notification.type === "bug"
                    ? "🐛"
                    : notification.type === "user"
                    ? "👤"
                    : notification.type === "subscription"
                    ? "📧"
                    : "🔔"}
                </AvatarFallback>
              </Avatar>
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
                <Avatar className="w-8 h-8">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
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
                <Avatar className="w-8 h-8">
                  <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-foreground">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
