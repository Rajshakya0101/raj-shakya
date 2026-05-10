import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Skills' },
  { id: 'resume', label: 'Projects' },
//   { id: 'resume', label: 'Resume' },
  { id: 'blog', label: 'Featured' },
  { id: 'contact', label: 'Contact' },
]

const skills = [
  { label: 'Programming (C, JavaScript, Python)', value: 90 },
  { label: 'Frameworks (React.js, Tailwind, Flask, Vite)', value: 90 },
  { label: 'Databases (MySQL, Firebase, MongoDB)', value: 86 },
  { label: 'IoT & Hardware (ESP32, ESP8266, NodeMCU, Arduino)', value: 90 },
  { label: 'Machine Learning & Data (TensorFlow, scikit-learn)', value: 50 },
  { label: 'Tools & Softwares (Figma, Canva, Adobe Premiere Pro)', value: 90 },
]

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable web applications with React.js, Tailwind, Flask, and robust backend APIs.',
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Creating practical ML and NLP-driven workflows with TensorFlow, scikit-learn, and sentiment analysis pipelines.',
    highlight: true,
  },
  {
    title: 'IoT & Automation Systems',
    description: 'Developing real-time IoT solutions using ESP32/ESP8266, Firebase, and secure device communication.',
  },
]

const experience = [
  {
    time: 'Aug 2024 - Nov 2024',
    title: 'SmartTask - Intelligent To-Do List & Task Optimization Web App',
    description: 'Built a full-stack productivity app with React.js + Tailwind frontend, Flask REST API backend, and PuLP-based task optimization.',
    teckstack: 'Stack: React.js, Tailwind, Flask, PuLP, Render, Vercel',
//     liveUrl: 'https://examhub-frontend-rtms.vercel.app/'
  },
  {
    time: 'Aug 2024 - Nov 2024',
    title: 'Revana - Flipkart Review Analyzer',
    description: 'Designed a resilient scraping and analytics engine with review sentiment analysis and interactive chart visualizations.',
    teckstack: 'Stack: React, Flask, Playwright, VADER, Chart.js',
    liveUrl: 'https://revana.vercel.app/'
  },
  {
     time: "Sep 2025 - Present",
     title: "ExamHub - AI-Powered Mock Test & Quiz Platform",
     description: "Built a scalable full-stack mock test platform for SSC exam preparation with AI-generated MCQs. Designed a React-based test interface with real-time quiz rendering and evaluation. Integrated a Flask REST API for dynamic question generation, optimized API response time, and structured JSON-based question pipelines for consistent output.",
     teckstack: "Stack: React.js, Tailwind CSS, Flask, REST API, JSON, Render, Vercel",
     liveUrl: 'https://examhub-frontend-rtms.vercel.app/'
  },
  {
    time: 'Jul 2025 - Dec 2025',
    title: 'AgroSmart - Intelligent Farming Companion (SIH 2025)',
    description: 'Developed a smart irrigation platform using ESP32/ESP8266 with sensor integration, Firebase realtime control, and a Flutter Android app.',
    teckstack: 'Stack: ESP32/ESP8266, Firebase, Flutter, DHT22, Ultrasonic sensors',
    liveUrl: 'https://github.com/gauravvjhaa/agrosmart/releases/tag/android'
  },
  {
    time: 'Aug 2025 - Present (R&D)',
    title: 'Home Automation System (IoT + Firebase + Encryption)',
    description: 'Created secure device-level home automation with unique MAC-ID mapping, encrypted data transmission, and room-wise control workflows.',
    teckstack: 'Stack: ESP32/ESP8266, Firebase Authentication, Firebase Realtime DB',
  },
  {
    time: '2025 - Present',
    title: 'CrimeBook – Crime Analytics & Awareness Platform',
    description: "Created a Flutter application that transforms NCRB datasets into interactive data visualizations. Integrated OpenAI's NLP APIs to generate intelligent, location-based security alerts, and NewsAPI to deliver a personalized crime-related news feed.",
    teckstack: 'Stack: Flutter, OpenAI NLP APIs, NewsAPI, NCRB datasets, Data Visualization',
    liveUrl: 'https://github.com/gauravvjhaa/crimebook/releases/tag/v1.2'
  },
]

const testimonials = [
  {
    name: 'Data Analytics & Visualization Job Simulation',
    role: 'Accenture Forage | 2024',
    quote: 'Worked on analytics and visualization problem solving using industry-style simulation tasks.',
    certificateUrl: '/accenture.jpg',
  },
  {
    name: "Technex'24 Highlights",
    role: 'IIT-BHU | Mar 2024',
    quote: 'Achieved 1st Place in Pixelate and 3rd Place in Micromouse competition.',
    certificateUrl: '/IITBHU.jpg',
  },
  {
    name: 'Prompt Design in Vertex AI',
    role: 'Google Cloud | 2024',
    quote: 'Completed hands-on learning on prompt engineering and practical Generative AI workflows.',
    certificateUrl: '/vertexai.png',
  },
]

const clients = ['React.js', 'Flask', 'Firebase', 'TensorFlow', 'ESP32']

const posts = [
  {
    date: '2025 - Present',
    title: 'ExamHub: Smart Exam Management and Analytics Platform',
    thumbnail: '/examhub.png',
  },
  {
    date: 'Aug 2025 - Nov 2025',
    title: 'AgroSmart: IoT Based Precision Agriculture System',
    thumbnail: '/agrosmart.png',
  },
  {
    date: 'Aug 2024 - Nov 2024',
    title: 'Revana: Review Intelligence with NLP and Visualization',
    thumbnail: '/Revana.png',
    highlight: true,
  },
]

const profileImage = '/profile3.jpg'
const profileImage2 = '/profile2.jpg'
const resumePdf = '/resume.pdf'

function SectionTitle({ title, lead }) {
  return (
    <div data-reveal className="mx-auto max-w-[680px] text-center">
      <h2 className="mb-5 font-display text-[clamp(1.9rem,3.2vw,3rem)] font-bold text-gold">
        {title}
      </h2>
      {lead ? <p className="leading-[1.85] text-muted">{lead}</p> : null}
    </div>
  )
}

function Card({ children, className = '', highlight = false, delay = 0 }) {
  return (
    <article
      data-reveal
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`group relative overflow-hidden rounded-[28px] border border-[rgba(34,45,73,0.8)] bg-[rgba(22,30,51,0.9)] shadow-[0_0_0_rgba(0,0,0,0)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(5,8,17,0.42)] hover:border-[#2f3b5d] before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-120%] before:bg-[linear-gradient(120deg,transparent_0%,rgba(255,214,134,0.08)_50%,transparent_100%)] before:transition-transform before:duration-[420ms] hover:before:translate-x-[120%] ${highlight ? 'md:-translate-y-[6px] border-[#2d3755] shadow-[0_22px_44px_rgba(5,8,17,0.42)]' : ''} ${className}`}
    >
      {children}
    </article>
  )
}

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loaderFading, setLoaderFading] = useState(false)
  const [loaderReady, setLoaderReady] = useState(false)

  useEffect(() => {
    const isDeployedHost = window.location.hostname.includes('vercel.app')

    if (isDeployedHost) {
      document.documentElement.style.fontSize = '15px'
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsHeaderVisible(scrollY > 12)
      setIsBackToTopVisible(scrollY > 400)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      revealObserver.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()

      if (isDeployedHost) {
        document.documentElement.style.fontSize = ''
      }
    }
  }, [])

  useEffect(() => {
    // Fallback: if iframe onLoad is delayed/blocked, don't freeze the app forever.
    const safetyReady = setTimeout(() => setLoaderReady(true), 1200)
    return () => clearTimeout(safetyReady)
  }, [])

  useEffect(() => {
    if (!loaderReady) return

    // Keep loader visible long enough to complete one full cycle, then fade out.
    const animationDuration = 3500
    const fadeDuration = 600

    const startFade = setTimeout(() => setLoaderFading(true), animationDuration)
    const finish = setTimeout(() => {
      setLoading(false)
      setLoaderFading(false)
    }, animationDuration + fadeDuration)

    return () => {
      clearTimeout(startFade)
      clearTimeout(finish)
    }
  }, [loaderReady])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="home" className="min-h-screen bg-bg text-text selection:bg-gold/30 selection:text-bg">
      {loading && <Loader size={320} fade={loaderFading} onReady={() => setLoaderReady(true)} />}
      <div
        className={`transition-opacity duration-700 ${
          loading ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
        }`}
      >
      <header
        className={`sticky top-0 z-20 w-full border-b transition-all duration-200 ${
          isHeaderVisible
            ? 'border-line/40 bg-[rgba(17,22,41,0.94)] shadow-[0_12px_28px_rgba(3,6,14,0.28)] backdrop-blur-[10px]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-3 px-4 py-3 text-center sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-7 lg:py-4 lg:text-left">
          <a
            className="w-fit justify-self-center text-[1.95rem] tracking-tight text-gold sm:text-[2.3rem] lg:justify-self-start lg:text-[2.7rem]"
            href="#home"
            style={{ fontFamily: "'MountainSignature', cursive", fontWeight: 400 }}
          >
            Raj Shakya
          </a>
          <button
            type="button"
            className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-none border border-line bg-[rgba(17,22,41,0.96)] p-1.5 text-gold shadow-[0_10px_24px_rgba(3,6,14,0.25)] lg:hidden"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </button>
          <nav aria-label="Primary" className="hidden justify-self-center lg:block">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#bec4d8] sm:gap-x-5 sm:text-[0.68rem] lg:gap-x-7 lg:text-[0.72rem]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="relative py-1 transition hover:-translate-y-px hover:text-gold-soft after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-[18px] after:origin-center after:translate-x-[-50%] after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 hover:after:scale-x-100"
                    href={`#${link.id}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden justify-self-end text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-[#aeb4c8] lg:block">
            <span className="text-gold">Portfolio</span>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-30 bg-black/55 transition-opacity duration-300 lg:hidden ${
          isMobileNavOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileNavOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-40 h-full w-[82vw] max-w-[320px] border-l border-line bg-[rgba(12,18,34,0.98)] px-6 py-6 shadow-[0_22px_44px_rgba(5,8,17,0.45)] transition-transform duration-300 ease-out lg:hidden ${
          isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="font-display text-2xl text-gold">Raj</span>
          <button
            type="button"
            className="flex items-center justify-center rounded-none border border-line p-2 text-gold"
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.31-1.42-1.42L9.17 12 2.87 5.71l1.42-1.42 6.3 6.3 6.3-6.3 1.41 1.42z" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile Primary" className="mt-6">
          <ul className="grid gap-3 text-left text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[#c8cde0]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="block rounded-none border border-transparent px-3 py-3 transition hover:border-line hover:bg-white/5 hover:text-gold"
                  href={`#${link.id}`}
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-7">
        <section data-reveal className="grid min-h-[80vh] items-center gap-10 py-16 sm:py-[88px] lg:grid-cols-2">
          <div className="animate-[fadeUp_900ms_ease_140ms_both]">
            <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-gold sm:text-[0.8rem]">
              Hello
            </p>
            <h1 className="mb-4 font-display text-[clamp(2.15rem,8vw,4.4rem)] leading-[1.08] text-[#eef2ff] sm:text-[clamp(2.4rem,5.5vw,4.4rem)]">
              I&apos;m <span className="text-gold">Raj Shakya</span>
            </h1>
            <p className="mb-9 max-w-[540px] text-[0.95rem] leading-[1.8] text-muted sm:text-base">
              Software Developer | Machine Learning Enthusiast | IoT Developer. Passionate about
              building scalable web applications, real-time IoT systems, and practical ML-powered
              solutions.
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/raj-shakya-8b205225b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gold transition hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM8 8.5h4.8v2.1h.1c.7-1.3 2.4-2.6 4.9-2.6C22.7 8.0 24 10.8 24 15.3V24h-5v-7.4c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8V8.5z" />
                </svg>
              </a>

              <a
                href="https://github.com/rajshakya0101"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gold transition hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
              </a>

              <a
                href="mailto:rajshakya.orai18@gmail.com"
                aria-label="Gmail"
                className="text-gold transition hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/_its_raj.18"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gold transition hover:brightness-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
            </div>
            <a
              className="hidden min-h-12 w-full items-center justify-center rounded-none bg-gold px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#141a2f] shadow-[0_16px_28px_rgba(7,9,16,0.35)] transition hover:-translate-y-1 hover:brightness-105 sm:inline-flex sm:w-auto"
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              download
            >
              Download CV
            </a>
          </div>

          <div className="relative flex animate-[fadeUp_900ms_ease_220ms_both] justify-center lg:justify-center">
            <div className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]">
              <div className="relative aspect-[4/5] w-full animate-[floaty_7s_ease-in-out_infinite] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.2),transparent_40%),linear-gradient(170deg,#2f374e,#161f35_58%,#121a2d)] shadow-[0_22px_44px_rgba(5,8,17,0.42)] transition duration-200 hover:-translate-y-[6px] hover:scale-[1.01] hover:shadow-[0_30px_54px_rgba(5,8,17,0.5)]">
                <img
                  className="block h-full w-full object-cover object-top"
                  src={profileImage}
                  alt="Raj Shakya portrait"
                />
              </div>
              <a
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-none bg-gold px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#141a2f] shadow-[0_16px_28px_rgba(7,9,16,0.35)] transition hover:-translate-y-1 hover:brightness-105 sm:hidden"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                download
              >
                Download CV
              </a>
            </div>
            <span className="absolute -right-[26px] bottom-6 hidden animate-[bob_2.8s_ease-in-out_infinite] rotate-180 text-[0.64rem] uppercase tracking-[0.24em] text-gold lg:block [writing-mode:vertical-rl]">
              Scroll Down
            </span>
          </div>
        </section>

        <section data-reveal className="grid items-center gap-10 py-16 sm:py-[88px] lg:grid-cols-2" id="about">
          <div className="order-2 lg:order-1">
            <div className="mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]">
              <div className="aspect-[4/5] w-full animate-[floaty_7s_ease-in-out_infinite] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.2),transparent_40%),linear-gradient(170deg,#2f374e,#161f35_58%,#121a2d)] shadow-[0_22px_44px_rgba(5,8,17,0.42)] transition duration-200 hover:-translate-y-[6px] hover:scale-[1.01] hover:shadow-[0_30px_54px_rgba(5,8,17,0.5)]">
                <img
                  className="block h-full w-full object-cover object-top"
                  src={profileImage2}
                  alt="Raj Shakya"
                />
              </div>
              <div className="mt-4 flex flex-col gap-4 sm:hidden">
                <a
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-none bg-gold px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#141a2f] shadow-[0_16px_28px_rgba(7,9,16,0.35)] transition hover:-translate-y-1 hover:brightness-105"
                  href="#contact"
                >
                  Hire Me
                </a>
                <a
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-none border border-line bg-transparent px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-1 hover:brightness-105"
                  href="#resume"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-5 text-center font-display text-[clamp(1.9rem,3.2vw,3rem)] text-gold lg:text-left">
              About Me
            </h2>
            <p className="mb-4 max-w-[650px] text-[0.95rem] leading-[1.86] text-muted sm:text-base">
              I’m <span className="text-gold">Raj Shakya</span>, a final-year student pursuing <span className="text-gold">B.Tech in Information Technology &amp; Mathematical Innovations</span> at <span className="text-gold">Cluster Innovation Centre, University of Delhi</span>. I specialize in software development, machine learning, and IoT, and I enjoy building scalable web applications, designing robust RESTful APIs, and integrating real-time IoT systems. I’m passionate about translating cutting‑edge technology into practical solutions that address real-world problems.
            </p>
            <p className="max-w-[650px] text-[0.95rem] leading-[1.86] text-muted sm:text-base">
              Enthusiastic about learning new technologies and solving real-world problems through
              innovation and engineering-first thinking.
            </p>
            <p className="mt-6 text-right text-[2.4rem] text-gold sm:text-[3rem]" style={{ fontFamily: "'MountainSignature', cursive" }}>
              Raj Shakya
            </p>
            <div className="mt-6 hidden flex-col gap-4 sm:flex sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-none bg-gold px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#141a2f] shadow-[0_16px_28px_rgba(7,9,16,0.35)] transition hover:-translate-y-1 hover:brightness-105 sm:w-auto"
                href="#contact"
              >
                Hire Me
              </a>
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-none border border-line bg-transparent px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-1 hover:brightness-105 sm:w-auto"
                href="#resume"
              >
                View Resume
              </a>
            </div>
          </div>
        </section>

        <section data-reveal className="grid gap-6 py-16 sm:py-[88px] lg:grid-cols-[210px_1fr] lg:items-center" id="services">
          <h3 className="justify-self-center text-center font-display text-[clamp(1.8rem,2.8vw,2.4rem)] text-gold lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] lg:tracking-[0.08em]">
            My Skills
          </h3>                 

          <div className="grid w-full gap-x-[48px] gap-y-[36px] sm:grid-cols-2 lg:justify-self-start">
            {skills.map((skill, index) => (
              <article key={skill.label} data-reveal style={{ '--reveal-delay': `${index * 90}ms` }}>
                <div className="mb-3 flex items-start justify-between gap-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#c9cfe0]">
                  <p className="leading-5">{skill.label}</p>
                  <span className="shrink-0 text-gold">{skill.value}%</span>
                </div>
                <div className="h-[4px] w-full bg-[#05070d]">
                  <span
                    className="block h-[4px] bg-[linear-gradient(90deg,var(--color-gold),var(--color-gold-soft),var(--color-gold))] bg-[length:200%_100%] animate-[shimmer_3.5s_linear_infinite]"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal className="py-16 text-center sm:py-[88px]" id="service-list">
          <SectionTitle
            title="Core Skills"
            lead={
              'Programming: C, JavaScript, Python | Frameworks: React.js, Tailwind, Flask, Vite. Machine Learning: TensorFlow, scikit-learn (Beginner) | Databases: MySQL, Firebase, MongoDB. IoT & Hardware: ESP32, ESP8266, NodeMCU, Arduino | Tools: Git, Postman, MATLAB, Weka, Figma, Canva.'
            }
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={service.title} highlight={service.highlight} className="p-9 text-left" delay={index * 120}>
                <h4 className="mb-3 font-display text-[1.62rem] text-[#f0f3fd]">
                  {service.title}
                </h4>
                <p className="leading-[1.75] text-muted">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section data-reveal className="py-16 text-center sm:py-[88px]" id="resume">
          <SectionTitle
            title="Resume"
            lead="Project-focused experience aligned to software engineering, machine learning, and IoT development."
          />

          <div className="mt-12 text-left">
            <h3 className="mb-5 text-center font-display text-[clamp(2rem,4vw,3rem)] text-[#f0f3fd] underline decoration-white decoration-1 underline-offset-12">Projects</h3>
            <div className="grid gap-5">
              {experience.slice(0, 4).map((item, index) => (
                <Card key={item.title} className="p-7" delay={index * 120}>
                  <span className="text-[0.86rem] font-bold text-[#78809a]">{item.time}</span>
                  <h4 className="my-3 font-display text-[1.5rem] text-gold">{item.title}</h4>
                  <p className="leading-[1.75] text-muted">{item.description}</p>
                  <strong className="mt-4 block text-[0.94rem] text-[#bfc5d8]">
                    {item.teckstack}
                  </strong>
                  {item.liveUrl ? (
                    <div className="flex justify-end">
                      <a
                        className="inline-flex min-h-11 items-center justify-center rounded-4xl border border-gold px-5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-1 hover:brightness-110"
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
            <div
              className={`grid gap-5 overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-in-out ${
                showAllProjects ? 'mt-5 max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {experience.slice(4).map((item, index) => (
                <Card key={item.title} className="p-7" delay={index * 120}>
                  <span className="text-[0.86rem] font-bold text-[#78809a]">{item.time}</span>
                  <h4 className="my-3 font-display text-[1.5rem] text-gold">{item.title}</h4>
                  <p className="leading-[1.75] text-muted">{item.description}</p>
                  <strong className="mt-4 block text-[0.94rem] text-[#bfc5d8]">
                    {item.teckstack}
                  </strong>
                  {item.liveUrl ? (
                    <div className="mt-6 flex justify-end">
                      <a
                        className="inline-flex min-h-11 items-center justify-center rounded-4xl border border-gold px-5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-1 hover:brightness-110"
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
            {experience.length > 4 && (
              <div className="mt-8 flex justify-center sm:justify-end">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg cursor-pointer border border-gold bg-transparent px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-gold transition hover:-translate-y-1 hover:brightness-110 sm:w-auto"
                >
                  {showAllProjects ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        </section>

        <section data-reveal className="py-16 text-center sm:py-[88px]" id="testimonials">
          <SectionTitle
            title="Certifications & Highlights"
            lead="Certifications and competitive milestones that validate practical skills."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Card key={item.name} highlight={index === 1} className="p-7 text-left" delay={index * 120}>
                <div className="mb-4 aspect-[16/10] w-full"> 
                    <img
                         className="block h-full w-full object-top rounded-lg"
                         src={item.certificateUrl}
                         alt={item.name}
                    />
                </div>
                <p className="mb-6 text-[1.14rem] italic leading-[1.75] text-muted">{item.quote}</p>
                <div className="flex items-center gap-3">
                  <span className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[linear-gradient(140deg,#354363,#1a253f)] font-display font-bold text-gold">
                    {item.name.slice(0, 1)}
                  </span>
                  <div>
                    <h4 className="font-display text-[1.5rem] text-gold">{item.name}</h4>
                    <small className="text-[#8490ac]">{item.role}</small>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section data-reveal className="py-16 text-center sm:py-[88px]" id="clients">
          <SectionTitle
            title="Tech Stack"
            lead="Primary technologies used across full-stack, ML, and IoT projects."
          />

          <div className="mb-[68px] mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {clients.map((name, index) => (
              <Card
                key={`${name}-${index}`}
                highlight={index === 2}
                className="grid min-h-[120px] place-items-center px-4 text-[0.95rem] uppercase tracking-[0.12em] text-[#8d96b2]"
                delay={index * 90}
              >
                <span className={index === 2 ? 'text-gold' : ''}>{name}</span>
              </Card>
            ))}
          </div>

          <div className="rounded-none border border-line bg-[linear-gradient(160deg,#18213a,#10182c)] px-5 py-12 text-center sm:px-10 sm:py-[66px]">
            <p className="mb-2 text-[#aab1c8]">Open to Software Developer and Internship opportunities.</p>
            <h3 className="mb-6 font-display text-[clamp(1.8rem,4.2vw,4rem)] text-gold">
              Let&apos;s Build Together
            </h3>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-none bg-gold px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#141a2f] shadow-[0_16px_28px_rgba(7,9,16,0.35)] transition hover:-translate-y-1 hover:brightness-105"
              href="#contact"
            >
              Get In Touch
            </a>
          </div>
        </section>

        <section data-reveal className="py-16 text-center sm:py-[88px]" id="blog">
          <SectionTitle
            title="Featured Projects"
            lead="Selected work demonstrating end-to-end product thinking across web, ML, and IoT."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={post.title} highlight={post.highlight} className="p-5 text-left" delay={index * 120}>
                <div className="mb-4 aspect-[16/10] w-full"> 
                    <img
                         className="block h-full w-full object-top rounded-lg"
                         src={post.thumbnail}
                         alt={post.title}
                    />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-gold">
                  {post.date}
                </span>
                <h4 className="my-4 font-display text-[1.85rem] text-[#f0f3fd]">{post.title}</h4>
                <a
                  className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-gold"
                  href="#resume"
                >
                  View Details
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section data-reveal className="grid gap-8 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center sm:py-[88px]" id="contact">
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(1.8rem,7vw,3rem)] leading-[1.36] text-[#dfe5f7] lg:text-[clamp(1.9rem,3.2vw,3rem)]">
              Let&apos;s build impactful software and intelligent systems.{' '}
              <span className="font-display text-gold">Just Say Hello!</span>
            </h2>
            <ul className="mt-[30px] list-none p-0 text-[0.95rem] sm:text-base">
              <li className="mb-3">
                <div className="flex flex-wrap items-center gap-4 text-[0.95rem]">
                  <a
                    href="https://www.linkedin.com/in/raj-shakya-8b205225b"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-gold transition hover:brightness-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM8 8.5h4.8v2.1h.1c.7-1.3 2.4-2.6 4.9-2.6C22.7 8.0 24 10.8 24 15.3V24h-5v-7.4c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8V8.5z" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/rajshakya0101"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-gold transition hover:brightness-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/_its_raj.18"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-gold transition hover:brightness-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div data-reveal className="rounded-[28px] border border-line bg-[rgba(22,30,51,0.9)] p-5 text-left shadow-[0_22px_44px_rgba(5,8,17,0.28)] sm:p-8">
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-gold">
              Preferred Contact
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] text-[#f0f3fd]">
              Email is the fastest way to reach me
            </h3>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-[1.8] text-muted sm:text-base">
              If you have a project, internship, or collaboration opportunity, send me an email
              with the details and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-none bg-gold px-6 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#141a2f] shadow-[0_16px_28px_rgba(7,9,16,0.35)] transition hover:-translate-y-1 hover:brightness-105"
                href="mailto:rajshakya.orai18@gmail.com"
              >
                Email Me
              </a>
              <div className="grid gap-3 text-[0.95rem] text-[#b2bad2] sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] px-4 py-3">
                  <span className="block text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-gold">
                    Email
                  </span>
                  <a className="mt-1 block break-all text-[#eef2ff] transition hover:text-gold" href="mailto:rajshakya.orai18@gmail.com">
                    rajshakya.orai18@gmail.com
                  </a>
                </div>
                <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] px-4 py-3">
                  <span className="block text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-gold">
                    Phone
                  </span>
                  <a className="mt-1 block text-[#eef2ff] transition hover:text-gold" href="tel:+918887181143">
                    +91-8887181143
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] px-4 py-3 text-[0.95rem] text-[#b2bad2]">
                <span className="block text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-gold">
                  Location
                </span>
                <p className="mt-1 text-[#eef2ff]">Delhi, India</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-line py-6 text-center text-[0.9rem] text-[#8088a1]">
          Designed and Built by <span className="text-gold">Raj Shakya</span> <span>  |  </span> CIC , University of Delhi
        </footer>
      </main>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-[rgba(17,22,41,0.96)] text-gold shadow-[0_16px_34px_rgba(5,8,17,0.38)] transition duration-200 hover:-translate-y-1 hover:bg-gold hover:text-[#141a2f] focus:outline-none focus:ring-2 focus:ring-gold/70 sm:bottom-6 sm:right-6 ${
          isBackToTopVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 5.5 4.5 13l1.4 1.4L11 9.3V20h2V9.3l5.1 5.1 1.4-1.4L12 5.5z" />
        </svg>
      </button>
      </div>
    </div>
  )
}

export default App