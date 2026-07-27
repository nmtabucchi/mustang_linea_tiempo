export default function Button({ children, onClick, variant = "primary", href }) {
  const baseStyles =
    "px-6 py-3 font-semibold rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-mustang-blue text-white hover:bg-mustang-blue/80",
    secondary: "bg-transparent border-2 border-mustang-blue text-mustang-blue hover:bg-mustang-blue hover:text-white",
    ghost: "bg-transparent text-mustang-silver hover:text-white",
  };

  const className = `${baseStyles} ${variants[variant] || variants.primary}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
