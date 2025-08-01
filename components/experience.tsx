"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Front End Web Developer",
    company: "Reachabl",
    period: "06/2024 - 04/2025",
    responsibilities: [
      "Developed and optimized a dynamic user interface using Vue.js and Pinia",
      "Integrated backend APIs to ensure seamless data flow and functionality",
      "Created a microfrontend with React and tldraw for whiteboard functionality, bundled with Webpack for integration into the Vue.js project",
      "Enhanced user experience through efficient state management and responsive design"
    ],
    skills: ["Vue.js","ReactJs", "JavaScript", "TailwindCSS", "Pinia"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Capsule Hotels Blog",
    period: "05/2024 - 06/2024",
    responsibilities: [
      "Implemented the front end using HTML5, CSS3, and jQuery to create a responsive and visually appealing UI",
      "Developed custom WordPress templates and integrated them with the CMS using PHP",
    ],
    skills: ["PHP", "HTML5", "CSS3", "Wordpress","jQuery", "Responsive Design"],
  },
  {
    title: "Full Stack Web Developer",
    company: "NovinaNet",
    period: "02/2024 - 05/2024",
    responsibilities: [
      "Designed and developed a dynamic marketplace platform using MongoDB, ReactJS, and NodeJS, following the MVC architecture",
      "Implemented API integration for seamless sales management by sellers, demonstrating strong back-end and front-end proficiency",
      "Enhanced application security by introducing robust authentication measures, ensuring secure access control"
    ],
    skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB","API integration"],
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}