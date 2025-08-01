"use client"

import { motion } from "framer-motion"
import { FaVuejs, FaReact, FaJs, FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaPhp, FaBug } from "react-icons/fa";
import { SiExpress, SiMysql, SiMongodb, SiVite, SiWebpack } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { MdOutlineChat } from "react-icons/md";
import { PiTreeStructureBold } from "react-icons/pi";
const skillCategories = [
  {
    title: "Front End",
    skills: [
      { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500" /> }, // For tldraw integration
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Pinia", icon: <PiTreeStructureBold className="text-yellow-400" /> }
    ],
  },
  {
    title: "Back End",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL", icon: <GrMysql className="text-gray-600" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Figma", icon: <IoLogoFigma className="text-purple-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-black dark:text-white" /> },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "API Development", icon: <BiCodeBlock className="text-gray-700 dark:text-white" /> },
      { name: "Real-time Apps", icon: <MdOutlineChat className="text-green-500" /> },
      { name: "Penetration Testing (HackerOne)", icon: <FaBug className="text-red-600" /> },
    ],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Tools and technologies I've used across my projects and work experience.
        </motion.p>

        <motion.div 
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4"
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                  >
                    <motion.div 
                      className={`
                        w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20
                      `}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span 
                      className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}