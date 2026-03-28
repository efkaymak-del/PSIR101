/* ═══════════════════════════════════════════════════════════
   PSIR101 Study Arena — All 5 Interactive Games
════════════════════════════════════════════════════════════ */

let currentGame = 'quiz';

/* ─── GAME SWITCHER ─────────────────────────────────────── */
function switchGame(gameId) {
  currentGame = gameId;
  // Update tab styles
  document.querySelectorAll('.arena-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.game === gameId);
  });
  // Render
  const body = document.getElementById('arenaBody');
  switch (gameId) {
    case 'quiz':     renderQuiz(body); break;
    case 'fill':     renderFill(body); break;
    case 'matching': renderMatching(body); break;
    case 'timeline': renderTimeline(body); break;
    case 'theory':   renderTheoryID(body); break;
  }
}

/* ══════════════════════════════════════════════════════════
   GAME 1: QUICK QUIZ (Multiple Choice)
══════════════════════════════════════════════════════════ */
const quizState = { questions: [], current: 0, answered: false };

function initQuiz() {
  quizState.questions = shuffle(PSIR101_DATA.quiz);
  quizState.current = 0;
  quizState.answered = false;
}

function renderQuiz(container) {
  if (!quizState.questions.length) initQuiz();
  const q = quizState.questions[quizState.current];
  const total = quizState.questions.length;
  const pct = Math.round((quizState.current / total) * 100);

  container.innerHTML = `
    <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-topic-badge">${q.topic}</div>
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-options" id="quizOptions">
      ${q.options.map((opt, i) => `
        <button class="quiz-opt" onclick="selectQuizOpt(${i})" id="qopt${i}">${opt}</button>
      `).join('')}
    </div>
    <div id="quizFeedback"></div>
    <div class="quiz-nav">
      <span class="quiz-count">Question ${quizState.current + 1} of ${total}</span>
      <button onclick="nextQuizQ()" class="btn-sm" id="nextQuizBtn" style="display:none">Next Question →</button>
    </div>
    <div style="margin-top:16px">
      <button onclick="initQuiz(); renderQuiz(document.getElementById('arenaBody'))" class="btn-sm" style="background:var(--muted)">🔄 Restart Quiz</button>
    </div>
  `;
}

function selectQuizOpt(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.current];
  const isCorrect = idx === q.answer;

  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.answer) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('quizFeedback');
  if (isCorrect) {
    fb.className = 'quiz-feedback correct-fb';
    fb.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
    addArenaScore(10);
  } else {
    fb.className = 'quiz-feedback wrong-fb';
    fb.innerHTML = `<strong>❌ Not quite.</strong> The correct answer is: <strong>${q.options[q.answer]}</strong>. ${q.explanation}`;
    resetStreak();
  }
  document.getElementById('nextQuizBtn').style.display = 'inline-flex';
}

function nextQuizQ() {
  quizState.current = (quizState.current + 1) % quizState.questions.length;
  quizState.answered = false;
  if (quizState.current === 0) {
    initQuiz(); // Reshuffle when all done
    renderQuiz(document.getElementById('arenaBody'));
    return;
  }
  renderQuiz(document.getElementById('arenaBody'));
}

/* ══════════════════════════════════════════════════════════
   GAME 2: FILL IN THE BLANK
══════════════════════════════════════════════════════════ */
const fillState = { questions: [], current: 0, selected: null, answered: false };

function initFill() {
  fillState.questions = shuffle(PSIR101_DATA.fill);
  fillState.current = 0;
  fillState.selected = null;
  fillState.answered = false;
}

function renderFill(container) {
  if (!fillState.questions.length) initFill();
  const q = fillState.questions[fillState.current];
  const shuffledOpts = shuffle(q.options);

  const sentenceWithBlank = q.sentence.replace(q.blank,
    `<span class="fill-blank" id="fillBlankDisplay">_____</span>`
  );

  container.innerHTML = `
    <div class="quiz-topic-badge">${q.topic}</div>
    <div class="fill-sentence">${sentenceWithBlank}</div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:12px">Choose the correct word or phrase to complete the sentence:</p>
    <div class="fill-options" id="fillOptions">
      ${shuffledOpts.map(opt => `
        <button class="fill-opt" onclick="selectFillOpt(this, '${opt.replace(/'/g,"\\'")}', '${q.answer.replace(/'/g,"\\'")}')">
          ${opt}
        </button>
      `).join('')}
    </div>
    <div id="fillFeedback"></div>
    <div class="quiz-nav" style="margin-top:16px">
      <span class="quiz-count">Question ${fillState.current + 1} of ${fillState.questions.length}</span>
      <button onclick="nextFillQ()" class="btn-sm" id="nextFillBtn" style="display:none">Next →</button>
    </div>
    <div style="margin-top:16px">
      <button onclick="initFill(); renderFill(document.getElementById('arenaBody'))" class="btn-sm" style="background:var(--muted)">🔄 New Set</button>
    </div>
  `;
}

function selectFillOpt(btn, chosen, answer) {
  if (fillState.answered) return;
  fillState.answered = true;
  const isCorrect = chosen === answer;
  const blank = document.getElementById('fillBlankDisplay');

  document.querySelectorAll('.fill-opt').forEach(b => {
    b.classList.add('disabled');
    b.style.pointerEvents = 'none';
    if (b.textContent.trim() === answer) b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  if (blank) {
    blank.textContent = answer;
    blank.style.color = isCorrect ? '#2e7d32' : '#c0392b';
    blank.style.borderColor = isCorrect ? '#2e7d32' : '#c0392b';
  }

  const q = fillState.questions[fillState.current];
  const fb = document.getElementById('fillFeedback');
  if (isCorrect) {
    fb.className = 'quiz-feedback correct-fb';
    fb.innerHTML = `<strong>✅ Correct!</strong> ${q.explanation}`;
    addArenaScore(10);
  } else {
    fb.className = 'quiz-feedback wrong-fb';
    fb.innerHTML = `<strong>❌ The correct answer is: <em>${answer}</em>.</strong> ${q.explanation}`;
    resetStreak();
  }
  document.getElementById('nextFillBtn').style.display = 'inline-flex';
}

function nextFillQ() {
  fillState.current = (fillState.current + 1) % fillState.questions.length;
  fillState.answered = false;
  fillState.selected = null;
  if (fillState.current === 0) initFill();
  renderFill(document.getElementById('arenaBody'));
}

/* ══════════════════════════════════════════════════════════
   GAME 3: CONCEPT MATCHING
══════════════════════════════════════════════════════════ */
const matchState = {
  setIdx: 0,
  pairs: [],
  selectedTerm: null,
  matched: new Set(),
  mistakes: 0
};

function initMatching(setIdx) {
  matchState.setIdx = setIdx || 0;
  const set = PSIR101_DATA.matchingSets[matchState.setIdx];
  matchState.pairs = shuffle(set.pairs);
  matchState.definitions = shuffle(set.pairs.map(p => p.definition));
  matchState.selectedTerm = null;
  matchState.selectedDef = null;
  matchState.matched = new Set();
  matchState.mistakes = 0;
}

function renderMatching(container) {
  if (!matchState.pairs.length) initMatching(0);
  const set = PSIR101_DATA.matchingSets[matchState.setIdx];

  const setButtons = PSIR101_DATA.matchingSets.map((s, i) =>
    `<button class="btn-sm ${i === matchState.setIdx ? '' : ''}" 
      onclick="initMatching(${i}); renderMatching(document.getElementById('arenaBody'))"
      style="${i === matchState.setIdx ? 'background:var(--navy-dark)' : 'background:var(--muted)'}">
      ${i + 1}. ${s.title.split(' ').slice(0,3).join(' ')}...
    </button>`
  ).join(' ');

  container.innerHTML = `
    <div style="margin-bottom:16px">
      <strong style="font-size:14px">${set.title}</strong><br>
      <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px">${setButtons}</div>
    </div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:16px">
      Click a term on the left, then click its matching definition on the right. 
      Matched: ${matchState.matched.size / 2 | 0}/${matchState.pairs.length} · Mistakes: ${matchState.mistakes}
    </p>
    <div class="match-container">
      <div class="match-col">
        <h4>Terms</h4>
        ${matchState.pairs.map((p, i) => {
          const isMatched = matchState.matched.has('t' + i);
          return `<div class="match-item ${isMatched ? 'matched' : ''}" 
            id="mterm${i}" onclick="selectMatchTerm(${i})">${p.term}</div>`;
        }).join('')}
      </div>
      <div class="match-col">
        <h4>Definitions</h4>
        ${matchState.definitions.map((d, i) => {
          const isMatched = matchState.matched.has('d' + i);
          return `<div class="match-item ${isMatched ? 'matched' : ''}" 
            id="mdef${i}" onclick="selectMatchDef(${i})">${d}</div>`;
        }).join('')}
      </div>
    </div>
    <div id="matchFeedback" style="margin-top:14px"></div>
    ${matchState.matched.size === matchState.pairs.length * 2 ? `
      <div class="quiz-feedback correct-fb" style="margin-top:16px;text-align:center">
        🎉 <strong>All matched!</strong> Score: ${matchState.pairs.length * 10 - matchState.mistakes * 5} pts
        <br><button onclick="initMatching((matchState.setIdx+1)%PSIR101_DATA.matchingSets.length); renderMatching(document.getElementById('arenaBody'))" 
          class="btn-sm" style="margin-top:10px">Next Set →</button>
      </div>` : ''}
  `;
}

function selectMatchTerm(idx) {
  if (matchState.matched.has('t' + idx)) return;
  matchState.selectedTerm = idx;
  matchState.selectedDef = null;
  document.querySelectorAll('.match-item').forEach(el => {
    if (!el.classList.contains('matched')) el.classList.remove('selected');
  });
  const el = document.getElementById('mterm' + idx);
  if (el) el.classList.add('selected');
}

function selectMatchDef(idx) {
  if (matchState.matched.has('d' + idx)) return;
  if (matchState.selectedTerm === null) return;

  const termPair = matchState.pairs[matchState.selectedTerm];
  const defText = matchState.definitions[idx];
  const isMatch = termPair.definition === defText;

  const termEl = document.getElementById('mterm' + matchState.selectedTerm);
  const defEl = document.getElementById('mdef' + idx);

  if (isMatch) {
    termEl.classList.add('matched'); termEl.classList.remove('selected');
    defEl.classList.add('matched');
    matchState.matched.add('t' + matchState.selectedTerm);
    matchState.matched.add('d' + idx);
    addArenaScore(10);

    const fb = document.getElementById('matchFeedback');
    if (fb) { fb.className = 'quiz-feedback correct-fb'; fb.innerHTML = `✅ Match! <strong>${termPair.term}</strong>: ${defText}`; }
  } else {
    termEl.classList.add('wrong'); defEl.classList.add('wrong');
    setTimeout(() => { termEl.classList.remove('wrong', 'selected'); defEl.classList.remove('wrong'); }, 1000);
    matchState.mistakes++;
    resetStreak();
    const fb = document.getElementById('matchFeedback');
    if (fb) { fb.className = 'quiz-feedback wrong-fb'; fb.innerHTML = `❌ Not a match. Try again!`; }
  }

  matchState.selectedTerm = null;

  // Check completion
  if (matchState.matched.size === matchState.pairs.length * 2) {
    setTimeout(() => renderMatching(document.getElementById('arenaBody')), 400);
  }
}

/* ══════════════════════════════════════════════════════════
   GAME 4: TIMELINE SORT
══════════════════════════════════════════════════════════ */
const tlState = { setIdx: 0, items: [], dragging: null, checked: false };

function initTimeline(setIdx) {
  tlState.setIdx = setIdx || 0;
  tlState.items = shuffle(PSIR101_DATA.timelines[tlState.setIdx].items);
  tlState.dragging = null;
  tlState.checked = false;
}

function renderTimeline(container) {
  if (!tlState.items.length) initTimeline(0);
  const set = PSIR101_DATA.timelines[tlState.setIdx];

  const setButtons = PSIR101_DATA.timelines.map((s, i) =>
    `<button class="btn-sm" onclick="initTimeline(${i}); renderTimeline(document.getElementById('arenaBody'))"
      style="background:${i === tlState.setIdx ? 'var(--navy-dark)' : 'var(--muted)'}">${s.title.split(':')[0]}</button>`
  ).join(' ');

  container.innerHTML = `
    <div style="margin-bottom:16px">
      <strong style="font-size:14px">${set.title}</strong><br>
      <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px">${setButtons}</div>
    </div>
    <p class="tl-instructions">Drag and drop the events into the correct chronological order (earliest first).</p>
    <div class="tl-items" id="tlList">
      ${tlState.items.map((item, i) => `
        <div class="tl-item" draggable="true" data-idx="${i}" 
          ondragstart="tlDragStart(event,${i})" ondragover="tlDragOver(event)" ondrop="tlDrop(event,${i})">
          <span class="tl-drag">⣿</span>
          <span class="tl-year">${item.year}</span>
          <span>${item.text}</span>
        </div>
      `).join('')}
    </div>
    <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
      <button onclick="checkTimeline()" class="btn-sm">✅ Check Order</button>
      <button onclick="initTimeline(tlState.setIdx); renderTimeline(document.getElementById('arenaBody'))" class="btn-sm" style="background:var(--muted)">🔄 Shuffle</button>
    </div>
    <div id="tlFeedback" style="margin-top:14px"></div>
  `;

  // Add touch/drag for mobile
  addTlTouchEvents();
}

function tlDragStart(e, idx) {
  tlState.dragging = idx;
  e.dataTransfer.effectAllowed = 'move';
  e.currentTarget.classList.add('dragging');
}

function tlDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function tlDrop(e, targetIdx) {
  e.preventDefault();
  if (tlState.dragging === null || tlState.dragging === targetIdx) return;
  const items = tlState.items;
  const dragged = items.splice(tlState.dragging, 1)[0];
  items.splice(targetIdx, 0, dragged);
  tlState.dragging = null;
  tlState.checked = false;
  renderTimeline(document.getElementById('arenaBody'));
}

function addTlTouchEvents() {
  // Simple touch support using click-to-reorder
  let touchSelIdx = null;
  document.querySelectorAll('.tl-item').forEach((el, i) => {
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
  });
}

function checkTimeline() {
  const items = tlState.items;
  let correct = 0;
  const listItems = document.querySelectorAll('.tl-item');
  items.forEach((item, i) => {
    const el = listItems[i];
    if (item.order === i) {
      el.classList.add('correct-pos');
      el.classList.remove('wrong-pos');
      correct++;
    } else {
      el.classList.add('wrong-pos');
      el.classList.remove('correct-pos');
    }
  });

  const fb = document.getElementById('tlFeedback');
  if (correct === items.length) {
    fb.className = 'quiz-feedback correct-fb';
    fb.innerHTML = `🎉 <strong>Perfect order!</strong> All ${correct} events in the right chronological sequence! +${correct * 10} pts`;
    addArenaScore(correct * 10);
  } else {
    fb.className = 'quiz-feedback wrong-fb';
    fb.innerHTML = `${correct}/${items.length} correct. Red items are in the wrong position. Keep adjusting!`;
    if (correct > 0) addArenaScore(correct * 5);
    resetStreak();
  }
}

/* ══════════════════════════════════════════════════════════
   GAME 5: THEORY IDENTIFIER
══════════════════════════════════════════════════════════ */
const tidState = { statements: [], current: 0, answered: false };
const THEORY_COLORS = {
  'Realism': '#c0392b',
  'Liberalism': '#1a4a8a',
  'Constructivism': '#7b3d8c',
  'Marxism': '#e67e22',
  'Feminism': '#e91e8c',
  'Post-colonialism': '#2e7d5e'
};

function initTheoryID() {
  tidState.statements = shuffle(PSIR101_DATA.theoryStatements);
  tidState.current = 0;
  tidState.answered = false;
}

function renderTheoryID(container) {
  if (!tidState.statements.length) initTheoryID();
  const s = tidState.statements[tidState.current];
  const theories = Object.keys(THEORY_COLORS);

  container.innerHTML = `
    <h3 style="font-size:15px;font-weight:700;color:var(--navy);margin-bottom:12px">
      <i class="fas fa-brain"></i> Which IR theory does this statement reflect?
    </h3>
    <p style="font-size:12px;color:var(--muted);margin-bottom:14px">
      Question ${tidState.current + 1} of ${tidState.statements.length}
    </p>
    <div class="tid-statement">"${s.statement}"</div>
    <div class="tid-options" id="tidOptions">
      ${theories.map(t => `
        <button class="tid-opt" 
          onclick="selectTheoryID('${t}')"
          style="border-color:${THEORY_COLORS[t]};color:${THEORY_COLORS[t]}">
          ${t}
        </button>
      `).join('')}
    </div>
    <div id="tidFeedback"></div>
    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
      <button onclick="nextTheoryID()" class="btn-sm" id="nextTidBtn" style="display:none">Next Statement →</button>
      <button onclick="initTheoryID(); renderTheoryID(document.getElementById('arenaBody'))" class="btn-sm" style="background:var(--muted)">🔄 New Set</button>
    </div>
  `;
}

function selectTheoryID(chosen) {
  if (tidState.answered) return;
  tidState.answered = true;
  const s = tidState.statements[tidState.current];
  const isCorrect = chosen === s.theory;

  document.querySelectorAll('.tid-opt').forEach(btn => {
    btn.style.pointerEvents = 'none';
    if (btn.textContent.trim() === s.theory) {
      btn.style.background = THEORY_COLORS[s.theory];
      btn.style.color = '#fff';
    } else if (btn.textContent.trim() === chosen && !isCorrect) {
      btn.style.background = '#fdecea';
      btn.style.opacity = '0.6';
    }
  });

  const fb = document.getElementById('tidFeedback');
  if (isCorrect) {
    fb.className = 'quiz-feedback correct-fb';
    fb.innerHTML = `<strong>✅ Correct! This is ${s.theory}.</strong><br>${s.explanation}`;
    addArenaScore(15);
  } else {
    fb.className = 'quiz-feedback wrong-fb';
    fb.innerHTML = `<strong>❌ This is actually ${s.theory}.</strong><br>${s.explanation}`;
    resetStreak();
  }

  document.getElementById('nextTidBtn').style.display = 'inline-flex';
}

function nextTheoryID() {
  tidState.current = (tidState.current + 1) % tidState.statements.length;
  tidState.answered = false;
  if (tidState.current === 0) initTheoryID();
  renderTheoryID(document.getElementById('arenaBody'));
}
