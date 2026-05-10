import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Sparkle(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="M5.6 5.6l3 3M15.4 15.4l3 3M18.4 5.6l-3 3M8.6 15.4l-3 3" />
    </svg>
  );
}

export function Violin(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <g transform="rotate(25 12 12)">
        {/* Scroll / pegbox */}
        <path d="M10.5 4.5 Q10.5 1.5 12 1.5 Q13.5 1.5 13.5 4.5" />
        {/* Neck */}
        <path d="M10.5 4.5 L10.5 7.5 M13.5 4.5 L13.5 7.5" />
        {/* Body — upper bout, waist (C-bouts), lower bout */}
        <path d="M10.5 7.5 C7 7.5 5.5 9.5 6 11.5 C6.5 13 9 13.5 9 15 C9 16.5 6 17 6 19.5 C6 21.5 8.5 23 12 23 C15.5 23 18 21.5 18 19.5 C18 17 15 16.5 15 15 C15 13.5 17.5 13 18 11.5 C18.5 9.5 17 7.5 13.5 7.5 Z" />
        {/* F-holes */}
        <path d="M9 16 L9 18 M15 16 L15 18" />
      </g>
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg {...baseProps} {...props} fill="currentColor" stroke="none">
      <path d="M12 2l2.95 6.5L22 9.6l-5 4.9 1.2 7L12 18l-6.2 3.5L7 14.5 2 9.6l7.05-1.1L12 2z" />
    </svg>
  );
}

export function Award(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

export function Music(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg {...baseProps} {...props} fill="currentColor" stroke="none">
      <path d="M6 4l14 8-14 8V4z" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M7.5 7C5 7 3 9 3 11.5V18h6v-6H6c0-1.7 1.3-3 3-3V7H7.5zm10 0C15 7 13 9 13 11.5V18h6v-6h-3c0-1.7 1.3-3 3-3V7h-1.5z" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Minus(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Youtube(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22 7.5c0-1.4-1.1-2.5-2.5-2.5C17 4.7 12 4.7 12 4.7s-5 0-7.5.3C3.1 5 2 6.1 2 7.5 1.7 9 1.7 12 1.7 12s0 3 .3 4.5C2 17.9 3.1 19 4.5 19c2.5.3 7.5.3 7.5.3s5 0 7.5-.3c1.4 0 2.5-1.1 2.5-2.5.3-1.5.3-4.5.3-4.5s0-3-.3-4.5z" />
      <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" />
    </svg>
  );
}
