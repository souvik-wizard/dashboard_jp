import * as React from "react";

import { cn } from "../lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

function Avatar({ className, children, ...props }: DivProps) {
  return (
    <div
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function AvatarImage({ className, alt, ...props }: ImgProps) {
  return (
    <img
      data-slot="avatar-image"
      alt={alt}
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, children, ...props }: DivProps) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
