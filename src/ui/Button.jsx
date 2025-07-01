import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({href,text,secondarycolor,primarycolor}) => {
  return (
   <Link to={href} className={`py-3 rounded group px-10 ${primarycolor}  relative overflow-hidden`}>
    <span className='relative text-white  font-semibold text-lg z-10 h-fit w-fit inline-block overflow-hidden '>
        <span className='block transition-all group-hover:-translate-y-[100%] duration-300'>{text}</span>
          <span className='absolute transition-all group-hover:-translate-y-[100%] duration-300'>{text}</span>
    </span>
    <div className={`rounded-full w-100 duration-1000 z-0 h-60 -left-20 -top-70  group-hover:-top-9 transition-all  ${secondarycolor} absolute`} />
   </Link>
  )
}

export default Button
