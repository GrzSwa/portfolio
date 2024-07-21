import { ProjectCard } from '../components/ProjectCard.jsx'
import { PROJECTS } from '../constants/ProjectsItems.jsx'

export function Projects() {

    return (
      <div className="w-full h-full xl:overflow-auto xl:pr-2 overflow-hidden">
        <div className='grid xl:grid-cols-2 xl:gap-10 lg:grid-cols-2 lg:gap-8 grid-cols-1 gap-2'>
          {PROJECTS.map((item, index) => (
            <ProjectCard content={item}/>
          ))}
        </div>
      </div>
    )
  }