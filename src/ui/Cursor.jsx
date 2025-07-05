
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

const Cursor = () => {
    const [taped,settaped] = useState(false)
    const [mouseposition,setmouseposition] = useState({x:-10,y:-10})
   
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>setmouseposition({x:e.clientX,y:e.clientY}))
        window.addEventListener('mousedown',()=>{settaped((prev)=>( !prev));console.log(taped);
        })
    },[])
    return (
    <motion.div  
 animate={{top:mouseposition.y,left:mouseposition.x,scale:taped?5:1}} transition={{type:'spring',stiffness:100}} className='cursorspan ' />
      

  )
}

export default Cursor
