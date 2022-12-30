interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  label: string;

  onClick?: () => void;
}

export const Color_Btn = ({ label, ...props }: ButtonProps) => {
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
