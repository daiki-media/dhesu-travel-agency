import React from "react";

interface ArrowIconProps {
  size?: number;
  className?: string;
}

export default function ArrowIcon({
  size = 40,
  className = "",
}: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        /* M30 46V14: Center stem from bottom to top
           C: Bezier curves to create that organic flared "leaf" look 
        */
        d="M30 46V14M30 14C27.5 21.5 23 26.5 17 29.5M30 14C32.5 21.5 37 26.5 43 29.5"
        stroke="white"
        strokeWidth="1.8" /* Increased weight to match high-fidelity design */
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}