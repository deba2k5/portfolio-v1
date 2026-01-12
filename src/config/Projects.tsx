import AgenticAI from '@/components/technologies/AgenticAI';
import Arduino from '@/components/technologies/Arduino';
import ARVR from '@/components/technologies/ARVR';
import Firebase from '@/components/technologies/Firebase';
import Gemini from '@/components/technologies/Gemini';
import Groq from '@/components/technologies/Groq';
import IOT from '@/components/technologies/IOT';
import Ollama from '@/components/technologies/Ollama';
import Python from '@/components/technologies/Python';
import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'SteadyStride',
    description:
      'Wearable anti-tremor band that stabilizes hand movements for patients with essential tremors and early-stage Parkinson\'s. Uses gyroscopic sensors and inverse-frequency vibration to counteract tremors in real-time. Winner at SIH 2024 National Finals.',
    image: '/project/steadystride.png',
    link: '#',
    technologies: [
      { name: 'IoT', icon: <IOT key="iot" /> },
      { name: 'Arduino', icon: <Arduino key="arduino" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: '#',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/steadystride',
    isWorking: true,
  },
  {
    title: 'KrishakSure / KisaanSathi',
    description:
      'AI-powered agricultural advisory platform providing personalized crop recommendations, disease detection, weather-based insights, and insurance assistance. Features multilingual voice support for rural farmers. Tata Social Enterprise Challenge Winner.',
    image: '/project/kisaansathi.png',
    link: '#',
    technologies: [
      { name: 'Ollama', icon: <Ollama key="ollama" /> },
      { name: 'Groq', icon: <Groq key="groq" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Agentic AI', icon: <AgenticAI key="agenticai" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/deba2k5/Agri_frontend',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/kisaansathi',
    isWorking: true,
  },
  {
    title: 'MindPal',
    description:
      'Immersive mental health therapy platform combining AI-powered counseling with AR/VR exposure therapy. Includes mood tracking, personalized wellness plans, and real-time biometric monitoring. IEEE YESIST12 Malaysia Global Top 3.',
    image: '/project/mindpal.png',
    link: '#',
    technologies: [
      { name: 'IoT', icon: <IOT key="iot" /> },
      { name: 'AR/VR', icon: <ARVR key="arvr" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Groq', icon: <Groq key="groq" /> },
      { name: 'Agentic AI', icon: <AgenticAI key="agenticai" /> },
    ],
    github: '#',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/mindpal',
    isWorking: true,
  },
  {
    title: 'Recruitix / XenCruit',
    description:
      'AI-powered interview platform eliminating bias in hiring through automated resume screening, skill-based assessments, and intelligent candidate matching. Processes 10,000+ applications with 95% accuracy. Infosys Global Hackathon AIR 8.',
    image: '/project/recruitx.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Gemini', icon: <Gemini key="gemini" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: '#',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/recruitx',
    isWorking: true,
  },
  {
    title: 'AWE: Agentic Web Explorer',
    description:
      'Autonomous multi-agent system for complex web data extraction. Uses Tree of Thought reasoning with multiple specialized agents (Navigator, Extractor, Validator) to traverse websites and extract structured information with high accuracy.',
    image: '/project/awe.png',
    link: 'https://github.com/deba2k5/agentic_web_explorer',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Agentic AI', icon: <AgenticAI key="agenticai" /> },
      { name: 'Gemini', icon: <Gemini key="gemini" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/deba2k5/agentic_web_explorer',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/awe',
    isWorking: true,
  },
  {
    title: 'ZeroOps',
    description:
      'AI-powered DevOps automation platform that predicts deployment failures, auto-remediates infrastructure issues, and optimizes CI/CD pipelines. Reduces deployment time by 60% with intelligent rollback mechanisms.',
    image: '/project/zeroops.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Gemini', icon: <Gemini key="gemini" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: '#',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/zeroops',
    isWorking: true,
  },
  {
    title: 'Smart Waste Bin',
    description:
      'Patent-pending IoT waste management system with intelligent segregation, fill-level monitoring, and route optimization for collection trucks. Reduces operational costs by 40% for municipal corporations.',
    image: '/project/smartbin.png',
    link: '#',
    technologies: [
      { name: 'IoT', icon: <IOT key="iot" /> },
      { name: 'Arduino', icon: <Arduino key="arduino" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: '#',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/smartbin',
    isWorking: true,
  },
];
