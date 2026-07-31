export default function Button({ children, onClick, variant = "primary", href, ...rest }) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-mustang-red text-mustang-white hover:bg-mustang-red-hover hover:shadow-lg hover:shadow-mustang-red/25",
    secondary: "bg-transparent border-2 border-mustang-border text-mustang-white hover:border-mustang-red hover:text-mustang-red",
    ghost: "bg-transparent text-mustang-silver hover:text-mustang-white",
  };

  const className = `${baseStyles} ${variants[variant] || variants.primary}`;

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
}
