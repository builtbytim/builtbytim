'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Server,
  Zap,
  Brain,
  Shield,
  Download,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Trophy,
  Rocket,
  Star,
  Send,
  Calendar,
  Award,
  Quote,
  ChevronDown,
  Briefcase,
  Users,
  Target,
  ArrowUpRight,
  ArrowRight,
  FileText,
  CheckCircle,
  X
} from 'lucide-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// AchievementCycler Component
const AchievementCycler = ({ achievements, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [achievements.length]);

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 mb-2">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-medium">Key Achievement</span>
        </div>
        <div className="flex space-x-1">
          {achievements.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-green-400' : 'bg-slate-600'
                }`}
            />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="text-slate-300 text-sm leading-relaxed">
          {achievements[currentIndex]}
        </div>
      </div>
    </div>
  );
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
    transition: { duration: 2, ease: "linear" }
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [skillsExpanded, setSkillsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [formError, setFormError] = useState('');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);

      // Determine active section based on scroll position
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Testimonials scroll indicator handler
    const handleTestimonialsScroll = () => {
      const container = document.getElementById('testimonials-scroll');
      if (container) {
        const scrollLeft = container.scrollLeft;
        const cardWidth = 320; // w-80 = 320px
        const currentIndex = Math.round(scrollLeft / cardWidth);

        // Update indicators
        [0, 1, 2].forEach((index) => {
          const indicator = document.getElementById(`indicator-${index}`);
          if (indicator) {
            if (index === currentIndex) {
              indicator.className = 'w-2 h-2 rounded-full bg-blue-400 transition-all duration-300';
            } else {
              indicator.className = 'w-2 h-2 rounded-full bg-slate-600 transition-all duration-300';
            }
          }
        });
      }
    };

    // Initialize testimonials scroll handler after component mounts
    const initTestimonialsScroll = () => {
      const container = document.getElementById('testimonials-scroll');
      if (container) {
        container.addEventListener('scroll', handleTestimonialsScroll);
        // Set initial state
        handleTestimonialsScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize testimonials scroll handler after a short delay to ensure DOM is ready
    setTimeout(initTestimonialsScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      const testimonialsContainer = document.getElementById('testimonials-scroll');
      if (testimonialsContainer) {
        testimonialsContainer.removeEventListener('scroll', handleTestimonialsScroll);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const skills = [
    {
      category: "Frontend",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      techs: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      techs: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      category: "Blockchain",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-violet-400",
      techs: [
        { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" },
        { name: "Ethereum", logo: "https://ethereum.org/assets/svgs/eth-diamond-black.svg" },
        { name: "Web3.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg" },
        { name: "MetaMask", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" },
        { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ethereum/ethereum-original.svg" }
      ]
    },
    {
      category: "AI Integration",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-400",
      techs: [
        { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
        { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
        { name: "LangChain", logo: "https://python.langchain.com/img/favicon.ico" },
        { name: "RAG", logo: "https://raw.githubusercontent.com/valohai/ml-logos/master/vectorflow.svg" },
        { name: "Colab", logo: "https://colab.research.google.com/img/colab_favicon_256px.png" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-400",
      techs: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
        { name: "Render", logo: "/render-logo.svg" },
        { name: "Cursor", logo: "/cursor.webp" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  const projects = [

    {
      title: "Moduls - Deploy agents instantly with modular on-chain logic",
      subtitle: "Lead Full Stack Web3 Developer",
      description: "Moduls is a platform for deploying agents instantly with modular on-chain logic.",
      achievements: [
        "Designed and developed the ModulsSalesManager smart contract with bonding curve pricing, anti-bot protections, and multi-token registration",
        "Built full-stack web interface with token launch dashboard, trading charts, and creator management tools",
        "Engineered backend architecture for secure buy/sell flows, tax/withdrawal logic, and contract event handling",
        "Integrated real-time chat features for community engagement and token promotion directly within the platform",
        // "Implemented end-to-end system covering frontend, backend, and smart contracts, ensuring seamless token launch and trading experience"
      ]
      ,
      image: "/moduls-shot.png",
      tags: ["Next.js", "Express", "Hardhat", "Solidity", "MongoDB", "OpenAI", "Web3", "Viem"],
      links: {
        demo: "https://moduls.fun",
        github: "https://github.com/oxmoduls/moduls-platform",
        case_study: "https://github.com/oxmoduls/moduls-platform/blob/main/README.md"
      },
      status: "Live",
      statusColor: "from-green-400 to-emerald-500",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "ChainPal — Web3 Payment Gateway",
      subtitle: "Lead Full Stack Developer",
      description: "ChainPal is an AI-enabled blockchain payment gateway for businesses and freelancers.",
      achievements: [
        "Architected and implemented complete payment infrastructure enabling crypto-to-fiat transactions",
        "Built merchant dashboard with payment link generation, invoice management, and automated payout processing",
        "Developed secure user authentication and business verification system",
        "Integrated cross-border payment processing with real-time currency conversion"
      ],
      image: "/chainpal-shot.png",
      tags: ["Next.js", "Python", "Solidity", "PostgreSQL", "AWS"],
      links: {
        demo: "https://chainpal.org",
        github: "https://github.com/chainpalhq",
        case_study: null
      },
      status: "Live",
      statusColor: "from-green-400 to-emerald-500",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "PromptSifter — Professional Prompt Discovery",
      subtitle: "Solo Developer",
      description: "Discover quality prompts curated by professionals across different expertises - from developers to marketers, writers to analysts.",
      achievements: [
        "Built complete authentication system with social logins and secure sessions",
        "Developed automated prompt quality verification with multi-factor scoring",
        "Implemented extensive filtering system with real-time search and categorization",
        "Created offline-first architecture with seamless data syncing and caching"
      ],
      image: "/promptsifter-shot.png",
      tags: ["Next.js", "FastAPI", "MongoDB", "Redis", "Groq AI"],
      links: {
        demo: "https://promptsifter.bytim.xyz",
        github: "https://github.com/builtbytim/promptsifter",
        case_study: null
      },
      status: "Open Source",
      statusColor: "from-yellow-400 to-orange-500",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Moonshill — Web3 Marketing Automation",
      subtitle: "Full Stack Developer",
      description: "AI-powered multi-platform shilling engine for Web3 communities. Amplify your crypto project with intelligent meme generation and strategic posting.",
      achievements: [
        "Built AI-powered content generation system for memes and marketing materials",
        "Developed multi-platform automation for Twitter, Telegram, and Discord",
        "Implemented  prompt tuning for maximum human-like post generation",
        "Created smart engagement system with anti-bot detection mechanisms"
      ],
      image: "/moonshill-shot.png",
      tags: ["Next.js", "Python", "OpenAI", "Redis", "Render"],
      links: {
        demo: "https://moonshill.pages.dev",
        github: "https://github.com/nulldev0x/moonshill",
        case_study: "https://docs.google.com/document/d/1QImjqVhBxoeutw4nH5YGWrg8ow1AD7Zd1LeelXKmAyQ/edit?usp=sharing"
      },
      status: "Featured",
      statusColor: "from-blue-400 to-cyan-500",
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed w-2 h-2 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      >
        <motion.div
          className="w-full h-full bg-white rounded-full opacity-75"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-slate-700/50 shadow-2xl">
            <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 sm:space-x-3"
              >
                <div className="relative">
                  <Image
                    src="/logo.svg"
                    alt="builtbytim logo"
                    width={32}
                    height={32}
                    className="sm:w-10 sm:h-10 drop-shadow-lg"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-none">
                    builtbytim
                  </span>
                  <span className="text-xs text-slate-400 leading-none mt-0.5">
                    portfolio
                  </span>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-6 xl:space-x-8" role="menubar">
                {[
                  { name: 'About', icon: <Globe className="w-4 h-4" aria-hidden="true" />, id: 'about' },
                  { name: 'Skills', icon: <Zap className="w-4 h-4" aria-hidden="true" />, id: 'skills' },
                  { name: 'Experience', icon: <Briefcase className="w-4 h-4" aria-hidden="true" />, id: 'experience' },
                  { name: 'Projects', icon: <Rocket className="w-4 h-4" aria-hidden="true" />, id: 'projects' },
                  { name: 'Contact', icon: <Mail className="w-4 h-4" aria-hidden="true" />, id: 'contact' }
                ].map((item) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    whileHover={{ y: -2 }}
                    className={`flex items-center space-x-2 transition-colors duration-200 font-medium relative group text-sm xl:text-base ${activeSection === item.id
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                      }`}
                    role="menuitem"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Get in Touch</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="text-slate-300 hover:text-white transition-colors duration-200 p-1.5 sm:p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md"
                  onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 80, behavior: 'smooth' })}
                  aria-label="Contact Timileyin"
                  title="Jump to contact section"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrollProgress > 10 ? 1 : 0,
          scale: scrollProgress > 10 ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Scroll to top of page"
          title="Back to top"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" aria-hidden="true" />
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="hero-heading">
          {/* Modern Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Column - Intro & Profile */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Profile Image */}
                  <div className="relative mx-auto lg:mx-0 w-max ">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 shadow-xl">
                      <Image
                        src="/profile.jpg"
                        alt="Timileyin Pelumi"
                        width={128}
                        height={160}
                        className="rounded-xl  h-full object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      Timileyin Pelumi
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base">
                      Full-Stack Developer
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs text-slate-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Available for remote work</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <motion.a
                      href="#projects"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium"
                    >
                      View Work
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-800"
                    >
                      Get in Touch
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Building the Future,
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      One Product at a Time
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg sm:text-xl max-w-2xl">
                    Full-stack developer passionate about building products that make a difference
                  </p>
                </motion.div>

                {/* How I Work Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid sm:grid-cols-3 gap-4 sm:gap-6"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">My Approach</h3>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      You have an idea worth building. My role is to turn that vision into secure, scalable, and user-friendly software.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">Technical Expertise</h3>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      I work across web development, AI, and blockchain, transforming complex requirements into clean, usable applications.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">What I Deliver</h3>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      At the end of the day, I&apos;m not just writing code, I&apos;m helping you solve problems, ship features, and grow your business.
                    </p>
                  </div>
                </motion.div>

                {/* Resume Download */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center lg:justify-start"
                >
                  <motion.a
                    href="/resume-timileyin-pelumi.pdf"
                    download="Timileyin-Pelumi-Resume.pdf"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}




        {/* Skills Section */}
        <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/80" aria-labelledby="skills-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                <h2 id="skills-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
                </h2>
              </div>
              <p className="text-slate-300 text-base sm:text-lg">Technologies and frameworks I work with</p>
            </motion.div>

            <div className="relative">
              <motion.div
                id="skills-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                style={{
                  maxHeight: skillsExpanded ? 'none' : '400px',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s ease-in-out'
                }}
                aria-hidden={!skillsExpanded && "true"}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    {/* Card Background with Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-15 rounded-3xl transition-all duration-500`}></div>

                    {/* Main Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl group-hover:shadow-2xl">

                      {/* Header */}
                      <div className="text-center mb-6 sm:mb-8">
                        <div className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{skill.category}</h3>
                        <div className={`h-1 w-12 sm:w-16 bg-gradient-to-r ${skill.color} rounded-full mx-auto`}></div>
                      </div>

                      {/* Tech Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {skill.techs.map((tech) => (
                          <motion.div
                            key={tech.name}
                            whileHover={{ scale: 1.05 }}
                            className="group/tech relative"
                          >
                            <div className="bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/5 hover:border-white/20 transition-all duration-300 text-center">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center group-hover/tech:bg-white/20 transition-colors duration-300">
                                <Image
                                  src={tech.logo}
                                  alt={tech.name}
                                  width={32}
                                  height={32}
                                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain filter group-hover/tech:brightness-110 transition-all duration-300"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                                <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${skill.color} rounded-full hidden`}></div>
                              </div>
                              <span className="text-slate-300 text-xs sm:text-sm font-medium group-hover/tech:text-white transition-colors duration-300">
                                {tech.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Fade Gradient Overlay */}
              {!skillsExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 via-slate-800/80 to-transparent pointer-events-none" />
              )}

              {/* Expand/Collapse Button */}
              <div className="flex justify-center mt-8">
                <motion.button
                  onClick={() => setSkillsExpanded(!skillsExpanded)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                  aria-expanded={skillsExpanded}
                  aria-controls="skills-content"
                  aria-label={skillsExpanded ? 'Hide additional skills' : 'Show all skills'}
                >
                  <span>{skillsExpanded ? 'Show Less' : 'View All Skills'}</span>
                  <motion.div
                    animate={{ rotate: skillsExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Education & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
                </h2>
              </div>
              <p className="text-slate-300 text-base sm:text-lg">Academic background and professional certifications</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-lg"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600/50 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-2">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-gray-100">Bachelor of Engineering</h3>
                        <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                          Completed
                        </span>
                      </div>

                      <p className="text-base sm:text-lg text-blue-400 font-semibold mb-3 sm:mb-2">Computer Engineering</p>

                      <p className="text-slate-300 mb-4 text-sm sm:text-base leading-relaxed">
                        Comprehensive study of computer systems, software engineering, and digital systems design.
                        Strong foundation in algorithms, data structures, computer architecture, and software development methodologies.
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {['Computer Science', 'Software Engineering', 'Digital Systems', 'Algorithms', 'Data Structures'].map((subject) => (
                          <span
                            key={subject}
                            className="px-2 sm:px-3 py-1 bg-slate-700/60 text-slate-200 text-xs sm:text-sm font-medium rounded-full border border-slate-600/50"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/60">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Professional <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
                </h2>
              </div>
              <p className="text-slate-300 text-base sm:text-lg">
                Building scalable, high-impact systems across blockchain, SaaS, and data-driven domains.
              </p>
            </motion.div>

            {/* Experience Grid */}
            <div className="relative">

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative"
              >
                {[
                  {
                    period: "Jan 2025 - Present",
                    title: "Senior Full Stack Developer",
                    company: "Freelance & Remote Projects",
                    description: "Building data-driven web applications with focus on blockchain and AI integration.",
                    achievements: [
                      "Built Moonshill, web3 marketing platform — 2nd place at BlessNet Hackathon",
                      "Built and launched a blockchain staking platform generating $30K in revenue",
                      "Created PromptSifter, an AI prompt curation platform serving the growing AI community"
                    ],
                    icon: <Rocket className="w-6 h-6" />
                  },
                  {
                    period: "Nov 2024 - Apr 2025",
                    title: "Full Stack Developer",
                    company: "ChainPal",
                    description: "Led end-to-end development of an AI-enabled blockchain payment gateway.",
                    achievements: [
                      "Architected complete payment infrastructure enabling crypto-to-fiat transactions",
                      "Built merchant dashboard with payment link generation and invoice management",
                      "Developed secure user authentication and business verification system"
                    ],
                    icon: <Shield className="w-6 h-6" />
                  },
                  {
                    period: "Sep 2024 - Dec 2024",
                    title: "Python Backend Engineer",
                    company: "Venixs Inc",
                    description: "Led backend development initiatives focusing on payment systems and performance optimization.",
                    achievements: [
                      "Implemented robust recurring card charging system for subscription management",
                      "Developed comprehensive ticketing system for streamlined customer issue resolution",
                      "Optimized API performance through strategic caching and query improvements"
                    ],
                    icon: <Code2 className="w-6 h-6" />
                  },
                  {
                    period: "2022 - 2023",
                    title: "Independent Developer",
                    company: "Network Projects",
                    description: "Developed innovative solutions across fintech and healthcare sectors.",
                    achievements: [
                      "Built SafeHome, a comprehensive cooperative finance platform",
                      "Developed HealthPal, an AI-powered health assistance platform",
                      "Delivered multiple custom solutions through network referrals"
                    ],
                    icon: <Users className="w-6 h-6" />
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative group"
                  >


                    {/* Card */}
                    <motion.div
                      className="h-full flex flex-col lg:mt-8 relative group"
                    >
                      {/* Period Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20">
                          {exp.period}
                        </span>
                      </div>

                      {/* Title with Accent Line */}
                      <div className="mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                      </div>

                      {/* Company */}
                      <p className="text-blue-400 font-semibold mb-4 text-sm sm:text-base">{exp.company}</p>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base mb-4 leading-relaxed flex-grow">{exp.description}</p>

                      {/* Key Achievement */}
                      <div className="mt-auto">
                        <AchievementCycler achievements={exp.achievements} projectTitle={exp.title} />
                      </div>
                    </motion.div>

                    {/* Arrow for progression */}
                    {index < 3 && (
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 -right-3 lg:top-1/2 lg:right-0 lg:transform lg:translate-x-1/2 lg:-translate-y-1/2 text-green-400 hidden lg:block"
                      >
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/70">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                What People Say About My Work
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                Real feedback from people I&apos;ve had the pleasure of working with
              </p>
            </motion.div>

            {/* Mobile Horizontal Scroll Container */}
            <div className="relative">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                id="testimonials-scroll"
                className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 overflow-x-auto sm:overflow-visible scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[

                  {
                    quote: "Timmy stands out as the most dependable developer I've worked with over many years. Tech-savvy and always in tune with the latest trends, he consistently delivers outstanding results while going above and beyond to surpass expectations.",
                    author: "Igo Isaiah Ogbu",
                    position: "CEO, Virfars Solution",
                    linkedin: "https://www.linkedin.com/in/igoogbu/",
                    avatar: "/virfars.jpeg"
                  },

                  {
                    quote: "Timmy, as I fondly call him, is what I like to describe as a realistic cracked dev. He combines the grit and resourcefulness of a true 10x engineer with an unwavering ability to deliver, no matter how complex the system. He's built intricate architectures for me in weeks — work that usually takes months — all with a sharp eye for detail and rare commitment to quality.",
                    author: "Michael Jimoh",
                    position: "Founder, ChainPal",
                    linkedin: "https://www.linkedin.com/in/michael-jimoh-hack/",
                    avatar: "/chainpal.png"
                  },
                  {
                    quote: "Working with Timmy was an incredible experience. As a well-rounded full-stack developer, he brings a wealth of expertise to the table. He's also a pleasant person to work with.",
                    author: "Quwam Ogunlaja",
                    position: "Software Engineer",
                    github: "http://github.com/qwmhq",

                  },

                  // {
                  //   quote: "Timmy is a brilliant dev! I’m always impressed by his dedication and his ability to tackle complex challenges in short periods of time. He is a real asset to any team ",
                  //   author: "Adewale Fatoki",
                  //   position: "Software Engineer",
                  //   linkedin: "https://linkedin.com/in/adewaleftk",
                  // }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -8 }}
                    className="group relative h-full flex-shrink-0 w-80 sm:w-auto snap-center"
                  >
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-start mb-4">
                        <Quote className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed flex-grow font-serif italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-slate-700/30">
                        {testimonial.avatar ? (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-slate-700/50">
                            <Image
                              src={testimonial.avatar}
                              alt={`${testimonial.author}'s avatar`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center ring-2 ring-slate-700/50">
                            <span className="text-white font-bold text-sm sm:text-base">{testimonial.author.charAt(0)}</span>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-sm sm:text-base truncate">{testimonial.author}</h4>
                          <p className="text-slate-400 text-xs sm:text-sm truncate">{testimonial.position}</p>
                        </div>
                        {testimonial.linkedin && (
                          <motion.a
                            href={testimonial.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex-shrink-0"
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        )}

                        {testimonial.github && (
                          <motion.a
                            href={testimonial.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white hover:text-blue-300 transition-colors duration-200 flex-shrink-0"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll Controls - Mobile Only */}
              <div className="flex items-center justify-center space-x-4 mt-6 sm:hidden">
                <motion.button
                  onClick={() => {
                    const container = document.getElementById('testimonials-scroll');
                    if (container) {
                      container.scrollBy({ left: -300, behavior: 'smooth' });
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-slate-800/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 shadow-lg border border-slate-600/30 pointer-events-auto hover:bg-slate-700/60 hover:text-white/90 transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>

                {/* Scroll Indicators */}
                <div className="flex space-x-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-blue-400' : 'bg-slate-600'}`}
                      id={`indicator-${index}`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={() => {
                    const container = document.getElementById('testimonials-scroll');
                    if (container) {
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-slate-800/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 shadow-lg border border-slate-600/30 pointer-events-auto hover:bg-slate-700/60 hover:text-white/90 transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              {[
                {
                  number: "50+",
                  label: "Projects Shipped",
                  description: "Real products delivered end-to-end",
                  icon: <Target className="w-8 h-8" />
                },
                {
                  number: "30+",
                  label: "Clients Served",
                  description: "Across startups, teams, and solo founders",
                  icon: <Users className="w-8 h-8" />
                },
                {
                  number: "4+",
                  label: "Years of Experience",
                  description: "Hands-on engineering across web, AI, and blockchain",
                  icon: <Calendar className="w-8 h-8" />
                },
                {
                  number: "99%",
                  label: "Client Satisfaction",
                  description: "Repeat work and referrals are my baseline",
                  icon: <Award className="w-8 h-8" />
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group h-full"
                >
                  <div className="flex flex-col h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600/30 group-hover:border-slate-500/50 transition-all duration-300">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-blue-400 mb-3 sm:mb-4 flex justify-center flex-shrink-0"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="flex flex-col flex-grow">
                      <motion.h3
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2"
                      >
                        {stat.number}
                      </motion.h3>
                      <p className="text-slate-300 text-sm sm:text-base font-medium mb-2">{stat.label}</p>
                      <p className="text-slate-400 text-xs sm:text-sm">{stat.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
                </h2>
              </div>
              <p className="text-slate-300 text-base sm:text-lg">A selection of my recent work and key contributions</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 lg:space-y-12"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative overflow-hidden lg:order-1 p-4 sm:p-6 lg:p-8">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={project.image}
                          alt={project.title}
                          className="w-full rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>

                        {/* Status Badge */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-gradient-to-r ${project.statusColor} text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg`}
                          >
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{project.status}</span>
                          </motion.div>
                        </div>

                        {/* Project Status Badge */}
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center lg:order-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                          <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gradient-to-r ${project.statusColor}`}>
                            {project.icon}
                          </div>
                          <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                            {project.subtitle}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                          {project.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <div className="text-green-400 font-semibold text-sm sm:text-base mb-2"> Key Contributions:</div>
                          {project.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                              <span className="text-slate-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-slate-700/60 text-slate-200 text-xs sm:text-sm font-medium rounded-full border border-slate-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                          <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Live Demo</span>
                          </motion.a>
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 border border-slate-600 text-slate-300 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-200 text-sm sm:text-base"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>View Code</span>
                          </motion.a>
                          {project.links.case_study && (
                            <motion.a
                              href={project.links.case_study}
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 border border-slate-600 text-slate-300 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-200 text-sm sm:text-base"
                            >
                              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>Case Study</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`
            }}></div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-slate-900" />
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Got a project in mind?
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Let&apos;s build it together
                  </span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                  Whether it&apos;s a web app, AI tool, or blockchain project—I&apos;m here to help bring your ideas to life.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
                <motion.a
                  href="https://calendly.com/hey-builtbytim/15min"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book a Call</span>
                </motion.a>

                <motion.a
                  href="/resume-timileyin-pelumi.pdf"
                  download="Timileyin-Pelumi-Resume.pdf"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-slate-600 text-slate-300 rounded-xl font-semibold text-sm sm:text-base hover:bg-slate-800 hover:border-slate-500 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Download Resume</span>
                </motion.a>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-xs sm:max-w-sm mx-auto">
                {[
                  { icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Clean Code" },
                  { icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Fast Delivery" },
                  { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Secure Solutions" }
                ].map((feature, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-yellow-400 flex justify-center">{feature.icon}</div>
                    <p className="text-slate-400 text-xs sm:text-sm font-medium">{feature.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-900/80" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <h2 id="contact-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect?</span>
                </h2>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm sm:text-base font-medium">I usually respond within 24 hours.</span>
              </div>
              <p className="text-slate-300 text-base sm:text-lg">Ready to collaborate on your next project?</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            >
              <motion.div variants={slideInLeft} className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center space-x-2">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <span>Get In Touch</span>
                </h3>

                {[
                  { label: "Email", value: "hey@builtbytim.dev", icon: <Mail className="w-5 h-5" /> },
                  { label: "Location", value: "Lagos, Nigeria", icon: <MapPin className="w-5 h-5" /> },
                  { label: "Availability", value: "Open to remote opportunities", icon: <Clock className="w-5 h-5" /> }
                ].map((contact) => (
                  <motion.div
                    key={contact.label}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-200"
                  >
                    <div className="text-blue-400">{contact.icon}</div>
                    <div>
                      <span className="text-slate-400 text-xs sm:text-sm">{contact.label}</span>
                      <div className="text-white font-medium text-sm sm:text-base">{contact.value}</div>
                    </div>
                  </motion.div>
                ))}

                <div className="flex space-x-3 sm:space-x-4 pt-4 sm:pt-6">
                  {[
                    { name: 'GitHub', icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-gray-700 hover:to-gray-900', href: 'https://github.com/builtbytim' },
                    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-blue-600 hover:to-blue-800', href: 'https://linkedin.com/in/timileyinpelumi' },
                    { name: 'Twitter', icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-blue-400 hover:to-blue-600', href: 'https://twitter.com/built_by_tim' },
                    { name: 'Telegram', icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-blue-500 hover:to-cyan-500', href: 'https://t.me/builtbytim' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-700 ${social.color} text-white rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800`}
                      aria-label={`Connect with Timileyin on ${social.name}`}
                      title={`${social.name} Profile`}
                    >
                      <span aria-hidden="true">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={slideInRight}>
                <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600/50">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <span>Send a Message</span>
                  </h3>
                  <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .min(2, 'Name must be at least 2 characters')
                        .max(40, 'Name must be at most 40 characters')
                        .required('Name is required'),
                      email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required'),
                      message: Yup.string()
                        .min(10, 'Message must be at least 10 characters')
                        .max(1000, 'Message must be at most 1000 characters')
                        .required('Message is required'),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      try {
                        setFormError('');
                        const response = await fetch('https://promptsifter.onrender.com/users/portfolio/contact', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            name: values.name,
                            email: values.email,
                            message: values.message
                          }),
                        });

                        if (response.ok) {
                          setShowSuccessCard(true);
                          resetForm();
                          // Hide success card after 5 seconds
                          setTimeout(() => {
                            setShowSuccessCard(false);
                          }, 10000);
                        } else {
                          const errorData = await response.json();
                          setFormError(errorData.message || 'Failed to send message. Please try again.');
                        }
                      } catch (error) {
                        setFormError('Network error. Please check your connection and try again.');
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                    }) => (
                      <form className="space-y-4 sm:space-y-6" role="form" aria-label="Contact form" onSubmit={handleSubmit} noValidate>
                        <div>
                          <label htmlFor="contact-name" className="sr-only">Your Name</label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            aria-required="true"
                            className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/60 border ${errors.name && touched.name ? 'border-red-500' : 'border-slate-600'} rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base`}
                          />
                          {errors.name && touched.name && (
                            <div className="text-red-500 text-xs mt-1">{errors.name}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="sr-only">Your Email</label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            aria-required="true"
                            aria-describedby="email-help"
                            className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/60 border ${errors.email && touched.email ? 'border-red-500' : 'border-slate-600'} rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base`}
                          />
                          <span id="email-help" className="sr-only">Please enter a valid email address for correspondence</span>
                          {errors.email && touched.email && (
                            <div className="text-red-500 text-xs mt-1">{errors.email}</div>
                          )}
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="sr-only">Your Message</label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            aria-required="true"
                            aria-describedby="message-help"
                            className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/60 border ${errors.message && touched.message ? 'border-red-500' : 'border-slate-600'} rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none text-sm sm:text-base`}
                          />
                          <span id="message-help" className="sr-only">Describe your project or inquiry</span>
                          {errors.message && touched.message && (
                            <div className="text-red-500 text-xs mt-1">{errors.message}</div>
                          )}
                        </div>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center space-x-2 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
                          aria-label="Submit contact form"
                        >
                          <Rocket className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </motion.button>
                      </form>
                    )}
                  </Formik>

                  {/* Error Message */}
                  {formError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2"
                    >
                      <X className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm">{formError}</span>
                    </motion.div>
                  )}

                  {/* Success Card */}
                  {showSuccessCard && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                      onClick={() => setShowSuccessCard(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-800 border border-slate-600 rounded-xl p-6 sm:p-8 max-w-md w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="text-center space-y-4">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"
                          >
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                            <p className="text-slate-300 text-sm">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowSuccessCard(false)}
                            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-200"
                          >
                            Close
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-slate-700/50 bg-slate-900/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 flex items-center justify-center lg:justify-start space-x-1 sm:space-x-2 text-xs sm:text-sm"
            >
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4 hidden md:inline-block self-center" />
              <span>© {new Date().getFullYear()} Timileyin Pelumi. Built with Next.js, Tailwind CSS, and Framer Motion.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-1 sm:space-x-2 text-slate-400 text-xs sm:text-sm"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="text-red-400"
              >
                ❤️
              </motion.div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;