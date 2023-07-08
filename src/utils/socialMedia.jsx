import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';


export const socialMedia = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    color: 'bg-[#3b5998]',
    icon: <FaFacebookF />
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    color: 'bg-[#00ACED]',
    icon: <FaTwitter />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    color: 'bg-[#C70162]',
    icon: <FaInstagram />
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/',
    color: 'bg-[#0C5BA9]',
    icon: <FaLinkedinIn />
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/',
    color: 'bg-[#CC4C26]',
    icon: <FaRedditAlien />
  },
  {
    name: 'Email',
    href: '#',
    color: 'bg-[#9BA1AB]',
    icon: <GrMail />
  }
];