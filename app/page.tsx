"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Brain,
  Heart,
  Users,
  Calendar,
  MessageCircle,
  BarChart3,
  Shield,
  Star,
  Check,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Play,
  ArrowRight,
  Sparkles,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 0.95])
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      content:
        "This platform completely transformed my approach to mental wellness. The AI tools are incredibly intuitive.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      content: "Finding the right therapist was seamless. The booking system and video sessions work flawlessly.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Johnson",
      role: "Teacher",
      content: "The mood tracking features helped me understand my patterns better. Highly recommend!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const faqs = [
    {
      question: "How does the AI-powered therapy work?",
      answer:
        "Our AI analyzes your responses and provides personalized recommendations, coping strategies, and connects you with the most suitable therapists based on your needs.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use end-to-end encryption and comply with HIPAA regulations. Your mental health data is never shared without your explicit consent.",
    },
    {
      question: "Can I switch therapists if needed?",
      answer:
        "Yes, you can switch therapists at any time. We'll help you find a better match based on your preferences and therapy goals.",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes basic mood tracking, access to our meditation library, and community support forums.",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 min-h-screen">
        {/* Navigation */}
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
          style={{
            backgroundColor: `rgba(139, 90, 150, ${isDarkMode ? 0.1 : headerOpacity.get() * 0.9})`,
            backdropFilter: "blur(24px)",
            borderBottom: `1px solid rgba(139, 90, 150, ${isDarkMode ? 0.2 : 0.3})`,
          }}
        >
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-extralight tracking-tight bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                  MindFlow
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-10">
                {["Features", "Pricing", "About", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-all duration-300 font-light text-lg tracking-wide relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-3 rounded-xl hover:bg-purple-100/50 dark:hover:bg-purple-800/30 transition-all duration-300"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>

                <div className="hidden md:flex items-center space-x-4">
                  <Button variant="ghost" className="text-gray-700 dark:text-gray-300 font-light text-lg">
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 font-light text-lg">
                    Get Started
                  </Button>
                </div>

                <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-purple-200/50 dark:border-purple-700/50 ${isMenuOpen ? "block" : "hidden"}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {["Features", "Pricing", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 font-light text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-purple-200/50 dark:border-purple-700/50">
                <Button variant="ghost" className="justify-start font-light">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-light">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <motion.div className="container mx-auto px-6 text-center" style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-full px-8 py-4 mb-12 border border-purple-200/30 dark:border-purple-700/30 shadow-lg shadow-purple-500/10"
              >
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-base font-light text-gray-700 dark:text-gray-300 tracking-wide">
                  AI-Powered Mental Wellness Platform
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-purple-700 via-violet-700 to-purple-800 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-gray-800 dark:text-white font-thin">Mental Wellness</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-4xl mx-auto font-extralight leading-relaxed opacity-90 tracking-wide">
                Connect with licensed therapists, access AI-powered tools, and track your mental health journey with our
                premium wellness platform designed for your peace of mind.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-5 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 group font-light text-lg"
                >
                  <span className="mr-3">Start Your Journey</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border-purple-200/40 dark:border-purple-700/40 hover:bg-white/30 dark:hover:bg-gray-800/30 px-12 py-5 rounded-xl transition-all duration-300 group font-light text-lg"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Minimal Glowing UI Elements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-24 relative"
            >
              <div className="relative max-w-6xl mx-auto">
                {/* Central Glowing Orb */}
                <div className="relative mx-auto w-96 h-96 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-3xl"
                  />

                  <motion.div
                    animate={{
                      scale: [1.1, 1, 1.1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute w-64 h-64 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full blur-2xl"
                  />

                  {/* Floating UI Cards */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-12 -left-16 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/20 dark:border-purple-700/20 shadow-xl shadow-purple-500/10"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-20 h-2 bg-purple-300/50 rounded-full"></div>
                    </div>
                    <div className="mt-3 w-16 h-2 bg-purple-200/50 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-8 -right-20 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/20 dark:border-purple-700/20 shadow-xl shadow-purple-500/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <BarChart3 className="w-5 h-5 text-purple-500" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 bg-purple-400/60 rounded-full ${i === 2 ? "h-8" : i === 1 || i === 3 ? "h-6" : "h-4"}`}
                        ></div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-16 -right-12 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/20 dark:border-purple-700/20 shadow-xl shadow-purple-500/10"
                  >
                    <Heart className="w-6 h-6 text-purple-500 mb-3" />
                    <div className="space-y-2">
                      <div className="w-12 h-1.5 bg-purple-300/60 rounded-full"></div>
                      <div className="w-8 h-1.5 bg-purple-200/50 rounded-full"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 12, 0],
                      rotate: [0, -2, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-20 -left-24 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/20 dark:border-purple-700/20 shadow-xl shadow-purple-500/10"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="w-5 h-5 text-purple-500" />
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-14 h-1.5 bg-purple-300/60 rounded-full"></div>
                  </motion.div>
                </div>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className={`absolute w-2 h-2 bg-purple-400/60 rounded-full blur-sm`}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-violet-400/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-full blur-3xl"
            />
          </div>
        </section>

        {/* Featured In Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-20 border-t border-purple-200/30 dark:border-purple-700/30"
        >
          <div className="container mx-auto px-6">
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 font-extralight text-lg tracking-wide">
              Trusted by leading organizations worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center space-x-12 md:space-x-20 opacity-60">
              {["TechCrunch", "Forbes", "Wired", "Fast Company", "The Verge"].map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-2xl font-extralight text-gray-400 dark:text-gray-500 mb-6 tracking-wider"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-800 dark:text-white tracking-tight">
                How It{" "}
                <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-extralight tracking-wide leading-relaxed">
                Three simple steps to transform your mental wellness journey with our innovative platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {
                  icon: Calendar,
                  title: "Book a Session",
                  description:
                    "Browse our network of licensed therapists and book sessions that fit your schedule and preferences.",
                  step: "01",
                },
                {
                  icon: Brain,
                  title: "AI Self-Help Tools",
                  description:
                    "Access personalized AI-powered tools for meditation, journaling, and evidence-based coping strategies.",
                  step: "02",
                },
                {
                  icon: BarChart3,
                  title: "Track Progress",
                  description:
                    "Monitor your mental wellness journey with detailed analytics, insights, and progress tracking.",
                  step: "03",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <Card className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl border-purple-200/30 dark:border-purple-700/30 hover:bg-white/25 dark:hover:bg-gray-800/25 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    <CardContent className="p-10 text-center relative">
                      <div className="absolute top-6 right-6 text-7xl font-thin text-purple-200/30 dark:text-purple-700/30">
                        {item.step}
                      </div>

                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                        <item.icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-light mb-6 text-gray-800 dark:text-white tracking-wide">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-extralight text-lg tracking-wide">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white/5 dark:bg-gray-800/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-800 dark:text-white tracking-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-extralight tracking-wide leading-relaxed">
                Comprehensive mental health support tailored to your unique needs and wellness goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Therapy Sessions",
                  description: "One-on-one sessions with licensed therapists",
                  color: "from-purple-500 to-violet-500",
                },
                {
                  icon: Heart,
                  title: "Meditation",
                  description: "Guided meditation and mindfulness exercises",
                  color: "from-violet-500 to-purple-500",
                },
                {
                  icon: Target,
                  title: "Self-Assessments",
                  description: "Track your mental health with validated tools",
                  color: "from-purple-600 to-violet-600",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Connect with others on similar journeys",
                  color: "from-violet-600 to-purple-600",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl border-purple-200/30 dark:border-purple-700/30 hover:bg-white/25 dark:hover:bg-gray-800/25 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-light mb-4 text-gray-800 dark:text-white tracking-wide">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-extralight tracking-wide">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                { number: "50K+", label: "Users Helped", icon: Users },
                { number: "1K+", label: "Licensed Therapists", icon: Shield },
                { number: "95%", label: "Satisfaction Rate", icon: Star },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl rounded-3xl p-10 border border-purple-200/30 dark:border-purple-700/30 group-hover:bg-white/25 dark:group-hover:bg-gray-800/25 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    <stat.icon className="w-10 h-10 text-purple-600 mx-auto mb-6" />
                    <div className="text-5xl font-extralight text-gray-800 dark:text-white mb-4 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-light text-lg tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white/5 dark:bg-gray-800/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-800 dark:text-white tracking-tight">
                What Our{" "}
                <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                  Users Say
                </span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl border-purple-200/30 dark:border-purple-700/30 p-12 mb-10 shadow-xl shadow-purple-500/10">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-extralight leading-relaxed tracking-wide">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <div className="font-light text-xl text-gray-800 dark:text-white tracking-wide">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 font-extralight tracking-wide">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? "bg-purple-600 scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-800 dark:text-white tracking-tight">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                  Plan
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-extralight tracking-wide leading-relaxed">
                Flexible pricing options to support your mental wellness journey at every stage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {
                  name: "Free",
                  price: "$0",
                  period: "/month",
                  description: "Perfect for getting started",
                  features: [
                    "Basic mood tracking",
                    "Meditation library access",
                    "Community forums",
                    "Weekly wellness tips",
                  ],
                  popular: false,
                },
                {
                  name: "Basic",
                  price: "$29",
                  period: "/month",
                  description: "For regular mental wellness support",
                  features: [
                    "Everything in Free",
                    "2 therapy sessions/month",
                    "AI-powered insights",
                    "Priority support",
                    "Advanced mood analytics",
                  ],
                  popular: true,
                },
                {
                  name: "Premium",
                  price: "$79",
                  period: "/month",
                  description: "Complete mental wellness solution",
                  features: [
                    "Everything in Basic",
                    "Unlimited therapy sessions",
                    "Personal wellness coach",
                    "Custom meditation plans",
                    "Family account sharing",
                  ],
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-light tracking-wide shadow-lg shadow-purple-500/25">
                      Recommended
                    </div>
                  )}

                  <Card
                    className={`bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl border-purple-200/30 dark:border-purple-700/30 hover:bg-white/25 dark:hover:bg-gray-800/25 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20 ${
                      plan.popular ? "ring-2 ring-purple-500/50" : ""
                    }`}
                  >
                    <CardContent className="p-10">
                      <div className="text-center mb-10">
                        <h3 className="text-3xl font-light mb-4 text-gray-800 dark:text-white tracking-wide">
                          {plan.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 font-extralight tracking-wide">
                          {plan.description}
                        </p>
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-extralight text-gray-800 dark:text-white tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 ml-2 font-extralight">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-5 mb-10">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-4">
                            <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-extralight tracking-wide">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full py-4 rounded-xl transition-all duration-300 font-light text-lg tracking-wide ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                            : "bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border-purple-200/40 dark:border-purple-700/40 hover:bg-white/30 dark:hover:bg-gray-800/30"
                        }`}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white/5 dark:bg-gray-800/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-800 dark:text-white tracking-tight">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl border-purple-200/30 dark:border-purple-700/30 hover:bg-white/25 dark:hover:bg-gray-800/25 transition-all duration-500">
                    <CardContent className="p-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-8 text-left flex items-center justify-between hover:bg-white/10 dark:hover:bg-gray-800/10 transition-colors duration-200"
                      >
                        <span className="font-light text-xl text-gray-800 dark:text-white tracking-wide">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: openFaq === index ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed font-extralight text-lg tracking-wide">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-purple-200/30 dark:border-purple-700/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-extralight tracking-tight bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent">
                    MindFlow
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed font-extralight text-lg tracking-wide">
                  Transforming mental wellness through AI-powered tools and licensed therapy. Your journey to better
                  mental health starts here.
                </p>

                {/* Newsletter Signup */}
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/15 dark:bg-gray-800/15 backdrop-blur-xl border border-purple-200/30 dark:border-purple-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-extralight tracking-wide"
                  />
                  <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 rounded-xl font-light tracking-wide">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-light text-xl text-gray-800 dark:text-white mb-6 tracking-wide">Product</h4>
                <ul className="space-y-3">
                  {["Features", "Pricing", "Therapists", "Resources"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 font-extralight text-lg tracking-wide"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-light text-xl text-gray-800 dark:text-white mb-6 tracking-wide">Support</h4>
                <ul className="space-y-3">
                  {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 font-extralight text-lg tracking-wide"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-purple-200/30 dark:border-purple-700/30">
              <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-0 font-extralight text-lg tracking-wide">
                © 2024 MindFlow. All rights reserved.
              </p>

              <div className="flex space-x-8">
                {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 font-extralight text-lg tracking-wide"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
