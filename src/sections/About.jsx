import { useState } from 'react'
import { Typography, Button } from "@material-tailwind/react";
import { SHORT, SECTIONS, EXPERIANCE_CARDS, EDUCATION_CARDS, SKILLS, ABOUT_ME} from '../constants/AboutItems'
import { ExperienceCard } from '../components/ExperienceCard.jsx'
import { EducationCard } from '../components/EducationCard.jsx'
import { SkillsCard } from '../components/SkillsCard.jsx'
import { AboutCard } from '../components/AboutCard.jsx'
import { motion } from "framer-motion";

export function About() {
  const [sectiontitle, setSectionTitle] = useState(SECTIONS[0]["title"])
  const [selectBtn, setSelectBtn] = useState(0)
  const [sectionDesc, setSectionDesc] = useState(SECTIONS[0]["describe"])

  const btnList= ["Experiance", "Education", "Skills", "About me"]
  const animation = (delay) =>({
    hidden:{opacity:0, scale:0},
    visible:{opacity:1.0, scale:1.0, transition:{duration:0.5, delay:delay}}
  })

  const SkillAnimation = (delay) =>({
    hidden:{opacity:0, scale:0},
    visible:{opacity:1.0, scale:1.0, transition:{duration:0.5, delay:delay}}
})

  const changeSection = (index) =>{
    setSelectBtn(index)
    setSectionTitle(SECTIONS[index]["title"])
    setSectionDesc(SECTIONS[index]["describe"])
  } 

  return (
      <div className='w-full h-full flex flex-row'>
        <div className='w-full h-full grid xl:grid-cols-3 xl:gap-1 grid-cols-1 gap-0 '>
          <div className="flex flex-col xl:col-span-1 w-full h-full px-5 ">
            <Typography variant='h2' className="text-white font-normal font-ubuntu-mono">
              Why hire me?
            </Typography>

            <Typography className="mt-5 mb-5 text-white/80 font-ubuntu-mono">
              {SHORT}
            </Typography>
            <Typography className="flex flex-col h-2/4 justify-evenly">
              {btnList.map((item,index)=>{
                var style = (selectBtn == index) ? "p-2 w-full font-ubuntu-mono text-md bg-deep-orange-800 xl:mb-0 mb-5" : "p-2 w-full font-ubuntu-mono text-md bg-[#232229] xl:mb-0 mb-5"
                return(
                  <motion.span
                    variants={animation(0+((index+1)*0.1))}
                    initial="hidden"
                    animate="visible"
                  >
                    <Button className={style} onClick={()=>changeSection(index)}> {item} </Button>
                  </motion.span>
                )
              })}
            </Typography>

          </div>

          <div className="w-full h-full flex flex-col xl:col-span-2 xl:pl-10 pl-0 overflow-auto">
            <Typography variant='h2' className="text-white font-normal font-ubuntu-mono">
              {sectiontitle}
            </Typography>
            <Typography className="mt-4 mb-10 text-white/70 font-ubuntu-mono">
              {sectionDesc}
            </Typography>
            
            <div className='h-full overflow-auto pr-2'>
              {
                selectBtn != 2 ? <div className='grid xl:grid-cols-2 xl:gap-4 lg:grid-cols-2 lg:gap-1 grid-cols-1 gap-4'>
                  {
                    {
                      0:EXPERIANCE_CARDS.map((item,index)=>(<ExperienceCard time={item.time} name={item.name} company={item.company}/>)),
                      1:EDUCATION_CARDS.map((item,index)=>(<EducationCard time={item.time} name={item.name} company={item.company}/>)),
                      // 3:ABOUT_ME.map((item,index)=>(<AboutCard category={item.category} value={item.value}/>)),
                    }[selectBtn]
                  }
                </div>
                : <div className='grid xl:grid-cols-4 xl:gap-4 lg:grid-cols-3 lg:gap-2 grid-cols-2 gap-1'>
                  {SKILLS.map((item,index)=>(<SkillsCard icon={item.icon} pop={item.pop} animation={SkillAnimation(0+((index+1)*0.08))}/>))}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
  )
}
