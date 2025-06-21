export const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  let base = "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ";
  let variantClass = "";
  let sizeClass = "";

  switch (variant) {
    case "outline":
      variantClass = "border border-gray-300 text-gray-700 hover:bg-gray-100";
      break;
    case "ghost":
      variantClass = "bg-transparent hover:bg-gray-100 text-gray-700";
      break;
    case "destructive":
      variantClass = "bg-red-600 text-white hover:bg-red-700";
      break;
    default:
      variantClass = "bg-primary text-white hover:bg-primary-dark";
  }

  switch (size) {
    case "sm":
      sizeClass = "px-2 py-1 text-sm";
      break;
    case "lg":
      sizeClass = "px-6 py-3 text-lg";
      break;
    default:
      sizeClass = "px-4 py-2 text-md";
  }

  return (
    <button className={`${base} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
