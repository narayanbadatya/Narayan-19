"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  // {
  //   logo: "/matchwize.svg",
  //   title: "Matchwize",
  //   description:
  //     "matchwize analyzes your resume against job descriptions to give you a match score and actionable suggestions to improve your chances.",
  //   image: "/matchwize.webp",
  //   tags: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "Gemini API"],
  //   demoUrl: "https://matchwize.com/",
  //   githubUrl: "",
  //   features: [
  //     "Gemini API integration for resume analysis",
  //     "Supabase for data storage",
  //   ],
  // },

  {
    logo: "solar-system.png",
    title: "Solar System",
    description:
      "An interactive, visually engaging solar system experience built with smooth 3D visuals and modern design elements.Inspired by space, the site offers a modern and immersive experience.",
    image: "/solar-system.png",
    tags: ["HTML", "CSS", "JavaScript","Figma","Locofy.ai"],
    demoUrl: "https://solar-system-by-narayan.vercel.app/",
    githubUrl: "https://github.com/narayanbadatya/SolarSystem",
    features: [
      "Interactive 3D View",
      "Full Responsive Layout",
      "Smooth Blend and Overlay Effects",
      "Space-inpired Color Theme",
      "beauiful Gallery of the Solar System",
    ],
  },
  {
    logo: "",
    title: "Gastronomic Restaurant",
    description:
     "A mobile-friendly, high-quality animated homepage with smooth transitions and a classic design. Built using HTML, CSS, and JavaScript, and designed in Figma and Canva for a clean, responsive layout." ,
    image: "/rest-web.webp",
    tags: ["HTML", "CSS", "JavaScript","Figma","canva"],
    demoUrl: "res-web-by.vercel.app",
    githubUrl: "https://github.com/narayanbadatya/restaurant-website",
    features: [
      "Animated homepage using js and Smooth transitions",
      "Classic design moblie friendly",
      "High-quality layout",
      "Designed in Figma & Canva",
      "Clean and responsive design built with html,css,js"
    ]
  },
  {
    logo: "/ashish.png",
    title: "Early Works",
    description:
      "Designed and developed using Framer Motion Tailwind CSS, React.js. Features include smooth animations, responsive design, 3D tilt effects, image galleries and a custom loading screen.",
    image: "/ashish.png",
    tags: ["React.js", "Tailwind CSS","Email.js","Framer Motion","GSAP","swiper" ,"lucide",],
    demoUrl: "https://ashish-14.vercel.app/",
    githubUrl: "https://github.com/narayanbadatya/ashu",
    features: [
      "Smooth scroll animations and transitions",
      "Fully responsive design for all screen sizes",
      "Includes image and video galleries with preview",
      "3D tilt effect and custom loading screens",
      "Admin dashboard for content management",
    ],
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