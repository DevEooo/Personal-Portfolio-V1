import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './ImageFallback/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "SDN Ponter 3 - Elementary School Website",
      description: "A collaborated elementary school project with local elementary school, Integrated dynamicly using real data.",
      mockupImage: "/resources/mockups/Ponter3.png",
      technologies: ["HTML", "PHP", "CSS", "JavaScript"],
      liveUrl: "https://deveooo.github.io/SDN-Pondok-Terong-3/",
      githubUrl: "https://github.com/DevEooo/SDN-Pondok-Terong-3"
    },
    {
      id: 2,
      title: "WinterAI - Telegram Chatbot",
      description: "WinterAI is a personal AI chatbot powered by Gemini LLM for Telegram, designed to be a calm and intelligent companion that representing reserved personality.",
      mockupImage: "/resources/mockups/WinterAI.png",
      technologies: ["Python", "Telegram API", "Gemini", "Telegram API Key"],
      liveUrl: "#",
      githubUrl: "https://github.com/DevEooo/WinterAI-Telegram-Chatbot"
    },
    {
      id: 3,
      title: "Housing Property",
      description: "A digital housing property website that streamlines property listing, tenant applications, and management for landlords, agents, and renters.",
      mockupImage: "/resources/mockups/HousingProperty.png",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/DevEooo/Housing-Property"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800">
                  <ImageWithFallback
                    src={project.mockupImage}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>View Project</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
