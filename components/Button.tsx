import React from 'react'

const Button = ({ classname, children }: { classname?: string, children: string }) => {
  return (
    <button className={`bg-blue400 font-semibold px-14 py-3 text-white ${classname}`}>
      {children}
    </button>
  )
}

export default Button
