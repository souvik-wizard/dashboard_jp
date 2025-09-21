import * as React from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "../lib/utils";
const DropdownContext = React.createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
} | null>(null);

function DropdownMenu({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLElement | null>(null);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef }}>
      <div data-slot="dropdown-menu" {...props}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

function DropdownMenuPortal({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dropdown-menu-portal" {...props}>
      {children}
    </div>
  );
}

function DropdownMenuTrigger({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) return null;

  const onClick = (e: React.MouseEvent) => {
    ctx.setOpen(!ctx.open);
    if (props.onClick) props.onClick(e as React.MouseEvent<HTMLButtonElement>);
  };

  return (
    <button
      data-slot="dropdown-menu-trigger"
      ref={(el) => {
        ctx.triggerRef.current = el;
      }}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function usePosition(
  triggerRef: React.RefObject<HTMLElement | null> | undefined,
  contentRef: React.RefObject<HTMLElement | null>,
  sideOffset = 4
) {
  React.useLayoutEffect(() => {
    const trigger = triggerRef?.current;
    const content = contentRef.current;
    if (!trigger || !content) return;

    const rect = trigger.getBoundingClientRect();
    content.style.position = "absolute";
    content.style.top = `${rect.bottom + sideOffset + window.scrollY}px`;
    content.style.left = `${rect.left + window.scrollX}px`;
  }, [triggerRef, contentRef, sideOffset]);
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { sideOffset?: number }) {
  const ctx = React.useContext(DropdownContext);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  usePosition(ctx?.triggerRef, contentRef, sideOffset);

  if (!ctx || !ctx.open) return null;

  return (
    <div
      data-slot="dropdown-menu-content"
      ref={contentRef}
      className={cn(
        "bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md absolute -mt-18 -ml-36",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function DropdownMenuGroup({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dropdown-menu-group" {...props}>
      {children}
    </div>
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <button
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm select-none hover:cursor-pointer w-full hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  checked?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "relative flex items-center gap-2 py-1.5 pr-2 pl-8 text-sm",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex items-center justify-center">
        {checked ? <CheckIcon className="size-4" /> : null}
      </span>
      {children}
    </div>
  );
}

function DropdownMenuRadioGroup({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dropdown-menu-radio-group" {...props}>
      {children}
    </div>
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "relative flex items-center gap-2 py-1.5 pr-2 pl-8 text-sm",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex items-center justify-center">
        <CircleIcon className="size-2 fill-current" />
      </span>
      {children}
    </button>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) {
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <div
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="dropdown-menu-sub" {...props}>
      {children}
    </div>
  );
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { inset?: boolean }) {
  return (
    <button
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex items-center rounded-sm px-2 py-1.5 text-sm",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </button>
  );
}

function DropdownMenuSubContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
