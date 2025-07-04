import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ href, text, secondarycolor, primarycolor }) => {
  return (
    <Link
      to={href}
      className={`py-3 rounded   group inline-block relative overflow-hidden `}
    >
    <div  className={`py-3 rounded   group md:px-10 px-6 relative overflow-hidden ${primarycolor}`}>   
         <span className="relative text-white font-semibold z-10 h-fit w-fit inline-block overflow-hidden">
        <span className="block whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
      </span>
      <div
        className={`absolute  w-2 h-2 rounded-full ${secondarycolor} -translate-x-1/2 -translate-y-1/2  z-0  -top-4 transition-all duration-700 group-hover:scale-[100]`}
      />
</div>
      
    </Link>
  )
}

export default Button
