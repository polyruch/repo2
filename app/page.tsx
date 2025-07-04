"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Database,
  Zap,
  Calendar,
  Send,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ShoppingCart,
  Settings,
  Check,
  Star,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { TypingEffect } from "@/components/typing-effect"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const { t } = useLanguage()

  const skills = [
    { name: "React/Next.js", level: 95, icon: <Code className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, icon: <Code className="w-6 h-6" />, color: "from-blue-600 to-blue-800" },
    { name: "UI/UX Design", level: 85, icon: <Palette className="w-6 h-6" />, color: "from-pink-500 to-rose-500" },
    { name: "Strapi CMS", level: 97, icon: <Database className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    {
      name: "Mobile Development",
      level: 80,
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
    },
    { name: "Web Performance", level: 92, icon: <Zap className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
  ]

  const services = [
    {
      title: t("services.service1.title"),
      description: t("services.service1.description"),
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        t("services.service1.feature1"),
        t("services.service1.feature2"),
        t("services.service1.feature3"),
        t("services.service1.feature4"),
      ],
    },
    {
      title: t("services.service2.title"),
      description: t("services.service2.description"),
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        t("services.service2.feature1"),
        t("services.service2.feature2"),
        t("services.service2.feature3"),
        t("services.service2.feature4"),
      ],
    },
    {
      title: t("services.service3.title"),
      description: t("services.service3.description"),
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      features: [
        t("services.service3.feature1"),
        t("services.service3.feature2"),
        t("services.service3.feature3"),
        t("services.service3.feature4"),
      ],
    },
  ]

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      role: t("testimonials.client1.role"),
      company: t("testimonials.client1.company"),
      text: t("testimonials.client1.text"),
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: t("testimonials.client2.name"),
      role: t("testimonials.client2.role"),
      company: t("testimonials.client2.company"),
      text: t("testimonials.client2.text"),
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: t("testimonials.client3.name"),
      role: t("testimonials.client3.role"),
      company: t("testimonials.client3.company"),
      text: t("testimonials.client3.text"),
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  const projects = [
    {
      title: t("work.project1.title"),
      description: t("work.project1.description"),
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: t("work.project2.title"),
      description: t("work.project2.description"),
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Socket.io", "MongoDB", "Express"],
      github: "#",
      live: "#",
    },
    {
      title: t("work.project3.title"),
      description: t("work.project3.description"),
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
      github: "#",
      live: "#",
    },
  ]

  const education = [
    {
      degree: t("education.degree1"),
      school: t("education.school1"),
      year: "2022-2024",
      description: t("education.desc1"),
      logo: "/images/umbb-logo.png",
    },
    {
      degree: t("education.degree2"),
      school: t("education.school2"),
      year: "2018-2022",
      description: t("education.desc2"),
      logo: "/images/umbb-logo.png",
    },
    {
      degree: t("education.degree3"),
      school: t("education.school3"),
      year: "2023",
      description: t("education.desc3"),
      logo: "/images/codecademy-logo.png",
    },
    {
      degree: t("education.degree4"),
      school: t("education.school4"),
      year: "2023",
      description: t("education.desc4"),
      logo: "/images/harvard-logo.jpeg",
    },
  ]

  const navigationItems = [
    { key: "nav.about", href: "#about" },
    { key: "nav.skills", href: "#skills" },
    { key: "nav.education", href: "#education" },
    { key: "nav.work", href: "#work" },
    { key: "nav.services", href: "#services" },
    { key: "nav.testimonials", href: "#testimonials" },
    { key: "nav.contact", href: "#contact" },
  ]

  return (
    <div id="top" className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 max-w-full">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold max-w-[120px] flex-shrink-0"
            >
              <Link
                href="#top"
                className="block"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                <Image
                  src={theme === "dark" ? "/images/tabet-dark.png" : "/images/tabet-light.png"}
                  alt="Tabet Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-4"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">{t("accessibility.toggleTheme")}</span>
                </Button>
                <LanguageToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 w-full max-w-full overflow-hidden"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="pt-4 border-t mt-4 flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex-1 justify-start"
                >
                  <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 ml-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-6">{t("accessibility.toggleTheme")}</span>
                </Button>
                <LanguageToggle />
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30"
        />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8">
              <Image
                src="/images/profile.jpeg"
                alt="Tabet Khalil - Profile Picture"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-primary/20 animate-float object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 break-words">
              {t("hero.greeting")}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("hero.name")}
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <p className="mb-2">
                {t("hero.freelance")}{" "}
                <TypingEffect
                  words={[t("hero.role.developer"), t("hero.role.designer")]}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold "
                />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-full">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="#work">{t("hero.viewWork")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-300 dark:hover:bg-purple-950 bg-transparent"
                asChild
              >
                <Link href="#contact">{t("hero.getInTouch")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50"
      >
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">{t("about.description1")}</p>
              <p className="text-lg text-muted-foreground">{t("about.description2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("skills.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:shadow-purple-200 dark:hover:shadow-purple-900/50 border-l-4 border-l-transparent hover:border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`text-white p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>{skill.icon}</div>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{t("skills.proficiency")}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50"
      >
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("education.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("education.description")}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:shadow-blue-200 dark:hover:shadow-blue-900/50 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={`${edu.school} logo`}
                          width={60}
                          height={60}
                          className="rounded-lg object-contain bg-white p-2 border shadow-sm"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{edu.school}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("work.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("work.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 w-full min-w-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github}>
                          <Github className="w-4 h-4 mr-2" />
                          {t("work.code")}
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.live}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t("work.liveDemo")}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50"
      >
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-orange-200 dark:hover:shadow-orange-900/50">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <div className={`text-white p-4 rounded-full bg-gradient-to-r ${service.color} w-fit mx-auto`}>
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className={`p-1 rounded-full bg-gradient-to-r ${service.color}`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 transition-opacity`}
                      asChild
                    >
                      <Link href="#contact">{t("services.getStarted")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("testimonials.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("testimonials.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-muted-foreground/20" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                        <div className="flex gap-1 mt-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50"
      >
        <div className="container mx-auto px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("contact.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contact.connect")}</CardTitle>
                  <CardDescription>{t("contact.connectDescription")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.email")}</p>
                      <p className="text-muted-foreground">alex@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.phone")}</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.location")}</p>
                      <p className="text-muted-foreground">New York, NY</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button size="icon" variant="outline" asChild>
                      <Link href="#">
                        <Github className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <Link href="#">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("contact.sendMessage")}</CardTitle>
                  <CardDescription>{t("contact.messageDescription")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t("contact.email")}</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t("contact.subject")}</label>
                      <Input placeholder={t("contact.projectInquiry")} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t("contact.message")}</label>
                      <Textarea placeholder={t("contact.messagePlaceholder")} rows={6} />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t("contact.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center max-w-full">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {t("hero.name")}. {t("footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  )
}
