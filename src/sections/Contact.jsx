import { ContactForm } from "../components/ContactForm"
import { ContactCard } from "../components/ContactCard"
import { CONTACT } from '../constants/AboutItems'

export function Contact() {
    return (
      <div className=" h-full w-full grid xl:grid-cols-2 xl:gap-0 lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-0">
        <div>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-10 justify-center">
          {CONTACT.map((item, index)=>(
            <ContactCard key={index} icon={item.icon} title={item.category} value={item.value}/>
          ))}
        </div>
      </div>
    )
  }

