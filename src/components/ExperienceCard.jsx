import { Card,CardBody, CardFooter,Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function ExperienceCard(props) {
    return (
        <motion.div
            whileInView= {{opacity:1.0, scale:1.0}}
            initial={{opacity:0.0, scale:0.0}}
            transition={{duration: 0.5}}
            viewport={{once:true}}
        >
            <Card className="bg-[#232229] h-full">
                <CardBody className="h-3/4">
                    <Typography variant="h6" className="mb-2 text-deep-orange-800 font-ubuntu-mono">
                        {props.time}
                    </Typography>
                    <Typography variant="h4" color="white" className="font-ubuntu-mono">
                        {props.name}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 h-1/4 flex items-end">
                    <li className="text-white/70 marker:text-orange-800 font-ubuntu-mono">{props.company}</li>
                </CardFooter>
            </Card>
        </motion.div>
    )
  }