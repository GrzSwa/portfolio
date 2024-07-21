import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTelegram} from '@fortawesome/free-brands-svg-icons'
import CV_PDF from '/src/assets/CV.pdf'
export const PROFESSION = 'Software Developer'

export const NAME = 'Grzegorz Swajda'

export const DESCRIBE = 'A Kielce University of Technology graduate with a passion for \
programming and artificial intelligence. Committed to continuously \
improving skills and acquiring new knowledge. I have strong interpersonal \
skills and strive to develop my career in an inspiring environment full of \
challenges and opportunities for growth. Throughout my education, I have \
been involved in the IT field, from high school where I earned my IT \
technician degree, to my studies.'

export const CV = CV_PDF

export const SOCIAL_MEDIA = {
    "github":'https://github.com/GrzSwa',
    "linkedin":'https://www.linkedin.com/in/grzegorz-swajda-18920730b/',
    "twitter":'https://t.me/GrzegorzSwajda'
}
export const SOCIAL_MEDIA_SVG = {
    "github":<FontAwesomeIcon icon={faGithub} size='xl'/>,
    "linkedin":<FontAwesomeIcon icon={faLinkedinIn} size='xl'/>,
    "twitter":<FontAwesomeIcon icon={faTelegram} size='xl'/>
}