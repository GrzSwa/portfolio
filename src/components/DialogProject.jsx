import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Typography, Button, Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";


export function DialogProject({show, handler, content }) {
    return(
        <Dialog 
            open={show} 
            handler={handler} 
            className='h-[85%] overflow-scroll overflow-x-hidden' 
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}>
            <DialogHeader className='-m-4'>
                <div className='w-full h-80'>
                    <img src={Object.values(content.img)[0]} className="w-full h-full"/>
                </div>
            </DialogHeader>
            <DialogBody className="bg-[#1c1b22]">
                <Typography variant="h2" className="text-white font-ubuntu-mono tracking-wider">
                    {content.name}
                </Typography>
                <Typography  className='text-deep-orange-800 text-lg font-ubuntu-mono pt-2'>
                    {content.tags}
                </Typography> 
                <br />
                <Typography className='text-lg font-ubuntu-mono'>
                    {content.text}
                </Typography>
                <br />        
                <br />
                <Typography variant="h4" className="text-white font-ubuntu-mono tracking-wider">
                    Project Link
                </Typography>
                <a href={content.git}>
                    <Button variant="text" className="flex items-center gap-2 text-white/70 p-0 font-ubuntu-mono text-sm pt-2 hover:text-deep-orange-800">
                        <FontAwesomeIcon icon={faGithub}/>
                        Source Code
                    </Button>
                </a>        
            </DialogBody>
        </Dialog>
        
        
    )
}