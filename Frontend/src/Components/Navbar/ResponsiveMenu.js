import React from 'react'
import { motion,AnimatePresence} from "framer-motion";
import {Link} from 'react-router-dom';
const ResponsiveMenu = ({open}) => {
  return <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0,y:-100}}
                transition={{duration:0.3}}
                className='absolute top-20 left-0 w-full h-screen z-20'
                >
                <div className='text-xl font-semibold bg-primary text-white py-10 m-6 rounded-2xl'>
                    <ul className='flex flex-col justify-center items-center gap-10'>
                       <Link to='/'>HOME</Link>
                       <Link to='/src/Pages/Login'>ABOUT</Link>
                       <Link to='/src/Pages/Members'>MEMBERS</Link>
                       <Link to='/src/Pages/Gallery'>GALLERY</Link>
                       <Link to='/src/Pages/Contactus'>CONTACT US</Link>
                    </ul>
                </div>
            </motion.div>

            )
        }
    </AnimatePresence>
   
  
 
}

export default ResponsiveMenu
