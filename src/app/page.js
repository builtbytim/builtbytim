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
  ArrowUpRight
} from 'lucide-react';

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

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
        { name: "Ethereum", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ethereum/ethereum-original.svg" },
        { name: "Web3.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg" },
        { name: "MetaMask", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" },
        { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ethereum/ethereum-original.svg" }
      ]
    },
    { 
      category: "AI/ML", 
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-red-400",
      techs: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "OpenAI", logo: "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" }
      ]
    },
    { 
      category: "DevOps & Tools", 
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-400",
      techs: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" }
      ]
    }
  ];

  const projects = [
    {
      title: "DeFi Trading Platform",
      subtitle: "Decentralized Finance Revolution",
      description: "A comprehensive DeFi platform featuring automated market making, yield farming, and cross-chain interoperability. Built with cutting-edge smart contracts and real-time market analytics.",
      image: "https://placehold.co/600x400/6366f1/ffffff?text=DeFi+Platform",
      tags: ["React", "Solidity", "Web3", "Python", "PostgreSQL"],
      status: "Featured",
      statusColor: "from-yellow-400 to-orange-500",
      metrics: { users: "10K+", tvl: "$2.5M", transactions: "500K+" },
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "AI Content Studio",
      subtitle: "Next-Gen Content Creation",
      description: "Advanced AI-powered SaaS platform for automated content generation, featuring custom model training, multi-language support, and enterprise-grade API integration.",
      image: "https://placehold.co/600x400/10b981/ffffff?text=AI+Studio",
      tags: ["Next.js", "Python", "OpenAI", "TensorFlow", "Redis"],
      status: "Live",
      statusColor: "from-green-400 to-emerald-500",
      metrics: { users: "5K+", content: "1M+", accuracy: "95%" },
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cloud-Native Architecture",
      subtitle: "Scalable Microservices Platform",
      description: "Enterprise-grade e-commerce backend with microservices architecture, event-driven communication, and auto-scaling capabilities handling millions of requests daily.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Cloud+Platform",
      tags: ["Python", "Docker", "Kubernetes", "RabbitMQ", "Redis"],
      status: "Open Source",
      statusColor: "from-blue-400 to-cyan-500",
      metrics: { requests: "10M+", uptime: "99.9%", services: "25+" },
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed w-3 h-3 pointer-events-none z-50 mix-blend-difference"
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
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              <div className="relative">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 100 100" 
                  className="drop-shadow-lg"
                >
                  {/* Outer Ring */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="url(#gradient1)" 
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  
                  {/* Inner Circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="35" 
                    fill="url(#gradient2)" 
                    className="opacity-90"
                  />
                  
                  {/* Letter 'B' */}
                  <path 
                    d="M35 25 L35 75 L55 75 Q65 75 65 65 Q65 55 58 50 Q65 45 65 35 Q65 25 55 25 Z M42 32 L55 32 Q58 32 58 35 Q58 38 55 38 L42 38 Z M42 45 L55 45 Q58 45 58 50 Q58 55 55 55 L42 55 Z" 
                    fill="white" 
                    className="font-bold"
                  />
                  
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-none">
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
                { name: 'About', icon: <Globe className="w-4 h-4" aria-hidden="true" /> },
                { name: 'Skills', icon: <Zap className="w-4 h-4" aria-hidden="true" /> },
                { name: 'Education', icon: <Trophy className="w-4 h-4" aria-hidden="true" /> },
                { name: 'Experience', icon: <Briefcase className="w-4 h-4" aria-hidden="true" /> },
                { name: 'Projects', icon: <Rocket className="w-4 h-4" aria-hidden="true" /> },
                { name: 'Contact', icon: <Mail className="w-4 h-4" aria-hidden="true" /> }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200 text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
                  role="menuitem"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.icon}
                  <span className="hidden xl:block">{item.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="text-slate-300 hover:text-white transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md"
                onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 80, behavior: 'smooth' })}
                aria-label="Contact Timileyin"
                title="Jump to contact section"
              >
                <Mail className="w-6 h-6" aria-hidden="true" />
              </motion.button>
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
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 lg:py-32 overflow-hidden" aria-labelledby="hero-heading">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
        
        {/* Animated Geometric Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Particle Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-2 mb-4 justify-center lg:justify-start"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-300 text-sm sm:text-base">Available for remote opportunities</span>
            </motion.div>
            
            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              <span className="text-white block mb-1">Hi, I&apos;m</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mb-2">
                Timileyin
              </span>
              <span className="text-white block text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium">
                Building the Future, One Product at a Time
              </span>
            </motion.h1>
            
            <motion.div
              variants={fadeInUp}
              className="mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
                I&apos;m a full-stack developer turning bold ideas into real, usable tools — from backend systems to sleek user experiences.
              </p>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4">
                Focused on shipping clean web apps, AI-powered tools, and blockchain projects — all built from scratch.
              </p>
              
              <p className="text-slate-300 text-sm sm:text-base italic">
                Based in Lagos. Building for the world.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Navigate to featured projects section"
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span>View My Work</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-slate-400 text-slate-300 rounded-full font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Navigate to contact section"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto">
              {/* Multiple rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 opacity-30 blur-sm"
                style={{ background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 opacity-25 blur-sm"
                style={{ background: "conic-gradient(from 180deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)" }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 via-blue-400 to-cyan-400 opacity-20 blur-sm"
                style={{ background: "conic-gradient(from 90deg, #8b5cf6, #ec4899, #3b82f6, #06b6d4, #8b5cf6)" }}
              />
              
              {/* Main profile container */}
              <motion.div 
                className="absolute inset-8 sm:inset-12 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center border-4 border-slate-600 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <Image
                  src="https://placehold.co/400x400/1e293b/64748b?text=TIM"
                  alt="Professional headshot of Timileyin Pelumi, Full Stack Developer"
                  width={400}
                  height={400}
                  className="relative z-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-slate-500"
                  priority
                />
              </motion.div>
              
              {/* Enhanced floating icons with orbital motion */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-300"
              >
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-400/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center shadow-lg border-2 border-purple-300"
              >
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-purple-400/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: 360,
                  x: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute top-1/2 -right-2 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-red-400 rounded-full flex items-center justify-center shadow-lg border-2 border-pink-300"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-pink-400/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                />
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  x: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute top-1/2 -left-2 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg border-2 border-green-300"
              >
                <Server className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400/50"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Elegant scroll indicator - Hidden on Mobile */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-400 text-sm tracking-widest uppercase"
          >
            Scroll to Explore
          </motion.div>
          <motion.div 
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <motion.div variants={slideInLeft} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Image
                src="https://placehold.co/500x400/374151/9ca3af?text=Coding+Setup"
                alt="Modern software development workspace featuring multiple monitors with code editors, development tools, and a clean desk setup representing Timileyin's work environment"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-2xl border border-slate-700"
              />
            </motion.div>

            <motion.div variants={slideInRight} className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tim</span>
                </h2>
              </div>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I&apos;m Timileyin Pelumi, a product-minded software engineer based in Nigeria with a passion for 
                building scalable, high-performance applications. I specialize in full-stack development, 
                artificial intelligence, and blockchain technologies, with a focus on creating solutions 
                that drive business value and user engagement.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                With expertise spanning Python, JavaScript, and modern web frameworks, I architect and develop 
                end-to-end solutions from database design to user interface. I have a strong foundation in 
                computer engineering and extensive experience in building secure, maintainable systems that 
                scale efficiently.
              </p>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I&apos;m actively seeking remote opportunities where I can contribute to innovative projects, 
                collaborate with distributed teams, and continue growing as a technology leader. My approach 
                combines technical excellence with business acumen to deliver solutions that matter.
              </p>

              <motion.a
                href="/resume-timileyin-pelumi.pdf"
                download="Timileyin-Pelumi-Resume.pdf"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold cursor-pointer text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-16">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="bg-slate-900 p-4 rounded-full"
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-800/50" aria-labelledby="skills-heading">
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
      <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
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
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
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
            <p className="text-slate-300 text-base sm:text-lg">Building impactful solutions across various domains</p>
          </motion.div>

          <div className="relative hidden lg:block">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400"></div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {[
                {
                  period: "2023 - Present",
                  title: "Senior Full Stack Developer",
                  company: "Freelance & Remote Projects",
                  description: "Leading development of enterprise-grade applications using modern tech stacks. Specialized in DeFi platforms, AI-powered SaaS solutions, and scalable web applications.",
                  achievements: ["Built 3 major DeFi platforms with $5M+ TVL", "Deployed 15+ production applications", "Mentored 5+ junior developers"],
                  side: "right"
                },
                {
                  period: "2022 - 2023",
                  title: "Blockchain Developer",
                  company: "Web3 Startup",
                  description: "Developed smart contracts and DeFi protocols. Implemented complex tokenomics and automated market making algorithms.",
                  achievements: ["Deployed 25+ smart contracts", "Saved $50K+ in gas optimization", "Built cross-chain bridge infrastructure"],
                  side: "left"
                },
                {
                  period: "2021 - 2022",
                  title: "Full Stack Developer",
                  company: "Tech Consulting",
                  description: "Created end-to-end solutions for various clients including e-commerce platforms, management systems, and data analytics dashboards.",
                  achievements: ["Delivered 20+ client projects", "Achieved 99.9% uptime record", "Increased client efficiency by 40%"],
                  side: "right"
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  variants={slideInFromBottom}
                  className={`flex items-center ${exp.side === 'left' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-1/2 ${exp.side === 'left' ? 'pl-8' : 'pr-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-600/30 shadow-xl"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{exp.company}</p>
                      <p className="text-slate-300 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-slate-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Node */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-slate-900 shadow-lg"
                  />
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Experience Layout */}
          <div className="lg:hidden space-y-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  period: "2023 - Present",
                  title: "Senior Full Stack Developer",
                  company: "Freelance & Remote Projects",
                  description: "Leading development of enterprise-grade applications using modern tech stacks. Specialized in DeFi platforms, AI-powered SaaS solutions, and scalable web applications.",
                  achievements: ["Built 3 major DeFi platforms with $5M+ TVL", "Deployed 15+ production applications", "Mentored 5+ junior developers"]
                },
                {
                  period: "2022 - 2023",
                  title: "Blockchain Developer",
                  company: "Web3 Startup",
                  description: "Developed smart contracts and DeFi protocols. Implemented complex tokenomics and automated market making algorithms.",
                  achievements: ["Deployed 25+ smart contracts", "Saved $50K+ in gas optimization", "Built cross-chain bridge infrastructure"]
                },
                {
                  period: "2021 - 2022",
                  title: "Full Stack Developer",
                  company: "Tech Consulting",
                  description: "Created end-to-end solutions for various clients including e-commerce platforms, management systems, and data analytics dashboards.",
                  achievements: ["Delivered 20+ client projects", "Achieved 99.9% uptime record", "Increased client efficiency by 40%"]
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  variants={slideInFromBottom}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-slate-600/30 shadow-xl"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      <span className="text-green-400 font-semibold text-sm sm:text-base">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold mb-3 text-sm sm:text-base">{exp.company}</p>
                    <p className="text-slate-300 mb-4 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mt-2"></div>
                          <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
              </h2>
            </div>
            <p className="text-slate-300 text-base sm:text-lg">What clients say about working with me</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                quote: "Timileyin delivered an exceptional DeFi platform that exceeded our expectations. His technical expertise and attention to detail are outstanding.",
                author: "Sarah Chen",
                position: "CTO, DeFi Startup",
                rating: 5
              },
              {
                quote: "Working with Tim was a game-changer for our project. He delivered a scalable AI solution that transformed our business operations.",
                author: "Michael Rodriguez",
                position: "Product Manager, Tech Corp",
                rating: 5
              },
              {
                quote: "Professional, reliable, and incredibly skilled. Tim's work on our e-commerce platform resulted in a 300% increase in conversions.",
                author: "Emily Johnson",
                position: "Founder, E-commerce Brand",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3 sm:mb-4 opacity-50" />
                  
                  <p className="text-slate-300 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.author}</h4>
                      <p className="text-slate-400 text-xs sm:text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {[
              { number: "50+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
              { number: "30+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
              { number: "3+", label: "Years Experience", icon: <Calendar className="w-8 h-8" /> },
              { number: "99%", label: "Client Satisfaction", icon: <Award className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600/30 group-hover:border-slate-500/50 transition-all duration-300">
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-blue-400 mb-3 sm:mb-4 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-slate-300 text-xs sm:text-sm lg:text-base text-center">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
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
                    <div className="relative overflow-hidden lg:order-1">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      
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

                      {/* Metrics */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-6 lg:right-6">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center bg-slate-900/60 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3">
                              <div className="text-white font-bold text-sm sm:text-base lg:text-lg">{value}</div>
                              <div className="text-slate-300 text-xs uppercase tracking-wider">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
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
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base"
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Live Demo</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center space-x-2 py-3 sm:py-4 border border-slate-600 text-slate-300 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-200 text-sm sm:text-base"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>View Code</span>
                        </motion.button>
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              initial={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-400" />
              </motion.div>
            </div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              Ready to Build Something
              <motion.span 
                className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Amazing Together?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I&apos;m always excited to work on innovative projects that push boundaries. 
              Let&apos;s collaborate and create something extraordinary.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Let&apos;s Talk</span>
              </motion.a>
              
              <motion.a
                href="/resume-timileyin-pelumi.pdf"
                download="Timileyin-Pelumi-Resume.pdf"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 max-w-sm sm:max-w-md mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, label: "Clean Code" },
                { icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, label: "Fast Delivery" },
                { icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />, label: "Secure Solutions" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center space-y-2"
                >
                  <div className="text-yellow-400 flex justify-center">{feature.icon}</div>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium">{feature.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-800/50" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h2 id="contact-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Let&apos;s <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
              </h2>
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
                  { name: 'GitHub', icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-gray-700 hover:to-gray-900' },
                  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-blue-600 hover:to-blue-800' },
                  { name: 'Twitter', icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-blue-400 hover:to-blue-600' },
                  { name: 'Telegram', icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />, color: 'hover:from-blue-500 hover:to-cyan-500' }
                ].map((social) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-700 ${social.color} text-white rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800`}
                    aria-label={`Connect with Timileyin on ${social.name}`}
                    title={`${social.name} Profile`}
                  >
                    <span aria-hidden="true">{social.icon}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight}>
              <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600/50">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  <span>Send a Message</span>
                </h3>
                
                <form className="space-y-4 sm:space-y-6" role="form" aria-label="Contact form">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      aria-required="true"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/60 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      aria-required="true"
                      aria-describedby="email-help"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/60 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-sm sm:text-base"
                    />
                    <span id="email-help" className="sr-only">Please enter a valid email address for correspondence</span>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      required
                      aria-required="true"
                      aria-describedby="message-help"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-slate-800/60 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none text-sm sm:text-base"
                    />
                    <span id="message-help" className="sr-only">Describe your project or inquiry</span>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center space-x-2 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                    aria-label="Submit contact form"
                  >
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 flex items-center justify-center lg:justify-start space-x-1 sm:space-x-2 text-xs sm:text-sm"
            >
              <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
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