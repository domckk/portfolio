/* =============================================================================
   CLYDE DOMINICK MORALES — PORTFOLIO
   Editorial motion: Lenis smooth scroll + GSAP ScrollTrigger.
   Desktop is hijacked (inertial); touch degrades to native scrolling.
   Everything is reduced-motion aware.
   ============================================================================= */

'use strict';

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    id: 'theramove',
    title: 'TheraMOVE',
    category: 'ai',
    featured: true,
    icon: '🩺',
    logo: 'image/theralogo.png',
    role: 'Full Stack Lead',
    year: '2026',
    tags: ['React Native', 'FastAPI', 'spaCy', 'PostgreSQL'],
    description: 'AI-powered therapeutic exercise recommender for musculoskeletal pain patients, using NLP and Case-Based Reasoning.',
    longDesc: 'Full Stack Lead Developer on TheraMOVE, a thesis research project at MMSU. The app uses a conversational interface to collect patient symptoms via NLP (spaCy + Rasa NLU), then a custom Case-Based Reasoning engine (Weighted K-NN) retrieves and adapts the most relevant therapeutic exercise plans for musculoskeletal pain patients.',
    award: 'Best in Thesis · Innovative Excellence in Health & Bioinformatics Technology · CCIS Research Colloquium, March 2026',
    features: [
      'Conversational symptom intake via NLP (spaCy + Rasa NLU)',
      'Case-Based Reasoning engine — Weighted K-NN similarity',
      'Personalized therapeutic exercise recommendations',
      'React Native + Expo mobile app (TypeScript)',
      'FastAPI backend with SQLAlchemy ORM',
      'PostgreSQL via Supabase + Firebase Auth',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'vital-link',
    title: 'VitalLink',
    category: 'ai',
    icon: '🏥',
    logo: 'image/vitallink.png',
    role: 'Full Stack',
    year: '2025',
    tags: ['React Native', 'FastAPI', 'ML', 'Healthcare'],
    description: 'Healthcare chatbot helping users in rural areas identify symptoms and get basic health advice, powered by machine learning.',
    longDesc: 'Full Stack Developer on VitalLink, an AI-driven healthcare chatbot designed to serve users in rural areas who lack easy access to medical professionals. The app helps identify potential conditions from user-reported symptoms and provides basic health advice. Built with React Native Expo for the mobile frontend and FastAPI for the backend, with ML models powering symptom analysis.',
    features: [
      'Symptom-to-condition identification via ML',
      'Basic health advice for rural communities',
      'React Native Expo mobile app',
      'FastAPI backend',
      'Conversational AI interface',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'ituro',
    title: 'iTuro',
    category: 'fullstack',
    icon: '🤖',
    role: 'Full Stack',
    year: '2025',
    tags: ['React Native', 'IoT', 'Robotics', 'Inverse Kinematics'],
    description: 'Mobile app for wireless control of a physical robotic arm, with three control modes including natural language input.',
    longDesc: 'Full Stack Developer on iTuro, a mobile application for wireless control of a physical robotic arm. Supported three distinct control modes: manual joint movement for direct axis control, precision dial control for fine adjustments, and natural language input with automatic inverse kinematics calculation — enabling intuitive, hands-free robotic arm manipulation from a smartphone.',
    features: [
      'Manual joint movement control mode',
      'Precision dial control mode',
      'Natural language input control',
      'Automatic inverse kinematics (IK) calculation',
      'Wireless connectivity to physical robotic arm',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'kryptos',
    title: 'Kryptos_1',
    category: 'security',
    icon: '🔐',
    role: 'Solo',
    year: '2025',
    tags: ['Python', 'Cryptography', 'SHA-256', 'Security'],
    description: 'Python encryption tool securing data with a salt-and-pepper method, custom K1 cryptography, and SHA-256 hashing.',
    longDesc: 'A Python-based data security tool implementing a multi-layered encryption scheme. Combines a custom K1 cryptographic algorithm with SHA-256 hashing and salt-and-pepper methodology to protect sensitive data. Decryption is only possible with the correct password.',
    features: [
      'Salt and pepper encryption method',
      'Custom K1 cryptographic algorithm',
      'SHA-256 hashing integration',
      'Password-protected decryption',
      'Secure data storage format',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'sneaky-link',
    title: 'Sneaky-Link',
    category: 'fullstack',
    icon: '💬',
    role: 'Frontend',
    year: '2025',
    tags: ['JavaScript', 'React', 'Node.js', 'E2E Encryption'],
    description: 'Real-time chat application with end-to-end encryption for private, secure conversations.',
    longDesc: 'Front End Developer on Sneaky-Link, a real-time chat application built with security as a core feature. All messages are end-to-end encrypted, ensuring only the intended recipients can read them. Supports private and group conversations.',
    features: [
      'End-to-end message encryption',
      'Real-time messaging via WebSockets',
      'Private & group conversations',
      'Secure user authentication',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'file-dedup',
    title: 'File Deduplication System',
    category: 'systems',
    icon: '🗂️',
    role: 'Documentation Lead',
    year: '2025',
    tags: ['Python', 'Networking', 'SHA-256', 'Distributed'],
    description: 'Distributed system eliminating duplicate files across networked machines via a centralized SHA-256 hash server.',
    longDesc: 'Documentation Leader on a distributed file deduplication system for Windows. A centralized server stores SHA-256 hashes of all files across client machines. Clients query the server to detect duplicate files and remove them locally, saving storage at scale.',
    features: [
      'Centralized SHA-256 hash registry',
      'Client-server network architecture',
      'Cross-machine duplicate detection',
      'Automated local file cleanup',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'lamail',
    title: 'LaMail',
    category: 'fullstack',
    icon: '📧',
    role: 'Lead Developer',
    year: '2025',
    tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'Email'],
    description: 'Email client with an intuitive interface and essential email management features.',
    longDesc: 'Lead Developer on LaMail, a clean and functional email client application. Designed with usability in mind, the interface makes email management straightforward with core features like composing, reading, sorting, and managing email threads.',
    features: [
      'Compose, send, and receive emails',
      'Intuitive inbox management',
      'Thread-based conversation view',
      'Search and filter functionality',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
  {
    id: 'ml-analytics',
    title: 'Mobile Legends Analytics',
    category: 'ai',
    icon: '🎮',
    role: 'Lead Developer',
    year: '2025',
    tags: ['Python', 'Data Analytics', 'MySQL', 'Statistics'],
    description: 'Analytics tool evaluating win/loss probabilities from hero picks, bans, and seasonal meta.',
    longDesc: 'Lead Developer on a data analytics tool for Mobile Legends Bang Bang. Analyzes hero pick and ban data to calculate win/loss probabilities. Provides insights into meta lineup win rates across different game seasons, helping players make strategic decisions.',
    features: [
      'Hero pick/ban win probability engine',
      'Meta lineup win rate analysis',
      'Cross-season performance tracking',
      'Interactive data visualizations',
      'MySQL-backed statistics storage',
    ],
    github: 'https://github.com/domckk',
    live: '#',
  },
];

/* Skills grouped by domain — `primary` marks the tools actually reached for. */
const SKILL_GROUPS = [
  { label: 'Languages', items: [
    { name: 'JavaScript', primary: true }, { name: 'TypeScript', primary: true },
    { name: 'Python', primary: true }, { name: 'C / C++' }, { name: 'SQL' },
  ] },
  { label: 'Frontend & Mobile', items: [
    { name: 'React', primary: true }, { name: 'React Native', primary: true },
    { name: 'Next.js' }, { name: 'HTML / CSS' }, { name: 'Tailwind CSS' }, { name: 'Flutter' },
  ] },
  { label: 'Backend & Data', items: [
    { name: 'FastAPI', primary: true }, { name: 'Node.js' },
    { name: 'PostgreSQL', primary: true }, { name: 'MySQL' }, { name: 'Redis' }, { name: 'REST APIs' },
  ] },
  { label: 'AI / ML', items: [
    { name: 'spaCy' }, { name: 'Rasa NLU' }, { name: 'scikit-learn' }, { name: 'Data Analytics' },
  ] },
  { label: 'Tools & Practices', items: [
    { name: 'Git / GitHub', primary: true }, { name: 'Supabase' },
    { name: 'Firebase' }, { name: 'Expo' }, { name: 'Figma' },
  ] },
];

const TIMELINE = {
  education: [
    {
      period: '2022 — 2026',
      title: 'BS Computer Science',
      org: 'Mariano Marcos State University · Batac City, Ilocos Norte',
      desc: 'Graduated 2026. Academic Achiever (A.Y 2023–2024 2nd Sem · A.Y 2025–2026 1st Sem). Focused on software development, data structures, AI/ML, cybersecurity, and systems programming.',
      tags: ['Data Structures', 'Web Development', 'AI / ML', 'Cybersecurity'],
    },
    {
      period: '2016 — 2022',
      title: 'Senior High School',
      org: 'Saint Anne Academy · Piddig, Ilocos Norte',
      desc: 'Graduated With Honors. Developed early foundations in mathematics, science, and logical thinking that shaped my path into Computer Science.',
      tags: ['With Honors'],
    },
  ],
  work: [
    {
      period: 'March 2026',
      title: 'Best in Thesis — Health & Bioinformatics Technology',
      org: 'CCIS Research Colloquium · Mariano Marcos State University',
      desc: 'Awarded Best in Thesis under Innovative Excellence in Health and Bioinformatics Technology for TheraMOVE, an AI-powered physical therapy recommender achieving 95% accuracy and a 4.61/5 patient satisfaction rating.',
      tags: ['Research', 'AI in Healthcare', 'Bioinformatics'],
      highlight: true,
    },
    {
      period: '2025 — 2026',
      title: 'Freelance Developer',
      org: 'Commission-based projects',
      desc: 'Built websites and mobile apps for students needing help with school projects. Handled the full development process — from scoping client requirements to delivering a working product.',
      tags: ['Web Development', 'Mobile Apps', 'Full Cycle Delivery'],
    },
    {
      period: '2025',
      title: 'Frontend Developer (Intern)',
      org: 'Schools Division of Laoag City — DepEd',
      desc: 'Frontend developer for the HRMPSB System, digitizing the employee promotion and selection process. Built the screens and interface using HTML, CSS, and JavaScript.',
      tags: ['HTML / CSS / JS', 'Frontend Development'],
    },
    {
      period: '2026',
      title: 'Microsoft Full-Stack Developer Professional',
      org: 'Coursera',
      desc: 'Completed the Microsoft Full-Stack Developer Professional certificate, covering end-to-end application development with modern web technologies and cloud-ready deployment practices.',
      tags: ['Full Stack', 'Microsoft'],
    },
    {
      period: '2026',
      title: 'Google AI Professional Certificate',
      org: 'Coursera',
      desc: 'Covering machine learning fundamentals, model development, and practical AI application across real-world scenarios.',
      tags: ['AI / ML', 'Google'],
    },
    {
      period: '2025',
      title: 'Cyber Threat Management',
      org: 'Cisco Networking Academy',
      desc: 'Threat analysis, incident response, network security monitoring, and vulnerability management frameworks used in enterprise environments.',
      tags: ['Threat Analysis', 'Incident Response'],
    },
    {
      period: '2025',
      title: 'Ethical Hacker',
      org: 'Cisco Networking Academy',
      desc: 'Hands-on training in penetration testing methodologies, vulnerability exploitation, social engineering, and ethical hacking techniques.',
      tags: ['Penetration Testing', 'Vulnerability Assessment'],
    },
    {
      period: '2025',
      title: 'Introduction to Cybersecurity',
      org: 'Cisco Networking Academy',
      desc: 'Foundational certification covering cybersecurity principles, common attack vectors, and defence strategies.',
      tags: ['Cybersecurity Fundamentals'],
    },
    {
      period: '2025',
      title: 'Robotics Trainer',
      org: 'Shamrock Elementary School · Rodolfo CG Fariñas Jr. National Science HS',
      desc: 'Robotics trainer for elementary and high school students, introducing robotics, programming logic, automation, and hands-on engineering challenges.',
      tags: ['Robotics', 'STEM Education', 'Training'],
    },
    {
      period: '2025',
      title: 'Regional Pitching Delegate',
      org: 'DICT Region I',
      desc: 'Regional delegate in a tech pitching competition organized by the Department of Information and Communications Technology Region I.',
      tags: ['Public Speaking', 'Tech Pitching'],
    },
    {
      period: '2025',
      title: 'Seminars — Ignite Philippines & Sui DevSync',
      org: 'MMSU Batac Campus',
      desc: 'Entrepreneurship seminar covering startup culture and technology-driven innovation, plus the Sui DevSync seminar exploring blockchain and decentralized applications.',
      tags: ['Entrepreneurship', 'Blockchain', 'Web3'],
    },
  ],
};

/* ─── HELPERS ──────────────────────────────────────────────────────────── */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const esc = str => String(str).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const hasLink = url => Boolean(url) && url !== '#';
const reduce  = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = () => window.matchMedia('(hover: none), (pointer: coarse)').matches;
const num = n => String(n).padStart(2, '0');

/* Plate markup shared by hover preview + modal. Real logo, else index numeral. */
function plateHTML (p, i, big = false) {
  if (p.logo) {
    return `<div class="preview__inner"><img src="${p.logo}" alt="" loading="lazy" /><span class="preview__cap">${esc(p.title)}</span></div>`;
  }
  return `<div class="preview__inner"><span class="preview__big">${num(i + 1)}</span><span class="preview__cap">${esc(p.title)}</span></div>`;
}

/* ─── LENIS + GSAP CORE ────────────────────────────────────────────────── */

let lenis = null;

function initMotion () {
  const canGsap = typeof gsap !== 'undefined';
  if (canGsap && typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  document.documentElement.classList.add('js');

  // Lenis on desktop only; touch keeps native momentum scrolling.
  if (typeof Lenis !== 'undefined' && !isTouch() && !reduce()) {
    lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    if (canGsap && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  buildReveals(canGsap);
}

/* Line masks + fade-rise reveals, driven by ScrollTrigger (or IO fallback). */
function buildReveals (canGsap) {
  if (reduce()) {
    $$('.reveal, .ln').forEach(el => el.classList.add('is-in'));
    return;
  }

  const useST = canGsap && typeof ScrollTrigger !== 'undefined';

  // Any standalone .ln (e.g. hero/section titles not wrapped in .reveal)
  const lines = $$('.ln').filter(l => !l.closest('.reveal'));
  const targets = [...$$('.reveal'), ...lines];

  if (useST) {
    targets.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => el.classList.add('is-in'),
      });
    });
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        obs.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(el => io.observe(el));
  }

  // Hero title fires immediately (above the fold, no scroll needed)
  requestAnimationFrame(() => {
    $$('.hero__title .ln, .hero .reveal').forEach(el => el.classList.add('is-in'));
  });

  // Gentle parallax on the portrait
  if (useST) {
    const fig = $('.about__frame img');
    if (fig) {
      gsap.to(fig, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: '.about__figure', start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }
  }
}

function scrollTo (target) {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -20 });
  else el.scrollIntoView({ behavior: reduce() ? 'auto' : 'smooth' });
}

/* ─── NAV ──────────────────────────────────────────────────────────────── */

function initNav () {
  const nav = $('#nav');
  const toggle = $('#menu-toggle');
  const menu = $('#menu');
  const links = $$('.nav__link');

  const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
  };
  toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('.menu__link, .menu__foot a', menu).forEach(a =>
    a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setMenu(false);
  });

  // Anchor smooth-scroll through Lenis
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2 || !$(id)) return;
      e.preventDefault();
      if (document.body.classList.contains('menu-open')) setMenu(false);
      scrollTo(id);
    });
  });

  // Active section highlight
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' });
  $$('main section[id]').forEach(s => io.observe(s));
}

/* ─── PROGRESS ─────────────────────────────────────────────────────────── */

function initProgress () {
  const bar = $('#progress');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
  };
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

/* ─── CUSTOM CURSOR ────────────────────────────────────────────────────── */

function initCursor () {
  const cursor = $('#cursor');
  if (!cursor || isTouch() || reduce()) return;

  const label = $('.cursor__label', cursor);
  document.body.classList.add('cursor-on');
  cursor.style.display = 'flex';

  let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  let tx = cx, ty = cy;

  const loop = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  document.addEventListener('mouseleave', () => cursor.classList.add('is-hidden'));
  document.addEventListener('mouseenter', () => cursor.classList.remove('is-hidden'));

  // Enlarge + label over interactive targets
  const setState = (active, text = '') => {
    cursor.classList.toggle('is-active', active);
    label.textContent = text;
  };
  document.addEventListener('mouseover', e => {
    const project = e.target.closest('.index__btn');
    const link = e.target.closest('[data-cursor]');
    if (project) setState(true, 'View');
    else if (link) setState(true, '');
    else setState(false);
  });
}

/* ─── WORK INDEX ───────────────────────────────────────────────────────── */

function buildWork () {
  const list = $('#work-index');
  if (!list) return;

  list.innerHTML = PROJECTS.map((p, i) => `
    <li class="index__row" data-id="${p.id}" data-category="${p.category}">
      <button class="index__btn" aria-label="View ${esc(p.title)}">
        <span class="index__no">${num(i + 1)}</span>
        <span class="index__main">
          <span class="index__title">${esc(p.title)}</span>
          <span class="index__desc">${esc(p.description)}</span>
        </span>
        <span class="index__aside">
          ${p.award ? `<span class="index__award">Award</span>` : ''}
          <span class="index__tags">${p.tags.slice(0, 2).map(t => `<span>${esc(t)}</span>`).join('')}</span>
          <span class="index__year">${esc(p.year)}</span>
          <span class="index__go" aria-hidden="true">→</span>
        </span>
      </button>
    </li>
  `).join('');

  $$('.index__row', list).forEach(row =>
    $('.index__btn', row).addEventListener('click', () => openModal(row.dataset.id)));

  initPreview();
}

/* Floating preview plate that follows the cursor on desktop hover. */
function initPreview () {
  const preview = $('#work-preview');
  if (!preview || isTouch() || reduce()) return;

  let px = 0, py = 0, cx = 0, cy = 0, raf = null;
  const loop = () => {
    cx += (px - cx) * 0.14;
    cy += (py - cy) * 0.14;
    preview.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(loop);
  };

  $$('.index__row').forEach(row => {
    const p = PROJECTS.find(x => x.id === row.dataset.id);
    const i = PROJECTS.indexOf(p);
    row.addEventListener('mouseenter', () => {
      preview.innerHTML = plateHTML(p, i);
      preview.classList.add('is-visible');
      if (!raf) raf = requestAnimationFrame(loop);
    });
    row.addEventListener('mouseleave', () => {
      preview.classList.remove('is-visible');
    });
  });

  window.addEventListener('mousemove', e => { px = e.clientX + 120; py = e.clientY; }, { passive: true });
}

function initFilter () {
  const buttons = $$('.filter');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      const filter = btn.dataset.filter;
      $$('.index__row').forEach(row => {
        row.classList.toggle('is-hidden', !(filter === 'all' || row.dataset.category === filter));
      });
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });
}

/* ─── MODAL ────────────────────────────────────────────────────────────── */

let lastFocused = null;

function openModal (id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const i = PROJECTS.indexOf(p);
  lastFocused = document.activeElement;

  $('#modal-no').textContent = num(i + 1);
  $('#modal-plate').innerHTML = plateHTML(p, i, true);
  $('#modal-year').textContent = p.year;
  $('#modal-role').textContent = p.role;
  $('#modal-title').textContent = p.title;
  $('#modal-desc').textContent = p.longDesc;
  $('#modal-tags').innerHTML = p.tags.map(t => `<span>${esc(t)}</span>`).join('');
  $('#modal-features').innerHTML = p.features.map(f => `<li>${esc(f)}</li>`).join('');

  const award = $('#modal-award');
  award.hidden = !p.award;
  if (p.award) award.innerHTML = `<span>${esc(p.award)}</span>`;

  const gh = $('#modal-github'), live = $('#modal-live');
  gh.hidden = !hasLink(p.github);
  live.hidden = !hasLink(p.live);
  if (hasLink(p.github)) gh.href = p.github;
  if (hasLink(p.live)) live.href = p.live;

  const modal = $('#modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  if (lenis) lenis.stop();
  document.body.style.overflow = 'hidden';
  $('#modal-close').focus();
}

function closeModal () {
  const modal = $('#modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (lenis) lenis.start();
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

function initModal () {
  const modal = $('#modal');
  $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}

/* ─── SKILLS + MARQUEE ─────────────────────────────────────────────────── */

function buildSkills () {
  const list = $('#skills-list');
  if (list) {
    list.innerHTML = SKILL_GROUPS.map((g, gi) => `
      <div class="cap reveal" data-d="${gi % 3}">
        <h4 class="cap__label">${esc(g.label)}</h4>
        ${g.items.map(it => `
          <div class="cap__item ${it.primary ? 'is-primary' : ''}">
            <span class="cap__mark" aria-hidden="true"></span>${esc(it.name)}
          </div>`).join('')}
      </div>`).join('');
  }

  // Marquee — the primary tools, repeated for a seamless loop
  const track = $('#marquee-track');
  if (track) {
    const words = SKILL_GROUPS.flatMap(g => g.items.filter(i => i.primary).map(i => i.name))
      .concat(['Web', 'Mobile', 'AI / ML', 'Security']);
    const run = `<span>${words.map(esc).join('</span><span>')}</span>`;
    track.innerHTML = run + run; // duplicate for -50% loop
  }
}

/* ─── LEDGER (timeline) ────────────────────────────────────────────────── */

function ledgerRowHTML (item) {
  return `
    <div class="ledger__row ${item.highlight ? 'is-highlight' : ''}">
      <div class="ledger__period">${esc(item.period)}</div>
      <div class="ledger__main">
        ${item.highlight ? `<span class="ledger__badge">Award</span>` : ''}
        <h3 class="ledger__title">${esc(item.title)}</h3>
        <p class="ledger__org">${esc(item.org)}</p>
        <p class="ledger__desc">${esc(item.desc)}</p>
        <div class="ledger__tags">${item.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
      </div>
    </div>`;
}

function buildLedgers () {
  Object.entries(TIMELINE).forEach(([key, items]) => {
    const panel = $(`#ledger-${key}`);
    if (panel) panel.innerHTML = items.map(ledgerRowHTML).join('');
  });
}

function initTabs () {
  const tabs = $$('.exp__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      ['education', 'work'].forEach(key => {
        $(`#ledger-${key}`).classList.toggle('is-hidden', key !== tab.dataset.tab);
      });
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });
}

/* ─── COUNTERS ─────────────────────────────────────────────────────────── */

function initCounters () {
  const els = $$('[data-count]');
  const run = el => {
    const end = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reduce()) { el.textContent = end + suffix; return; }
    const dur = 1400, start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * end) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = end + suffix;
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
}

/* ─── CONTACT FORM ─────────────────────────────────────────────────────── */

function initContactForm () {
  const form = $('#contact-form');
  const success = $('#form-success');
  const error = $('#form-error');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    error.hidden = true;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const btn = $('.btn-submit', form);
    const html = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span>Sending…</span>';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.hidden = true;
      success.hidden = false;
    } catch (err) {
      error.textContent = 'Could not send — please email clydedominick09@gmail.com directly.';
      error.hidden = false;
      btn.disabled = false;
      btn.innerHTML = html;
    }
  });
}

/* ─── INIT ─────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  buildWork();
  buildSkills();
  buildLedgers();

  initMotion();      // Lenis + GSAP + reveals
  initNav();
  initProgress();
  initCursor();
  initFilter();
  initModal();
  initTabs();
  initCounters();
  initContactForm();
});
