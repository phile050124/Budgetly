// src/components/ui/badge.js

export const Badge = ({ children, variant = "default", className = "", ...props }) => {
  let base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold";
  let variantClass = "";

  switch (variant) {
    case "secondary":
      variantClass = "bg-gray-200 text-gray-800";
      break;
    case "destructive":
      variantClass = "bg-red-600 text-white";
      break;
    case "outline":
      variantClass = "border border-gray-300 text-gray-700";
      break;
    default:
      variantClass = "bg-primary text-white";
  }

  return (
    <span className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </span>
  );
};
