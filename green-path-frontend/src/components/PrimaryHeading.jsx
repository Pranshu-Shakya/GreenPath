import React from "react";

function PrimaryHeading({
    text,
    level = "h2",
    className = "",
}) {
    const Tag = level;

    const sizeMap = {
        h1: "text-3xl md:text-4xl",
        h2: "text-3xl",
        h3: "text-2xl",
        h4: "text-xl",
    };

    return (
        <Tag
            className={`
        font-bold
        leading-snug
        text-[#FFEFEF]
        ${sizeMap[level]}
        ${className}
      `}
        >
            {text}
        </Tag>
    );
}

export default PrimaryHeading;
