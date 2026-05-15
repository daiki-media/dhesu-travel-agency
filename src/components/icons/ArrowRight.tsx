interface ArrowIconProps {
  size?: number;
  className?: string;
}

export default function RightArrow({
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
      <g transform="rotate(90 30 30)">
        <path
          d="M30 46V14M30 14C27.5 21.5 23 26.5 17 29.5M30 14C32.5 21.5 37 26.5 43 29.5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}