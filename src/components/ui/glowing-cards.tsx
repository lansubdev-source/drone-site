"use client";

import React, { useEffect, useRef, useState } from 'react';

export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

export interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
  glowRadius?: number;
  glowOpacity?: number;
  animationDuration?: number;
  enableHover?: boolean;
  gap?: string;
  maxWidth?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  responsive?: boolean;
  customTheme?: {
    cardBg?: string;
    cardBorder?: string;
    textColor?: string;
    hoverBg?: string;
  };
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = '',
  glowColor = "#000000", // default to black
  style
}) => {
  return (
    <div
      className={`relative p-6 rounded-2xl text-gray-800 border border-gray-300 bg-white transition-all duration-300 ${className}`}
      style={{
        '--glow-color': glowColor,
        ...style,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export const GlowingCards: React.FC<GlowingCardsProps> = ({
  children,
  className = '',
  enableGlow = true,
  glowRadius = 25,
  glowOpacity = 1,
  animationDuration = 400,
  gap = "2.5rem",
  maxWidth = "75rem",
  padding = "3rem 1.5rem",
  backgroundColor,
  borderRadius = "1rem",
  responsive = true,
  customTheme,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay || !enableGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
      setShowOverlay(true);

      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
      overlay.style.setProperty('--opacity', glowOpacity.toString());
    };

    const handleMouseLeave = () => {
      setShowOverlay(false);
      overlay.style.setProperty('--opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableGlow, glowOpacity]);

  const containerStyle = {
    '--gap': gap,
    '--max-width': maxWidth,
    '--padding': padding,
    '--border-radius': borderRadius,
    '--animation-duration': `${animationDuration}ms`,
    '--glow-radius': `${glowRadius}rem`,
    '--glow-opacity': glowOpacity,
    backgroundColor,
    ...customTheme,
  } as React.CSSProperties;

  return (
    <div className={`relative w-full ${className}`} style={containerStyle}>
      <div
        ref={containerRef}
        className={`relative max-w-[var(--max-width)] mx-auto px-6 py-12`}
        style={{ padding: "var(--padding)" }}
      >
        <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[var(--gap)]`}>
          {children}
        </div>

        {enableGlow && (
          <div
            ref={overlayRef}
            className={`absolute inset-0 pointer-events-none select-none transition-opacity duration-[var(--animation-duration)] ease-out`}
            style={{
              WebkitMask: `radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)`,
              mask: `radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)`,
              opacity: showOverlay ? 'var(--opacity)' : '0',
            }}
          >
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[var(--gap)] max-w-[var(--max-width)] mx-auto`}
              style={{ padding: "var(--padding)" }}
            >
              {React.Children.map(children, (child: React.ReactNode) => {
                if (
                  React.isValidElement<GlowingCardProps>(child) &&
                  child.type === GlowingCard
                ) {
                  const cardGlowColor = child.props.glowColor || "#000000";
                  return React.cloneElement(child, {
                    className: `${child.props.className || ''} bg-white text-gray-800 border`,
                    style: {
                      ...child.props.style,
                      borderColor: cardGlowColor,
                      boxShadow: `0 0 18px 4px ${cardGlowColor}33`, // soft black glow
                      backgroundColor: '#ffffff',
                    },
                  });
                }
                return child;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
