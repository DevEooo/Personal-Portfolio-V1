import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Logo and Desc */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-white">rald.</div>
              <p className="text-gray-400 leading-relaxed">
                Crafting digital experiences through code. Passionate about creating 
                innovative solutions that make a difference.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/DevEooo', label: 'GitHub', target: '_blank', rel: 'noopener noreferrer' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/herald-panji-dwilaksono-515444346/', label: 'LinkedIn', target: '_blank', rel: 'noopener noreferrer' },
                  { icon: Instagram, href: 'https://www.instagram.com/rlds__/', label: 'Instagram', target: '_blank', rel: 'noopener noreferrer' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={social.rel}
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'Profile', id: 'about' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Skills', id: 'skills' }
                ].map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="text-right"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-3 text-gray-400">
                <motion.div
                  whileHover={{ x: -5 }}
                  className="transition-all duration-300"
                >
                  📍 Depok, Indonesia
                </motion.div>
                <motion.div
                  whileHover={{ x: -5 }}
                  className="transition-all duration-300"
                >
                  📧 heralddpanji@gmail.com
                </motion.div>
                <motion.div
                  whileHover={{ x: -5 }}
                  className="transition-all duration-300"
                >
                  🌐 Available for work and internship
                </motion.div>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="mt-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <ArrowUp size={20} className="group-hover:animate-bounce" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                © {currentYear} Herald Dwilaksono. All Rights Reserved.
              </motion.p>
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </footer>
  );
}