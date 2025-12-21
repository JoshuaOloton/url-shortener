"use client";

type Props = { 
  classname?: string, 
  onclick?: () => void, 
  size?: "small" | "regular",
  children: React.ReactNode
 };

const Button = ({ classname, onclick, size, children }: Props) => {
  const sizeClasses = size === "small" ? "px-6 py-2" : "px-14 py-3";
  return (
    <button type="button" onClick={onclick} className={`bg-blue400 font-semibold ${sizeClasses} cursor-pointer text-white hover:bg-blue400/95 active:bg-blue400/95 active:translate-y-0.5 duration-100 ${classname}`}>
      {children}
    </button>
  )
}

export default Button
