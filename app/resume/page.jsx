"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about = {
  title: "About Me",
  description: "A passionate software engineer shaping the world through Web3.",
  info: [
    { fieldName: "Name", fieldValue: "Cyprian Ocharo" },
    { fieldName: "Phone", fieldValue: "(+254) 788 523 896" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Reddit", fieldValue: "_ocharo" },
    { fieldName: "Nationality", fieldValue: "Kenyan" },
    { fieldName: "Email", fieldValue: "ocharo.dev@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Swahili" },
  ],
};

// Experience data
const experience = {
  title: "My Experience",
  description: "Software engineering experience across multiple roles and domains.",
  items: [
    { company: "Tech254", position: "SEO Manager", duration: "3 months" },
    { company: "KenPro Kenya", position: "Back-End Developer (Intern)", duration: "3 months" },
    { company: "E-commerce Startup", position: "Freelance Web Developer", duration: "4 months" },
    { company: "Clemo Arts", position: "Graphic Designer", duration: "2022 - 2023" },
    { company: "Digital XP", position: "Freelance UI/UX Designer", duration: "5 months" },
    { company: "Stealth Devs", position: "Freelance Web Developer", duration: "7 months" },
  ],
};

// Education data
const education = {
  title: "My Education",
  description: "Formal and professional training in software engineering and design.",
  items: [
    { institution: "Coursera / Udemy", degree: "Full Stack Web Development Certification", duration: "2023 - 2025" },
    { institution: "Cisco Academy", degree: "Front-End Track", duration: "2023 - 2024" },
    { institution: "IBM", degree: "Search Engine Optimization", duration: "2024" },
    { institution: "Canva Design School", degree: "Graphic Design Certification", duration: "2025" },
    { institution: "Designlab", degree: "UI/UX Design Certification", duration: "2025" },
    { institution: "Multimedia University of Kenya", degree: "BSc in Information Technology", duration: "2023 - Present" },
  ],
};

// Skills data
const skills = {
  title: "My Skills",
  description: "These are the core skills I possess in software engineering.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{experience.title}</h2>
                <p className="text-gray-500 mb-6">{experience.description}</p>
                <ul className="space-y-4">
                  {experience.items.map((item, i) => (
                    <li key={i} className="border-b border-gray-700 pb-2">
                      <p className="font-medium">{item.position}</p>
                      <p className="text-sm text-gray-400">{item.company}</p>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{education.title}</h2>
                <p className="text-gray-500 mb-6">{education.description}</p>
                <ul className="space-y-4">
                  {education.items.map((item, i) => (
                    <li key={i} className="border-b border-gray-700 pb-2">
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-sm text-gray-400">{item.institution}</p>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{skills.title}</h2>
                <p className="text-gray-500 mb-6">{skills.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.skillList.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-4xl mb-2 text-primary">{skill.icon}</div>
                      <p className="text-sm capitalize">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <ScrollArea className="h-[60vh] pr-4">
                <h2 className="text-2xl font-semibold mb-4">{about.title}</h2>
                <p className="text-gray-500 mb-6">{about.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {about.info.map((item, i) => (
                    <li key={i} className="border-b border-gray-700 pb-2">
                      <p className="font-medium">{item.fieldName}</p>
                      <p className="text-sm text-gray-400">{item.fieldValue}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
