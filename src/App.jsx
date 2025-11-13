import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Phone, Download, Globe, Database, Code2, Cpu, Layers } from 'lucide-react'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
)

const Glow = ({ className = '' }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
    <div className="absolute top-10 -right-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
    <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
  </div>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>
)

const badge = 'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur'
const glass = 'backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl shadow-black/30'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f17] text-white overflow-x-hidden">
      {/* HERO */}
      <Section id="home" className="min-h-screen flex items-stretch">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17]/40 via-[#0b0f17]/70 to-[#0b0f17]" />
        <Glow />
        <Container className="relative z-10 flex flex-col items-start justify-center gap-8 py-24">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className={badge}>
            Visakhapatnam • Full-Stack Developer
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Hi, I’m Mohan Rao —
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-sky-400 to-teal-300 drop-shadow">Full-Stack Developer</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }} className="max-w-2xl text-white/70 text-lg md:text-xl">
            I build modern, responsive, and user-focused web applications.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-fuchsia-500 to-sky-500 hover:from-fuchsia-400 hover:to-sky-400 transition-colors shadow-lg shadow-fuchsia-900/30">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/myResume.pdf" download className={`${glass} inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/15 transition-colors`}>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </Container>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className={`${glass} rounded-2xl p-8 relative overflow-hidden`}>
              <Glow />
              <div className="relative z-10">
                <span className={badge}>About Me</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Clean, modern, and immersive experiences</h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  I’m Mohan Rao Boddu from Visakhapatnam, Andhra Pradesh. I design and develop full-stack applications that blend performance, accessibility, and beautiful motion design.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-white/60">Name</div>
                    <div className="font-medium">Mohan Rao Boddu</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-white/60">Location</div>
                    <div className="font-medium">Visakhapatnam, Andhra Pradesh</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1 }} className={`${glass} rounded-2xl p-8`}>
              <span className={badge}>Education</span>
              <div className="mt-6 space-y-4">
                {[
                  { title: 'B.Tech IT (8.9 CGPA)', org: 'ANITS', time: '2023–2027' },
                  { title: 'Industry Ready Certification in Full-Stack Development', org: 'NxtWave', time: '2024–Ongoing' },
                  { title: 'Intermediate MPC (92.7%)', org: 'DMR Junior College', time: '' },
                  { title: 'SSC (98.5%)', org: 'Spring Field High School', time: '' },
                ].map((item, idx) => (
                  <div key={idx} className="group rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="text-xs text-white/50">{item.time}</span>
                    </div>
                    <div className="mt-1 text-white/70 text-sm">{item.org}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="py-24">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mb-10">
            <span className={badge}>Skills</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Minimal, icon‑first skillset</h2>
            <p className="mt-2 text-white/70">Glowing icons with subtle micro‑interactions.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'HTML, CSS, Bootstrap', icon: <Code2 className="h-6 w-6" />, accent: 'from-amber-400 to-pink-400' },
              { label: 'JavaScript, React.js', icon: <Layers className="h-6 w-6" />, accent: 'from-sky-400 to-teal-400' },
              { label: 'Python, Node.js, Express', icon: <Cpu className="h-6 w-6" />, accent: 'from-violet-400 to-fuchsia-400' },
              { label: 'SQLite, MS SQL Server', icon: <Database className="h-6 w-6" />, accent: 'from-emerald-400 to-cyan-400' },
              { label: 'C, C++, OOPs', icon: <Code2 className="h-6 w-6" />, accent: 'from-rose-400 to-orange-400' },
              { label: 'Power BI', icon: <Globe className="h-6 w-6" />, accent: 'from-indigo-400 to-sky-400' },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }} className={`${glass} group relative overflow-hidden rounded-2xl p-5`}> 
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${s.accent} mix-blend-soft-light" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center text-white/90 shadow-inner shadow-black/40">
                    <motion.span initial={{ filter: 'blur(2px)' }} animate={{ filter: 'blur(0px)' }} transition={{ duration: 0.6 }}>{s.icon}</motion.span>
                  </div>
                  <div className="text-sm text-white/80">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="py-24">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mb-10">
            <span className={badge}>Projects</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Cinematic cards with hover motion</h2>
            <p className="mt-2 text-white/70">Hover to reveal more, click to explore.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Wikipedia Search Application',
                url: 'https://mohanraowikiapp.ccbp.tech',
                points: ['Custom search app with smooth UI', 'Responsive design', 'Fetch GET API calls'],
              },
              {
                title: 'Todos Application',
                url: 'https://mohanraotodoapp.ccbp.tech',
                points: ['CRUD task management', 'Local storage persistence', 'Dynamic UI interactions'],
              },
              {
                title: 'Typing Speed Test',
                url: 'https://mohantypeapp.ccbp.tech',
                points: ['Real-time typing analysis', 'Timer, paragraph fetch', 'Validation & API integration'],
              },
            ].map((p, i) => (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`${glass} group relative overflow-hidden rounded-2xl p-6 block`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-white/90 transition-colors" />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {p.points.map((pt, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400 shadow-[0_0_10px] shadow-fuchsia-500/40" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -inset-10 opacity-0 group-hover:opacity-20 transition-opacity bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.2),transparent_60%)]" />
              </motion.a>
            ))}
          </div>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-24">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="mb-10">
            <span className={badge}>Contact</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Let’s build something beautiful</h2>
            <p className="mt-2 text-white/70">High‑quality glowing icons and cinematic fade‑ins.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[ 
              { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'boddumohanrao.23.it@anits.edu.in', href: 'mailto:boddumohanrao.23.it@anits.edu.in' },
              { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '9573112302', href: 'tel:9573112302' },
              { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', value: 'linkedin.com/in/boddumohanrao', href: 'https://linkedin.com/in/boddumohanrao' },
              { icon: <Github className="h-5 w-5" />, label: 'GitHub', value: 'github.com/Mohan411872', href: 'https://github.com/Mohan411872' },
            ].map((c, i) => (
              <motion.a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" whileHover={{ y: -2 }} className={`${glass} group relative overflow-hidden rounded-2xl p-5 block`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-fuchsia-500/10 to-sky-500/10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center shadow-inner shadow-black/40">{c.icon}</div>
                    <div>
                      <div className="text-xs text-white/60">{c.label}</div>
                      <div className="text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="/myResume.pdf" download className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 transition-colors shadow-lg shadow-emerald-900/30">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a href="#home" className={`${glass} inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/15 transition-colors`}>
              Back to top
            </a>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10/5 py-8 mt-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/60 text-sm">
            <div>© {new Date().getFullYear()} Mohan Rao Boddu. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-white/90">About</a>
              <a href="#skills" className="hover:text-white/90">Skills</a>
              <a href="#projects" className="hover:text-white/90">Projects</a>
              <a href="#contact" className="hover:text-white/90">Contact</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default App
