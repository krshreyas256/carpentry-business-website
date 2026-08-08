function WoodenPlugIcon() {
  return (
    <svg
      viewBox="0 0 120 80"
      width="52"
      height="52"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wooden plug"
      role="img"
    >
      {/* Wooden plug body */}
      <path
        d="M18 25
           L92 20
           Q104 20 108 30
           L108 50
           Q104 60 92 60
           L18 55
           Q10 40 18 25Z"
        fill="#B87932"
      />

      {/* Wood grain */}
      <path
        d="M25 32 Q55 27 91 31
           M22 40 Q58 35 98 39
           M24 48 Q58 44 92 47"
        fill="none"
        stroke="#8B572A"
        strokeWidth="2"
        opacity="0.55"
      />

      {/* Tapered end */}
      <path
        d="M18 25 Q8 40 18 55"
        fill="#9A622B"
      />

      {/* Highlight */}
      <path
        d="M25 28 Q55 24 91 28"
        fill="none"
        stroke="#E3B875"
        strokeWidth="3"
        opacity="0.7"
      />
    </svg>
  );
}

export default WoodenPlugIcon;