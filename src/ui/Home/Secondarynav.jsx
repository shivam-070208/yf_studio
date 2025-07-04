import { motion } from 'motion/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Secondarynav = () => {
    const navItems=[
        {
            Name:'Home',
            href:'/',

        },
           {
            Name:'About',
            href:'/about',

        }, {
            Name:'Services',
            href:'/services',

        },  {
            Name:'Projects',
            href:'/projects',

        }, {
            Name:'Blog',
            href:'/blog',

        }, {
            Name:'Contact',
            href:'/contact',

        }
    ]
    const [hovered,sethovered] = useState(null)
  return (
    <div className='bg-[#000254] z-100 absolute left-1/2 -translate-x-1/2 w-[99%] max-w-6xl rounded px-2 mx-auto flex justify-between py-2 -translate-y-1/2'>
      <div onMouseLeave={()=>sethovered(null)} className='hidden  px-4 grid-flow-col-dense place-items-center lg:grid relative'>
        {navItems.map((Element,i)=>(
            <Link onMouseEnter={()=>sethovered(i)} to={Element.href} key={i} className='text-white px-4 text-xl  py-4 font-semibold relative ' >{Element.Name}
           {hovered==i&& <motion.div layoutId='motion-hover-span' className='w-full -z-1 rounded h-full absolute left-0 top-0 bg-[#07099b]' />}
            </Link>
        ))}
      </div>
      <Button  href={'/contact'} secondarycolor={"bg-black"} primarycolor={"bg-blue-600"} text={"Get a Quote"}/>
    </div>
  )
}

export default Secondarynav
