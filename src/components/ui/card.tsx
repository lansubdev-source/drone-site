"use client";
import { cn } from "@/lib/utils"; // remove this line if you're not using cn()
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border bg-white text-black shadow-md overflow-hidden",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 text-sm text-gray-700", className)}
    {...props}
  />
));

CardContent.displayName = "CardContent";
