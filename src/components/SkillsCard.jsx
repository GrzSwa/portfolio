import { useState } from 'react'
import {Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function SkillsCard(props) {
    const [openPopover, setOpenPopover] = useState(false);
 
    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    };

    

    return (
        <Popover placement="top" open={openPopover} handler={setOpenPopover}>
            <PopoverHandler {...triggers}>
                <motion.div className="bg-[#232229] hover:bg-deep-orange-800 flex justify-center items-center p-10 rounded-xl"
                variants={props.animation}
                initial="hidden"
                animate="visible"
                >
                    {props.icon}
                </motion.div>
            </PopoverHandler>
            <PopoverContent>
                <span>{props.pop}</span>
            </PopoverContent>
        </Popover>
    )
  }