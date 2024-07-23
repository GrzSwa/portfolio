import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typography, Input, Select, Option, Textarea, Button, Alert } from "@material-tailwind/react";
import { SERVICES_LIST } from '../constants/ServicesItems'
import { config } from '../config.js';

export function ContactForm(){
    const form = useRef();
    const [open, setOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            config.serviceId,
            config.templateId,
            form.current,
            config.publicKey
        ).then(
            () => {
                setOpen(true);
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return(
        <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="bg-[#232229] w-full h-full p-7 rounded-xl content-around relative"
        >
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
                <div className="xl:col-span-1 lg:col-span-1 col-span-2">
                    <Input
                        name='firstname'
                        type="text"
                        placeholder="Firstname"
                        className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono"
                        labelProps={{ className: "hidden" }}
                        containerProps={{ className: "bg-[#1c1b22]" }}
                    />
                </div>
                <div className="xl:col-span-1 lg:col-span-1 col-span-2">
                    <Input
                        name='lastname'
                        type="text"
                        placeholder="Lastname"
                        className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono"
                        labelProps={{ className: "hidden" }}
                        containerProps={{ className: "bg-[#1c1b22]" }}
                    />
                </div>
                <div className="xl:col-span-1 lg:col-span-1 col-span-2">
                    <Input
                        name='email'
                        type="email"
                        placeholder="Email address"
                        className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono"
                        labelProps={{ className: "hidden" }}
                        containerProps={{ className: "bg-[#1c1b22]" }}
                    />
                </div>
                <div className="xl:col-span-1 lg:col-span-1 col-span-2">
                    <Input
                        name='phone'
                        type="tel"
                        placeholder="Phone number"
                        className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono "
                        labelProps={{ className: "hidden" }}
                        containerProps={{ className: "bg-[#1c1b22]" }}
                    />
                </div>
                <div className="col-span-2">
                    <Select
                        name='service' 
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
                        name='message' 
                        placeholder="Type your message here." 
                        className="border-none text-white/70 shadow-lg placeholder:text-white/70 placeholder:opacity-100 font-ubuntu-mono "
                        containerProps={{ className: "bg-[#1c1b22]" }}
                        labelProps={{className: "text-white/70"}}
                    />
                </div>
            </div>
                <Button type="submit" className="rounded-full font-ubuntu-mono bg-deep-orange-800 tracking-widest font-normal mt-5">
                    Send Message
                </Button>
                {open &&
                    (
                        <Alert
                            open={open}
                            className='absolute bottom-[30%] left-0 border-2 border-deep-orange-800'
                            icon={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#43a047"
                                className="h-6 w-6"
                            >
                                <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                                />
                            </svg>}
                            onClose={() => setOpen(false)}
                            animate={{
                            mount: { y: 0 },
                            unmount: { y: 100 },
                            }}
                        >
                            <Typography variant="h5" className='text-green-600 font-ubuntu-mono'>
                                Success
                            </Typography>
                            <Typography color="white" className="mt-2 font-normal font-ubuntu-mono">
                                <span className='tracking-wider font-semibold'>Message has been sent!</span> <br/><br/>
                                Thank you for your interest in me and for wanting to cooperate with me. You can be sure that I will definitely reply to this message as soon as possible.
                                <br/><br/>Sincerely,
                                <br/>Grzegorz Swajda
                            </Typography>
                        </Alert>
                    )
                }
        </form>
    )
}