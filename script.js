/**
 * Raghu Engineering College (Autonomous) - REC Event Management System (REC-EMS)
 * Pure JavaScript State Controller, QR Scanner Engine & Responsive App Logic
 */

// Initial Seed Data for Raghu Engineering College
const initialEvents = [
  {
    id: 1,
    title: "REC National AI & ML Hackathon 2026",
    slug: "rec-national-aiml-hackathon-2026",
    category: "technical",
    categoryName: "Technical",
    shortSummary: "24-hour sprint to build AI-powered solutions for smart healthcare, green energy, and sustainable campus automation.",
    description: "Participate in the flagship 24-Hour National AI & Machine Learning Hackathon organized by the Department of Computer Science & Engineering at Raghu Engineering College! Open to B.Tech students across all departments. Bring your laptops, ideate innovative solutions using computer vision, NLP, and agentic systems. Exciting cash prizes of INR 50,000, trophies, and direct internship interview opportunities with tech sponsors.",
    venue: "APJ Abdul Kalam Computing Center - CSE Block, REC",
    date: "2026-10-08",
    time: "09:30 AM - 05:30 PM",
    deadline: "2026-10-06",
    capacity: 120,
    registeredCount: 42,
    status: "upcoming",
    coordinator: "Dr. Ch. Srinivasu",
    contact: "srinivasu.cse@raghuenggcollege.in | +91 9876543210",
    banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 18,
    isTeamAllowed: true
  },
  {
    id: 2,
    title: "Tarang 2026: REC Annual Cultural Fest",
    slug: "tarang-2026-rec-cultural-fest",
    category: "cultural",
    categoryName: "Cultural",
    shortSummary: "The biggest celebration of music, rhythm, theatre, and creative student expression at Raghu Engineering College.",
    description: "Experience the electrifying vibe of Tarang 2026! Featuring Solo & Group Singing, Western & Classical Dance, Battle of the Bands, Street Play (Nukkad Natak), and campus art exhibitions. Refreshments and official certificates provided to all participating REC students.",
    venue: "Sir CV Raman Open Air Amphitheatre, REC Campus",
    date: "2026-10-15",
    time: "04:00 PM - 09:30 PM",
    deadline: "2026-10-13",
    capacity: 350,
    registeredCount: 180,
    status: "upcoming",
    coordinator: "Dr. R. Kameswara Rao",
    contact: "kameswararao.admin@raghuenggcollege.in | +91 9876543211",
    banner: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviewsCount: 32,
    isTeamAllowed: true
  },
  {
    id: 3,
    title: "Hands-on Workshop: Deep Learning with PyTorch",
    slug: "deep-learning-pytorch-workshop-rec",
    category: "workshops",
    categoryName: "Workshops",
    shortSummary: "Step-by-step masterclass on building and training neural networks using PyTorch & HuggingFace in REC Labs.",
    description: "Designed specifically for AI-ML, CSE, and IT students. Topics include Tensor operations, CNN architecture design, Transfer Learning with ResNet, and fine-tuning Transformer models. Pre-requisite: Basic Python proficiency. Certificates accredited by Raghu Engineering College will be issued to all active attendees.",
    venue: "Dr. Sarvepalli Radhakrishnan Central Auditorium, REC",
    date: "2026-10-04",
    time: "10:00 AM - 04:00 PM",
    deadline: "2026-10-03",
    capacity: 60,
    registeredCount: 54,
    status: "upcoming",
    coordinator: "Dr. S. Satyanarayana",
    contact: "satyanarayana.ai@raghuenggcollege.in | +91 9876543212",
    banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 22,
    isTeamAllowed: false
  },
  {
    id: 4,
    title: "REC Inter-Department Sports Trophy 2026",
    slug: "rec-inter-dept-sports-trophy-2026",
    category: "sports",
    categoryName: "Sports",
    shortSummary: "Annual inter-department athletic championship clash across cricket, badminton, volleyball, and table tennis.",
    description: "Represent your engineering department! League stage matches followed by semifinals and grand finale. Trophies, medals, and best athlete awards will be felicitated by the Principal during the valedictory ceremony.",
    venue: "REC Central Sports Complex & Cricket Ground",
    date: "2026-10-12",
    time: "08:00 AM - 06:00 PM",
    deadline: "2026-10-10",
    capacity: 180,
    registeredCount: 95,
    status: "upcoming",
    coordinator: "Prof. K. Rambabu",
    contact: "sports.rambabu@raghuenggcollege.in | +91 9876543213",
    banner: "https://images.unsplash.com/photo-1531415074868-036b107e775a?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviewsCount: 15,
    isTeamAllowed: true
  },
  {
    id: 5,
    title: "Guest Seminar: Next Horizon in Generative AI",
    slug: "rec-generative-ai-industry-seminar",
    category: "seminars",
    categoryName: "Seminars",
    shortSummary: "Industry keynote on LLMs, Autonomous Agent Systems, and Career Opportunities for REC Engineers.",
    description: "Distinguished tech keynote session with senior industry architects exploring production deployments of LLMs, agentic workflows, and future careers in Artificial Intelligence. Q&A session with tea and networking at REC campus.",
    venue: "Visvesvaraya Mechanical Seminar Hall, REC Block-B",
    date: "2026-09-25",
    time: "11:00 AM - 01:30 PM",
    deadline: "2026-09-23",
    capacity: 200,
    registeredCount: 185,
    status: "completed",
    coordinator: "Dr. Ch. Srinivasu",
    contact: "srinivasu.cse@raghuenggcollege.in | +91 9876543210",
    banner: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 45,
    isTeamAllowed: false
  }
];

const initialAnnouncements = [
  {
    id: 1,
    eventId: 1,
    eventTitle: "REC National AI Hackathon 2026",
    title: "Problem Statements released at 9:00 AM Sharp",
    message: "Report to APJ Abdul Kalam Computing Center by 8:45 AM. High-speed Campus Wi-Fi credentials will be distributed at registration desk.",
    urgent: true,
    time: "10 mins ago"
  },
  {
    id: 2,
    eventId: 3,
    eventTitle: "Deep Learning with PyTorch",
    title: "Software Setup: Anaconda & VS Code",
    message: "Participants are requested to pre-install Python 3.11+ and PyTorch prior to arriving for the hands-on session in Radhakrishnan Auditorium.",
    urgent: false,
    time: "2 hours ago"
  }
];

const initialRegistrations = [
  {
    passId: "REC-2026-CS001-89B2",
    eventId: 1,
    studentName: "Alex Johnson",
    rollNumber: "24981A0501",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    email: "student@raghuenggcollege.in",
    phone: "+91 9123456780",
    regDate: "2026-09-28",
    status: "confirmed",
    certId: null,
    isTeam: true,
    teamName: "REC Neural Ninjas",
    members: ["Priya Rao (24981A0515)", "Rahul Sharma (24981A4208)"]
  },
  {
    passId: "REC-2026-CS001-45F1",
    eventId: 5,
    studentName: "Alex Johnson",
    rollNumber: "24981A0501",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    email: "student@raghuenggcollege.in",
    phone: "+91 9123456780",
    regDate: "2026-09-24",
    status: "attended",
    certId: "CERT-REC-2026-98A72F",
    isTeam: false,
    teamName: null,
    members: []
  },
  {
    passId: "REC-2026-CS002-77C3",
    eventId: 1,
    studentName: "Sam Taylor",
    rollNumber: "24981A0502",
    department: "Computer Science & Engineering",
    year: "3rd Year",
    email: "sam@raghuenggcollege.in",
    phone: "+91 9123456781",
    regDate: "2026-09-28",
    status: "confirmed",
    certId: null,
    isTeam: false,
    teamName: null,
    members: []
  }
];

const initialCoordinators = [
  {
    id: 1,
    name: "Dr. Ch. Srinivasu",
    email: "srinivasu.cse@raghuenggcollege.in",
    department: "Computer Science & Engineering",
    phone: "+91 9876543210",
    role: "Professor & HOD (CSE)",
    status: "active"
  },
  {
    id: 2,
    name: "Dr. R. Kameswara Rao",
    email: "kameswararao.admin@raghuenggcollege.in",
    department: "Student Affairs",
    phone: "+91 9876543211",
    role: "Dean & Cultural Convener",
    status: "active"
  },
  {
    id: 3,
    name: "Dr. S. Satyanarayana",
    email: "satyanarayana.ai@raghuenggcollege.in",
    department: "AI & Machine Learning",
    phone: "+91 9876543212",
    role: "HOD & Technical In-Charge",
    status: "active"
  },
  {
    id: 4,
    name: "Prof. K. Rambabu",
    email: "sports.rambabu@raghuenggcollege.in",
    department: "Physical Education",
    phone: "+91 9876543213",
    role: "Sports Director",
    status: "active"
  }
];

// App State (Persisted in localStorage)
class AppState {
  constructor() {
    this.events = JSON.parse(localStorage.getItem('rec_events')) || initialEvents;
    this.announcements = JSON.parse(localStorage.getItem('rec_announcements')) || initialAnnouncements;
    this.registrations = JSON.parse(localStorage.getItem('rec_registrations')) || initialRegistrations;
    this.coordinators = JSON.parse(localStorage.getItem('rec_coordinators')) || initialCoordinators;
    this.currentRole = localStorage.getItem('rec_role') || 'student'; // 'student', 'coordinator', 'admin'
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.activeTab = 'events'; // 'events', 'my-events', 'coordinator', 'admin'
    this.theme = localStorage.getItem('rec_theme') || 'light';
    this.currentRegType = 'individual'; // 'individual' or 'team'
    this.feedbacks = JSON.parse(localStorage.getItem('rec_feedbacks')) || [];
  }

  save() {
    localStorage.setItem('rec_events', JSON.stringify(this.events));
    localStorage.setItem('rec_announcements', JSON.stringify(this.announcements));
    localStorage.setItem('rec_registrations', JSON.stringify(this.registrations));
    localStorage.setItem('rec_coordinators', JSON.stringify(this.coordinators));
    localStorage.setItem('rec_role', this.currentRole);
    localStorage.setItem('rec_theme', this.theme);
    localStorage.setItem('rec_feedbacks', JSON.stringify(this.feedbacks));
  }
}

const state = new AppState();

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  setupThemeToggle();
  setupNavigation();
  setupRoleSwitcher();
  setupSearchAndFilters();
  setupModalHandlers();
  setupFeedbackRating();
  populateCoordinatorDropdown();
  applyRolePermissions();
  renderAll();
});

// ================= THEME ENGINE (LIGHT & DARK MODE) =================
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  const mobileThemeText = document.getElementById('mobile-theme-text');

  if (icon) {
    icon.className = theme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill';
  }
  if (mobileThemeText) {
    mobileThemeText.innerText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  state.save();
  showToast(`Theme changed to ${newTheme.toUpperCase()} mode.`);
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
}

// ================= MOBILE NAVIGATION & DRAWER =================
function toggleMobileMenu(forceState) {
  const drawer = document.getElementById('mobile-drawer');
  const icon = document.getElementById('mobile-menu-icon');
  if (!drawer) return;

  const isOpen = forceState !== undefined ? forceState : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  if (icon) {
    icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
  }
}

// ================= ROLE SWITCHER & PERMISSIONS =================
function setupRoleSwitcher() {
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.getAttribute('data-role');
      setRole(role);
    });
  });
}

function setRole(role) {
  state.currentRole = role;
  state.save();

  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-role') === role);
  });

  applyRolePermissions();
  renderAll();
  showToast(`Switched view to ${role.toUpperCase()} role.`);
}

function applyRolePermissions() {
  const isCoordinator = state.currentRole === 'coordinator' || state.currentRole === 'admin';
  const isAdmin = state.currentRole === 'admin';

  document.querySelectorAll('.coordinator-only').forEach(el => {
    el.style.display = isCoordinator ? '' : 'none';
  });

  document.querySelectorAll('.admin-only').forEach(el => {
    el.style.display = isAdmin ? '' : 'none';
  });

  if (!isCoordinator && (state.activeTab === 'coordinator' || state.activeTab === 'admin')) {
    switchTab('events');
  } else if (!isAdmin && state.activeTab === 'admin') {
    switchTab('coordinator');
  }
}

// ================= SCROLL & NAVIGATION CONTROLLER =================
function scrollToSection(sectionId) {
  const el = typeof sectionId === 'string' ? document.getElementById(sectionId) : sectionId;
  if (!el) return;
  const nav = document.querySelector('.main-nav');
  const navHeight = nav ? nav.offsetHeight : 64;
  const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 14;
  window.scrollTo({
    top: Math.max(0, targetPos),
    behavior: 'smooth'
  });
}

function setupNavigation() {
  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab, true);
    });
  });
}

function switchTab(tabName, shouldScroll = true) {
  if (tabName === 'coordinator' && state.currentRole === 'student') {
    showToast('Coordinator Desk is restricted to REC Faculty & Admin roles.');
    tabName = 'events';
  }
  if (tabName === 'admin' && state.currentRole !== 'admin') {
    showToast('Admin Desk is restricted to REC System Admin role.');
    tabName = state.currentRole === 'coordinator' ? 'coordinator' : 'events';
  }

  state.activeTab = tabName;

  document.querySelectorAll('.nav-link-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-tab') === tabName);
  });

  const viewEvents = document.getElementById('view-events');
  const viewMyEvents = document.getElementById('view-my-events');
  const viewCoord = document.getElementById('view-coordinator');
  const viewAdmin = document.getElementById('view-admin');

  if (viewEvents) viewEvents.style.display = tabName === 'events' ? 'block' : 'none';
  if (viewMyEvents) viewMyEvents.style.display = tabName === 'my-events' ? 'block' : 'none';
  if (viewCoord) viewCoord.style.display = tabName === 'coordinator' ? 'block' : 'none';
  if (viewAdmin) viewAdmin.style.display = tabName === 'admin' ? 'block' : 'none';

  if (shouldScroll) {
    let targetSection = null;
    if (tabName === 'events') targetSection = viewEvents;
    else if (tabName === 'my-events') targetSection = viewMyEvents;
    else if (tabName === 'coordinator') targetSection = viewCoord;
    else if (tabName === 'admin') targetSection = viewAdmin;

    if (targetSection) {
      setTimeout(() => {
        scrollToSection(targetSection);
      }, 15);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ================= SEARCH & CATEGORY FILTERS =================
function setupSearchAndFilters() {
  const searchInput = document.getElementById('event-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderEventCards();
    });
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        renderEventCards();
        scrollToSection('view-events');
      }
    });
  }

  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      renderEventCards();
      scrollToSection('view-events');
    });
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.getAttribute('data-category');
      renderEventCards();
    });
  });
}

// ================= RENDER ENGINES =================
function renderAll() {
  renderStats();
  renderEventCards();
  renderAnnouncements();
  renderMyRegistrations();
  renderCoordinatorDashboard();
  renderAdminDashboard();
  renderScannerQuickChips();
}

function renderStats() {
  const totalEventsEl = document.getElementById('stat-total-events');
  const totalRegsEl = document.getElementById('stat-total-regs');
  const totalAttendedEl = document.getElementById('stat-total-attended');
  const totalCertsEl = document.getElementById('stat-total-certs');
  const navBadgeEl = document.getElementById('nav-reg-badge');

  const myRegs = state.registrations.filter(r => r.rollNumber === "24981A0501");
  const attendedCount = state.registrations.filter(r => r.status === 'attended').length;
  const certCount = state.registrations.filter(r => r.certId !== null || r.status === 'attended').length;

  if (totalEventsEl) totalEventsEl.innerText = state.events.length;
  if (totalRegsEl) totalRegsEl.innerText = state.registrations.length;
  if (totalAttendedEl) totalAttendedEl.innerText = attendedCount;
  if (totalCertsEl) totalCertsEl.innerText = certCount;

  if (navBadgeEl) {
    navBadgeEl.innerText = myRegs.length;
    navBadgeEl.style.display = myRegs.length > 0 ? 'inline-block' : 'none';
  }
}

function renderEventCards() {
  const container = document.getElementById('events-grid');
  const countLabel = document.getElementById('events-count-label');
  if (!container) return;

  let filtered = state.events.filter(evt => {
    const matchCategory = state.activeCategory === 'all' || evt.category === state.activeCategory;
    const matchSearch = state.searchQuery === '' ||
      evt.title.toLowerCase().includes(state.searchQuery) ||
      evt.venue.toLowerCase().includes(state.searchQuery) ||
      evt.coordinator.toLowerCase().includes(state.searchQuery) ||
      evt.categoryName.toLowerCase().includes(state.searchQuery);
    return matchCategory && matchSearch;
  });

  if (countLabel) {
    countLabel.innerText = `Showing ${filtered.length} of ${state.events.length} REC events`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px dashed var(--border-strong); border-radius: var(--radius-xl);">
        <i class="bi bi-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px; display: inline-block;"></i>
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">No REC Events Found</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Try modifying your search keywords or switching category filters.</p>
        <button class="btn-outline" style="margin-top: 14px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  const userRoll = "24981A0501";

  container.innerHTML = filtered.map(evt => {
    const isRegistered = state.registrations.some(r => r.eventId === evt.id && r.rollNumber === userRoll && r.status !== 'waitlist');
    const isWaitlisted = state.registrations.some(r => r.eventId === evt.id && r.rollNumber === userRoll && r.status === 'waitlist');
    const capacityPercent = Math.min(100, Math.round((evt.registeredCount / evt.capacity) * 100));
    const isFull = evt.registeredCount >= evt.capacity;

    let fillClass = '';
    if (capacityPercent >= 90) fillClass = 'full';
    else if (capacityPercent >= 75) fillClass = 'almost-full';

    const ratingStars = evt.rating ? `⭐ ${evt.rating} (${evt.reviewsCount || 10})` : '⭐ New';

    return `
      <div class="event-card" id="event-card-${evt.id}">
        <div class="event-card-banner">
          <img src="${evt.banner}" alt="${evt.title}" loading="lazy">
          <span class="card-category-badge badge-${evt.category}">${evt.categoryName}</span>
          <span class="card-status-badge status-${evt.status}">
            ${isFull ? 'CAPACITY FULL' : evt.status.toUpperCase()}
          </span>
        </div>

        <div class="event-card-body">
          <h3 class="event-card-title" onclick="openEventDetailsModal(${evt.id})">${evt.title}</h3>
          <p class="event-card-summary">${evt.shortSummary}</p>

          <div class="event-meta-list">
            <div class="event-meta-item">
              <i class="bi bi-calendar3"></i>
              <span>${formatDate(evt.date)} • ${evt.time}</span>
            </div>
            <div class="event-meta-item">
              <i class="bi bi-geo-alt"></i>
              <span>${evt.venue}</span>
            </div>
            <div class="event-meta-item">
              <i class="bi bi-person-badge"></i>
              <span>${evt.coordinator}</span>
              <span style="margin-left: auto; font-size: 0.75rem; font-weight: 700; color: #F59E0B;">${ratingStars}</span>
            </div>
          </div>

          <!-- Live Capacity Progress Bar -->
          <div class="capacity-progress-box">
            <div class="capacity-progress-label">
              <span>Seats: ${evt.registeredCount} / ${evt.capacity} Filled</span>
              <span>${capacityPercent}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill ${fillClass}" style="width: ${capacityPercent}%;"></div>
            </div>
          </div>

          <div class="event-card-footer">
            <button class="btn-outline" onclick="openEventDetailsModal(${evt.id})" title="View Details & Guidelines">
              <i class="bi bi-info-circle"></i> Details
            </button>

            ${isRegistered ? `
              <button class="btn-registered" onclick="openPassFromCard(${evt.id})">
                <i class="bi bi-qr-code"></i> REC Pass
              </button>
            ` : isWaitlisted ? `
              <button class="btn-registered btn-waitlist" onclick="openPassFromCard(${evt.id})">
                <i class="bi bi-hourglass-split"></i> Waitlisted (#1)
              </button>
            ` : isFull ? `
              <button class="btn-primary-action btn-waitlist" onclick="openRegisterModal(${evt.id})">
                <i class="bi bi-person-plus"></i> Join Waitlist
              </button>
            ` : `
              <button class="btn-primary-action" onclick="openRegisterModal(${evt.id})">
                <i class="bi bi-ticket-perforated"></i> Register
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  state.searchQuery = '';
  state.activeCategory = 'all';
  const searchInput = document.getElementById('event-search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const allTab = document.querySelector('.tab-btn[data-category="all"]');
  if (allTab) allTab.classList.add('active');
  renderEventCards();
}

function renderAnnouncements() {
  const container = document.getElementById('broadcast-list');
  if (!container) return;

  if (state.announcements.length === 0) {
    container.innerHTML = `<p style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 10px;">No notices posted yet.</p>`;
    return;
  }

  container.innerHTML = state.announcements.map(ann => `
    <div class="broadcast-item ${ann.urgent ? 'urgent' : ''}">
      <div class="broadcast-meta">
        <span>${ann.eventTitle}</span>
        <span>${ann.time}</span>
      </div>
      <div class="broadcast-title">${ann.title}</div>
      <div class="broadcast-msg">${ann.message}</div>
    </div>
  `).join('');
}

// Student Portal (My Registrations, Passes & Certificates)
function renderMyRegistrations() {
  const container = document.getElementById('my-registrations-list');
  if (!container) return;

  const userRoll = "24981A0501";
  const myRegs = state.registrations.filter(r => r.rollNumber === userRoll);

  if (myRegs.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px dashed var(--border-strong); border-radius: var(--radius-xl);">
        <img src="logo.png" alt="REC Logo" style="width: 50px; height: 50px; margin: 0 auto 12px; object-fit: contain;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">No Registered REC Events Yet</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin: 6px 0 16px;">Browse the Raghu Engineering College event directory and register with 1-click to get your verified E-Pass.</p>
        <button class="btn-primary-action" style="max-width: 240px; margin: 0 auto;" onclick="switchTab('events')">
          <i class="bi bi-collection"></i> Explore Campus Events
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <!-- Mobile Card View (Screens <= 768px) -->
    <div class="mobile-reg-cards-list">
      ${myRegs.map(reg => {
        const event = state.events.find(e => e.id === reg.eventId) || {};
        const isAttended = reg.status === 'attended';
        const isWaitlist = reg.status === 'waitlist';

        return `
          <div class="student-reg-card">
            <div class="student-reg-card-header">
              <span class="student-pass-badge"><i class="bi bi-qr-code"></i> ${reg.passId}</span>
              <span class="status-badge ${isAttended ? 'status-attended' : isWaitlist ? 'status-cancelled' : 'status-confirmed'}">
                ${isAttended ? 'Verified Present' : isWaitlist ? 'Waitlist (#1)' : 'Confirmed Entry'}
              </span>
            </div>

            <div class="student-reg-card-title">${event.title || 'REC Event'}</div>

            <div class="student-reg-card-meta">
              <div class="student-reg-card-meta-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>${event.venue || 'REC Campus'}</span>
              </div>
              <div class="student-reg-card-meta-item">
                <i class="bi bi-calendar3"></i>
                <span>${formatDate(event.date)} • ${event.time || ''}</span>
              </div>
              <div class="student-reg-card-meta-item">
                <i class="bi bi-person-fill"></i>
                <span>${reg.isTeam ? `<strong style="color: var(--purple);"><i class="bi bi-people-fill"></i> Team: ${reg.teamName}</strong>` : 'Individual Pass'}</span>
              </div>
            </div>

            <div class="student-reg-card-actions">
              <button class="table-btn" onclick="viewTicketModal('${reg.passId}')">
                <i class="bi bi-qr-code"></i> REC Pass
              </button>
              ${isAttended ? `
                <button class="table-btn table-btn-success" onclick="viewCertificateModal('${reg.passId}')">
                  <i class="bi bi-award"></i> Certificate
                </button>
                <button class="table-btn" onclick="openFeedbackModal(${reg.eventId})" title="Submit Event Feedback">
                  <i class="bi bi-star"></i> Rate
                </button>
              ` : ''}
              <button class="table-btn" onclick="exportCalendarSingle('${reg.passId}')" title="Add to Calendar">
                <i class="bi bi-calendar-plus"></i> + Calendar
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Desktop Table View (Screens >= 769px) -->
    <div class="table-card desktop-table-view">
      <div class="table-header-bar">
        <div class="d-flex align-items-center gap-2" style="display: flex; align-items: center; gap: 8px;">
          <img src="logo.png" alt="REC Logo" style="width: 32px; height: 32px; object-fit: contain;">
          <div>
            <h3>My Registered REC Events</h3>
            <small>Student: Alex Johnson • Roll No: 24981A0501 (CSE)</small>
          </div>
        </div>
      </div>
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Pass ID</th>
              <th>Event Title & Venue</th>
              <th>Format</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${myRegs.map(reg => {
              const event = state.events.find(e => e.id === reg.eventId) || {};
              const isAttended = reg.status === 'attended';
              const isWaitlist = reg.status === 'waitlist';

              return `
                <tr>
                  <td><span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.78rem;">${reg.passId}</span></td>
                  <td><strong>${event.title || 'REC Event'}</strong><br><small style="color: var(--text-muted);">${event.venue || 'REC Campus'}</small></td>
                  <td>
                    ${reg.isTeam ? `<span class="badge-pill-team"><i class="bi bi-people-fill"></i> Team: ${reg.teamName}</span>` : `<span style="font-size: 0.75rem; color: var(--text-secondary);">Individual</span>`}
                  </td>
                  <td>${formatDate(event.date)} <br><small style="color: var(--text-muted);">${event.time || ''}</small></td>
                  <td>
                    <span class="status-badge ${isAttended ? 'status-attended' : isWaitlist ? 'status-cancelled' : 'status-confirmed'}">
                      ${isAttended ? 'Verified Present' : isWaitlist ? 'Waitlist (#1)' : 'Confirmed Entry'}
                    </span>
                  </td>
                  <td>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                      <button class="table-btn" onclick="viewTicketModal('${reg.passId}')">
                        <i class="bi bi-qr-code"></i> REC Pass
                      </button>
                      ${isAttended ? `
                        <button class="table-btn table-btn-success" onclick="viewCertificateModal('${reg.passId}')">
                          <i class="bi bi-award"></i> Certificate
                        </button>
                        <button class="table-btn" onclick="openFeedbackModal(${reg.eventId})" title="Submit Event Feedback">
                          <i class="bi bi-star"></i> Rate
                        </button>
                      ` : ''}
                      <button class="table-btn" onclick="exportCalendarSingle('${reg.passId}')" title="Add to Calendar">
                        <i class="bi bi-calendar-plus"></i> Cal
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Coordinator Dashboard View
function renderCoordinatorDashboard() {
  const container = document.getElementById('coordinator-events-table-body');
  if (!container) return;

  container.innerHTML = state.events.map(event => {
    const registered = state.registrations.filter(r => r.eventId === event.id && r.status !== 'waitlist').length;
    const attended = state.registrations.filter(r => r.eventId === event.id && r.status === 'attended').length;
    const waitlisted = state.registrations.filter(r => r.eventId === event.id && r.status === 'waitlist').length;

    return `
      <tr>
        <td><strong>${event.title}</strong><br><small style="color: var(--text-muted);">${event.venue}</small></td>
        <td><span class="card-category-badge badge-${event.category}" style="position: static; font-size: 0.7rem;">${event.categoryName}</span></td>
        <td>${formatDate(event.date)}</td>
        <td>
          <strong>${registered}</strong> / ${event.capacity}
          ${waitlisted > 0 ? `<br><small style="color: var(--warning);">+${waitlisted} Waitlisted</small>` : ''}
        </td>
        <td><span style="color: var(--success); font-weight: 700;">${attended} Present</span></td>
        <td><span class="status-badge status-${event.status}">${event.status.toUpperCase()}</span></td>
        <td>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            <button class="table-btn" onclick="openAttendeesModal(${event.id})" title="Manage Roster & Attendance">
              <i class="bi bi-people-fill"></i> Attendees
            </button>
            <button class="table-btn table-btn-success" onclick="openQRScannerModal()" title="Live REC Gate QR Scanner">
              <i class="bi bi-qr-code-scan"></i> Scan QR
            </button>
            <button class="table-btn" onclick="openAnnouncementModal(${event.id})" title="Broadcast Notice">
              <i class="bi bi-megaphone"></i> Notice
            </button>
            <button class="table-btn" onclick="exportParticipantsCSV(${event.id})" title="Export CSV Report">
              <i class="bi bi-file-earmark-spreadsheet"></i> CSV
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Admin Dashboard View
function renderAdminDashboard() {
  const container = document.getElementById('admin-coordinators-table-body');
  const statCoords = document.getElementById('admin-stat-coordinators');
  const statDepts = document.getElementById('admin-stat-depts');
  const statEvents = document.getElementById('admin-stat-events');

  if (statCoords) statCoords.innerText = state.coordinators.length;
  if (statDepts) {
    const uniqueDepts = new Set(state.coordinators.map(c => c.department));
    statDepts.innerText = uniqueDepts.size;
  }
  if (statEvents) statEvents.innerText = state.events.length;

  if (!container) return;

  if (state.coordinators.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 30px; color: var(--text-muted);">
          No faculty coordinators registered. Click "Add Coordinator" to appoint one.
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = state.coordinators.map(coord => {
    const assignedCount = state.events.filter(e => e.coordinator === coord.name).length;
    const isActive = coord.status === 'active';

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 36px; height: 36px; border-radius: var(--radius-full); background: var(--bg-subtle); border: 1px solid var(--border-default); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--primary); font-size: 0.85rem;">
              ${coord.name.charAt(0)}
            </div>
            <div>
              <strong>${coord.name}</strong>
              <br><small style="color: var(--text-muted);">${coord.role}</small>
            </div>
          </div>
        </td>
        <td><span style="font-weight: 500;">${coord.department}</span></td>
        <td>
          <div style="font-size: 0.82rem;">
            <div><i class="bi bi-envelope me-1" style="color: var(--text-muted);"></i> ${coord.email}</div>
            <div style="color: var(--text-muted);"><i class="bi bi-telephone me-1"></i> ${coord.phone}</div>
          </div>
        </td>
        <td><strong>${assignedCount}</strong> Events</td>
        <td>
          <span class="status-badge ${isActive ? 'status-attended' : 'status-completed'}">
            ${isActive ? 'ACTIVE' : 'INACTIVE'}
          </span>
        </td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="table-btn" onclick="toggleCoordinatorStatus(${coord.id})">
              <i class="bi ${isActive ? 'bi-pause-circle' : 'bi-play-circle'}"></i> ${isActive ? 'Deactivate' : 'Activate'}
            </button>
            <button class="table-btn table-btn-danger" onclick="removeCoordinator(${coord.id})">
              <i class="bi bi-trash3"></i> Remove
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function removeCoordinator(id) {
  const coord = state.coordinators.find(c => c.id === id);
  if (!coord) return;

  if (confirm(`Are you sure you want to remove Faculty Coordinator "${coord.name}"?`)) {
    state.coordinators = state.coordinators.filter(c => c.id !== id);
    state.save();
    showToast(`Faculty Coordinator "${coord.name}" removed.`);
    renderAdminDashboard();
    populateCoordinatorDropdown();
  }
}

function toggleCoordinatorStatus(id) {
  const coord = state.coordinators.find(c => c.id === id);
  if (!coord) return;

  coord.status = coord.status === 'active' ? 'inactive' : 'active';
  state.save();
  showToast(`Coordinator "${coord.name}" status: ${coord.status.toUpperCase()}`);
  renderAdminDashboard();
  populateCoordinatorDropdown();
}

function populateCoordinatorDropdown() {
  const select = document.getElementById('evt-coordinator');
  if (!select) return;

  if (select.tagName.toLowerCase() === 'select') {
    select.innerHTML = state.coordinators
      .filter(c => c.status === 'active')
      .map(c => `<option value="${c.name}">${c.name} (${c.department})</option>`)
      .join('') + `<option value="Dr. Ch. Srinivasu">Dr. Ch. Srinivasu (CSE)</option>`;
  }
}

// ================= MODAL HANDLERS & FORMS =================
function setupModalHandlers() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  // Create Event Form
  const newEventForm = document.getElementById('create-event-form');
  if (newEventForm) {
    newEventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newEvent = {
        id: state.events.length + 1,
        title: document.getElementById('evt-title').value,
        slug: slugify(document.getElementById('evt-title').value),
        category: document.getElementById('evt-category').value,
        categoryName: document.getElementById('evt-category').selectedOptions[0].text,
        venue: document.getElementById('evt-venue').value,
        date: document.getElementById('evt-date').value,
        time: document.getElementById('evt-time').value,
        capacity: parseInt(document.getElementById('evt-capacity').value, 10) || 100,
        registeredCount: 0,
        shortSummary: document.getElementById('evt-summary').value,
        description: document.getElementById('evt-description').value,
        coordinator: document.getElementById('evt-coordinator').value || "Dr. Ch. Srinivasu",
        contact: "events@raghuenggcollege.in | +91 9876543210",
        status: "upcoming",
        banner: document.getElementById('evt-banner').value || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
        rating: 5.0,
        reviewsCount: 1,
        isTeamAllowed: true
      };

      state.events.unshift(newEvent);
      state.save();
      closeModal('modal-create-event');
      newEventForm.reset();
      showToast(`Event "${newEvent.title}" published for Raghu Engineering College!`);
      renderAll();
    });
  }

  // Registration Form
  const regForm = document.getElementById('registration-form');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const eventId = parseInt(document.getElementById('reg-event-id').value, 10);
      const studentName = document.getElementById('reg-name').value.trim();
      const rollNumber = document.getElementById('reg-roll').value.toUpperCase().trim();
      const dept = document.getElementById('reg-dept').value;
      const year = document.getElementById('reg-year').value;
      const email = document.getElementById('reg-email').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();

      const isTeam = state.currentRegType === 'team';
      const teamName = isTeam ? document.getElementById('reg-team-name').value.trim() || 'REC Project Team' : null;
      const m2 = isTeam ? document.getElementById('reg-member2').value.trim() : null;
      const m3 = isTeam ? document.getElementById('reg-member3').value.trim() : null;
      const members = [m2, m3].filter(Boolean);

      // Duplicate Check
      const existing = state.registrations.find(r => r.eventId === eventId && r.rollNumber === rollNumber);
      if (existing) {
        showToast("Notice: You are already registered for this event.");
        closeModal('modal-registration');
        viewTicketModal(existing.passId);
        return;
      }

      const evt = state.events.find(e => e.id === eventId);
      const isFull = evt && evt.registeredCount >= evt.capacity;
      const regStatus = isFull ? 'waitlist' : 'confirmed';

      // Generate REC Pass ID
      const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
      const passId = `REC-2026-${rollNumber.slice(-5)}-${randomSuffix}`;

      const newRegistration = {
        passId,
        eventId,
        studentName,
        rollNumber,
        department: dept,
        year,
        email,
        phone,
        regDate: new Date().toISOString().split('T')[0],
        status: regStatus,
        certId: null,
        isTeam,
        teamName,
        members
      };

      state.registrations.unshift(newRegistration);
      if (!isFull && evt) {
        evt.registeredCount += 1;
      }

      state.save();
      closeModal('modal-registration');
      showToast(isFull ? `Added to Waitlist! REC Pass ID: ${passId}` : `Registration Successful! Pass ID: ${passId}`);
      renderAll();
      viewTicketModal(passId);
    });
  }

  // Announcement Form
  const annForm = document.getElementById('announcement-form');
  if (annForm) {
    annForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const eventId = parseInt(document.getElementById('ann-event-id').value, 10);
      const event = state.events.find(e => e.id === eventId) || {};
      const title = document.getElementById('ann-title').value.trim();
      const message = document.getElementById('ann-message').value.trim();
      const urgent = document.getElementById('ann-urgent').checked;

      state.announcements.unshift({
        id: state.announcements.length + 1,
        eventId,
        eventTitle: event.title || "REC Campus Event",
        title,
        message,
        urgent,
        time: "Just now"
      });

      state.save();
      closeModal('modal-announcement');
      annForm.reset();
      showToast("Notice broadcasted to all REC student portals!");
      renderAnnouncements();
    });
  }

  // Add Coordinator Form
  const addCoordForm = document.getElementById('add-coordinator-form');
  if (addCoordForm) {
    addCoordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('coord-name').value.trim();
      const dept = document.getElementById('coord-dept').value;
      const role = document.getElementById('coord-role').value.trim() || 'Faculty In-Charge';
      const email = document.getElementById('coord-email').value.trim();
      const phone = document.getElementById('coord-phone').value.trim();

      const newCoord = {
        id: state.coordinators.length > 0 ? Math.max(...state.coordinators.map(c => c.id)) + 1 : 1,
        name,
        department: dept,
        role,
        email,
        phone,
        status: 'active'
      };

      state.coordinators.unshift(newCoord);
      state.save();
      closeModal('modal-add-coordinator');
      addCoordForm.reset();
      showToast(`Coordinator "${name}" appointed at Raghu Engineering College!`);
      renderAdminDashboard();
      populateCoordinatorDropdown();
    });
  }
}

function openModal(modalId) {
  const coordModals = ['modal-create-event', 'modal-attendees', 'modal-announcement', 'modal-qr-scanner'];
  if (coordModals.includes(modalId) && state.currentRole === 'student') {
    showToast('Permission Restricted: This tool is for REC Faculty Coordinators and Admins.');
    return;
  }
  if (modalId === 'modal-add-coordinator' && state.currentRole !== 'admin') {
    showToast('Only System Admin can appoint faculty coordinators.');
    return;
  }
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// Registration Format Toggle (Individual vs Team)
function setRegistrationType(type) {
  state.currentRegType = type;
  const btnInd = document.getElementById('btn-type-individual');
  const btnTeam = document.getElementById('btn-type-team');
  const teamBox = document.getElementById('team-fields-container');
  const lblName = document.getElementById('lbl-lead-name');
  const lblRoll = document.getElementById('lbl-lead-roll');

  if (btnInd) btnInd.classList.toggle('active', type === 'individual');
  if (btnTeam) btnTeam.classList.toggle('active', type === 'team');
  if (teamBox) teamBox.style.display = type === 'team' ? 'block' : 'none';

  if (lblName) lblName.innerText = type === 'team' ? 'Team Leader Full Name' : 'Student Full Name';
  if (lblRoll) lblRoll.innerText = type === 'team' ? 'Team Leader REC Roll No' : 'REC Student Roll Number';
}

// Open Event Details Modal
function openEventDetailsModal(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  const content = document.getElementById('event-detail-content');
  const userRoll = "24981A0501";
  const isRegistered = state.registrations.some(r => r.eventId === event.id && r.rollNumber === userRoll && r.status !== 'waitlist');
  const isWaitlist = state.registrations.some(r => r.eventId === event.id && r.rollNumber === userRoll && r.status === 'waitlist');

  content.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span class="card-category-badge badge-${event.category}" style="position: static; font-size: 0.72rem; margin-bottom: 8px; display: inline-block;">${event.categoryName}</span>
      <h2 style="font-size: 1.3rem; font-weight: 800; margin: 6px 0 4px; color: var(--text-primary); letter-spacing: -0.01em;">${event.title}</h2>
      <p style="color: var(--text-secondary); font-size: 0.85rem;"><i class="bi bi-geo-alt me-1 text-primary"></i> ${event.venue}</p>
    </div>

    <div style="background: var(--bg-subtle); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: 14px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; font-size: 0.82rem;">
      <div><span style="color: var(--text-muted);">Date:</span> <strong>${formatDate(event.date)}</strong></div>
      <div><span style="color: var(--text-muted);">Timing:</span> <strong>${event.time}</strong></div>
      <div><span style="color: var(--text-muted);">Capacity:</span> <strong>${event.registeredCount} / ${event.capacity} seats</strong></div>
      <div><span style="color: var(--text-muted);">Format:</span> <strong>${event.isTeamAllowed ? 'Team or Solo' : 'Solo Registration'}</strong></div>
    </div>

    <div style="margin-bottom: 16px;">
      <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 6px; color: var(--text-primary);">Event Description & Guidelines</h4>
      <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">${event.description}</p>
    </div>

    <div style="background: var(--bg-subtle); border: 1px solid var(--border-default); padding: 12px 14px; border-radius: var(--radius-md); margin-bottom: 20px;">
      <h5 style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">Faculty Coordinator In-Charge</h5>
      <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 2px;"><strong>${event.coordinator}</strong></p>
      <p style="font-size: 0.78rem; color: var(--text-muted);">Contact: ${event.contact}</p>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end;">
      <button class="btn-outline" onclick="exportEventToGoogleCalendar(${event.id})">
        <i class="bi bi-google"></i> Google Calendar
      </button>
      <button class="btn-outline" onclick="closeModal('modal-event-detail')">Close</button>
      ${isRegistered ?
        `<button class="btn-registered" onclick="closeModal('modal-event-detail'); openPassFromCard(${event.id});">View REC E-Pass</button>` :
        isWaitlist ?
        `<button class="btn-registered btn-waitlist" onclick="closeModal('modal-event-detail'); openPassFromCard(${event.id});">Waitlisted Pass</button>` :
        `<button class="btn-primary-action" onclick="closeModal('modal-event-detail'); openRegisterModal(${event.id});">Register for Event</button>`
      }
    </div>
  `;

  openModal('modal-event-detail');
}

function openRegisterModal(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  document.getElementById('reg-event-id').value = event.id;
  document.getElementById('reg-event-title').innerText = event.title;

  document.getElementById('reg-name').value = "Alex Johnson";
  document.getElementById('reg-roll').value = "24981A0501";
  document.getElementById('reg-email').value = "student@raghuenggcollege.in";
  document.getElementById('reg-phone').value = "+91 9123456780";

  setRegistrationType('individual');
  openModal('modal-registration');
}

function openPassFromCard(eventId) {
  const userRoll = "24981A0501";
  const reg = state.registrations.find(r => r.eventId === eventId && r.rollNumber === userRoll);
  if (reg) {
    viewTicketModal(reg.passId);
  }
}

let currentViewedPassId = null;

// ================= DIGITAL E-PASS / TICKET MODAL =================
function viewTicketModal(passId) {
  currentViewedPassId = passId;
  const reg = state.registrations.find(r => r.passId === passId);
  if (!reg) return;

  const event = state.events.find(e => e.id === reg.eventId) || {};
  const container = document.getElementById('ticket-content');

  container.innerHTML = `
    <div class="ticket-card" id="active-printable-pass">
      <div class="ticket-top">
        <div class="d-flex align-items-center gap-2">
          <img src="logo.png" alt="REC Logo" style="width: 34px; height: 34px; object-fit: contain; background: white; border-radius: 4px; padding: 2px;">
          <div>
            <h4 class="mb-0">${event.title || 'REC Event Pass'}</h4>
            <small style="opacity: 0.85;">Raghu Engineering College (Autonomous) • REC-EMS</small>
          </div>
        </div>
        <div class="ticket-pass-id">${reg.passId}</div>
      </div>

      <div class="ticket-middle">
        <div>
          <div class="ticket-detail-item">
            <small>Student Name & REC Roll No</small>
            <strong>${reg.studentName} (${reg.rollNumber})</strong>
          </div>
          ${reg.isTeam ? `
            <div class="ticket-detail-item">
              <small>Team Name & Members</small>
              <strong style="color: var(--primary);">${reg.teamName}</strong>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${reg.members.join(', ')}</div>
            </div>
          ` : ''}
          <div class="ticket-detail-item">
            <small>Department & Year</small>
            <strong>${reg.department} - ${reg.year}</strong>
          </div>
          <div class="ticket-detail-item">
            <small>Date & Time</small>
            <strong>${formatDate(event.date)} | ${event.time}</strong>
          </div>
          <div class="ticket-detail-item">
            <small>Campus Venue</small>
            <strong>${event.venue}</strong>
          </div>
        </div>

        <div class="qr-placeholder">
          <canvas id="ticket-qr-canvas" class="qr-canvas-render"></canvas>
          <small style="font-size: 8px; font-weight: 800; color: #64748B; margin-top: 4px; letter-spacing: 0.05em;">REC GATE VERIFIED</small>
        </div>
      </div>

      <div class="ticket-bottom-bar">
        <span>Status: <strong style="color: ${reg.status === 'attended' ? 'var(--success)' : reg.status === 'waitlist' ? 'var(--warning)' : 'var(--primary)'};">${reg.status.toUpperCase()}</strong></span>
        <span>Issued: ${reg.regDate}</span>
      </div>
    </div>
  `;

  setTimeout(() => renderTicketQRCanvas('ticket-qr-canvas', reg.passId), 50);
  openModal('modal-ticket');
}

// Built-in Standard ISO/IEC 18004 QR Code Model 2 Engine
const RECQRCode = (function() {
  const EXP_TABLE = new Uint8Array(256);
  const LOG_TABLE = new Uint8Array(256);
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1;
    if (x & 256) x ^= 285;
  }
  EXP_TABLE[255] = EXP_TABLE[0];

  function gmult(a, b) {
    if (a === 0 || b === 0) return 0;
    return EXP_TABLE[(LOG_TABLE[a] + LOG_TABLE[b]) % 255];
  }

  function getPoly(ecCount) {
    let poly = [1];
    for (let i = 0; i < ecCount; i++) {
      const next = new Array(poly.length + 1).fill(0);
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= gmult(poly[j], EXP_TABLE[i]);
        next[j + 1] ^= poly[j];
      }
      poly = next;
    }
    return poly;
  }

  function rsEncode(data, ecCount) {
    const gen = getPoly(ecCount);
    const msg = new Array(data.length + ecCount).fill(0);
    for (let i = 0; i < data.length; i++) msg[i] = data[i];
    for (let i = 0; i < data.length; i++) {
      const coef = msg[i];
      if (coef !== 0) {
        for (let j = 0; j < gen.length; j++) {
          msg[i + j] ^= gmult(gen[j], coef);
        }
      }
    }
    return msg.slice(data.length);
  }

  const VERSIONS = [
    { version: 1, size: 21, dataCap: 16, ecCount: 10, align: [] },
    { version: 2, size: 25, dataCap: 28, ecCount: 16, align: [6, 18] },
    { version: 3, size: 29, dataCap: 44, ecCount: 26, align: [6, 22] },
    { version: 4, size: 33, dataCap: 64, ecCount: 36, align: [6, 26] }
  ];

  function createMatrix(text) {
    const bytes = new TextEncoder().encode(text);
    let vSpec = VERSIONS.find(v => v.dataCap >= bytes.length + 3);
    if (!vSpec) vSpec = VERSIONS[VERSIONS.length - 1];

    const { version, size, dataCap, ecCount, align } = vSpec;

    const bits = [];
    const pushBits = (val, count) => {
      for (let i = count - 1; i >= 0; i--) bits.push((val >> i) & 1);
    };

    pushBits(4, 4); // Byte mode (0100)
    pushBits(bytes.length, 8); // Character count
    for (let b of bytes) pushBits(b, 8);

    // Terminator
    pushBits(0, Math.min(4, dataCap * 8 - bits.length));
    while (bits.length % 8 !== 0) bits.push(0);

    // Pad bytes
    const padBytes = [0xEC, 0x11];
    let padIdx = 0;
    while (bits.length < dataCap * 8) {
      pushBits(padBytes[padIdx % 2], 8);
      padIdx++;
    }

    const dataBytes = [];
    for (let i = 0; i < bits.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
      dataBytes.push(b);
    }

    const ecBytes = rsEncode(dataBytes, ecCount);
    const allCodewords = dataBytes.concat(ecBytes);

    const grid = Array.from({ length: size }, () => new Array(size).fill(null));
    const isReserved = Array.from({ length: size }, () => new Array(size).fill(false));

    function setModule(r, c, val) {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        grid[r][c] = val;
        isReserved[r][c] = true;
      }
    }

    function addFinder(row, col) {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const nr = row + r;
          const nc = col + c;
          if (nr < 0 || nr >= size || nc < 0 || nc >= size) continue;
          if (r === -1 || r === 7 || c === -1 || c === 7) {
            setModule(nr, nc, false);
          } else if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
            setModule(nr, nc, true);
          } else {
            setModule(nr, nc, false);
          }
        }
      }
    }

    addFinder(0, 0);
    addFinder(0, size - 7);
    addFinder(size - 7, 0);

    for (let i = 8; i < size - 8; i++) {
      if (!isReserved[6][i]) setModule(6, i, i % 2 === 0);
      if (!isReserved[i][6]) setModule(i, 6, i % 2 === 0);
    }

    if (align && align.length === 2) {
      const ar = align[1], ac = align[1];
      if (!isReserved[ar][ac]) {
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            const isDark = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
            setModule(ar + r, ac + c, isDark);
          }
        }
      }
    }

    setModule(4 * version + 9, 8, true);

    for (let i = 0; i < 9; i++) {
      if (i !== 6) { isReserved[8][i] = true; isReserved[i][8] = true; }
    }
    for (let i = 0; i < 8; i++) {
      isReserved[8][size - 1 - i] = true;
      isReserved[size - 1 - i][8] = true;
    }

    const allBits = [];
    for (let b of allCodewords) {
      for (let i = 7; i >= 0; i--) allBits.push((b >> i) & 1);
    }

    let bitIdx = 0;
    let upward = true;
    for (let rightCol = size - 1; rightCol > 0; rightCol -= 2) {
      if (rightCol === 6) rightCol--;
      const cols = [rightCol, rightCol - 1];
      const rows = upward
        ? Array.from({ length: size }, (_, i) => size - 1 - i)
        : Array.from({ length: size }, (_, i) => i);

      for (let r of rows) {
        for (let c of cols) {
          if (!isReserved[r][c]) {
            const bit = bitIdx < allBits.length ? allBits[bitIdx++] : 0;
            const mask = (r + c) % 2 === 0;
            grid[r][c] = (bit === 1) ^ mask;
          }
        }
      }
      upward = !upward;
    }

    const formatBits = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];
    for (let i = 0; i < 6; i++) grid[8][i] = formatBits[i] === 1;
    grid[8][7] = formatBits[6] === 1;
    grid[8][8] = formatBits[7] === 1;
    grid[7][8] = formatBits[8] === 1;
    for (let i = 0; i < 6; i++) grid[5 - i][8] = formatBits[9 + i] === 1;

    for (let i = 0; i < 8; i++) grid[8][size - 1 - i] = formatBits[i] === 1;
    for (let i = 0; i < 7; i++) grid[size - 7 + i][8] = formatBits[8 + i] === 1;

    return { size, grid };
  }

  return {
    draw: function(canvas, text) {
      const { size, grid } = createMatrix(text);
      const ctx = canvas.getContext('2d');
      const canvasSize = canvas.width || 140;
      const margin = 8;
      const cellSize = (canvasSize - margin * 2) / size;

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvasSize, canvasSize);

      ctx.fillStyle = '#0F172A';
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (grid[r][c]) {
            ctx.fillRect(
              Math.floor(margin + c * cellSize),
              Math.floor(margin + r * cellSize),
              Math.ceil(cellSize),
              Math.ceil(cellSize)
            );
          }
        }
      }
    }
  };
})();

function renderTicketQRCanvas(canvasId, passId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const qrText = passId.trim();
  const size = 150;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Priority 1: Standard qrcode library if available
  if (typeof qrcode !== 'undefined') {
    try {
      const qr = qrcode(0, 'M');
      qr.addData(qrText);
      qr.make();
      const count = qr.getModuleCount();
      const margin = 8;
      const cellSize = (size - margin * 2) / count;

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, size, size);

      ctx.fillStyle = '#0F172A';
      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          if (qr.isDark(r, c)) {
            ctx.fillRect(
              Math.floor(margin + c * cellSize),
              Math.floor(margin + r * cellSize),
              Math.ceil(cellSize),
              Math.ceil(cellSize)
            );
          }
        }
      }
      return;
    } catch (err) {
      console.warn("External QR code generator fallback:", err);
    }
  }

  // Priority 2: Built-in Standalone QR Code Model 2 Engine
  RECQRCode.draw(canvas, qrText);
}

// ================= VERIFIED CERTIFICATE MODAL =================
function viewCertificateModal(passId) {
  currentViewedPassId = passId;
  const reg = state.registrations.find(r => r.passId === passId);
  if (!reg) return;

  const event = state.events.find(e => e.id === reg.eventId) || {};
  const container = document.getElementById('certificate-content');
  const certId = reg.certId || `CERT-REC-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  container.innerHTML = `
    <div class="cert-sheet" id="active-printable-cert">
      <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 8px;">
        <img src="logo.png" alt="REC Logo" style="width: 52px; height: 52px; object-fit: contain;">
        <div>
          <h2 class="cert-college-title" style="margin: 0;">Raghu Engineering College</h2>
          <div style="font-size: 0.78rem; font-weight: 700; color: #475569;">(Autonomous Institution • Approved by AICTE • Accredited by NBA & NAAC with 'A+' Grade)</div>
          <div style="font-size: 0.72rem; color: #64748B;">Dakamarri, Bheemunipatnam Mandal, Visakhapatnam - 531162</div>
        </div>
      </div>

      <div class="cert-banner-text" style="margin-top: 10px;">Certificate of Participation</div>

      <p class="cert-body-text" style="margin-top: 8px;">This is officially presented to certify that</p>
      <div class="cert-student-highlight">${reg.studentName}</div>
      <div style="font-size: 0.85rem; color: #64748B; margin-bottom: 12px;">
        Student Roll No: <strong>${reg.rollNumber}</strong> • Department of ${reg.department}
      </div>

      <p class="cert-body-text">
        has successfully registered, actively participated in, and fulfilled all requisite standards for 
        <strong style="color: #0F172A;">"${event.title}"</strong> held on ${formatDate(event.date)} at ${event.venue}.
      </p>

      <div class="cert-signatures">
        <div class="sig-block">
          <div class="sig-line">${event.coordinator || 'Dr. Ch. Srinivasu'}</div>
          <div class="sig-role">Faculty Convener / In-Charge, REC</div>
        </div>
        <div class="sig-block">
          <div class="sig-line">Dr. R. Kameswara Rao</div>
          <div class="sig-role">Principal / Dean, Raghu Engineering College</div>
        </div>
      </div>

      <div style="margin-top: 18px; font-size: 0.75rem; color: #94A3B8; font-family: var(--font-mono);">
        Certificate ID: ${certId} • Verified Digital Credential • Raghu Engineering College
      </div>
    </div>
  `;

  openModal('modal-certificate');
}

// ================= LIVE IN-BROWSER QR CAMERA SCANNER ENGINE =================
let cameraStream = null;
let scanInterval = null;
let isScanThrottled = false;

function openQRScannerModal() {
  if (state.currentRole === 'student') {
    showToast('Permission Restricted: QR Gate Scanner is for REC Coordinators & Admins.');
    return;
  }

  openModal('modal-qr-scanner');
  startCameraScanner();
  renderScannerQuickChips();
}

function closeQRScannerModal() {
  stopCameraScanner();
  closeModal('modal-qr-scanner');
  const resCard = document.getElementById('scan-verification-result');
  if (resCard) resCard.style.display = 'none';
}

async function startCameraScanner() {
  const video = document.getElementById('qr-video');
  const statusPill = document.getElementById('scanner-status-pill');
  if (!video) return;

  const facingMode = document.getElementById('scanner-camera-source')?.value || 'environment';

  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      if (cameraStream) {
        cameraStream.getTracks().forEach(t => t.stop());
      }
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: facingMode }, width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      });
      video.srcObject = cameraStream;
      video.setAttribute('playsinline', true);
      await video.play();

      if (statusPill) {
        statusPill.innerHTML = `<i class="bi bi-camera-video-fill text-success"></i> Live Scanner Active • Align Student QR Pass`;
      }

      startScanDecodingLoop();
    }
  } catch (err) {
    console.warn("Camera access unavailable or simulated:", err);
    if (statusPill) {
      statusPill.innerHTML = `<i class="bi bi-info-circle text-warning"></i> Camera Simulation Ready (Use fast test buttons or manual code)`;
    }
  }
}

function startScanDecodingLoop() {
  if (scanInterval) clearInterval(scanInterval);

  const video = document.getElementById('qr-video');
  const canvas = document.getElementById('qr-canvas');
  if (!video || !canvas) return;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  scanInterval = setInterval(async () => {
    if (isScanThrottled || !cameraStream || video.readyState !== video.HAVE_ENOUGH_DATA) return;

    // Method 1: Native BarcodeDetector Web API (Fastest on Android / Chrome)
    if ('BarcodeDetector' in window) {
      try {
        const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
        const barcodes = await barcodeDetector.detect(video);
        if (barcodes && barcodes.length > 0) {
          handleScannedCode(barcodes[0].rawValue);
          return;
        }
      } catch (e) {
        // Fallback to jsQR
      }
    }

    // Method 2: jsQR Canvas Frame Decoder
    if (typeof jsQR !== 'undefined') {
      try {
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const decoded = jsQR(imgData.data, imgData.width, imgData.height, {
          inversionAttempts: "dontInvert",
        });

        if (decoded && decoded.data) {
          handleScannedCode(decoded.data);
        }
      } catch (e) {
        // Continue scan loop
      }
    }
  }, 200);
}

function handleScannedCode(scannedText) {
  if (!scannedText || isScanThrottled) return;
  isScanThrottled = true;

  let passId = scannedText.trim();
  const match = scannedText.match(/REC-2026-[A-Z0-9]+-[A-Z0-9]+/i);
  if (match) {
    passId = match[0].toUpperCase();
  }

  verifyPassCode(passId);

  // Throttle scanner for 2.5s to prevent repeated triggers
  setTimeout(() => {
    isScanThrottled = false;
  }, 2500);
}

function stopCameraScanner() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  if (scanInterval) {
    clearInterval(scanInterval);
    scanInterval = null;
  }
}

function switchCameraSource() {
  startCameraScanner();
}

function playScanSound() {
  const soundEnabled = document.getElementById('scanner-sound-enabled')?.checked;
  if (!soundEnabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {
    console.log("Audio not supported");
  }
}

function verifyPassCode(passId) {
  const cleanId = passId.trim().toUpperCase();
  const reg = state.registrations.find(r => r.passId.toUpperCase() === cleanId);
  const resCard = document.getElementById('scan-verification-result');

  if (!reg) {
    showToast(`Invalid Pass Code (${cleanId}). Not found in database.`);
    if (resCard) {
      resCard.style.display = 'block';
      resCard.style.background = 'var(--danger-subtle)';
      resCard.style.borderColor = 'var(--danger)';
      resCard.innerHTML = `
        <div style="color: var(--danger); font-weight: 700; font-size: 0.9rem;">
          <i class="bi bi-x-circle-fill me-1"></i> Pass ID "${cleanId}" Not Recognized
        </div>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">Please recheck student roll number or REC registration record.</p>
      `;
    }
    return;
  }

  const event = state.events.find(e => e.id === reg.eventId) || {};

  const wasAlreadyAttended = reg.status === 'attended';
  reg.status = 'attended';
  if (!reg.certId) {
    reg.certId = `CERT-REC-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  }

  state.save();
  playScanSound();
  renderAll();

  if (resCard) {
    resCard.style.display = 'block';
    resCard.style.background = 'var(--success-subtle)';
    resCard.style.borderColor = 'var(--success)';
    resCard.innerHTML = `
      <div class="scan-result-header">
        <span class="scan-success-badge"><i class="bi bi-check-circle-fill"></i> ${wasAlreadyAttended ? 'ALREADY VERIFIED' : 'REC CHECK-IN CONFIRMED'}</span>
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--success);">${new Date().toLocaleTimeString()}</span>
      </div>
      <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin-bottom: 2px;">
        ${reg.studentName} (${reg.rollNumber})
      </div>
      <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px;">
        <strong>${event.title}</strong> • ${reg.department}
      </div>
      <div style="display: flex; gap: 6px;">
        <button class="btn-primary-action" style="padding: 6px 12px; font-size: 0.78rem;" onclick="viewCertificateModal('${reg.passId}')">
          <i class="bi bi-award"></i> View REC Certificate
        </button>
      </div>
    `;
  }

  showToast(`✓ Check-in verified for ${reg.studentName} (${reg.rollNumber})!`);
}

function verifyManualPassCode() {
  const input = document.getElementById('manual-pass-input');
  if (input && input.value) {
    verifyPassCode(input.value);
  } else {
    showToast("Please enter an REC Pass Reference Code.");
  }
}

function renderScannerQuickChips() {
  const container = document.getElementById('scanner-test-chips');
  if (!container) return;

  const samplePasses = state.registrations.slice(0, 4);
  container.innerHTML = samplePasses.map(r => `
    <button type="button" class="scanner-chip-btn" onclick="verifyPassCode('${r.passId}')">
      <i class="bi bi-qr-code"></i> ${r.studentName.split(' ')[0]} (${r.passId.slice(-4)})
    </button>
  `).join('');
}

// ================= ATTENDEES ROSTER MODAL =================
function openAttendeesModal(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  document.getElementById('attendees-event-title').innerText = event.title;
  const content = document.getElementById('attendees-content');
  const eventRegs = state.registrations.filter(r => r.eventId === eventId);

  content.innerHTML = `
    <div style="margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
        Total REC Participants: ${eventRegs.length} / ${event.capacity}
      </span>
      <button class="table-btn" onclick="exportParticipantsCSV(${event.id})">
        <i class="bi bi-download"></i> Export CSV
      </button>
    </div>

    ${eventRegs.length === 0 ? `
      <p style="text-align: center; color: var(--text-muted); padding: 20px;">No students registered for this event yet.</p>
    ` : `
      <div class="table-responsive-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Roll No & Student</th>
              <th>Dept</th>
              <th>Pass ID</th>
              <th>Status</th>
              <th>Toggle Attendance</th>
            </tr>
          </thead>
          <tbody>
            ${eventRegs.map(reg => `
              <tr>
                <td><strong>${reg.studentName}</strong><br><small style="color: var(--text-muted);">${reg.rollNumber}</small></td>
                <td>${reg.department}</td>
                <td><small style="font-family: var(--font-mono);">${reg.passId}</small></td>
                <td>
                  <span class="status-badge ${reg.status === 'attended' ? 'status-attended' : 'status-confirmed'}">
                    ${reg.status.toUpperCase()}
                  </span>
                </td>
                <td>
                  <button class="table-btn ${reg.status === 'attended' ? 'table-btn-success' : ''}" onclick="toggleAttendeeStatus('${reg.passId}', ${eventId})">
                    <i class="bi ${reg.status === 'attended' ? 'bi-check-circle-fill' : 'bi-circle'}"></i>
                    ${reg.status === 'attended' ? 'Marked Present' : 'Mark Present'}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `}
  `;

  openModal('modal-attendees');
}

function toggleAttendeeStatus(passId, eventId) {
  const reg = state.registrations.find(r => r.passId === passId);
  if (!reg) return;

  if (reg.status === 'attended') {
    reg.status = 'confirmed';
    reg.certId = null;
    showToast(`Attendance removed for ${reg.studentName}`);
  } else {
    reg.status = 'attended';
    reg.certId = `CERT-REC-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    playScanSound();
    showToast(`Marked ${reg.studentName} as PRESENT! REC Certificate unlocked.`);
  }

  state.save();
  renderAll();
  openAttendeesModal(eventId);
}

// ================= POST-EVENT FEEDBACK & RATING =================
let activeFeedbackRating = 5;

function setupFeedbackRating() {
  const group = document.getElementById('star-rating-group');
  if (!group) return;

  group.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rating = parseInt(btn.getAttribute('data-rating'), 10);
      setStarRating(rating);
    });
  });

  const fbForm = document.getElementById('feedback-form');
  if (fbForm) {
    fbForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const eventId = parseInt(document.getElementById('feedback-event-id').value, 10);
      const comments = document.getElementById('feedback-comments').value.trim();
      const selectedTags = Array.from(document.querySelectorAll('.feedback-tag-chip input:checked')).map(i => i.value);

      const newFeedback = {
        eventId,
        rating: activeFeedbackRating,
        tags: selectedTags,
        comments,
        date: new Date().toISOString().split('T')[0]
      };

      state.feedbacks.push(newFeedback);

      const evt = state.events.find(e => e.id === eventId);
      if (evt) {
        evt.reviewsCount = (evt.reviewsCount || 0) + 1;
        evt.rating = Math.round(((evt.rating || 4.8) * 0.8 + activeFeedbackRating * 0.2) * 10) / 10;
      }

      state.save();
      closeModal('modal-feedback');
      fbForm.reset();
      showToast("Thank you for your feedback! Recorded for REC.");
      renderAll();
    });
  }
}

function setStarRating(rating) {
  activeFeedbackRating = rating;
  const group = document.getElementById('star-rating-group');
  const text = document.getElementById('rating-score-text');
  if (!group) return;

  group.querySelectorAll('.star-btn').forEach(btn => {
    const r = parseInt(btn.getAttribute('data-rating'), 10);
    btn.classList.toggle('active', r <= rating);
  });

  const labels = ["1.0 / 5.0 (Poor)", "2.0 / 5.0 (Fair)", "3.0 / 5.0 (Good)", "4.0 / 5.0 (Very Good)", "5.0 / 5.0 (Outstanding!)"];
  if (text) text.innerText = labels[rating - 1] || `${rating}.0 / 5.0`;
}

function openFeedbackModal(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  document.getElementById('feedback-event-id').value = event.id;
  document.getElementById('feedback-event-title').innerText = event.title;
  setStarRating(5);
  openModal('modal-feedback');
}

// ================= CALENDAR SYNC =================
function exportEventToGoogleCalendar(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  const startDate = event.date.replace(/-/g, '') + 'T090000Z';
  const endDate = event.date.replace(/-/g, '') + 'T170000Z';
  const title = encodeURIComponent(`[REC] ${event.title}`);
  const details = encodeURIComponent(`${event.shortSummary}\n\nVenue: ${event.venue}\nOrganizer: Raghu Engineering College (Autonomous)\nCoordinator: ${event.coordinator} (${event.contact})`);
  const location = encodeURIComponent(`${event.venue}, Raghu Engineering College, Visakhapatnam`);

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  window.open(googleUrl, '_blank');
}

function exportCurrentPassCalendar() {
  if (!currentViewedPassId) return;
  exportCalendarSingle(currentViewedPassId);
}

function exportCalendarSingle(passId) {
  const reg = state.registrations.find(r => r.passId === passId);
  if (!reg) return;
  const event = state.events.find(e => e.id === reg.eventId) || {};

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Raghu Engineering College//REC-EMS//EN
BEGIN:VEVENT
UID:${reg.passId}@raghuenggcollege.in
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.date.replace(/-/g, '')}T090000Z
DTEND:${event.date.replace(/-/g, '')}T170000Z
SUMMARY:[REC] ${event.title}
DESCRIPTION:Pass ID: ${reg.passId}\\nInstitution: Raghu Engineering College (Autonomous)\\nVenue: ${event.venue}\\nStudent: ${reg.studentName} (${reg.rollNumber})
LOCATION:${event.venue}, Raghu Engineering College, Visakhapatnam
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `REC_Event_${reg.passId}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Calendar (.ics) invite downloaded!");
}

// ================= CSV EXPORTER =================
function exportParticipantsCSV(eventId) {
  const event = state.events.find(e => e.id === eventId);
  if (!event) return;

  const eventRegs = state.registrations.filter(r => r.eventId === eventId);
  let csv = "Pass ID,Student Name,Roll Number,Department,Year,Email,Phone,Format,Team Name,Status,Cert ID\n";

  eventRegs.forEach(r => {
    csv += `"${r.passId}","${r.studentName}","${r.rollNumber}","${r.department}","${r.year}","${r.email}","${r.phone}","${r.isTeam ? 'Team' : 'Individual'}","${r.teamName || 'N/A'}","${r.status}","${r.certId || 'N/A'}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `REC_Participants_${event.slug}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`CSV Roster for "${event.title}" downloaded!`);
}

// ================= PASS & CERTIFICATE IMAGE DOWNLOADERS =================
function saveCurrentPassImage() {
  if (!currentViewedPassId) return;
  const reg = state.registrations.find(r => r.passId === currentViewedPassId);
  if (!reg) return;
  const event = state.events.find(e => e.id === reg.eventId) || {};

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const scale = 2;
  const width = 600;
  const height = 380;
  canvas.width = width * scale;
  canvas.height = height * scale;
  ctx.scale(scale, scale);

  // Card Background
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.roundRect(10, 10, width - 20, height - 20, 12);
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#CBD5E1';
  ctx.stroke();

  // Top Dark Header
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(10, 10, width - 20, 75, [12, 12, 0, 0]);
  ctx.clip();
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(10, 10, width - 20, 75);
  ctx.restore();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 15px Inter, sans-serif';
  ctx.fillText(event.title || 'REC Event Pass', 26, 38);
  ctx.fillStyle = '#94A3B8';
  ctx.font = '600 10px Inter, sans-serif';
  ctx.fillText('RAGHU ENGINEERING COLLEGE (AUTONOMOUS) • VISAKHAPATNAM', 26, 58);

  // Pass ID Pill
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.beginPath();
  ctx.roundRect(width - 190, 30, 165, 26, 4);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px monospace';
  ctx.fillText(reg.passId, width - 180, 47);

  // Details Fields
  const drawField = (label, val, x, y) => {
    ctx.fillStyle = '#64748B';
    ctx.font = '700 9px Inter, sans-serif';
    ctx.fillText(label.toUpperCase(), x, y);
    ctx.fillStyle = '#0F172A';
    ctx.font = '700 12px Inter, sans-serif';
    ctx.fillText(val, x, y + 15);
  };

  drawField('Student Name & Roll No', `${reg.studentName} (${reg.rollNumber})`, 26, 115);
  drawField('Department & Year', `${reg.department} - ${reg.year}`, 26, 160);
  drawField('Event Date & Timing', `${formatDate(event.date)} | ${event.time}`, 26, 205);
  drawField('Campus Venue', event.venue, 26, 250);

  // QR Block
  const qrX = width - 145;
  const qrY = 110;
  ctx.fillStyle = '#F8FAFC';
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(qrX, qrY, 110, 110, 8);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#0F172A';
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      if ((r < 2 && c < 2) || (r > 3 && c < 2) || (r < 2 && c > 3) || (r === 2 && c === 2) || (r === 4 && c === 4)) {
        ctx.fillRect(qrX + 12 + c * 14, qrY + 12 + r * 14, 11, 11);
      }
    }
  }

  // Footer Bar
  ctx.fillStyle = '#F8FAFC';
  ctx.beginPath();
  ctx.roundRect(10, height - 50, width - 20, 40, [0, 0, 12, 12]);
  ctx.fill();
  ctx.strokeStyle = '#CBD5E1';
  ctx.beginPath();
  ctx.moveTo(10, height - 50);
  ctx.lineTo(width - 10, height - 50);
  ctx.stroke();

  ctx.fillStyle = '#059669';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.fillText(`✓ ${reg.status.toUpperCase()} REC PASS`, 26, height - 25);

  ctx.fillStyle = '#64748B';
  ctx.font = '500 10px Inter, sans-serif';
  ctx.fillText(`Issued: ${reg.regDate} • Non-Transferable`, width - 230, height - 25);

  const link = document.createElement('a');
  link.download = `REC_Pass_${reg.passId}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast("REC E-Pass image downloaded!");
}

function saveCurrentCertImage() {
  if (!currentViewedPassId) return;
  const reg = state.registrations.find(r => r.passId === currentViewedPassId);
  if (!reg) return;
  const event = state.events.find(e => e.id === reg.eventId) || {};
  const certId = reg.certId || `CERT-REC-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const scale = 2;
  const width = 850;
  const height = 580;
  canvas.width = width * scale;
  canvas.height = height * scale;
  ctx.scale(scale, scale);

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  ctx.lineWidth = 3;
  ctx.strokeStyle = '#0F172A';
  ctx.strokeRect(16, 16, width - 32, height - 32);
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#CBD5E1';
  ctx.strokeRect(24, 24, width - 48, height - 48);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#64748B';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.fillText('CERTIFICATE OF PARTICIPATION', width / 2, 55);

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 22px Inter, sans-serif';
  ctx.fillText('Raghu Engineering College (Autonomous)', width / 2, 88);

  ctx.fillStyle = '#64748B';
  ctx.font = '600 11px Inter, sans-serif';
  ctx.fillText('Approved by AICTE • Accredited by NBA & NAAC with \'A+\' Grade • Visakhapatnam - 531162', width / 2, 110);

  ctx.fillStyle = '#2563EB';
  ctx.font = 'bold 18px Inter, sans-serif';
  ctx.fillText('AWARD OF PARTICIPATION', width / 2, 150);

  ctx.fillStyle = '#475569';
  ctx.font = '13px Inter, sans-serif';
  ctx.fillText('This is officially presented to certify that', width / 2, 185);

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.fillText(reg.studentName, width / 2, 225);

  ctx.fillStyle = '#64748B';
  ctx.font = '500 12px Inter, sans-serif';
  ctx.fillText(`Student Roll No: ${reg.rollNumber} • Department of ${reg.department}`, width / 2, 255);

  ctx.fillStyle = '#334155';
  ctx.font = '13px Inter, sans-serif';
  ctx.fillText(`has actively participated in "${event.title}" on ${formatDate(event.date)} at ${event.venue}.`, width / 2, 295);

  // Signatures
  const leftX = 220;
  const rightX = width - 220;
  const sigY = 460;

  ctx.beginPath();
  ctx.strokeStyle = '#CBD5E1';
  ctx.moveTo(leftX - 70, sigY);
  ctx.lineTo(leftX + 70, sigY);
  ctx.moveTo(rightX - 70, sigY);
  ctx.lineTo(rightX + 70, sigY);
  ctx.stroke();

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.fillText('Dr. Ch. Srinivasu', leftX, sigY + 18);
  ctx.fillText('Dr. R. Kameswara Rao', rightX, sigY + 18);

  ctx.fillStyle = '#64748B';
  ctx.font = '10px Inter, sans-serif';
  ctx.fillText('Faculty Convener / HOD, REC', leftX, sigY + 32);
  ctx.fillText('Principal / Dean, REC', rightX, sigY + 32);

  ctx.fillStyle = '#94A3B8';
  ctx.font = '10px monospace';
  ctx.fillText(`Certificate ID: ${certId} • Raghu Engineering College Accredited`, width / 2, height - 35);

  const link = document.createElement('a');
  link.download = `REC_Certificate_${certId}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast("REC Certificate image downloaded!");
}

// ================= UTILITIES & HELPERS =================
function formatDate(dateStr) {
  if (!dateStr) return 'TBA';
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-US', opts);
}

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Toast Notice Helper
let toastTimer = null;
function showToast(message) {
  let toast = document.getElementById('app-toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="bi bi-info-circle-fill text-primary"></i> <span>${message}</span>`;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
