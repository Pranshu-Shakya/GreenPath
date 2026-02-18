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
        px-3 py-1
        rounded-full
        font-medium
        text-sm
        transition-all duration-300
        bg-[#9087c7]
        hover:bg-[#756AB6]
        text-[#FFEFEF]
        shadow-lg
        hover:shadow-xl
        disabled:opacity-50
        hover:cursor-pointer
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
