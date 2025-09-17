import { motion, useScroll, useTransform } from 'motion/react';
import { Globe } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Create wiggle effect based on scroll
  const wiggleX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 5, -5, 10]);
  const wiggleRotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, -1, 2]);
  const wiggleY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -2, 2, -3]);
  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Name */}
        <div className="relative inline-block">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* First line: HERALD PANJI */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              HERALD PANJI
            </motion.h1>
            
            {/* Second line: DWILAKSONO */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              DWILAKSONO
            </motion.h1>
          </motion.div>
        </div>

        {/* Subtitle with Wiggle Effect */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mt-8 tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            x: wiggleX,
            y: wiggleY,
            rotate: wiggleRotate,
          }}
        >
          FULLSTACK DEVELOPER
        </motion.p>
      </div>

      {/* Bottom Left: Location */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center space-x-2 text-gray-400"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <Globe size={16} />
        <span className="text-sm">Located in Depok</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}