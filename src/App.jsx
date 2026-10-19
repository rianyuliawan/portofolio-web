import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Award, BookOpen, BrainCircuit, Code2, Cpu, Mail, Menu, X } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import {
  SiArduino, SiCplusplus, SiCss, SiFlask, SiGit, SiGithub, SiHtml5, SiJavascript,
  SiLaravel, SiMysql, SiNextdotjs, SiPhp, SiPython, SiReact, SiTailwindcss,
} from 'react-icons/si';
import { awards, certificates, experience, identity, projects } from './content';

const navigation = [
  ['Tentang', '#tentang'], ['Keahlian', '#keahlian'], ['Proyek', '#proyek'],
  ['Pengalaman', '#pengalaman'], ['Apresiasi', '#apresiasi'],
];

const skills = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF5A55' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#141C3A' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#E5C700' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Flask', Icon: SiFlask, color: '#141C3A' },
  { name: 'Arduino', Icon: SiArduino, color: '#00979D' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss, color: '#663399' },
];

const filters = ['Semua', 'Web', 'AI', 'IoT'];
function projectMatches(project, filter) {
  if (filter === 'Semua') return true;
  if (filter === 'Web') return ['tracking', 'attendance'].includes(project.visual);
  if (filter === 'AI') return ['ai', 'forecast'].includes(project.visual);
  return project.visual === 'iot';
}

function Brand({ light = false }) {
  return <a className="brand" href="#beranda" aria-label="Rian Yuliawan, kembali ke beranda">
    <span className="brand-symbol" aria-hidden="true"><img src={light ? "/logo-mark-light.svg" : "/logo-mark.svg"} width="47" height="47" alt="" /></span>
    <span className="brand-name">rian<span>yuliawan</span></span>
  </a>;
}

function SectionLabel({ number, children }) {
  return <p className="section-label"><span>{number}</span> / {children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navigasi utama">
        <a href="#proyek">Proyek</a><a href="#pengalaman">Pengalaman</a>
      </nav>
      <a className="header-contact" href={`mailto:${identity.email}`}>Sapa saya <ArrowUpRight size={17} aria-hidden="true" /></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
    </div>
    {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navigasi seluler">
      {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
      <a href={`mailto:${identity.email}`} onClick={() => setOpen(false)}>Sapa saya<Mail size={16} /></a>
    </nav>}
  </header>;
}

function Hero() {
  return <section className="hero" id="beranda" aria-labelledby="hero-title">
    <div className="container hero-inner">
      <p className="hero-kicker">Halo, saya Rian Yuliawan</p>
      <h1 id="hero-title">Software Developer, AI &amp; Robotics</h1>
      <p className="hero-subtitle">Saya merancang dan membangun solusi digital yang sederhana dan berguna.</p>
      <div className="hero-portrait"><div className="portrait-disc" aria-hidden="true" /><img src="/rian-avatar.webp" width="800" height="726" alt="Ilustrasi Rian Yuliawan" fetchPriority="high" /></div>
      <img className="hero-workspace" src="/hero-workspace.svg" width="900" height="310" alt="" aria-hidden="true" />
    </div>
  </section>;
}

function About() {
  return <section className="about-section" id="tentang" aria-labelledby="about-title">
    <div className="container about-inner">
      <h2 id="about-title">Halo, saya Rian. Senang berkenalan.</h2>
      <p>Saya mahasiswa Teknik Informatika di UIN Syarif Hidayatullah Jakarta dengan ketertarikan pada web development, artificial intelligence, dan robotics. Saat ini saya menjalani internship di Anteraja NextGen AI, menjadi asisten dosen dan peneliti, serta membangun proyek web secara freelance.</p>
      <p>Saya menikmati proses menghubungkan ide, orang, dan teknologi. Bagi saya, karya yang baik bukan hanya bekerja dengan benar, tetapi juga membantu orang menyelesaikan masalah dengan lebih mudah.</p>
      <div className="about-facts"><span><strong>3.94 / 4.00</strong> IPK</span><span><strong>UIN Jakarta</strong> Teknik Informatika</span><span><strong>Jakarta</strong> Indonesia</span></div>
    </div>
  </section>;
}

function Expertise() {
  const disciplines = [
    { Icon: Code2, title: 'Web Developer', text: 'Saya suka membangun antarmuka yang rapi dan aplikasi yang menyelesaikan kebutuhan nyata.', label: 'Framework & bahasa', examples: 'React, Laravel, Next.js, Flask, JavaScript, PHP' },
    { Icon: BrainCircuit, title: 'AI Explorer', text: 'Saya mengeksplorasi data, machine learning, dan sistem AI yang dapat memberi jawaban kontekstual.', label: 'Bidang yang ditekuni', examples: 'Python, RAG, XGBoost, NLP, Data Processing' },
    { Icon: Cpu, title: 'Robotics Mentor', text: 'Saya senang menghubungkan kode dengan sensor, perangkat, dan pengalaman belajar yang menyenangkan.', label: 'Perangkat & tools', examples: 'Arduino, ESP32, MQTT, Scratch, Pictoblox' },
  ];
  return <section className="expertise-section" id="keahlian" aria-labelledby="expertise-title"><div className="container">
    <div className="discipline-grid">{disciplines.map(({ Icon, title, text, label, examples }) => <article className="discipline-card" key={title}><div className="discipline-icon"><Icon size={28} strokeWidth={1.8} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p><div className="discipline-detail"><strong>{label}</strong><span>{examples}</span></div></article>)}</div>
    <div className="stack-section"><SectionLabel number="01">Keahlian & tools</SectionLabel><h2 id="expertise-title">Bahasa dan alat yang saya gunakan.</h2><p>Selalu ada hal baru untuk dipelajari. Inilah teknologi yang saat ini paling dekat dengan pekerjaan dan eksperimen saya.</p><div className="skills-grid" aria-label="Daftar teknologi dan bahasa pemrograman">{skills.map(({ name, Icon, color }) => <div className="skill-item" key={name}><Icon style={{ color }} aria-hidden="true" /><span>{name}</span></div>)}</div></div>
  </div></section>;
}

function ProjectVisual({ type }) {
  if (type === 'tracking') return <div className="project-art project-art-tracking" aria-hidden="true"><div className="art-window"><div className="art-window-head"><span /><span /><span /></div><div className="tracking-title">Track your shipment<span>↗</span></div><div className="tracking-search">Enter tracking number <span>→</span></div><div className="tracking-route"><span className="route-stop active" /><span className="route-line" /><span className="route-stop" /><span className="route-line" /><span className="route-stop" /></div><div className="tracking-labels"><span>Picked up</span><span>In transit</span><span>Delivered</span></div></div></div>;
  if (type === 'ai') return <div className="project-art project-art-ai" aria-hidden="true"><div className="ai-book">✦<span>ROYAN<br />AI</span></div><div className="ai-chat"><div className="ai-chat-heading"><span className="ai-spark">✳</span> Ask your kitab</div><span className="ai-line wide"/><span className="ai-line"/><span className="ai-line short"/><div className="ai-chat-pill">Contextual answer <span>↗</span></div></div></div>;
  if (type === 'attendance') return <div className="project-art project-art-attendance" aria-hidden="true"><div className="attendance-board"><div className="attendance-head">RAKERNAS V <span>IHGMA</span></div><div className="attendance-metrics"><div><b>1,284</b><span>Attendees</span></div><div><b>96%</b><span>Checked in</span></div></div><div className="attendance-bars"><i/><i/><i/><i/><i/><i/><i/></div></div></div>;
  if (type === 'forecast') return <div className="project-art project-art-forecast" aria-hidden="true"><div className="forecast-board"><span>PRICE INSIGHTS</span><strong>Rp 1.850.000</strong><div className="forecast-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="forecast-bottom"><span>Random Forest</span><span>↗ 12.4%</span></div></div></div>;
  return <div className="project-art project-art-iot" aria-hidden="true"><div className="iot-board"><span className="iot-heading">◉ &nbsp; LIVE SENSOR MONITORING</span><div className="iot-gauges"><div><strong>228</strong><span>VOLTAGE</span></div><div><strong>74<span>%</span></strong><span>LIGHT</span></div><div><strong>2.4</strong><span>MAGNETIC</span></div></div><div className="iot-wave"><svg viewBox="0 0 300 50" preserveAspectRatio="none"><path d="M0 29 C15 29 15 12 30 12 S45 42 60 34 S75 8 90 18 S105 38 120 20 S135 5 150 24 S165 42 180 18 S195 14 210 30 S225 40 240 20 S255 10 270 23 S285 36 300 14" /></svg></div></div></div>;
}

function Projects() {
  const [filter, setFilter] = useState('Semua');
  const shown = projects.filter((project) => projectMatches(project, filter));
  return <section className="projects-section" id="proyek" aria-labelledby="projects-title"><div className="container">
    <SectionLabel number="02">Karya pilihan</SectionLabel>
    <h2 id="projects-title" className="section-title">Proyek yang saya bangun.</h2>
    <p className="section-intro">Dari aplikasi web hingga AI dan IoT, setiap proyek adalah kesempatan untuk belajar dan memberi solusi.</p>
    <div className="filter-list" role="group" aria-label="Filter kategori proyek">{filters.map((item) => <button key={item} type="button" className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <div className="project-grid">{shown.map((project) => <article className="project-card" key={project.number}><ProjectVisual type={project.visual} /><div className="project-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-foot"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Lihat proyek ${project.title} di GitHub`}><ArrowUpRight size={19} aria-hidden="true" /></a></div></div></article>)}</div>
    <a className="outline-button more-projects" href={identity.github} target="_blank" rel="noopener noreferrer"><SiGithub aria-hidden="true" /> Lihat semua di GitHub</a>
  </div></section>;
}

function Experience() {
  return <section className="experience-section" id="pengalaman" aria-labelledby="experience-title"><div className="container">
    <SectionLabel number="03">Perjalanan</SectionLabel><h2 id="experience-title" className="section-title">Belajar lewat pengalaman.</h2><p className="section-intro">Ruang kelas, tim produk, riset, dan komunitas telah membentuk cara saya bekerja.</p>
    <div className="experience-layout"><div className="education-card"><BookOpen size={29} strokeWidth={1.6} aria-hidden="true" /><span>PENDIDIKAN</span><h3>Teknik Informatika</h3><p>UIN Syarif Hidayatullah Jakarta<br />2023 — Sekarang</p><strong>IPK 3.94 / 4.00</strong></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={`${item.company}-${item.role}`}><div className="timeline-marker"/><div className="timeline-body"><div className="timeline-top"><span>{item.period}</span>{item.current && <span className="current-badge">Aktif</span>}</div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></div></article>)}</div></div>
  </div></section>;
}

function Recognition() {
  return <section className="recognition-section" id="apresiasi" aria-labelledby="recognition-title"><div className="container">
    <SectionLabel number="04">Pencapaian</SectionLabel><h2 id="recognition-title" className="section-title">Belajar, mencoba, bertumbuh.</h2><p className="section-intro">Penghargaan dan sertifikasi yang menandai perjalanan saya sejauh ini.</p>
    <div className="recognition-grid"><div className="awards-panel"><div className="panel-heading"><Award size={24} strokeWidth={1.7} aria-hidden="true" /><h3>Penghargaan</h3></div>{awards.map((award) => <div className="award-row" key={award.title}><span className="award-index">{award.accent}</span><div><h4>{award.title}</h4><p>{award.context}</p></div><span className="award-year">{award.year}</span></div>)}</div><div className="cert-panel"><div className="panel-heading"><BookOpen size={24} strokeWidth={1.7} aria-hidden="true" /><h3>Sertifikasi terpilih</h3></div><div className="cert-list">{certificates.map((cert) => <div className="cert-row" key={cert.title}><div><span>{cert.type}</span><h4>{cert.title}</h4><p>{cert.issuer}</p></div><span>{cert.year}</span></div>)}</div></div></div>
  </div></section>;
}

function Contact() {
  return <section className="contact-section" id="kontak" aria-labelledby="contact-title"><div className="container"><div className="contact-card"><div><h2 id="contact-title">Mari berkolaborasi</h2><p>Punya proyek, ide, atau pertanyaan? Saya senang mendengarnya.</p></div><a className="contact-button" href={`mailto:${identity.email}`}>Sapa saya <ArrowRight size={18} aria-hidden="true" /></a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Brand light /><p>Terus belajar, membangun, dan berbagi.</p><div className="footer-social"><a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Rian Yuliawan"><SiGithub size={21} /></a><a href={identity.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Rian Yuliawan"><FaLinkedinIn size={21} /></a><a href={`mailto:${identity.email}`} aria-label="Email Rian Yuliawan"><Mail size={21} /></a></div><span>© 2026 Rian Yuliawan</span></div></footer>;
}

export default function App() {
  return <><a className="skip-link" href="#konten">Lewati ke konten</a><Header /><main id="konten"><Hero /><About /><Expertise /><Projects /><Experience /><Recognition /><Contact /></main><Footer /></>;
}
