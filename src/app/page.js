import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send } from "some-icon-library";

function Page() {
  const socialMediaLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />, 
      color: 'hover:from-gray-700 hover:to-gray-900',
      href: 'https://github.com/builtbytim'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />, 
      color: 'hover:from-blue-600 hover:to-blue-800',
      href: 'https://linkedin.com/in/timileyinpelumi'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />, 
      color: 'hover:from-blue-400 hover:to-blue-600',
      href: 'https://twitter.com/builtbytim'
    },
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />, 
      color: 'hover:from-blue-500 hover:to-cyan-500',
      href: 'https://t.me/builtbytim'
    }
  ];

  return (
    <div className="social-links">
      {socialMediaLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 bg-slate-700 ${social.color} text-white rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-lg`}
          aria-label={`Connect with Timileyin on ${social.name}`}
          title={`${social.name} Profile`}
        >
          <span aria-hidden="true">{social.icon}</span>
        </motion.a>
      ))}
    </div>
  );
}

export default Page;