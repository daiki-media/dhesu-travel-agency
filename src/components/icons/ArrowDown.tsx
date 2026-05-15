import React from "react";

interface DownArrowIconProps {
  size?: number;
  className?: string;
}

export default function DownArrowIcon({
  size = 40,
  className = "",
}: DownArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* This <g> tag takes the exact geometry from the UP arrow 
        and vertically flips it (scaleY(-1)) over the horizontal center axis 
        to ensure perfect mathematical symmetry.
      */}
      <g transform="translate(0, 60) scale(1, -1)">
        <path
          d="M30 46V14M30 14C27.5 21.5 23 26.5 17 29.5M30 14C32.5 21.5 37 26.5 43 29.5"
          stroke="white"
          strokeWidth="1.8" /* Same stroke weight */
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}