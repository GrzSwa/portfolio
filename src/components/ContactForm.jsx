import { Typography, Input, Select, Option, Textarea, Button } from "@material-tailwind/react";
import { SERVICES_LIST } from '../constants/ServicesItems'

export function ContactForm(){
    return(
        <div className="bg-[#232229] w-full h-full p-7 rounded-xl content-around">
            <div className="w-full">
                <Typography className="text-5xl text-deep-orange-800 font-ubuntu-mono">
                    Let's work together
                </Typography>
                <br />
                <Typography className="font-ubuntu-mono text-white/70">
                    Sadipscing nonumy at rebum. Wisi velit dignissim autem lorem sed justo dolor in tempor at facilisis gubergren gubergren amet. Eirmod sit sanctus ea sadipscing dolore stet ipsum sadipscing nisl nonumy at.
                </Typography>
            </div>
            <div className="grid grid-cols-2 gap-4 py-5">
                <Input
                    type="text"
                    placeholder="Firstname"
                    className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono"
                    labelProps={{ className: "hidden" }}
                    containerProps={{ className: "bg-[#1c1b22]" }}
                />
                <Input
                    type="text"
                    placeholder="Lastname"
                    className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono"
                    labelProps={{ className: "hidden" }}
                    containerProps={{ className: "bg-[#1c1b22]" }}
                />
                <Input
                    type="email"
                    placeholder="Email address"
                    className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono"
                    labelProps={{ className: "hidden" }}
                    containerProps={{ className: "bg-[#1c1b22]" }}
                />
                <Input
                    type="tel"
                    placeholder="Phone number"
                    className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono "
                    labelProps={{ className: "hidden" }}
                    containerProps={{ className: "bg-[#1c1b22]" }}
                />

                <div className="col-span-2">
                    <Select 
                        label="Select a service"
                        className="border-none text-white/70 font-ubuntu-mono"
                        containerProps={{ className: "bg-[#1c1b22]" }}
                        labelProps={{className: "text-white/70"}}
                    >
                            {SERVICES_LIST.map((item,index)=>(
                                <Option key={index} value={item.title}>{item.title}</Option>
                            ))}
                    </Select>
                </div>
                <div className="col-span-2">
                    <Textarea 
                        placeholder="Type your message here." 
                        className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono "
                        containerProps={{ className: "bg-[#1c1b22]" }}
                        labelProps={{className: "text-white/70"}}
                    />
                </div>
            </div>
            <Button className="rounded-full font-ubuntu-mono bg-deep-orange-800 tracking-widest font-normal mt-5">
                Send Message
            </Button>
        </div>
    )
}