import { IconButton, Button } from "@material-tailwind/react";
import { PROFESSION, NAME, DESCRIBE, CV, SOCIAL_MEDIA, SOCIAL_MEDIA_SVG } from '../constants/ShortInfoItems'
import { motion } from "framer-motion"

export function Profession({animation}) {

    return (
        <div className='w-full'>
            <motion.p 
                className='text-md tracking-wider text-white pb-1'
                variants={animation}
                initial="hidden_left"
                animate="visible"
            >
                    {PROFESSION}
            </motion.p>
        </div> 
    )
}

export function FullName({animation}){
    return (
        <motion.div 
            className='w-full'
            variants={animation}
            initial="hidden_left"
            animate="visible"
        >
            <p className='text-7xl tracking-wide text-white'>
                Hello I'm
            </p> 
            <p className='text-6xl text-deep-orange-700'>
                {NAME}  
            </p>
        </motion.div> 
    )
}

export function Describe({animation}){
    return (
        <div className='w-full pt-5'>
            <motion.p 
                className='leading-relaxed text-white/80'
                variants={animation}
                initial="hidden_left"
                animate="visible"
            >
                {DESCRIBE}
            </motion.p>
        </div> 
    )
}
export function Buttons({animation}){
    return (
        <div className='w-full flex-row flex py-4 space-x-3 items-center'>
            <motion.a 
              href={CV}
              variants={animation(1)}
              initial="hidden"
              animate="visible"
            >
                <Button 
                variant="outlined" 
                    color="deep-orange"
                    className="flex items-center gap-3 rounded-full border-deep-orange-700 text-deep-orange-700 hover:bg-deep-orange-700 hover:text-white font-ubuntu-mono text-md" 
                >
                    Download CV
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="h-5 w-5"
                    >
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
                        />
                    </svg>
                </Button>
            </motion.a>
            {Object.entries(SOCIAL_MEDIA).map(([key, value], index) => (
                SOCIAL_MEDIA_SVG[key] ? (
                    <motion.a 
                      href={value}
                      variants={animation(1+((index+1)*0.2))}
                      initial="hidden"
                      animate="visible"
                    >
                        <IconButton  
                        variant="outlined" 
                        color="deep-orange"
                        className="flex items-center gap-3 rounded-full border-deep-orange-700 text-deep-orange-700 hover:bg-deep-orange-700 hover:text-white" 
                        >
                            {SOCIAL_MEDIA_SVG[key]}
                        </IconButton >
                    </motion.a>
                ) : null
            ))}

        </div> 
    )
}


