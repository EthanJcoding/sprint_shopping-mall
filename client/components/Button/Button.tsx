interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}

export const Button = ({ size = "medium", label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-white hover:bg-gray-50 border-none"
      {...props}
    >
      {label}
    </button>
  );
};
