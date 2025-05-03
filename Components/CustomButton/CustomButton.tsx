import React from "react";
import { ArrowDownRight } from "lucide-react";

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
  btntype?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<ButtonProps> = ({ label, primary = false, onClick,btntype = "button" }) => {
  return (
    <button
      type={btntype}
      className={`px-4 py-3.5 flex gap-1 items-center justify-center border-[3px] border-solid rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-lg 
        ${primary ? "bg-primary1 text-white border-primary1 hover:bg-inherit hover:text-primary1" : "bg-inherit border-primary1 hover:bg-primary1 hover:text-white"}`}
      onClick={onClick}
    >
      <span className="font-semibold text-[12px] md:text-[16px]">{label}</span>
      <ArrowDownRight size={24} />
    </button>
  );
};

export default CustomButton;
