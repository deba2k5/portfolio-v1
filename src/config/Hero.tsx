/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Gemini from '@/components/technologies/Gemini';
import Groq from '@/components/technologies/Groq';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Python: Python,
  Gemini: Gemini,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Groq: Groq,
};

export const heroConfig = {
  // Personal Information
  name: 'Debangshu Chatterjee',
  title: 'GenAI & Full Stack Developer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://python.org/',
      component: 'Python',
    },
    {
      name: 'GenAI',
      href: 'https://ai.google.dev/',
      component: 'Gemini',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'LLMs',
      href: 'https://groq.com/',
      component: 'Groq',
    },
  ],

  // Description Configuration
  description: {
    template:
      'Engineering **intelligent systems** for healthcare, agriculture, and cybersecurity. **SIH 2024 Runner Up** | **Infosys Global Hackathon AIR 8** | **IEEE YESIST12 Top 3**. Building production-ready AI solutions with {skills:0}, {skills:1}, and {skills:2}.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'View CV',
      href: '/assets/Debangshu CV  (6).pdf',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Contact Me',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/deba2k5',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deba2k5/', // Assumed based on github
    icon: <LinkedIn />,
  },
  {
    name: 'Email',
    href: 'mailto:debangshu2005@gmail.com', // Placeholder
    icon: <Mail />,
  },
];
