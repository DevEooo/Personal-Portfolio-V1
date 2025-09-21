import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { TechIcon } from './TechIcons';
import { Code, Layers, FolderOpen, Calendar } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Intermediate", proficiency: 80 },
        { name: "JavaScript", level: "Advanced", proficiency: 85 },
        { name: "HTML", level: "Advanced", proficiency: 95 },
        { name: "Tailwind", level: "Intermediate", proficiency: 78 },
        { name: "Bootstrap", level: "Intermediate", proficiency: 78 },
        { name: "TypeScript", level: "Learning", proficiency: 48 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: "Advanced", proficiency: 85 },
        { name: "PHP", level: "Intermediate", proficiency: 80 },
        { name: "Java", level: "Learning", proficiency: 50 },
        { name: "Kotlin", level: "Learning", proficiency: 45 },
        { name: "JSON", level: "Learning", proficiency: 55 },
        { name: "MySQL", level: "Intermediate", proficiency: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: "Learning", proficiency: 50 },
        { name: "Firebase", level: "Learning", proficiency: 55 },
        { name: "Github", level: "Advanced", proficiency: 85 },
        { name: "API KEY", level: "Intermediate", proficiency: 75 },
        { name: "Android Studio", level: "Intermediate", proficiency: 75 },
        { name: "VS Code", level: "Advanced", proficiency: 90 }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-green-600/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-blue-600/20 text-blue-400 border-blue-500/30";
      case "Learning": return "bg-orange-600/20 text-orange-400 border-orange-500/30";
      default: return "bg-gray-600/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatIcon = (label: string) => {
    switch (label) {
      case "Programming Languages": return <Code size={24} className="text-purple-400" />;
      case "Frameworks": return <Layers size={24} className="text-purple-400" />;
      case "Projects": return <FolderOpen size={24} className="text-purple-400" />;
      case "Years of Experience": return <Calendar size={24} className="text-purple-400" />;
      default: return <div className="w-6 h-6 bg-purple-400 rounded-full"></div>;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Techstack</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <TechIcon name={skill.name} size={32} />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs px-2 py-1 ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Proficiency Percentage */}
                    <div className="text-right mt-1">
                      <motion.span
                        className="text-gray-400 text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                        viewport={{ once: true }}
                      >
                        {skill.proficiency}%
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Programming Languages", value: "8+", icon: "Code" },
            { label: "Frameworks", value: "3", icon: "Layers" },
            { label: "Projects", value: "10+", icon: "FolderOpen" },
            { label: "Years of Experience", value: "2", icon: "Calendar" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                {getStatIcon(stat.label)}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Path */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Kotlin', 'Firebase', 'Laravel', 'Python', 'Automation'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
