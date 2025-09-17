import { motion } from 'motion/react';
import { Target, Zap, Laptop, Code, Lightbulb, Users } from 'lucide-react';

export function About() {
  const highlights = [
    { icon: Target, text: "Goal-oriented", description: "Focused on delivering results" },
    { icon: Zap, text: "Fast learner", description: "Quick to adapt new technologies" },
    { icon: Laptop, text: "Problem solver", description: "Creative solutions to complex challenges" },
    { icon: Code, text: "Clean coder", description: "Writing maintainable and scalable code" },
    { icon: Lightbulb, text: "Innovative", description: "Always exploring new possibilities" },
    { icon: Users, text: "Team player", description: "Collaborative and communicative" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/resources/herald.jpg"
                  alt="Herald Panji Dwilaksono"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative gradient overlay */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </motion.div>

          {/* Center: Introduction */}
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel ex nostrum provident architecto consequuntur! Sequi sint dolores sunt natus amet aut! Fugiat quae maxime voluptates tempore atque, suscipit totam?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate nulla, aut quod nemo dicta ad ea neque ullam incidunt recusandae dolorem odit quisquam fugit enim eligendi sed minus facilis amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid et ducimus, eveniet recusandae sit hic animi nemo tempora commodi. Perferendis.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {['React', 'Java', 'Tailwind', 'Python', 'JavaScript', 'More...'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>


        </div>

        {/* Highlights Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.text}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors duration-300">
                      <highlight.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{highlight.text}</h3>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}