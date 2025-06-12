"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Mail, Github, MapPin, Phone, Calendar, ExternalLink } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SimpleBackground } from "@/components/simple-background"
import { OptimizedShootingStars } from "@/components/optimized-shooting-stars"

export default function ResumePage() {
  const skills = {
    blockchain: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat", "Truffle"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS", "Vercel", "IPFS", "MetaMask", "OpenZeppelin"],
  }

  const experience = [
    {
      title: "Senior Blockchain Developer",
      company: "CryptoTech Solutions",
      period: "2022 - Present",
      location: "Remote",
      achievements: [
        "Led development of DeFi protocol handling $50M+ in total value locked",
        "Built and deployed 15+ smart contracts with zero security vulnerabilities",
        "Reduced gas costs by 40% through contract optimization techniques",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Web3 Innovations",
      period: "2021 - 2022",
      location: "Tokyo, Japan",
      achievements: [
        "Developed NFT marketplace with 10,000+ active users",
        "Integrated IPFS for decentralized metadata storage",
        "Built responsive React frontend with Web3 wallet integration",
        "Implemented automated testing reducing bugs by 60%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2021",
      location: "Tokyo, Japan",
      achievements: [
        "Created 20+ responsive websites using React and Next.js",
        "Improved website performance by 50% through optimization",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Maintained 99.9% uptime across all client projects",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Tokyo Institute of Technology",
      period: "2016 - 2020",
      details: "Specialized in Software Engineering and Distributed Systems",
    },
  ]

  const projects = [
    {
      name: "DeFi Exchange Platform",
      description: "Decentralized exchange with liquidity pools and yield farming",
      tech: ["Solidity", "React", "Web3.js"],
      link: "https://github.com/alexchen-dev/defi-exchange-platform",
    },
    {
      name: "NFT Marketplace",
      description: "Full-featured marketplace for creating and trading NFTs",
      tech: ["Ethereum", "IPFS", "Next.js"],
      link: "https://github.com/alexchen-dev/nft-marketplace",
    },
    {
      name: "DAO Governance Platform",
      description: "Decentralized voting and proposal management system",
      tech: ["Smart Contracts", "TypeScript", "GraphQL"],
      link: "https://github.com/alexchen-dev/dao-governance-platform",
    },
    {
      name: "Web3 Social Network",
      description: "Decentralized platform for content sharing and token-gated communities",
      tech: ["web3", "social", "frontend"],
      link: "https://github.com/alexchen-dev/dao-governance-platform",
    },
    {
      name: "Crypto Portfolio Tracker",
      description: "Dashboard for tracking crypto investments and DeFi positions in real time",
      tech: ["frontend", "api", "dashboard"],
      link: "https://github.com/alexchen-dev/dao-governance-platform",
    },
    { 
      name: "Smart Contract Audit Tool",
      description: "Automated scanner for detecting smart contract vulnerabilities",
      tech: ["blockchain", "security", "tool"],
      link: "https://github.com/alexchen-dev/dao-governance-platform",
    },
    
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SimpleBackground />
      <OptimizedShootingStars />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </Link>
          <AnimatedButton variant="primary" icon={<Download className="h-4 w-4" />} onClick={() => window.print()}>
            Download PDF
          </AnimatedButton>
        </div>
      </header>

      <main className="pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Header Section */}
            <Card className="bg-black/40 border-white/20 mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-400/30 flex-shrink-0">
                    <img src="/images/profile-avatar.png" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        Fujii Genji
                      </span>
                    </h1>
                    <h2 className="text-xl text-white/80 mb-4">Senior Blockchain & Fullstack Developer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>fgenji@outlook.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        <span>github.com/constellation-galaxy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Tokyo, Japan</span>
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>+81-XX-XXXX-XXXX</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Summary */}
            <Card className="bg-black/40 border-white/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Professional Summary</h3>
                <p className="text-white/80 leading-relaxed">
                  Experienced Blockchain and Fullstack Developer with 4+ years of expertise in building decentralized
                  applications, smart contracts, and modern web solutions. Proven track record of delivering secure,
                  scalable blockchain projects with over $50M in total value locked. Passionate about Web3 technologies
                  and committed to advancing the decentralized ecosystem through innovative development practices.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-black/40 border-white/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Technical Skills</h3>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold mb-2 capitalize text-white/90">
                        {category === "frontend" ? "Frontend" : category === "backend" ? "Backend" : category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="outline" className="border-white/30 bg-white/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-black/40 border-white/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Professional Experience</h3>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-l-2 border-cyan-400/30 pl-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                          <p className="text-cyan-300 font-medium">{job.company}</p>
                        </div>
                        <div className="text-sm text-white/70 md:text-right">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {job.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-white/80 text-sm">
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-black/40 border-white/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Education</h3>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-cyan-400/30 pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-cyan-300 font-medium">{edu.school}</p>
                        <p className="text-white/70 text-sm">{edu.details}</p>
                      </div>
                      <div className="text-sm text-white/70 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Projects */}
            <Card className="bg-black/40 border-white/20 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Key Projects</h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="border border-white/10 rounded-lg p-4 hover:border-cyan-400/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white">{project.name}</h4>
                        {/* <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-cyan-400 hover:text-cyan-300" />
                        </Link> */}
                      </div>
                      <p className="text-white/80 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-white/30 bg-white/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
