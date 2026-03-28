/* ═══════════════════════════════════════════════════════════
   PSIR101 Theory Explorer
════════════════════════════════════════════════════════════ */

const THEORY_CONFIG = [
  { key: 'realism',         label: 'Realism',          color: '#c0392b', icon: '⚔️',  emoji: '🔴' },
  { key: 'liberalism',      label: 'Liberalism',        color: '#1a4a8a', icon: '🕊️',  emoji: '🔵' },
  { key: 'marxism',         label: 'Marxism',           color: '#e67e22', icon: '⚒️',  emoji: '🟠' },
  { key: 'constructivism',  label: 'Constructivism',    color: '#7b3d8c', icon: '🧠',  emoji: '🟣' },
  { key: 'feminism',        label: 'Feminism',          color: '#e91e8c', icon: '♀️',  emoji: '🩷' },
  { key: 'postcolonialism', label: 'Post-colonialism',  color: '#2e7d5e', icon: '🌍',  emoji: '🟢' }
];

function updateTheoryExplorer() {
  const topic = document.getElementById('theoryTopic')?.value || 'globalization';
  const lenses = PSIR101_DATA.theoryLenses[topic];
  if (!lenses) return;

  const grid = document.getElementById('theoryGrid');
  if (!grid) return;

  grid.innerHTML = THEORY_CONFIG.map(t => {
    const content = lenses[t.key] || 'Content for this lens coming soon.';
    return `
      <div class="te-card">
        <div class="te-card-header" style="background:${t.color}">
          <span>${t.icon}</span>
          <span>${t.label}</span>
        </div>
        <div class="te-card-body">
          <strong>How ${t.label} sees this topic:</strong>
          ${content}
        </div>
      </div>
    `;
  }).join('');
}

function randomTopic() {
  const sel = document.getElementById('theoryTopic');
  if (!sel) return;
  const opts = Array.from(sel.options);
  const current = sel.value;
  const others = opts.filter(o => o.value !== current);
  const picked = others[Math.floor(Math.random() * others.length)];
  sel.value = picked.value;
  updateTheoryExplorer();
}

/* ─── Theory Challenge ──────────────────────────────────── */
const challengeState = { statements: [], current: 0, answered: false };

function nextTheoryChallenge() {
  if (!challengeState.statements.length) {
    challengeState.statements = shuffle([...PSIR101_DATA.theoryStatements]);
    challengeState.current = 0;
  } else {
    challengeState.current = (challengeState.current + 1) % challengeState.statements.length;
  }
  challengeState.answered = false;
  renderTheoryChallenge();
}

function renderTheoryChallenge() {
  const s = challengeState.statements[challengeState.current];
  const stmt = document.getElementById('teStatement');
  const opts = document.getElementById('teOptions');
  const fb = document.getElementById('teFeedback');
  if (!stmt || !opts) return;

  stmt.textContent = '"' + s.statement + '"';
  fb.className = 'te-feedback';
  fb.innerHTML = '';

  opts.innerHTML = THEORY_CONFIG.map(t => `
    <button class="te-opt" onclick="answerTheoryChallenge('${t.label}')" 
      style="border-color:${t.color}">
      ${t.emoji} ${t.label}
    </button>
  `).join('');
}

function answerTheoryChallenge(chosen) {
  if (challengeState.answered) return;
  challengeState.answered = true;
  const s = challengeState.statements[challengeState.current];
  const isCorrect = chosen === s.theory;

  document.querySelectorAll('.te-opt').forEach(btn => {
    btn.style.pointerEvents = 'none';
    const theory = THEORY_CONFIG.find(t => t.label === btn.textContent.trim().replace(/^\S+\s/, ''));
    if (!theory) return;
    if (theory.label === s.theory) {
      btn.style.background = theory.color;
      btn.style.color = '#fff';
    }
  });

  const fb = document.getElementById('teFeedback');
  if (isCorrect) {
    fb.className = 'te-feedback correct';
    fb.innerHTML = `✅ <strong>Correct! This is ${s.theory}.</strong> ${s.explanation}`;
    addArenaScore(15);
  } else {
    fb.className = 'te-feedback wrong';
    fb.innerHTML = `❌ <strong>This is ${s.theory}.</strong> ${s.explanation}`;
  }
}
