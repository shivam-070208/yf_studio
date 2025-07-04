
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

const Cursor = () => {
    const [mouseposition,setmouseposition] = useState({x:-10,y:-10})
    const [mousedown,setmousedown] = useState(false)
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>setmouseposition({x:e.clientX,y:e.clientY}))
    },[])
    return (
    <motion.div  
 animate={{top:mouseposition.y,left:mouseposition.x,scale:mousedown||5}} transition={{type:'spring',stiffness:100}} className='cursorspan ' />
      

  )
}

export default Cursor
