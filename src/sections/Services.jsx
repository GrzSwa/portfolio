import { ServiceCard } from '../components/ServiceCard.jsx'
import { SERVICES_LIST } from '../constants/ServicesItems'
export function Services() {
  return (
      <div className='grid xl:grid-cols-2 xl:gap-8 lg:grid-cols-2 lg:gap-5 grid-cols-1 gap-0 w-full h-full overflow-auto'>
        {SERVICES_LIST.map((item,index)=>(
          <ServiceCard key={index} index={index} content={item}/>
        ))}
      </div>
  )
}
