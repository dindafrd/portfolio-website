const { motion } = window.Motion;

// Profile Data
const profileData = {
  name: "Dinda Farida",
  title: "IT Infrastructure & Support Specialist",
  experience: "2 Years",
  usersSupported: "100+",
  sector: "Energy Sector",
  about:
    "With nearly 2 years of experience in the energy sector, I specialize in supporting IT operations, network infrastructure, server administration, and technical documentation. Experienced in infrastructure monitoring, system troubleshooting, IT asset management, and maintaining operational continuity for over 100 users. Strong analytical and problem-solving skills with an interest in IT Architecture, Enterprise Architecture, Capacity Planning, and Infrastructure Design. Skilled in translating business and operational requirements into technical solutions and documentation to support digital transformation initiatives.",
  skills: [
    { name: "IT Support & Remote Support", level: 95, category: "Core" },
    { name: "IT Infrastructure Management", level: 92, category: "Core" },
    { name: "Server Administration (Win/Linux)", level: 90, category: "Core" },
    { name: "Infrastructure Monitoring (Zabbix)", level: 88, category: "Core" },
    {
      name: "Network Troubleshooting & Fundamentals",
      level: 90,
      category: "Core",
    },
    { name: "IT Asset & SLA Management", level: 85, category: "Operations" },
    { name: "Technical Requirement Analysis", level: 87, category: "Analysis" },
    { name: "Business Process Analysis", level: 82, category: "Analysis" },
    { name: "IT Documentation (Draw.io/Visio)", level: 90, category: "Tools" },
    { name: "Operating System Installation", level: 95, category: "Core" },
    { name: "PHP & JavaScript", level: 75, category: "Development" },
    { name: "IT Service Management", level: 80, category: "Operations" },
    { name: "Microsoft Office Suite", level: 95, category: "Tools" },
  ],
  softSkills: [
    { name: "Analytical Thinking", icon: "🧩" },
    { name: "Problem Solving", icon: "💡" },
    { name: "SLA Compliance", icon: "⏱️" },
    { name: "Vendor Coordination", icon: "🤝" },
    { name: "Digital Transformation", icon: "🚀" },
    { name: "Remote Support", icon: "🌐" },
  ],
  experiences: [
    {
      role: "Administration & IT Support",
      company: "PLTU UBP Jeranjang - PT PLN Indonesia Power",
      period: "2024 - 2026",
      description:
        "Provided comprehensive technical support and infrastructure maintenance for daily energy plant operations.",
      achievements: [
        "Troubleshot LAN and internet connectivity issues ensuring stable network performance",
        "Installed and configured OS and work-related applications for various departments",
        "Assisted users via remote support tools (TeamViewer, AnyDesk) reducing resolution time",
        "Maintained technical documentation and coordinated with vendors for system repairs",
      ],
    },
  ],
  projectExperience: [
    {
      title: "Zabbix Monitoring Dashboard",
      description:
        "Real-time server health monitoring and performance tracking with Zabbix for enterprise infrastructure.",
      icon: "📊",
      image: "./images/zabbix-dashboard.png",
    },
    {
      title: "FortiGate Firewall Management",
      description:
        "Network security administration and policy management using FortiGate firewall systems.",
      icon: "🛡️",
      image: "./images/fortigate-dashboard.png",
    },
    {
      title: "PRTG Network Monitor",
      description:
        "Comprehensive network performance monitoring and device health tracking with PRTG.",
      icon: "📈",
      image: "./images/prtg-dashboard.png",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      major: "Information Systems",
      institution: "Universitas Teknologi Mataram",
      period: "2020 - 2024",
      gpa: "3.6 / 4.0",
    },
    {
      degree: "Vocational High School",
      major: "Computer & Network Engineering",
      institution: "SMKN 1 Gangga",
      period: "2017 - 2020",
      score: "85 / 100",
    },
  ],
  contact: {
    email: "dindafrd@gmail.com",
    linkedin: "www.linkedin.com/in/dinda-farida-093b3425a",
    github: "github.com/dindafrd",
  },
};

// FadeIn Animation Component
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800/50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
      >
        Dinda Farida
      </motion.div>
      <div className="hidden md:flex gap-10 text-sm font-semibold text-neutral-400 uppercase tracking-[0.15em]">
        {[
          "Overview",
          "Expertise",
          "Focus",
          "Journey",
          "Education",
          "Connect",
        ].map((item, idx) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-white transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section
      id="overview"
      className="relative px-6 md:px-12 lg:px-24 pt-48 pb-32 overflow-hidden border-b border-neutral-800"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">
              Available for Opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-4">
            Dinda Farida
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            IT <span className="text-blue-500">Infrastructure</span> & Support
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
            {profileData.about}
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <motion.a
              href="#expertise"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl bg-white text-black font-black hover:bg-neutral-200 transition-all shadow-2xl shadow-white/10 text-lg"
            >
              View My Expertise
            </motion.a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
            {[
              { label: "Years Experience", value: profileData.experience },
              { label: "Users Supported", value: profileData.usersSupported },
              { label: "Sector", value: profileData.sector },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "backOut" }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-full aspect-square lg:w-[500px] lg:h-[500px] rounded-[2.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col items-center justify-center overflow-hidden">
            <img
              src="./images/profile-photo.png"
              alt="Profile Photo"
              crossOrigin="anonymous"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center px-8 pb-8">
              <h2 className="text-3xl font-black tracking-tight mb-3 text-white">
                {profileData.title}
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Building resilient IT infrastructure for the future
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Expertise Section
const Expertise = () => {
  return (
    <section
      id="expertise"
      className="px-6 md:px-12 lg:px-24 py-32 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-6 font-bold">
              Core Expertise
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Technical <span className="text-blue-500">Skills</span>
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Specialized skills in infrastructure management and technical
              operations
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profileData.skills.map((skill, index) => (
            <FadeInWhenVisible key={skill.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold bg-blue-500/10 px-2 py-0.5 rounded-md mb-2 inline-block">
                      {skill.category}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-blue-500 font-black text-xl ml-2">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Soft Skills Banner */}
        <FadeInWhenVisible delay={0.3}>
          <div className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {profileData.softSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-neutral-300 font-bold tracking-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

// Focus Areas Section
const FocusAreas = () => {
  return (
    <section
      id="focus"
      className="px-6 md:px-12 lg:px-24 py-32 border-b border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950/50"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-6 font-bold">
              Key Projects
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Project <span className="text-blue-500">Excellence</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-3 gap-8">
          {profileData.projectExperience.map((project, index) => (
            <FadeInWhenVisible key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-4xl">
                    {project.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  return (
    <section
      id="education"
      className="px-6 md:px-12 lg:px-24 py-32 border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-6 font-bold">
              Learning Path
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Education <span className="text-blue-500">History</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-10">
          {profileData.education.map((edu, index) => (
            <FadeInWhenVisible key={edu.institution} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="relative p-10 z-10 bg-gradient-to-br from-neutral-900 to-neutral-950 h-full">
                  <div className="text-blue-500 font-black mb-2">
                    {edu.period}
                  </div>
                  <h3 className="text-3xl font-black mb-2">{edu.degree}</h3>
                  <div className="text-xl text-neutral-300 mb-1 font-bold">
                    {edu.major}
                  </div>
                  <div className="text-neutral-500 text-lg mb-6">
                    {edu.institution}
                  </div>

                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <span className="text-blue-500 font-black">
                      {edu.gpa ? `GPA: ${edu.gpa}` : `Average: ${edu.score}`}
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  return (
    <section
      id="journey"
      className="px-6 md:px-12 lg:px-24 py-32 border-b border-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-6 font-bold">
              Professional Journey
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Work <span className="text-blue-500">Experience</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="space-y-10">
          {profileData.experiences.map((exp, index) => (
            <FadeInWhenVisible key={exp.role} delay={index * 0.2}>
              <motion.div
                whileHover={{ x: 20, backgroundColor: "rgba(38, 38, 38, 0.6)" }}
                className="group p-10 rounded-[2.5rem] bg-neutral-900 border border-neutral-800 hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-10">
                  <div className="lg:w-1/3">
                    <div className="text-blue-500 text-sm font-black uppercase tracking-widest mb-3">
                      {exp.period}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-400 text-xl font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-neutral-500 leading-relaxed mb-6 text-lg">
                      {exp.description}
                    </p>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-400 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section
      id="connect"
      className="px-6 md:px-12 lg:px-24 py-36 bg-gradient-to-b from-white to-neutral-100 text-black"
    >
      <div className="max-w-5xl mx-auto text-center">
        <FadeInWhenVisible>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8 font-bold">
            Let's Connect
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter">
            Ready to <span className="text-blue-600">Collaborate</span>?
          </h2>
          <p className="text-neutral-600 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Open for opportunities in IT infrastructure, support, and
            architecture. Let's discuss how I can contribute to your team's
            success.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <motion.a
              href={`mailto:${profileData.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 rounded-2xl bg-black text-white font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3"
            >
              <span>📧 Email Me</span>
            </motion.a>
            <motion.a
              href={`https://${profileData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 rounded-2xl border-3 border-black font-black text-xl transition-all hover:bg-black hover:text-white flex items-center justify-center gap-3"
            >
              <span>🔗 LinkedIn</span>
            </motion.a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-black tracking-tighter text-white mb-2">
            Dinda Farida
          </div>
          <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest">
            © 2026 All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-8 text-neutral-500 text-sm font-bold uppercase tracking-widest">
          {["LinkedIn", "GitHub"].map((social) => (
            <a
              key={social}
              href={
                social === "LinkedIn"
                  ? `https://${profileData.contact.linkedin}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em]">
          Designed for Professional Excellence
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Expertise />
      <FocusAreas />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
