import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faReact, faGithub, } from '@fortawesome/free-brands-svg-icons'
import FastAPI from '../assets/fastAPI.svg'
import { config } from '../config.js';

export const SHORT = "Here are some reasons in favor of me as a future member of your team."
export const SECTIONS = [
    {
        "title":"My experience",
        "describe":"I have not worked professionally so far, all my experience is based on \
        student projects, my own projects and courses.",
    },
    {
        "title":"My education",
        "describe":"",
    },
    {
        "title":"My skills",
        "describe":"Labore ipsum ex lorem ea at assum dignissim dolor consectetuer. Sed magna feugait dolores ipsum sea.",
    },
    {
        "title":"About me",
        "describe":"\
        Although I do not yet have work experience in a company, my skills and competencies developed during student projects, my own initiatives and courses make me a valuable candidate. Working on student projects, I learned how to analyze problems, plan and implement solutions effectively, which developed my analytical skills. Creating my own projects allowed me to explore different technologies and approaches, which demonstrates my creativity and innovation. Working on individual projects, I learned to manage my time effectively, set priorities and solve problems independently, which demonstrates my self-reliance and time management skills.\
        Student projects often required collaboration with other students, so I developed the ability to communicate, cooperate and share knowledge in a group. I am quick to learn new technologies and adapt to changing project requirements, and the knowledge I have gained in different areas of programming allows me to easily learn new skills, which proves my flexibility and adaptability. I am an ambitious and determined person, constantly looking for new challenges. I regularly try to broaden my horizons by learning programming languages and technologies, which proves my constant desire to grow. I have experience in identifying problems and finding effective solutions. When taking on any project, I treat it with full commitment and responsibility for the end result. Programming is not only a skill of mine, but above all a passion, which keeps me motivated to constantly improve my skills and strive for perfection in every project.\
        ",
    },
]
export const EXPERIANCE_CARDS = [
    {
        "time":"October 2021",
        "name":"Dating application",
        "company":"Student projects"
    },
    {
        "time":"July 2022",
        "name":"Application for learning spelling",
        "company":"Own projects"
    },
    {
        "time":"October 2022",
        "name":"Application for android tv",
        "company":"Own projects"
    },
    {
        "time":"March 2023",
        "name":"Warehouse management application",
        "company":"Student projects"
    },
    {
        "time":"October 2023",
        "name":"Weather application",
        "company":"Student projects"
    },
    {
        "time":"November 2023",
        "name":"Moon phase calculator",
        "company":"Student projects"
    },
    {
        "time":"May 2024",
        "name":"Application for detecting DoS attacks",
        "company":"Own projects"
    },
    {
        "time":"June 2024",
        "name":"Music application",
        "company":"Own projects"
    },
];


export const EDUCATION_CARDS = [
    {
        
        "time":"2019 - 2023",
        "name":"Engineering Studies",
        "company":"Kielce University of Technology"
    },
    {
        "time":"2023 - 2024",
        "name":"Master's Degree",
        "company":"Kielce University of Technology"
    },
    {
        
        "time":"2021",
        "name":"CCNA: Introduction to Networks",
        "company":"Cisco - Online Course"
    },
    {
        "time":"2022",
        "name":"CCNA: Enterprise Networking, Security, and Automation",
        "company":"Cisco - Online Course"
    },
    {
        
        "time":"2024",
        "name":"Generative AI in Action",
        "company":"IBM - Online Course"
    },
    {
        "time":"2024",
        "name":"Artificial Intelligence Fundamentals",
        "company":"IBM - Online Course"
    },
    {
        
        "time":"2024",
        "name":"Cybersecurity Fundamentals",
        "company":"IBM - Online Course"
    },
    {
        "time":"2024",
        "name":"Enterprise Security in Practice",
        "company":"IBM - Online Course"
    },
    {
        "time":"2024",
        "name":"Building Trustworthy AI Enterprise Solutions",
        "company":"IBM - Online Course"
    },
]

export const SKILLS = [
    {
        "pop":"Python",
        "icon":<FontAwesomeIcon icon={faPython} className='text-[50px] text-white'/>,
    },
    {
        "pop":"Flutter",
        "icon":<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
        <path fill="#FFFFFF" d="M26.707 3.293l-21 21c-.391.391-.391 1.024 0 1.414l5.586 5.586c.391.391 1.024.391 1.414 0L39.293 4.707C39.923 4.077 39.477 3 38.586 3H27.414C27.149 3 26.895 3.105 26.707 3.293zM39.293 24.707L22 42l-6.293-6.293c-.391-.391-.391-1.024 0-1.414l11-11C26.895 23.105 27.149 23 27.414 23h11.172C39.477 23 39.923 24.077 39.293 24.707zM39.293 45.293L32 38l-10 4 4.707 4.707C26.895 46.895 27.149 47 27.414 47h11.172C39.477 47 39.923 45.923 39.293 45.293z"></path>
        </svg>
    },
    {
        "pop":"React/React Native",
        "icon":<FontAwesomeIcon icon={faReact} className='text-[50px] text-white'/>,
    },
    {
        "pop":"Tailwind CSS",
        "icon":<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
        <path fill="#FFFFFF" d="M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z"></path>
        </svg>,
    },
    {
        "pop":"Flet",
        "icon":<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="50" height="50" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 285 285">
        <g id="Layer_x0020_1">
         <metadata id="CorelCorpID_0Corel-Layer"/>
         <rect fill="none" width="285" height="285" rx="9.03" ry="8.12"/>
         <path fill="#FFFFFF" d="M39.28 144.74c-0.85,-1.52 -0.66,-2.61 0.1,-4.13 31.41,-58.36 78.81,-94.15 138.53,-119.75 2.03,-0.86 5.04,1.52 4.31,3.65 -8.9,25.91 -15.18,51.13 -18.82,78.23 -3.32,24.97 -4.24,50.79 -0.87,77.77 3.56,30.59 10.88,55.99 19.68,83.36 0.98,3.05 -2.14,4.43 -4.51,3.26 -62.19,-30.61 -109.33,-70.65 -138.42,-122.39z"/>
         <path fill="#232229" d="M224.53 198.59c-34.39,-10.79 -65.15,-29.06 -92.4,-53.2 -1.82,-1.62 -1.61,-3.87 0.03,-5.44 27.07,-25.88 57.79,-46.19 91.74,-60.56 2.99,-1.27 5.45,1.2 4.56,4.62 -9.62,36.91 -11.74,73.39 0.13,109.95 0.98,3.05 -1.47,5.44 -4.06,4.63z"/>
         <path fill="#FFFFFF" d="M224.53 198.59c-22.64,-7.1 -43.71,-17.45 -63.24,-30.58 -1.35,-20.9 -1.47,-30.2 0.73,-53.26 19.19,-14.22 39.86,-26.04 61.88,-35.36 2.99,-1.27 5.45,1.2 4.56,4.62 -9.62,36.91 -11.74,73.39 0.13,109.95 0.98,3.05 -1.47,5.44 -4.06,4.63z"/>
        </g>
       </svg>,
    },
    {
        "pop":"FastAPI",
        "icon":<img width={50} height={50} src={FastAPI}/>,
    },
    
    {
        "pop":"Artifficial inteligence",
        "icon":<img width="50" height="50" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/100/FFFFFF/external-artificial-intelligence-coding-tanah-basah-basic-outline-tanah-basah.png" alt="external-artificial-intelligence-coding-tanah-basah-basic-outline-tanah-basah"/>
    },
    {
        "pop":"Cybersecurity",
        "icon":<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/security-shield-green.png" alt="security-shield-green"/>
    },
    
    
    {
        "pop":"Basic programming skills in Java and C/C++ languages",
        "icon":<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/developer.png" alt="developer"/>,
    },
    
    {
        "pop":"Version Control",
        "icon":<FontAwesomeIcon icon={faGithub} className='text-[50px] text-white'/>,
    },
]

export const ABOUT_ME = [
    {
        "category":"Name",
        "value":"Grzegorz Swajda"
    },
    {
        "category":"Experiance",
        "value":"1 Year"
    },
    {
        "category":"Nationality",
        "value":"Poland"
    },
    {
        "category":"Phone",
        "value":config.phoneNumber
    },
    {
        "category":"Email",
        "value":"g.swajda@onet.pl"
    },
    {
        "category":"Language",
        "value":"Polish, English"
    },
]
export const CONTACT = [

    {
        "category":"Phone",
        "value":config.phoneNumber,
        "icon":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d84315" className="size-8">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
      
      
    },
    {
        "category":"Email",
        "value":"g.swajda@onet.pl",
        "icon":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d84315" className="size-8">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
      
    },
    {
        "category":"Address",
        "value":"Kielce, Holy Cross",
        "icon":<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d84315" className="size-8">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
      
    },

]