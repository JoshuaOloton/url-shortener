"use client";

type Props = { 
  classname?: string, 
  onclick?: () => void, 
  children: React.ReactNode
 };

const Button = ({ classname, onclick, children }: Props) => {
  return (
    <button type="button" onClick={onclick} className={`bg-blue400 font-semibold px-14 py-3 cursor-pointer text-white hover:bg-blue400/95 active:bg-blue400/95 active:translate-y-0.5 duration-100 ${classname}`}>
      {children}
    </button>
  )
}

export default Button
