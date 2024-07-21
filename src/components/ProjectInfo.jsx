import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card,CardBody,Typography,IconButton } from "@material-tailwind/react";

export function ProjectInfo(props) {
    return (
        <Card className="bg-transparent shadow-none rounded-none">
            <CardBody className='h-full flex flex-col'>

            <Typography className="text-8xl text-white font-ubuntu-mono mb-4">
                0{props.index+1}
            </Typography>

            <Typography variant="h1" className="font-semibold tracking-wider text-white font-ubuntu-mono">
                {props.content.name}
            </Typography>

            <Typography className="text-md text-white/80 font-ubuntu-mono mt-4">
                {props.content.text}
            </Typography>

            <Typography className="text-deep-orange-800 text-xl font-ubuntu-mono pt-16 pb-6 mb-5 border-b-2 border-b-white/70">
                {props.content.tags}
            </Typography>

            <IconButton  
                    variant="outlined" 
                    className="flex items-center gap-3 rounded-full bg-[#232229] text-white hover:bg-deep-orange-700" 
                >
                    <FontAwesomeIcon icon={faGithub} size='2xl'/>
                </IconButton >

            </CardBody>
        </Card>
    )
  }