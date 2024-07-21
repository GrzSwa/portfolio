import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Typography, IconButton, Button } from "@material-tailwind/react";
import { DialogProject } from './DialogProject';
export function ProjectCard(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className="h-[32rem]">
            <div className=" h-[50%]">
                <div className="w-full h-full bg-[#232229] rounded-xl flex justify-center items-center pt-10">
                    <img src={props.content.img} className="object-cover w-[90%] h-full rounded-t-xl hover:w-[95%] cursor-pointer"  onClick={handleOpen} />
                </div>
            </div>
            <div className=" h-[8%] flex flex-row items-center pr-1 mt-3">
                <Typography variant="h4" className="text-white font-ubuntu-mono tracking-wider">
                    {props.content.name}
                </Typography>
                <div className="bg-white/40 h-[2px] mx-2 grow"></div>
                <IconButton variant="text" className='text-2xl text-white hover:text-deep-orange-800'>
                    <FontAwesomeIcon icon={faGithub}/>
                </IconButton>
            </div>
            <div className="h-[8%] flex items-center">
                <Typography  className='text-deep-orange-800 text-lg font-ubuntu-mono'>
                    {props.content.tags}
                </Typography>
            </div>
            <div className=" h-[34%]">
                <p className='text-white font-ubuntu-mono line-clamp-4'>
                    {props.content.text}
                </p>
                <Button variant="text" className="flex items-center gap-2 text-deep-orange-800 p-0 font-ubuntu-mono text-sm" onClick={handleOpen}>
                    Read More{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </Button>
                <DialogProject show={open} handler={handleOpen} content={props.content}/>
            </div>
        </div>
    )
  }