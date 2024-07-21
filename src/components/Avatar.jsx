import { motion } from "framer-motion"
import avatar from '/src/assets/avatar.png'
export function AnimatedAvatar({animation}) {
  return (
    <motion.div 
      className=' flex h-full justify-center items-center'
      variants={animation}
      initial="hidden_right"
      animate="visible"
    >
        <img
          className=" xl:h-96 o xl:w-96 lg:h-64 lg:w-64 h-56 w-56 rounded-full object-cover object-center"
          src={avatar}
          alt="nature image"
        />
    </motion.div>
  )
}
