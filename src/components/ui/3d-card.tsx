"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardContainer({ children, className }: CardContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{
        perspective: 1000,
      }}
      className={`relative w-full ${className}`}
    >
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { mouseX, mouseY })
      )}
    </motion.div>
  );
}

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
  mouseX?: any;
  mouseY?: any;
};

export function CardBody({ children, className, mouseX, mouseY }: CardBodyProps) {
  const rotateX = useMotionTemplate`${(mouseY || 0).get()}deg`;
  const rotateY = useMotionTemplate`${(mouseX || 0).get()}deg`;

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={`rounded-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

type CardItemProps = {
  children: React.ReactNode;
  translateZ?: number;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
};

export function CardItem({
  children,
  translateZ = 0,
  className,
  as: Component = "div",
  ...props
}: CardItemProps) {
  return (
    <motion.div
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...props}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
