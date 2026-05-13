// /components/CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  rounded = true,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} ${
        rounded ? "rounded-lg" : ""
      } font-semibold shadow-md transition-colors duration-300 transform hover:scale-105`}
      style={{
        backgroundColor: "#dcf4f7",
        color: "#030f19",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#53b1b8")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dcf4f7")}
    >
      {text}
    </button>
  );
};

export default Button;
