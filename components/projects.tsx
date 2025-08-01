"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Merch Website",
    description:
      "A responsive merchandise and clothing website built using HTML5, CSS3, and jQuery. It features a clean layout, product showcases, and interactive elements like sliders and modals, all without using modern frameworks.",
    image: "/merch-site.png",
    tags: ["HTML5", "CSS3", "jQuery", "Responsive Design"],
    demoUrl: "https://merchwebsite.netlify.app/",
    githubUrl: "https://github.com/ZiedSebai/MerchWebsite",
  },
  {
    title: "Vue Chess Game",
    description:
      "A chess game built with Vue using the Composition API, featuring move highlighting, checkmate detection, and turn-based play. Designed with a modular, scalable codebase and plans for future enhancements like en passant and pawn promotion.",
    image: "/chessgame.png",
    tags: ["Vue.js", "CSS3","Composition API"],
    demoUrl: "https://chessvuegame.netlify.app/",
    githubUrl: "https://github.com/ZiedSebai/vue-chess-game",
  },
  {
    title: "Real-Time Random Chat Web Application",
    description:
      "Built a real-time random chat app with Node.js, Express, and Socket.io, featuring user matching based on shared interests and reliable socket communication.",
    image: "/randomchat.png",
    tags: ["Node.js", "Express.js","Socket.io","HTML5","CSS3"],
    demoUrl: "https://github.com/ZiedSebai/RandomChat",
    githubUrl: "https://github.com/ZiedSebai/RandomChat",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                  { project.features?
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                  : ""}
                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}