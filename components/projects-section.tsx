"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionScrollButton } from "@/components/section-scroll-button"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "DeFi Exchange Platform",
      description:
        "A decentralized exchange platform with liquidity pools, yield farming capabilities, and automated market making using Uniswap V3 protocols.",
      image: "/images/defi-exchange.png",
      tags: ["blockchain", "defi", "solidity"],
      demoUrl: "https://defi-exchange-demo.vercel.app",
      githubUrl: "https://github.com/alexchen-dev/defi-exchange-platform",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "A comprehensive marketplace for creating, buying, and selling NFTs with metadata storage on IPFS and royalty distribution system.",
      image: "/images/nft-marketplace.png",
      tags: ["blockchain", "nft", "ipfs"],
      demoUrl: "https://nft-marketplace-demo.vercel.app",
      githubUrl: "https://github.com/alexchen-dev/nft-marketplace",
    },
    {
      id: 3,
      title: "DAO Governance Platform",
      description:
        "A decentralized autonomous organization platform with proposal creation, voting mechanisms, and treasury management features.",
      image: "/images/dao-governance.png",
      tags: ["blockchain", "dao", "governance"],
      demoUrl: "https://dao-governance-demo.vercel.app",
      githubUrl: "https://github.com/alexchen-dev/dao-governance-platform",
    },
    {
      id: 4,
      title: "Web3 Social Network",
      description:
        "A decentralized social network with content ownership, monetization features, and token-gated communities built on Lens Protocol.",
      image: "/images/web3-social.png",
      tags: ["web3", "social", "frontend"],
      demoUrl: "https://web3-social-demo.vercel.app",
      githubUrl: "https://github.com/alexchen-dev/web3-social-network",
    },
    {
      id: 5,
      title: "Crypto Portfolio Tracker",
      description:
        "A comprehensive dashboard for tracking cryptocurrency investments, DeFi positions, and performance metrics with real-time data.",
      image: "/images/crypto-tracker.png",
      tags: ["frontend", "api", "dashboard"],
      demoUrl: "https://crypto-tracker-demo.vercel.app",
      githubUrl: "https://github.com/alexchen-dev/crypto-portfolio-tracker",
    },
    {
      id: 6,
      title: "Smart Contract Audit Tool",
      description:
        "An automated tool for analyzing and identifying vulnerabilities in smart contracts using static analysis and formal verification.",
      image: "/images/audit-tool.png",
      tags: ["blockchain", "security", "tool"],
      demoUrl: "https://audit-tool-demo.vercel.app",
      githubUrl: "https://github.com/alexchen-dev/smart-contract-audit-tool",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "blockchain", label: "Blockchain" },
    { id: "defi", label: "DeFi" },
    { id: "nft", label: "NFT" },
    { id: "frontend", label: "Frontend" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-black/25 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-10" />

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <AnimatedButton
                key={filter.id}
                variant={activeFilter === filter.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </AnimatedButton>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full" // Ensure full height
              >
                <Card className="overflow-hidden bg-black/50 border-white/30 hover:border-cyan-500/50 transition-all duration-300 group h-full flex flex-col">
                  {/* Fixed aspect ratio image container */}
                  <div className="relative aspect-video overflow-hidden flex-shrink-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content container with flex-grow */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-white/30 text-xs bg-white/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-white/60 font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description with flex-grow to push buttons to bottom */}
                    <p className="text-white/80 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                    {/* Buttons container - always at bottom */}
                    <div className="flex gap-3 mt-auto">
                      {/* <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <AnimatedButton size="sm" variant="primary" icon={<Github className="h-4 w-4" />}>
                          Code
                        </AnimatedButton>
                      </Link> */}
                      {/* <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <AnimatedButton size="sm" variant="primary" icon={<ArrowUpRight className="h-4 w-4" />}>
                          Live Demo
                        </AnimatedButton>
                      </Link> */}
                      {/* <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <AnimatedButton size="sm" variant="outline" icon={<Github className="h-4 w-4" />}>
                          Code
                        </AnimatedButton>
                      </Link> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <SectionScrollButton targetId="contact" />
      </div>
    </section>
  )
}