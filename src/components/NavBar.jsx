import { useState, useEffect } from 'react'
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react"
import { navItemsList } from '../constants/NavItems'
import logo from '/src/assets/logo.png'

export function NavBar(props) {
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState(0)

  const selectSection = (index) =>{
     props.callback(props.sections[index]["ref"])
     setActiveSection(index)
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () =>{ 
        window.innerWidth >= 960 && setOpenNav(false)
      },
    );

    window.addEventListener(
      "scroll",
      () => {
          if(window.scrollY >= props.sections[0]["ref"].current.offsetTop && window.scrollY < props.sections[1]["ref"].current.offsetTop - 200){
            setActiveSection(0)
          }
          else if(window.scrollY >= props.sections[1]["ref"].current.offsetTop - 200  && window.scrollY < props.sections[2]["ref"].current.offsetTop - 200 ){
            setActiveSection(1)
          }
          else if(window.scrollY >= props.sections[2]["ref"].current.offsetTop - 200  && window.scrollY < props.sections[3]["ref"].current.offsetTop - 200 ){
            setActiveSection(2)
          }
          else if(window.scrollY >= props.sections[3]["ref"].current.offsetTop - 200 ){
            setActiveSection(3)
          }
          if((window.scrollY + window.innerHeight * 0.5) > props.sections[4]["ref"].current.offsetTop){
            setActiveSection(4)
          }
      }
    );
    

  }, []);


  return (
      <Navbar className="sticky top-0 z-100 h-max max-w-full rounded-none bg-[#1c1b22] backdrop-blur-sm border-none shadow-none xl:px-44 px-10">
        <div className='flex felx-row items-center justify-between text-white'>
          <Typography
            className="mr-4 py-1.5 font-ubuntu-mono text-xl flex flex-row justify-center items-center"
          >
            <img src={logo} width={30}/>
            Grzegorz<span className='text-deep-orange-800'>.</span>S
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {navItemsList.map((item,index) => {
                  var style = (activeSection == index) ? "p-1 font-ubuntu-mono text-md underline decoration-deep-orange-700 decoration-2 underline-offset-8" : "p-1 font-ubuntu-mono text-md"
                  return (
                    <Typography
                      key={index}
                      as="li"
                      variant="small"
                      color="white"
                      className= {style}
                      onClick={()=>selectSection(index)}
                    >
                      <span className="flex items-center cursor-pointer hover:text-deep-orange-800">
                        {item}
                      </span>
                    </Typography>
                  )})}
              </ul>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >

              {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )
              }

            </IconButton>
          </div>

        </div>
        <MobileNav open={openNav}>
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navItemsList.map((item,index) => (
              <Typography
                key={index}
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
                onClick={()=>props.callback(props.sections[index]["ref"])}
              >
                <span className="flex items-center cursor-pointer">
                  {item}
                </span>
              </Typography>
            ))}
          </ul>
        </MobileNav>
      </Navbar>

  )

}