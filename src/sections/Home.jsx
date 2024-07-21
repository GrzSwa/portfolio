import { AnimatedAvatar } from '../components/Avatar.jsx'
import { Profession, FullName, Describe, Buttons } from '../components/ShortInfo.jsx'
import { Statistics } from '../components/Statistics.jsx'
import { EXPERIANCE, PROJECTS, TECHNOLOGY, CODE_COMMITS } from '../constants/StatisticsItems'


export function Home() {
    const animation = (delay) =>({
        hidden_left:{x:-100, opacity:0.0},
        hidden_right:{x:100, opacity:0.0},
        visible:{x:0, opacity:1.0, transition:{duration:1, delay:delay}}
    })
    const btnAnimation = (delay) =>({
        hidden:{opacity:0.0},
        visible:{opacity:1.0, transition:{duration:1, delay:delay}}
    })
    return (
        <div className='w-full h-full flex flex-col '>
            <div className='w-full h-full grid grid-cols-1 gap-0 xl:grid-cols-2 xl:gap-1 '>
                    {/* Left Sections */}
                    <div className='xl:p-8'>
                        <div className=' h-full w-full flex flex-col justify-center items-center'>
                            <Profession animation={animation(0)}/>
                            <FullName animation={animation(0.2)}/>
                            <Describe animation={animation(0.4)}/>
                            <Buttons animation={btnAnimation}/>
                        </div>
                    </div>

                    {/* Right Sections */}
                    <div>
                        <AnimatedAvatar animation={animation(0.1)}/>
                    </div>
            </div>
            <div className='grid xl:grid-cols-4 xl:gap-4 md:grid-cols-4 lg:gap-4 grid-cols-2 gap-2 px-5 mb-10 xl:mt-0 mt-10'>
                <Statistics content={EXPERIANCE}/>
                <Statistics content={PROJECTS}/>
                <Statistics content={TECHNOLOGY}/>
                <Statistics content={CODE_COMMITS}/>
            </div>
        </div> 
    )
}
