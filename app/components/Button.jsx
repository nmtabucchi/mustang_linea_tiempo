export default function Button({ children, onClick, variant = "primary", href }) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-mustang-blue text-mustang-white hover:bg-mustang-blue-hover hover:shadow-lg hover:shadow-mustang-blue/25",
    secondary: "bg-transparent border-2 border-mustang-border text-mustang-white hover:border-mustang-blue hover:text-mustang-blue",
    ghost: "bg-transparent text-mustang-silver hover:text-mustang-white",
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
