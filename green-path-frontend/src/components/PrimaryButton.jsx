function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2
        px-8 py-3
        rounded-full
        font-medium
        text-sm sm:text-base
        transition-all duration-300
        bg-[#FFEFEF]
        text-[#756AB6]
        border border-[#E2BBE9]
        hover:bg-[#E2BBE9]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
