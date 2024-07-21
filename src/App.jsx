import { useRef } from 'react'
import './App.css'
import { NavBar } from './components/NavBar.jsx'
import { Home } from './sections/Home.jsx'
import { About } from './sections/About.jsx'
import { Services } from './sections/Services.jsx'
import { Projects } from './sections/Projects.jsx'
import { Contact } from './sections/Contact.jsx'
import { motion } from "framer-motion"

function App() {

  const home = useRef(null);
  const services = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const sectionList = [
    {
      "id":0,
      "content":<Home />,
      "ref":home  
    },
    {
      "id":1,
      "content":<Services />,  
      "ref":services 
    },
    {
      "id":2,
      "content":<About />,  
      "ref":about 
    },
    {
      "id":3,
      "content":<Projects />,  
      "ref":projects 
    },
    {
      "id":4,
      "content":<Contact />,  
      "ref":contact 
    },

  ]

  return (
      <div className='bg-[#1c1b22] font-ubuntu-mono'>
        <motion.nav className='fixed z-[1000] top-0 w-screen'
        initial={{y:-50, opacity:0.0}}
        animate={{y:0, opacity:1.0, transition:{duration:1, delay:0.1}}}
        >
          <NavBar sections={sectionList} callback={scrollToSection}/>
        </motion.nav>

        <main className='xl:pt-0 pt-12'>
            {sectionList.map((item, index)=>(
                <div key={index} ref={item.ref} className='flex flex-col xl:h-screen w-full xl:mt-0 pt-16 xl:px-40 px-5'>
                  {item.content}
                </div>
            ))}
        </main>
        <footer className='h-20 2xl:mt-0 xl:mt-20 mt-5'>
          <p className='text-white/70 flex h-full justify-center items-center'>
            Interface inspired by the sample portfolio shown on youtube whose link is&nbsp;
            <span >
              <a href='https://www.youtube.com/watch?v=dImgZ_AH7uA' className='text-deep-orange-800'>here.</a>
            </span>
            &nbsp;This is only an inspiration, the entire implementation was written from scratch by myself.
          </p>
        </footer>
      </div>
  )
}

export default App
