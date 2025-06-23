"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full stack Developer Intern",
    company: "",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Worked on a project called Solar System",
      "Developed full stack web apps using React, Node.js and MongoDB. Built responsive UIs, connected APIs",
      "Focused on clean UI, animations, and user-friendly design",
    ],
    skills: ["ReactJs", "JavaScript", "TailwindCSS"," MongoDB"],
  },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2024 – Jun 2024",
  //   responsibilities: [
  //     "Developed a CMS dashboard for eDeskshaam, enhancing UI/UX and improving user interaction",
  //     "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
  {
    title: "Graphic Design intern",
    company: "",
    period: "Mar 2025 - present ",
    responsibilities: [
      "Worked on designing posters, social media graphics, thumbnails,and banners using Canva and Photoshop",
      "Created creative and clean designs for events, promotions, and online content",
      "Focused on color combinations, alignment, and visual appeal while meeting deadlines",
    ],
    skills: ["photoshop", "Canva","Figma", "UI/UX", "Responsive Design"],
  },
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