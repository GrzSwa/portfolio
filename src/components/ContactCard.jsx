import { Typography } from "@material-tailwind/react";

export function ContactCard({icon, title, value}){
    return(
        <div className="h-24 flex flex-row px-14">
            <div className="flex basis-1/4 justify-center items-center">
                <div className="bg-[#232229] p-5">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col basis-3/4 justify-center">
                <Typography className="text-md text-white/60 font-ubuntu-mono">
                    {title}
                </Typography>
                <Typography className="text-xl text-white font-ubuntu-mono">
                    {value}
                </Typography>
            </div>
        </div>
    )
}