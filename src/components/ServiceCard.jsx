import { Card,CardBody,CardFooter,Typography,Button, Popover,PopoverHandler,PopoverContent} from "@material-tailwind/react";
import { motion } from "framer-motion";

export function ServiceCard(props){

    return (
        <motion.div
          whileInView= {{opacity:1.0, scale:1.0}}
          initial={{opacity:0.0, scale:0.0}}
          transition={{duration: 0.5}}
          viewport={{once:true}}
        >
          <Card className="bg-transparent h-full shadow-none rounded-none border-b-2 border-b-white/80">
          <CardBody className="h-3/4">

            <Typography variant="h4" className=" text-white font-ubuntu-mono mb-2">
              0{props.index+1}
            </Typography>

            <Typography variant="h2" className="font-semibold tracking-wider text-deep-orange-700 font-ubuntu-mono">
            {props.content.title}
            </Typography>

            <Typography className="text-white/80 font-ubuntu-mono mt-2">
              {props.content.text}
            </Typography>

          </CardBody>
          <CardFooter className=" h-1/4 content-end">
            <Popover>
                <PopoverHandler>
                <Button variant="text" className="flex items-center gap-2 text-white p-0 font-ubuntu-mono text-md">
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
                </PopoverHandler>
                <PopoverContent className="z-[999] max-w-xl bg-[#1c1b22/90] backdrop-blur-xl border-deep-orange-700 shadow-none">
                    <Typography className="font-ubuntu-mono text-white">
                        {props.content.more}
                    </Typography>
                </PopoverContent>
            </Popover>
          </CardFooter>
        </Card>
        </motion.div>
    )
}