/* =============================================
   PORTFOLIO — MAIN SCRIPT
   ============================================= */

'use strict';

/* ─── DATA ─────────────────────────────────────── */

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

const SKILLS = [
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'React / React Native / Next.js', level: 84 },
  { name: 'Python', level: 85 },
  { name: 'C / C++', level: 80 },
  { name: 'PostgreSQL / MySQL / Redis', level: 78 },
  { name: 'Cybersecurity', level: 75 },
];

const TECH = [
  'React', 'React Native', 'Next.js', 'Node.js', 'Python', 'Flutter',
  'JavaScript', 'FastAPI', 'C / C++', 'PostgreSQL', 'HTML / CSS', 'Security',
];

const TIMELINE = {
  education: [
    {
      period: '2022 — Present',
      title: 'BS Computer Science',
      org: 'Mariano Marcos State University · Batac City, Ilocos Norte',
      desc: 'Academic Achiever (A.Y 2023–2024 2nd Sem · A.Y 2025–2026 1st Sem). Focused on software development, data structures, AI/ML, cybersecurity, and systems programming.',
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

/* ─── HELPERS ──────────────────────────────────── */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Escape untrusted-shaped text before it goes into innerHTML. */
const esc = str => String(str).replace(/[&<>"']/g, c => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const hasLink = url => Boolean(url) && url !== '#';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Observe elements once, then unobserve. */
function observeOnce (elements, onEnter, options = {}) {
  if (!elements.length) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      onEnter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.15, ...options });

  elements.forEach(el => io.observe(el));
}

/* ─── NAVBAR ───────────────────────────────────── */

function initNav () {
  const navbar = $('#navbar');
  const toggle = $('#nav-toggle');
  const mobile = $('#mobile-nav');

  // Solidify the bar once the page scrolls away from the hero
  const onScroll = () => {
    const scrolled = window.scrollY > 24;
    navbar.classList.toggle('border-b', scrolled);
    navbar.classList.toggle('border-ink-50/7', scrolled);
    navbar.classList.toggle('bg-ink-950/80', scrolled);
    navbar.classList.toggle('backdrop-blur-lg', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = `<i class="fas fa-${open ? 'times' : 'bars'} text-sm"></i>`;
  });

  $$('a', mobile).forEach(a => {
    a.addEventListener('click', () => {
      mobile.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<i class="fas fa-bars text-sm"></i>';
    });
  });

  // Highlight the nav link for whichever section is in view
  const links = $$('.nav-link');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { threshold: 0.4 });

  $$('section[id]').forEach(section => io.observe(section));
}

/* ─── TYPED HEADLINE ───────────────────────────── */

function initTyped () {
  const el = $('#typed');
  if (!el) return;

  const strings = [
    'Software Engineer',
    'Full Stack Developer',
    'Cybersecurity Enthusiast',
    'CS Student @ MMSU',
  ];

  // Typed.js loads via CDN and animates — skip both if unavailable or unwanted
  if (typeof Typed === 'undefined' || prefersReducedMotion()) {
    el.textContent = strings[0];
    return;
  }

  new Typed('#typed', {
    strings,
    typeSpeed: 55,
    backSpeed: 25,
    backDelay: 2200,
    loop: true,
  });
}

/* ─── SCROLL REVEAL ────────────────────────────── */

function initReveal () {
  observeOnce($$('.reveal'), el => el.classList.add('visible'), { threshold: 0.1 });
}

/* ─── SKILLS ───────────────────────────────────── */

function buildSkills () {
  const list = $('#skills-list');
  if (!list) return;

  list.innerHTML = SKILLS.map(skill => `
    <div>
      <div class="mb-2 flex items-baseline justify-between gap-4">
        <span class="text-sm text-ink-200">${esc(skill.name)}</span>
        <span class="font-mono text-xs text-ink-400">${skill.level}%</span>
      </div>
      <div class="h-1 w-full overflow-hidden rounded-full bg-ink-50/7">
        <div class="skill-fill h-full w-0 rounded-full bg-linear-to-r from-accent-600 to-accent-400 transition-[width] duration-1000 ease-out"
             data-level="${skill.level}"></div>
      </div>
    </div>
  `).join('');

  observeOnce($$('.skill-fill', list), el => {
    el.style.width = `${el.dataset.level}%`;
  }, { threshold: 0.3 });
}

function buildTech () {
  const list = $('#tech-list');
  if (!list) return;
  list.innerHTML = TECH.map(t => `<span class="tag">${esc(t)}</span>`).join('');
}

/* ─── PROJECTS ─────────────────────────────────── */

function buildProjectCards () {
  const grid = $('#projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal ${['', 'reveal-d1', 'reveal-d2'][i % 3]}" data-id="${p.id}" data-category="${p.category}">
      <button class="group surface surface-hover flex h-full w-full flex-col overflow-hidden text-left"
              aria-label="View details for ${esc(p.title)}">

        <div class="relative flex h-36 w-full items-center justify-center overflow-hidden border-b border-ink-50/7 bg-ink-850">
          <div class="bg-grid absolute inset-0 opacity-40"></div>
          ${p.logo
            ? `<img src="${p.logo}" alt="" class="relative h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-110" loading="lazy" />`
            : `<span class="relative text-4xl transition-transform duration-500 group-hover:scale-110">${p.icon}</span>`}
          ${p.award
            ? `<span class="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-gold-500/30 bg-gold-500/10 px-2 py-1 font-mono text-[10px] text-gold-400">
                 <i class="fas fa-award"></i> Award
               </span>`
            : ''}
        </div>

        <div class="flex flex-1 flex-col p-5">
          <div class="flex items-center gap-2 font-mono text-[11px] text-ink-400">
            <span>${esc(p.year)}</span>
            <span class="text-ink-600">/</span>
            <span>${esc(p.role)}</span>
          </div>

          <h3 class="mt-2 text-base transition-colors group-hover:text-accent-300">${esc(p.title)}</h3>
          <p class="mt-2 flex-1 text-[13px] leading-relaxed text-ink-400">${esc(p.description)}</p>

          <div class="mt-4 flex flex-wrap gap-1.5">
            ${p.tags.slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join('')}
            ${p.tags.length > 3 ? `<span class="tag">+${p.tags.length - 3}</span>` : ''}
          </div>

          <div class="mt-5 flex items-center justify-between border-t border-ink-50/7 pt-4">
            <span class="font-mono text-[11px] text-ink-400 transition-colors group-hover:text-accent-300">Details</span>
            <i class="fas fa-arrow-right text-[10px] text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-300"></i>
          </div>
        </div>
      </button>
    </article>
  `).join('');

  $$('.project-card', grid).forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

function initFilter () {
  const buttons = $$('.filter-btn');
  const cards   = $$('.project-card');

  const setActive = btn => {
    buttons.forEach(b => {
      const on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', String(on));
    });
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      setActive(btn);
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

/* ─── PROJECT MODAL ────────────────────────────── */

let lastFocused = null;

function openModal (id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  lastFocused = document.activeElement;

  $('#modal-tags').innerHTML = p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('');
  $('#modal-preview-icon').textContent = p.icon;
  $('#modal-title').textContent = p.title;
  $('#modal-desc').textContent  = p.longDesc;

  const award = $('#modal-award');
  award.classList.toggle('hidden', !p.award);
  award.classList.toggle('flex', Boolean(p.award));
  if (p.award) {
    award.innerHTML = `<i class="fas fa-award mt-0.5 shrink-0"></i><span>${esc(p.award)}</span>`;
  }

  $('#modal-features-list').innerHTML = p.features.map(f => `
    <li class="flex gap-3 text-[13px] leading-relaxed text-ink-300">
      <i class="fas fa-check mt-1 shrink-0 text-[10px] text-accent-400"></i>
      <span>${esc(f)}</span>
    </li>
  `).join('');

  // Hide dead links rather than rendering a button that goes nowhere
  const github = $('#modal-github');
  const live   = $('#modal-live');
  github.classList.toggle('hidden', !hasLink(p.github));
  live.classList.toggle('hidden', !hasLink(p.live));
  if (hasLink(p.github)) github.href = p.github;
  if (hasLink(p.live))   live.href   = p.live;

  const overlay = $('#modal-overlay');
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
  $('#modal-close').focus();
}

function closeModal () {
  const overlay = $('#modal-overlay');
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

function initModal () {
  const overlay = $('#modal-overlay');

  $('#modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
  });
}

/* ─── TIMELINE ─────────────────────────────────── */

function timelineItemHTML (item) {
  const dot = item.highlight
    ? 'border-gold-500/40 bg-gold-500/10 text-gold-400'
    : 'border-ink-50/10 bg-ink-800 text-accent-400';

  const card = item.highlight
    ? 'border-gold-500/25 bg-gold-500/4'
    : '';

  return `
    <li class="timeline-item reveal relative pl-10 pb-10 last:pb-0">
      <span class="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border ${dot}">
        <i class="fas fa-${item.highlight ? 'trophy' : 'circle'} text-[9px]"></i>
      </span>
      <div class="surface ${card} p-5">
        <span class="font-mono text-[11px] text-accent-400">${esc(item.period)}</span>
        <h3 class="mt-2 text-[15px]">${esc(item.title)}</h3>
        <p class="mt-1 text-[13px] text-ink-400">${esc(item.org)}</p>
        <p class="mt-3 text-[13px] leading-relaxed text-ink-300">${esc(item.desc)}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          ${item.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
        </div>
      </div>
    </li>
  `;
}

function buildTimelines () {
  Object.entries(TIMELINE).forEach(([key, items]) => {
    const panel = $(`#timeline-${key}`);
    if (!panel) return;

    panel.innerHTML = `
      <ol class="relative max-w-3xl before:absolute before:bottom-0 before:left-[13px] before:top-2 before:w-px before:bg-ink-50/7">
        ${items.map(timelineItemHTML).join('')}
      </ol>
    `;
  });
}

function initTimelineTabs () {
  const tabs = $$('.timeline-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        const on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', String(on));
      });

      ['education', 'work'].forEach(key => {
        $(`#timeline-${key}`).classList.toggle('hidden', key !== tab.dataset.tab);
      });

      // The hidden panel's reveals never fired an intersection — show them now
      $$(`#timeline-${tab.dataset.tab} .reveal`).forEach(el => el.classList.add('visible'));
    });
  });
}

/* ─── COUNTERS ─────────────────────────────────── */

function initCounters () {
  observeOnce($$('[data-count]'), el => {
    const end    = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';

    if (prefersReducedMotion()) {
      el.textContent = end + suffix;
      return;
    }

    const duration = 1400;
    const start    = performance.now();

    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * end) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = end + suffix;
    };

    requestAnimationFrame(tick);
  }, { threshold: 0.5 });
}

/* ─── CONTACT FORM ─────────────────────────────── */

function initContactForm () {
  const form    = $('#contact-form');
  const success = $('#form-success');
  const error   = $('#form-error');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    error.classList.add('hidden');

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const btn  = $('.btn-submit', form);
    const html = btn.innerHTML;
    btn.disabled  = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending…';

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      form.classList.add('hidden');
      success.classList.remove('hidden');
      success.classList.add('flex');
    } catch (err) {
      error.textContent = 'Could not send — please email clydedominick09@gmail.com directly.';
      error.classList.remove('hidden');
      btn.disabled  = false;
      btn.innerHTML = html;
    }
  });
}

/* ─── INIT ─────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  buildSkills();
  buildTech();
  buildProjectCards();
  buildTimelines();

  initNav();
  initTyped();
  initFilter();
  initModal();
  initTimelineTabs();
  initContactForm();
  initCounters();
  initReveal();
});
