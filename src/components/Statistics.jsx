import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function Statistics(props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, props.content["value"], { duration: 2 });
    return animation.stop;
  }, []);

  return (
      <div className='flex flex-row p-2 max-w-40 items-center justify-between space-x-3 '>
        <motion.div className='text-5xl text-white font-black'>
            {rounded}
        </motion.div>

        <div className=' text-white/80 text-ellipsis leading-tight'>
            {props.content["text"]}
        </div>
      </div>
  )
}