import React from "react";

function PrimaryParagraph({
  text,
  className = "",
  size = "sm",
}) {
  const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  return (
    <p
      className={`
        mt-2
        leading-relaxed
        text-[#f3e3f6]
        ${sizeMap[size]}
        ${className}
      `}
    >
      {text}
    </p>
  );
}

export default PrimaryParagraph;
