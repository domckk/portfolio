/* =============================================
   GALAXY PORTFOLIO — MAIN SCRIPT
   ============================================= */

'use strict';

/* ─── PROJECT DATA ─────────────────────────────── */
const PROJECTS = [
  {
    id: 'theramove',
    title: 'TheraMOVE',
    category: 'ai',
    featured: true,
    icon: '🩺',
    logo: 'image/theralogo.png',
    gradient: 'linear-gradient(135deg, #012a20 0%, #0a1840 100%)',
    tags: ['React Native', 'FastAPI', 'spaCy', 'PostgreSQL'],
    tagColors: [
      { bg: 'rgba(97,218,251,0.15)',  text: '#61DAFB' },
      { bg: 'rgba(0,150,136,0.15)',   text: '#26A69A' },
      { bg: 'rgba(139,92,246,0.15)',  text: '#8B5CF6' },
      { bg: 'rgba(51,103,145,0.15)',  text: '#336791' },
    ],
    description: 'Thesis — AI-powered therapeutic exercise recommender app for musculoskeletal pain patients using NLP and Case-Based Reasoning.',
    longDesc: 'Full Stack Lead Developer on TheraMOVE, a thesis research project at MMSU. The app uses a conversational interface to collect patient symptoms via NLP (spaCy + Rasa NLU), then a custom Case-Based Reasoning engine (Weighted K-NN) retrieves and adapts the most relevant therapeutic exercise plans for musculoskeletal pain patients.',
    award: '🏆 1st Place — Research Colloquium & Technology Pitching · Innovative Excellence in Health & Bioinformatics Technology',
    features: [
      'Conversational symptom intake via NLP (spaCy + Rasa NLU)',
      'Case-Based Reasoning engine — Weighted K-NN similarity',
      'Personalized therapeutic exercise recommendations',
      'React Native + Expo mobile app (TypeScript)',
      'FastAPI backend with SQLAlchemy ORM',
      'PostgreSQL via Supabase + Firebase Auth',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
  {
    id: 'vital-link',
    title: 'Vital-Link: AI Chatbot',
    category: 'ai',
    icon: '🏥',
    logo: 'image/vitallink.png',
    gradient: 'linear-gradient(135deg, #0a1840 0%, #1a0840 100%)',
    tags: ['Python', 'AI', 'NLP', 'Healthcare'],
    tagColors: [
      { bg: 'rgba(55,118,171,0.15)',  text: '#3776AB' },
      { bg: 'rgba(139,92,246,0.15)',  text: '#8B5CF6' },
      { bg: 'rgba(34,211,238,0.12)',  text: '#22D3EE' },
      { bg: 'rgba(16,185,129,0.12)',  text: '#10B981' },
    ],
    description: 'AI-powered chatbot that assists users in identifying potential diseases by analyzing symptoms they provide.',
    longDesc:    'Lead Developer on Vital-Link, an AI-driven healthcare chatbot. The system analyzes user-reported symptoms and maps them to potential conditions using trained NLP models. Designed to serve as a preliminary health guide, not a replacement for medical professionals.',
    features: [
      'Symptom-to-disease mapping via NLP',
      'Conversational AI interface',
      'Multi-symptom analysis engine',
      'Healthcare-focused response filtering',
      'Lead Developer role',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
  {
    id: 'kryptos',
    title: 'Kryptos_1',
    category: 'security',
    icon: '🔐',
    gradient: 'linear-gradient(135deg, #0d0a25 0%, #1a0020 100%)',
    tags: ['Python', 'Cryptography', 'SHA-256', 'Security'],
    tagColors: [
      { bg: 'rgba(55,118,171,0.15)',  text: '#3776AB' },
      { bg: 'rgba(236,72,153,0.15)',  text: '#EC4899' },
      { bg: 'rgba(255,153,0,0.12)',   text: '#FF9900' },
      { bg: 'rgba(139,92,246,0.12)',  text: '#8B5CF6' },
    ],
    description: 'Python encryption program that secures data using salt-and-pepper method with K1 cryptography and SHA-256 hashing.',
    longDesc:    'A Python-based data security tool implementing a multi-layered encryption scheme. Combines a custom K1 cryptographic algorithm with SHA-256 hashing and salt-and-pepper methodology to protect sensitive data. Decryption is only possible with the correct password.',
    features: [
      'Salt and pepper encryption method',
      'Custom K1 cryptographic algorithm',
      'SHA-256 hashing integration',
      'Password-protected decryption',
      'Secure data storage format',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
  {
    id: 'sneaky-link',
    title: 'Sneaky-Link: Chat App',
    category: 'fullstack',
    icon: '💬',
    gradient: 'linear-gradient(135deg, #001030 0%, #0a2010 100%)',
    tags: ['JavaScript', 'React', 'Node.js', 'E2E Encryption'],
    tagColors: [
      { bg: 'rgba(247,223,30,0.12)',  text: '#F7DF1E' },
      { bg: 'rgba(97,218,251,0.12)',  text: '#61DAFB' },
      { bg: 'rgba(67,133,61,0.15)',   text: '#4CAF50' },
      { bg: 'rgba(236,72,153,0.12)',  text: '#EC4899' },
    ],
    description: 'Real-time chat application with end-to-end encryption, allowing users to communicate privately and securely.',
    longDesc:    'Front End Developer on Sneaky-Link, a real-time chat application built with security as a core feature. All messages are end-to-end encrypted, ensuring only the intended recipients can read them. Supports private and group conversations.',
    features: [
      'End-to-end message encryption',
      'Real-time messaging via WebSockets',
      'Private & group conversations',
      'Secure user authentication',
      'Frontend development role',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
  {
    id: 'file-dedup',
    title: 'Windows File Deduplication',
    category: 'systems',
    icon: '🗂️',
    gradient: 'linear-gradient(135deg, #001020 0%, #0a1030 100%)',
    tags: ['Python', 'Networking', 'SHA-256', 'Distributed'],
    tagColors: [
      { bg: 'rgba(55,118,171,0.15)',  text: '#3776AB' },
      { bg: 'rgba(34,211,238,0.12)',  text: '#22D3EE' },
      { bg: 'rgba(255,153,0,0.12)',   text: '#FF9900' },
      { bg: 'rgba(99,102,241,0.12)',  text: '#818CF8' },
    ],
    description: 'Distributed system to eliminate duplicate files across networked client machines using a centralized SHA-256 hash server.',
    longDesc:    'Documentation Leader on a distributed file deduplication system for Windows. A centralized server stores SHA-256 hashes of all files across client machines. Clients query the server to detect duplicate files and remove them locally, saving storage at scale.',
    features: [
      'Centralized SHA-256 hash registry',
      'Client-server network architecture',
      'Cross-machine duplicate detection',
      'Automated local file cleanup',
      'Documentation leadership role',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
  {
    id: 'lamail',
    title: 'LaMail: Email Client',
    category: 'fullstack',
    icon: '📧',
    gradient: 'linear-gradient(135deg, #0a1840 0%, #001030 100%)',
    tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'Email'],
    tagColors: [
      { bg: 'rgba(247,223,30,0.12)',  text: '#F7DF1E' },
      { bg: 'rgba(227,79,38,0.12)',   text: '#E34F26' },
      { bg: 'rgba(67,133,61,0.12)',   text: '#4CAF50' },
      { bg: 'rgba(59,130,246,0.12)',  text: '#3B82F6' },
    ],
    description: 'A simple email client application with an intuitive interface and essential email management features.',
    longDesc:    'Lead Developer on LaMail, a clean and functional email client application. Designed with usability in mind, the interface makes email management straightforward with core features like composing, reading, sorting, and managing email threads.',
    features: [
      'Compose, send, and receive emails',
      'Intuitive inbox management',
      'Thread-based conversation view',
      'Search and filter functionality',
      'Lead Developer role',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
  {
    id: 'ml-analytics',
    title: 'Mobile Legends Analytics',
    category: 'ai',
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #1a0a20 0%, #0a1840 100%)',
    tags: ['Python', 'Data Analytics', 'MySQL', 'Statistics'],
    tagColors: [
      { bg: 'rgba(55,118,171,0.15)',  text: '#3776AB' },
      { bg: 'rgba(139,92,246,0.15)',  text: '#8B5CF6' },
      { bg: 'rgba(51,103,145,0.15)',  text: '#336791' },
      { bg: 'rgba(16,185,129,0.12)',  text: '#10B981' },
    ],
    description: 'Data analytics tool that evaluates win/loss probabilities based on Mobile Legends hero picks, bans, and seasonal meta.',
    longDesc:    'Lead Developer on a data analytics tool for Mobile Legends Bang Bang. Analyzes hero pick and ban data to calculate win/loss probabilities. Provides insights into meta lineup win rates across different game seasons, helping players make strategic decisions.',
    features: [
      'Hero pick/ban win probability engine',
      'Meta lineup win rate analysis',
      'Cross-season performance tracking',
      'Interactive data visualizations',
      'MySQL-backed statistics storage',
    ],
    github: 'https://github.com/domckk',
    live:   '#',
  },
];

/* ─── STARFIELD ────────────────────────────────── */
class StarField {
  constructor () {
    this.canvas = document.getElementById('starfield');
    this.ctx    = this.canvas.getContext('2d');
    this.stars  = [];
    this.mouse  = { x: 0, y: 0 };
    this.resize();
    this.buildStars();
    this.bindEvents();
    this.loop();
  }

  resize () {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  buildStars () {
    const density = Math.floor((this.canvas.width * this.canvas.height) / 3800);
    this.stars = [];

    for (let i = 0; i < density; i++) {
      this.stars.push({
        x:       Math.random() * this.canvas.width,
        y:       Math.random() * this.canvas.height,
        r:       Math.random() * 1.4 + 0.2,
        base:    Math.random(),
        speed:   Math.random() * 0.025 + 0.005,
        offset:  Math.random() * Math.PI * 2,
        layer:   Math.floor(Math.random() * 3),
      });
    }

    // Coloured nebula blobs
    const palettes = [
      'rgba(139,92,246,',
      'rgba(59,130,246,',
      'rgba(236,72,153,',
      'rgba(34,211,238,',
    ];

    for (let i = 0; i < 10; i++) {
      this.stars.push({
        x:      Math.random() * this.canvas.width,
        y:      Math.random() * this.canvas.height,
        r:      Math.random() * 2.5 + 1.5,
        base:   Math.random() * 0.4 + 0.1,
        speed:  Math.random() * 0.008 + 0.002,
        offset: Math.random() * Math.PI * 2,
        layer:  0,
        glow:   true,
        color:  palettes[Math.floor(Math.random() * palettes.length)],
      });
    }
  }

  draw () {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const t    = Date.now() * 0.001;
    const mx   = (this.mouse.x / canvas.width  - 0.5) * 28;
    const my   = (this.mouse.y / canvas.height - 0.5) * 28;

    for (const s of this.stars) {
      const twinkle = s.base * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.offset));
      const pf  = (s.layer + 1) * 0.28;
      const x   = s.x + mx * pf;
      const y   = s.y + my * pf;

      if (s.glow) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, s.r * 6);
        g.addColorStop(0, s.color + twinkle + ')');
        g.addColorStop(1, s.color + '0)');
        ctx.beginPath();
        ctx.arc(x, y, s.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.glow
        ? `${s.color}${(twinkle * 0.9).toFixed(2)})`
        : `rgba(255,255,255,${(twinkle * 0.75).toFixed(2)})`;
      ctx.fill();
    }
  }

  loop () {
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  bindEvents () {
    window.addEventListener('resize', () => {
      this.resize();
      this.buildStars();
    });

    document.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
}

/* ─── CUSTOM CURSOR ────────────────────────────── */
class Cursor {
  constructor () {
    if (window.innerWidth <= 768) return;
    this.dot    = document.getElementById('cursor');
    this.ring   = document.getElementById('cursor-ring');
    this.pos    = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.init();
  }

  init () {
    document.addEventListener('mousemove', e => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
      this.dot.style.left = e.clientX + 'px';
      this.dot.style.top  = e.clientY + 'px';
    });

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      this.pos.x = lerp(this.pos.x, this.target.x, 0.12);
      this.pos.y = lerp(this.pos.y, this.target.y, 0.12);
      this.ring.style.left = this.pos.x + 'px';
      this.ring.style.top  = this.pos.y + 'px';
      requestAnimationFrame(tick);
    };
    tick();

    document.querySelectorAll('a, button, .project-card, .filter-btn, .timeline-tab').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.dot.classList.add('hover');
        this.ring.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        this.dot.classList.remove('hover');
        this.ring.classList.remove('hover');
      });
    });
  }
}

/* ─── NAVIGATION ───────────────────────────────── */
function initNav () {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    const open  = mobileNav.classList.contains('open');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity   = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    });
  });

  // Active link highlight on scroll
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(s => io.observe(s));
}

/* ─── TYPED.JS ─────────────────────────────────── */
function initTyped () {
  if (typeof Typed === 'undefined') return;
  new Typed('#typed', {
    strings:   ['Aspiring Software Engineer', 'Full Stack Developer', 'Cybersecurity Enthusiast', 'Problem Solver', 'CS Student @ MMSU'],
    typeSpeed:  55,
    backSpeed:  28,
    backDelay: 2200,
    loop:       true,
  });
}

/* ─── SCROLL REVEAL ────────────────────────────── */
function initScrollReveal () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─── SKILL BARS ───────────────────────────────── */
function initSkillBars () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target;
        fill.style.width = fill.dataset.width + '%';
        fill.classList.add('animated');
        io.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-fill').forEach(b => io.observe(b));
}

/* ─── 3-D CARD TILT ────────────────────────────── */
function initCardTilt () {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = e.clientX - r.left;
      const y  = e.clientY - r.top;
      const rx = ((y - r.height / 2) / (r.height / 2)) * -7;
      const ry = ((x - r.width  / 2) / (r.width  / 2)) *  7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ─── PROJECT FILTER ───────────────────────────── */
function initFilter () {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;

      cards.forEach(c => {
        const show = f === 'all' || c.dataset.category === f;
        c.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ─── PROJECT MODAL ────────────────────────────── */
function buildProjectCards () {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  PROJECTS.forEach(p => {
    const tagsHTML = p.tags.map((t, i) =>
      `<span class="project-tag" style="background:${p.tagColors[i].bg};color:${p.tagColors[i].text};border:1px solid ${p.tagColors[i].text}44">${t}</span>`
    ).join('');

    const card = document.createElement('div');
    card.className    = `project-card reveal${p.featured ? ' featured-card' : ''}`;
    card.dataset.id   = p.id;
    card.dataset.category = p.category;

    const githubHref = p.github && p.github !== '#' ? p.github : 'javascript:void(0)';
    const liveHref   = p.live   && p.live   !== '#' ? p.live   : 'javascript:void(0)';

    card.innerHTML = `
      <div class="project-preview">
        <div class="project-preview-bg" style="background:${p.gradient}">
          <div class="project-preview-dots"></div>
          ${p.logo
            ? `<img src="${p.logo}" class="project-preview-logo" alt="${p.title} logo">`
            : `<div class="project-preview-icon">${p.icon}</div>`}
        </div>
        ${p.featured ? '<div class="project-thesis-badge"><i class="fas fa-star"></i> Thesis</div>' : ''}
        ${p.award ? '<div class="project-award-badge"><i class="fas fa-trophy"></i> 1st Place</div>' : ''}
      </div>
      <div class="project-body">
        <div class="project-tags">${tagsHTML}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-footer">
          <div class="project-links">
            <a href="${githubHref}" class="project-link" title="GitHub" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>
            <a href="${liveHref}"   class="project-link" title="Live Demo" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>
          </div>
          <span class="project-view-btn">Details <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(p.id));
    grid.appendChild(card);
  });
}

function initModal () {
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal (id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const tagsHTML = p.tags.map((t, i) =>
    `<span class="project-tag" style="background:${p.tagColors[i].bg};color:${p.tagColors[i].text};border:1px solid ${p.tagColors[i].text}44">${t}</span>`
  ).join('');

  document.getElementById('modal-preview-bg').style.background = p.gradient;
  document.getElementById('modal-preview-icon').textContent = p.icon;
  document.getElementById('modal-title').textContent           = p.title;
  document.getElementById('modal-desc').textContent            = p.longDesc;
  const awardEl = document.getElementById('modal-award');
  if (p.award) {
    awardEl.textContent = p.award;
    awardEl.style.display = '';
  } else {
    awardEl.style.display = 'none';
  }
  document.getElementById('modal-tags').innerHTML              = tagsHTML;
  document.getElementById('modal-features-list').innerHTML     = p.features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modal-github').href = p.github && p.github !== '#' ? p.github : 'javascript:void(0)';
  document.getElementById('modal-live').href   = p.live   && p.live   !== '#' ? p.live   : 'javascript:void(0)';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal () {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── TIMELINE TABS ────────────────────────────── */
function initTimelineTabs () {
  const tabs = document.querySelectorAll('.timeline-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.timeline-content-panel').forEach(p => {
        p.classList.toggle('active', p.id === 'timeline-' + tab.dataset.tab);
      });
    });
  });
}

/* ─── TIMELINE REVEAL ──────────────────────────── */
function initTimelineReveal () {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.timeline-item').forEach(el => io.observe(el));
}

/* ─── CONTACT FORM ─────────────────────────────── */
function initContactForm () {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const original = btn.innerHTML;
    btn.innerHTML  = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled   = true;

    setTimeout(() => {
      form.style.display    = 'none';
      success.style.display = 'flex';
    }, 1600);
  });
}

/* ─── HERO ENTRANCE ────────────────────────────── */
function heroEntrance () {
  const els = [
    '.hero-badge', '.hero-title', '.hero-subtitle',
    '.hero-desc', '.hero-cta', '.hero-stats', '.hero-visual',
  ];
  els.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.cssText = 'opacity:0;transform:translateY(28px)';
    setTimeout(() => {
      el.style.transition = 'opacity .75s ease, transform .75s ease';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, 200 + i * 110);
  });
}

/* ─── LOADING SCREEN ───────────────────────────── */
function initLoading () {
  const screen = document.getElementById('loading-screen');
  setTimeout(() => {
    screen.classList.add('hidden');
    heroEntrance();
  }, 1600);
}

/* ─── SMOOTH SCROLL FOR NAV LINKS ─────────────── */
function initSmoothScroll () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ─── COUNTER ANIMATION ────────────────────────── */
function initCounters () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el    = e.target;
      const end   = parseInt(el.dataset.count, 10);
      const dur   = 1500;
      const start = performance.now();

      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor(p * end) + (el.dataset.suffix || '');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = end + (el.dataset.suffix || '');
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ─── INIT ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  new StarField();
  new Cursor();
  initNav();
  initTyped();
  initSkillBars();
  buildProjectCards();
  initCardTilt();
  initFilter();
  initScrollReveal();
  initModal();
  initTimelineTabs();
  initTimelineReveal();
  initContactForm();
  initSmoothScroll();
  initCounters();
});
