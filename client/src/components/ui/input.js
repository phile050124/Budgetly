export const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full border px-4 py-2 rounded ${className}`}
      {...props}
    />
  );
};
