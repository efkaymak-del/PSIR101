/* ═══════════════════════════════════════════════════════════
   PSIR101 App — Core Logic
════════════════════════════════════════════════════════════ */

// ── State ────────────────────────────────────────────────
const APP = {
  currentPage: 'dashboard',
  progress: JSON.parse(localStorage.getItem('psir101_progress') || '{}'),
  arenaScore: 0,
  arenaStreak: 0
};

// ── Page Navigation ──────────────────────────────────────
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });

  // Update topbar title
  const titles = {
    dashboard: 'Dashboard',
    syllabus: 'Course Information',
    modules: 'Weekly Modules',
    arena: 'Study Arena',
    essay: 'Essay Writing Lab',
    theories: 'Theory Explorer'
  };
  document.getElementById('topbarTitle').textContent = titles[pageId] || 'PSIR101';
  APP.currentPage = pageId;

  // Initialize game content on first visit
  if (pageId === 'arena' && !window._arenaInit) {
    window._arenaInit = true;
    switchGame('quiz');
  }
  if (pageId === 'essay' && !window._essayInit) {
    window._essayInit = true;
    switchTool('thesis');
  }
  if (pageId === 'theories' && !window._theoriesInit) {
    window._theoriesInit = true;
    updateTheoryExplorer();
    nextTheoryChallenge();
  }

  // Close mobile nav
  if (window.innerWidth < 900) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('navOverlay').classList.remove('open');
  }
}

// ── Mobile Navigation ────────────────────────────────────
function toggleMobileNav() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('navOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

// ── Module Accordion ─────────────────────────────────────
function toggleModule(header) {
  const body = header.nextElementSibling;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  header.classList.toggle('open', !isOpen);
}

// ── Scroll to Week ───────────────────────────────────────
function scrollToWeek(weekId) {
  setTimeout(() => {
    const el = document.getElementById(weekId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Auto-open if closed
      const header = el.querySelector('.module-header');
      const body = el.querySelector('.module-body');
      if (header && body && !body.classList.contains('open')) {
        body.classList.add('open');
        header.classList.add('open');
      }
    }
  }, 80);
}

// ── Flip Cards (UN Organs) ───────────────────────────────
function flipCard(card) {
  card.classList.toggle('flipped');
}

// ── Assessment Chart (Canvas) ────────────────────────────
function drawAssessmentChart() {
  const canvas = document.getElementById('assessmentChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [
    { val: 40, color: '#1a4a8a' },
    { val: 30, color: '#c8a44a' },
    { val: 10, color: '#2e7d5e' },
    { val: 10, color: '#7b3d8c' },
    { val: 10, color: '#c0392b' }
  ];
  const cx = 90, cy = 90, r = 75, inner = 40;
  let angle = -Math.PI / 2;
  data.forEach(d => {
    const slice = (d.val / 100) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, angle, angle + slice);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    angle += slice;
  });
  // Inner circle (donut hole)
  ctx.beginPath();
  ctx.arc(cx, cy, inner, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  // Center label
  ctx.fillStyle = '#1c2b3a';
  ctx.font = 'bold 13px Inter';
  ctx.textAlign = 'center';
  ctx.fillText('100%', cx, cy + 5);
}

// ── Progress Tracking ────────────────────────────────────
function updateProgress() {
  const keys = Object.keys(APP.progress);
  const pct = Math.min(100, Math.round((keys.length / 30) * 100));
  const fill = document.getElementById('sidebarProgress');
  const pctEl = document.getElementById('sidebarProgressPct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '% complete';
}

function markProgress(key) {
  APP.progress[key] = true;
  localStorage.setItem('psir101_progress', JSON.stringify(APP.progress));
  updateProgress();
}

// ── Arena Score ──────────────────────────────────────────
function addArenaScore(pts) {
  APP.arenaScore += pts;
  APP.arenaStreak++;
  document.getElementById('arenaScore').textContent = APP.arenaScore + ' pts';
  document.getElementById('arenaStreak').textContent = '🔥 ' + APP.arenaStreak + ' streak';
  markProgress('arena_' + Date.now());
}

function resetStreak() {
  APP.arenaStreak = 0;
  document.getElementById('arenaStreak').textContent = '🔥 0 streak';
}

// ── Shuffle Array ────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Get Random From Array ────────────────────────────────
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showPage('dashboard');
  setTimeout(drawAssessmentChart, 100);
  updateProgress();
});
