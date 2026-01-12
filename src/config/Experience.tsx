import Arduino from '@/components/technologies/Arduino';
import Firebase from '@/components/technologies/Firebase';
import Gemini from '@/components/technologies/Gemini';
import Groq from '@/components/technologies/Groq';
import IOT from '@/components/technologies/IOT';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'DIVERSION 2026',
    position: 'Organizer',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Leading organization of Eastern India\'s largest student-run hackathon',
      'Managing sponsorships, logistics, and 1500+ participant experience',
    ],
    startDate: 'Dec 2025',
    endDate: 'Present',
    technologies: [],
    website: '#',
  },
  {
    isCurrent: true,
    isBlur: false,
    company: 'AIZenera LLP',
    position: 'Founder',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Founded AI-focused startup building intelligent solutions for enterprises',
      'Leading product development and strategic partnerships',
    ],
    startDate: 'Jul 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Python',
        href: 'https://python.org/',
        icon: <Python />,
      },
      {
        name: 'Gemini',
        href: 'https://ai.google.dev/',
        icon: <Gemini />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: true,
    isBlur: false,
    company: 'IIC IEM (Innovation Cell)',
    position: 'Project Intern',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Led development of Anti-Tremor Band (SteadyStride) — SIH 2024 Runner Up',
      'Built KrishakSure AI platform for farmer advisory — Tata Social Enterprise Winner',
      'Created MindPal AR/VR therapy system — IEEE YESIST12 Global Top 3',
    ],
    startDate: 'Aug 2023',
    endDate: 'Present',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        icon: <Firebase />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: true,
    isBlur: false,
    company: 'IEM HACKOASIS 2025',
    position: 'Organizer',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Core organizer for IEM HACKOASIS 2025, handling outreach and technical support',
    ],
    startDate: 'Oct 2025',
    endDate: 'Present',
    technologies: [],
    website: '#',
  },
  {
    isCurrent: false,
    isBlur: false,
    company: 'Smart Make-A-Thon 2025',
    position: 'Organizer',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Organized a major maker event focused on innovation and hardware prototyping',
      'Mentored participants and managed event schedules',
    ],
    startDate: 'Sep 2025',
    endDate: 'Sep 2025',
    technologies: [],
    website: '#',
  },
  {
    isCurrent: false,
    isBlur: false,
    company: 'Jadavpur University NLP Lab',
    position: 'Research Intern',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Building advanced RAG pipelines with cross-encoder reranking for enhanced retrieval',
      'Fine-tuning transformer models for domain-specific NLP tasks',
      'Contributing to academic publications on AI-powered document analysis',
    ],
    startDate: 'Jun 2025',
    endDate: 'Sep 2025',
    technologies: [
      {
        name: 'Python',
        href: 'https://python.org/',
        icon: <Python />,
      },
      {
        name: 'Groq',
        href: 'https://groq.com/',
        icon: <Groq />,
      },
      {
        name: 'Gemini',
        href: 'https://ai.google.dev/',
        icon: <Gemini />,
      },
    ],
    website: 'https://jadavpuruniversity.in/',
  },
  {
    isCurrent: false,
    isBlur: false,
    company: 'Smart Maker Festival',
    position: 'Arduino Workshop Speaker',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Conducted hands-on Arduino workshops for 200+ students and enthusiasts',
      'Taught embedded systems fundamentals and circuit design principles',
    ],
    startDate: 'Sep 2024',
    endDate: 'Sep 2024',
    technologies: [
      {
        name: 'Arduino',
        href: 'https://www.arduino.cc/',
        icon: <Arduino />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    isBlur: false,
    company: 'Smart Maker Festival 2025',
    position: 'Arduino Workshop Speaker',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Led advanced Arduino workshop on IoT integration and sensor networks',
    ],
    startDate: '2025',
    endDate: '2025',
    technologies: [
      {
        name: 'Arduino',
        href: 'https://www.arduino.cc/',
        icon: <Arduino />,
      },
      {
        name: 'IoT',
        href: '#',
        icon: <IOT />,
      },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    isBlur: false,
    company: 'IEM Labs',
    position: 'IoT Development Intern',
    location: 'Kolkata, India',
    image: '/assets/Debangshu.png',
    description: [
      'Developed humanoid robotics prototypes with advanced servo control systems',
      'Designed embedded systems architecture for real-time sensor integration',
    ],
    startDate: 'Dec 2025',
    endDate: 'Jan 2026',
    technologies: [
      {
        name: 'Arduino',
        href: 'https://www.arduino.cc/',
        icon: <Arduino />,
      },
      {
        name: 'IoT',
        href: '#',
        icon: <IOT />,
      },
      {
        name: 'Python',
        href: 'https://python.org/',
        icon: <Python />,
      },
    ],
    website: '#',
  },
];
