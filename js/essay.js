/* ═══════════════════════════════════════════════════════════
   PSIR101 Essay Writing Lab — 5 Interactive Tools
════════════════════════════════════════════════════════════ */

function switchTool(toolId) {
  document.querySelectorAll('.essay-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tool === toolId);
  });
  const body = document.getElementById('essayBody');
  switch (toolId) {
    case 'thesis':    renderThesisBuilder(body); break;
    case 'peel':      renderPeelBuilder(body); break;
    case 'planner':   renderEssayPlanner(body); break;
    case 'scramble':  renderScramble(body); break;
    case 'scorecard': renderScorecard(body); break;
  }
}

/* ══════════════════════════════════════════════════════════
   TOOL 1: THESIS STATEMENT BUILDER
══════════════════════════════════════════════════════════ */
const ESSAY_TOPICS = [
  "the UN Security Council should be reformed to include more permanent members",
  "globalization has widened inequality between the Global North and Global South",
  "the Responsibility to Protect (R2P) doctrine is used selectively by powerful states",
  "race continues to function as a foundational ordering principle in international relations",
  "feminist IR offers a more complete understanding of security than realist approaches",
  "the Cyprus conflict cannot be resolved without addressing the interests of external powers",
  "international environmental agreements fail because states prioritize short-term economic interests",
  "human rights are not truly universal but reflect Western liberal values",
  "intergovernmental organizations do more to legitimize powerful state interests than constrain them",
  "constructivism better explains the end of the Cold War than realism"
];

function renderThesisBuilder(container) {
  const stored = JSON.parse(localStorage.getItem('psir101_thesis') || '{}');
  container.innerHTML = `
    <div class="thesis-builder">
      <div style="background:var(--navy-light);border-radius:8px;padding:14px;margin-bottom:20px;font-size:13px;line-height:1.6">
        <strong>📝 The Essay Toolkit</strong><br>
        A strong PSIR101 thesis must be: <strong>Arguable</strong> (takes a position), 
        <strong>Specific</strong> (references a theory or evidence), <strong>Concise</strong> (one clear sentence), 
        and <strong>Complex</strong> (acknowledges nuance).
      </div>

      <div class="thesis-step">
        <label>Step 1: Choose or type an essay question/topic</label>
        <small>Select a practice topic or write your own question</small>
        <select id="thesisTopic" onchange="updateThesisPreview()">
          <option value="">-- Select a topic --</option>
          ${ESSAY_TOPICS.map(t => `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1, 60)}...</option>`).join('')}
        </select>
      </div>

      <div class="thesis-step">
        <label>Step 2: Your main argument (what do you claim?)</label>
        <small>Be specific — use an IR theory, a country, or a case study</small>
        <input type="text" id="thesisArg" placeholder='e.g., "Although X argument has merit, a realist analysis shows that..."'
          oninput="updateThesisPreview()" value="${stored.arg || ''}">
      </div>

      <div class="thesis-step">
        <label>Step 3: Add a concession (optional but recommended)</label>
        <small>Acknowledging counterarguments makes your thesis more sophisticated</small>
        <input type="text" id="thesisConcede" placeholder='e.g., "Although liberal institutionalists argue that..."'
          oninput="updateThesisPreview()" value="${stored.concede || ''}">
      </div>

      <div class="thesis-step">
        <label>Step 4: Your reason / evidence reference</label>
        <small>Link to a theory, reading, or case (e.g., "as Shilliam argues..." / "as demonstrated by...")</small>
        <input type="text" id="thesisReason" placeholder='e.g., "as demonstrated by the Cyprus case" or "drawing on realist theory"'
          oninput="updateThesisPreview()" value="${stored.reason || ''}">
      </div>

      <div class="thesis-preview" id="thesisPreview">
        Your thesis statement will appear here as you type...
      </div>

      <div class="thesis-checklist" id="thesisChecklist"></div>

      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
        <button onclick="copyThesis()" class="btn-sm"><i class="fas fa-copy"></i> Copy Thesis</button>
        <button onclick="clearThesis()" class="btn-sm" style="background:var(--muted)">Clear</button>
      </div>

      <div style="margin-top:24px;background:var(--bg);border-radius:8px;padding:16px">
        <h4 style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:10px">📚 Strong Thesis Examples from PSIR101 Topics</h4>
        <div style="font-size:13px;line-height:1.7;color:var(--muted)">
          <p><strong>UN Reform:</strong> <em>"While liberal institutionalists argue that Security Council reform would enhance multilateral governance, a realist analysis suggests that the P5 will never voluntarily surrender their veto power, as doing so would undermine their structural advantage in the international system."</em></p>
          <p style="margin-top:10px"><strong>Race in World Politics:</strong> <em>"Although biological racism has been formally repudiated, race continues to function as a foundational ordering principle in world politics, as demonstrated by the racialization of migration policy and security discourse in the post-9/11 era."</em></p>
          <p style="margin-top:10px"><strong>Cyprus Conflict:</strong> <em>"Despite decades of UN-mediated negotiations, a realist analysis suggests the Cyprus conflict remains unresolved primarily because the strategic interests of Greece, Turkey, and the United Kingdom take precedence over the preferences of Cypriot communities themselves."</em></p>
        </div>
      </div>
    </div>
  `;
  updateThesisPreview();
}

function updateThesisPreview() {
  const arg = document.getElementById('thesisArg')?.value.trim() || '';
  const concede = document.getElementById('thesisConcede')?.value.trim() || '';
  const reason = document.getElementById('thesisReason')?.value.trim() || '';

  let thesis = '';
  if (concede) thesis += concede + ', ';
  if (arg) thesis += arg;
  if (reason) thesis += ' ' + reason;
  if (!thesis) thesis = 'Your thesis statement will appear here as you type...';
  if (thesis && !thesis.endsWith('.')) thesis += '.';

  const preview = document.getElementById('thesisPreview');
  if (preview) preview.textContent = thesis;

  // Save
  localStorage.setItem('psir101_thesis', JSON.stringify({ arg, concede, reason }));

  // Checklist
  const checks = [
    { label: "Takes a clear position (not just a topic)", pass: arg.length > 20 },
    { label: "References a theory, thinker, or case", pass: /reali|liberal|construct|marx|femini|post-coloni|shilliam|baylis|un |nato|cypr|R2P|apartheid/i.test(arg + reason) },
    { label: "Includes a concession or counter-argument", pass: concede.length > 10 },
    { label: "Provides a reason/evidence reference", pass: reason.length > 10 },
    { label: "Specific enough (not vague)", pass: arg.length > 30 && !/very|general|important|interesting/i.test(arg) }
  ];

  const cl = document.getElementById('thesisChecklist');
  if (cl) {
    cl.innerHTML = `
      <h4 style="font-size:13px;font-weight:700;color:var(--navy);margin-bottom:10px">✅ Thesis Checklist</h4>
      ${checks.map(c => `
        <div class="tc-item">
          <div class="tc-icon ${c.pass ? 'pass' : 'fail'}">${c.pass ? '✓' : '✗'}</div>
          <span>${c.label}</span>
        </div>
      `).join('')}
    `;
  }
}

function copyThesis() {
  const preview = document.getElementById('thesisPreview');
  if (preview && preview.textContent && !preview.textContent.includes('will appear here')) {
    navigator.clipboard.writeText(preview.textContent).then(() => {
      alert('Thesis copied to clipboard!');
    });
  }
}

function clearThesis() {
  localStorage.removeItem('psir101_thesis');
  document.getElementById('thesisArg').value = '';
  document.getElementById('thesisConcede').value = '';
  document.getElementById('thesisReason').value = '';
  updateThesisPreview();
}

/* ══════════════════════════════════════════════════════════
   TOOL 2: PEEL PARAGRAPH BUILDER
══════════════════════════════════════════════════════════ */
function renderPeelBuilder(container) {
  const stored = JSON.parse(localStorage.getItem('psir101_peel') || '{}');
  container.innerHTML = `
    <div>
      <div style="background:var(--green-light);border-radius:8px;padding:14px;margin-bottom:20px;font-size:13px;line-height:1.6">
        <strong>📖 The PEEL Model</strong><br>
        Every body paragraph in your PSIR101 essay should follow PEEL:<br>
        <strong style="color:#1a4a8a">P</strong>oint → 
        <strong style="color:#8B5A00">E</strong>vidence → 
        <strong style="color:#1a5c3a">E</strong>xplanation → 
        <strong style="color:#5a2d6b">L</strong>ink
      </div>

      <div class="peel-grid">
        <div class="peel-section point">
          <div class="peel-label">P — Point</div>
          <div class="peel-desc">Your paragraph's main claim (topic sentence). Should support your thesis.</div>
          <textarea class="peel-input" id="peelPoint" placeholder="e.g., Realism best explains why the UN Security Council reform has stalled..." 
            oninput="updatePeelOutput()">${stored.p || ''}</textarea>
        </div>
        <div class="peel-section evidence">
          <div class="peel-label">E — Evidence</div>
          <div class="peel-desc">Specific evidence: a quote, statistic, case, or reading reference.</div>
          <textarea class="peel-input" id="peelEvidence" placeholder="e.g., According to Baylis, Smith and Owens (p.334), the P5 veto was used X times in 2024-25..." 
            oninput="updatePeelOutput()">${stored.e || ''}</textarea>
        </div>
        <div class="peel-section explanation">
          <div class="peel-label">E — Explanation</div>
          <div class="peel-desc">Explain HOW the evidence supports your point. Connect theory to evidence.</div>
          <textarea class="peel-input" id="peelExplanation" placeholder="e.g., This demonstrates that great powers treat the Security Council as a tool of national interest rather than a forum for collective security, consistent with the realist view that..." 
            oninput="updatePeelOutput()">${stored.x || ''}</textarea>
        </div>
        <div class="peel-section link">
          <div class="peel-label">L — Link</div>
          <div class="peel-desc">Link back to your overall thesis or transition to the next paragraph.</div>
          <textarea class="peel-input" id="peelLink" placeholder="e.g., This confirms the thesis that structural power dynamics, not institutional design, explain the persistence of the status quo in UN reform debates." 
            oninput="updatePeelOutput()">${stored.l || ''}</textarea>
        </div>
      </div>

      <div style="margin-bottom:12px;display:flex;gap:10px;flex-wrap:wrap">
        <button onclick="updatePeelOutput()" class="btn-sm"><i class="fas fa-sync"></i> Build Paragraph</button>
        <button onclick="copyPeel()" class="btn-sm"><i class="fas fa-copy"></i> Copy</button>
        <button onclick="clearPeel()" class="btn-sm" style="background:var(--muted)">Clear</button>
      </div>

      <div class="peel-output" id="peelOutput">
        <em style="color:var(--muted)">Your PEEL paragraph will be assembled here automatically...</em>
      </div>

      <div style="margin-top:20px;background:var(--bg);border-radius:8px;padding:16px">
        <h4 style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:10px">💡 PEEL Example: UN Security Council</h4>
        <div style="font-size:13px;line-height:1.8">
          <span class="peel-span-point">Realism best explains the persistence of the Security Council's veto system, as great powers use institutional structures to preserve their dominance.</span>
          <span class="peel-span-evidence"> The United States, Russia, and China collectively used the veto over 30 times between 2011 and 2025 to block resolutions on Syria, Ukraine, and Gaza respectively (Security Council Report, 2025).</span>
          <span class="peel-span-explanation"> This pattern of selective use demonstrates that P5 members invoke their veto primarily when resolutions threaten their strategic interests or those of their allies — a pattern entirely consistent with Mearsheimer's offensive realism and the expectation that great powers act to maximize relative power.</span>
          <span class="peel-span-link"> Such evidence ultimately confirms the thesis that meaningful Security Council reform is unlikely absent a fundamental shift in the international balance of power.</span>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px;font-size:11px;flex-wrap:wrap">
          <span style="background:rgba(26,74,138,.1);color:#1a4a8a;padding:3px 8px;border-radius:4px">Blue = Point</span>
          <span style="background:rgba(200,164,74,.1);color:#8B5A00;padding:3px 8px;border-radius:4px">Orange = Evidence</span>
          <span style="background:rgba(46,125,94,.1);color:#1a5c3a;padding:3px 8px;border-radius:4px">Green = Explanation</span>
          <span style="background:rgba(123,61,140,.1);color:#5a2d6b;padding:3px 8px;border-radius:4px">Purple = Link</span>
        </div>
      </div>
    </div>
  `;
  updatePeelOutput();
}

function updatePeelOutput() {
  const p = document.getElementById('peelPoint')?.value.trim() || '';
  const e = document.getElementById('peelEvidence')?.value.trim() || '';
  const x = document.getElementById('peelExplanation')?.value.trim() || '';
  const l = document.getElementById('peelLink')?.value.trim() || '';

  localStorage.setItem('psir101_peel', JSON.stringify({ p, e, x, l }));

  const output = document.getElementById('peelOutput');
  if (!output) return;
  if (!p && !e && !x && !l) {
    output.innerHTML = '<em style="color:var(--muted)">Your PEEL paragraph will be assembled here automatically...</em>';
    return;
  }

  output.innerHTML = `
    ${p ? `<span class="peel-span-point">${p}${!p.endsWith('.') ? '.' : ''} </span>` : ''}
    ${e ? `<span class="peel-span-evidence">${e}${!e.endsWith('.') ? '.' : ''} </span>` : ''}
    ${x ? `<span class="peel-span-explanation">${x}${!x.endsWith('.') ? '.' : ''} </span>` : ''}
    ${l ? `<span class="peel-span-link">${l}${!l.endsWith('.') ? '.' : ''}</span>` : ''}
  `;
}

function copyPeel() {
  const output = document.getElementById('peelOutput');
  if (output) {
    navigator.clipboard.writeText(output.innerText).then(() => alert('Paragraph copied!'));
  }
}

function clearPeel() {
  localStorage.removeItem('psir101_peel');
  ['peelPoint','peelEvidence','peelExplanation','peelLink'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  updatePeelOutput();
}

/* ══════════════════════════════════════════════════════════
   TOOL 3: ESSAY PLANNER
══════════════════════════════════════════════════════════ */
function renderEssayPlanner(container) {
  container.innerHTML = `
    <div class="planner">
      <div style="background:var(--navy-light);border-radius:8px;padding:14px;margin-bottom:20px;font-size:13px">
        <strong>📐 Essay Structure Guide</strong><br>
        A PSIR101 essay typically has: Introduction (thesis + roadmap) → 3 Body Paragraphs (PEEL each) → Conclusion (restate + implications).<br>
        Fill in each block below to plan your essay.
      </div>

      <div class="completeness-meter">
        <div class="cm-label">Essay completeness: <span id="cmPct">0%</span></div>
        <div class="cm-bar"><div class="cm-fill" id="cmFill" style="width:0%"></div></div>
      </div>

      <div class="planner-blocks" id="plannerBlocks" style="margin-top:20px">
        <!-- Introduction -->
        <div class="planner-block intro-block">
          <div class="planner-block-header" onclick="togglePlannerBlock(this)">
            <span>📌 Introduction</span>
            <span>▾</span>
          </div>
          <div class="planner-block-body open">
            <div class="planner-field">
              <label>Your Thesis Statement</label>
              <textarea placeholder="The main argument your essay will defend..." oninput="updatePlanner()" id="planThesis"></textarea>
            </div>
            <div class="planner-field">
              <label>Essay Roadmap (brief: what will you cover in each paragraph?)</label>
              <input type="text" placeholder="Para 1: X ... Para 2: Y ... Para 3: Z ..." oninput="updatePlanner()" id="planRoadmap">
            </div>
            <div class="planner-field">
              <label>Hook / Opening Context</label>
              <input type="text" placeholder="Engaging opening fact, quote, or context sentence..." oninput="updatePlanner()" id="planHook">
            </div>
          </div>
        </div>

        <!-- Body 1 -->
        <div class="planner-block body-block">
          <div class="planner-block-header" onclick="togglePlannerBlock(this)">
            <span>🔷 Body Paragraph 1</span>
            <span>▾</span>
          </div>
          <div class="planner-block-body open">
            <div class="planner-field"><label>Point (main claim)</label><input type="text" placeholder="Main argument of this paragraph..." oninput="updatePlanner()" id="planB1P"></div>
            <div class="planner-field"><label>Evidence (specific reading, case, data)</label><input type="text" placeholder="Baylis et al. p.X / case study / statistic..." oninput="updatePlanner()" id="planB1E"></div>
            <div class="planner-field"><label>Theory / Explanation</label><input type="text" placeholder="Which IR theory? How does the evidence support your point?" oninput="updatePlanner()" id="planB1X"></div>
          </div>
        </div>

        <!-- Body 2 -->
        <div class="planner-block body-block">
          <div class="planner-block-header" onclick="togglePlannerBlock(this)">
            <span>🔷 Body Paragraph 2</span>
            <span>▾</span>
          </div>
          <div class="planner-block-body open">
            <div class="planner-field"><label>Point</label><input type="text" placeholder="Second main argument..." oninput="updatePlanner()" id="planB2P"></div>
            <div class="planner-field"><label>Evidence</label><input type="text" placeholder="Reading reference or case study..." oninput="updatePlanner()" id="planB2E"></div>
            <div class="planner-field"><label>Explanation</label><input type="text" placeholder="How does evidence support the point?" oninput="updatePlanner()" id="planB2X"></div>
          </div>
        </div>

        <!-- Body 3 / Counter-argument -->
        <div class="planner-block body-block">
          <div class="planner-block-header" onclick="togglePlannerBlock(this)">
            <span>🔷 Body Paragraph 3 (Counter-argument &amp; Rebuttal)</span>
            <span>▾</span>
          </div>
          <div class="planner-block-body">
            <div class="planner-field"><label>Counter-argument (opposing view)</label><input type="text" placeholder="What would a critic or alternative theory argue?" oninput="updatePlanner()" id="planB3C"></div>
            <div class="planner-field"><label>Your Rebuttal</label><input type="text" placeholder="Why is your original argument still stronger?" oninput="updatePlanner()" id="planB3R"></div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="planner-block conc-block">
          <div class="planner-block-header" onclick="togglePlannerBlock(this)">
            <span>✅ Conclusion</span>
            <span>▾</span>
          </div>
          <div class="planner-block-body">
            <div class="planner-field"><label>Restate thesis (in different words)</label><input type="text" placeholder="Summarize what you have argued without simply repeating..." oninput="updatePlanner()" id="planConcThesis"></div>
            <div class="planner-field"><label>Broader implications / so what?</label><input type="text" placeholder="What does this mean for global politics more broadly?" oninput="updatePlanner()" id="planConcImpl"></div>
          </div>
        </div>
      </div>

      <div class="planner-export">
        <button onclick="exportPlan()" class="btn-sm"><i class="fas fa-download"></i> Export Plan as Text</button>
        <button onclick="clearPlan()" class="btn-sm" style="background:var(--muted)">Clear All</button>
      </div>
    </div>
  `;
}

function togglePlannerBlock(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

function updatePlanner() {
  const fields = ['planThesis','planRoadmap','planHook','planB1P','planB1E','planB1X','planB2P','planB2E','planB2X','planB3C','planB3R','planConcThesis','planConcImpl'];
  const filled = fields.filter(id => {
    const el = document.getElementById(id);
    return el && el.value.trim().length > 5;
  }).length;
  const pct = Math.round((filled / fields.length) * 100);
  const fill = document.getElementById('cmFill');
  const pctEl = document.getElementById('cmPct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (fill) fill.style.background = pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--gold)' : 'var(--navy)';
}

function exportPlan() {
  const parts = [
    '=== PSIR101 Essay Plan ===\n',
    '\n--- INTRODUCTION ---',
    'Thesis: ' + (document.getElementById('planThesis')?.value || ''),
    'Roadmap: ' + (document.getElementById('planRoadmap')?.value || ''),
    'Hook: ' + (document.getElementById('planHook')?.value || ''),
    '\n--- BODY PARAGRAPH 1 ---',
    'Point: ' + (document.getElementById('planB1P')?.value || ''),
    'Evidence: ' + (document.getElementById('planB1E')?.value || ''),
    'Explanation: ' + (document.getElementById('planB1X')?.value || ''),
    '\n--- BODY PARAGRAPH 2 ---',
    'Point: ' + (document.getElementById('planB2P')?.value || ''),
    'Evidence: ' + (document.getElementById('planB2E')?.value || ''),
    'Explanation: ' + (document.getElementById('planB2X')?.value || ''),
    '\n--- BODY PARAGRAPH 3 (Counter-argument) ---',
    'Counter-argument: ' + (document.getElementById('planB3C')?.value || ''),
    'Rebuttal: ' + (document.getElementById('planB3R')?.value || ''),
    '\n--- CONCLUSION ---',
    'Restate Thesis: ' + (document.getElementById('planConcThesis')?.value || ''),
    'Implications: ' + (document.getElementById('planConcImpl')?.value || '')
  ];
  const text = parts.join('\n');
  navigator.clipboard.writeText(text).then(() => alert('Essay plan copied to clipboard!'));
}

function clearPlan() {
  if (confirm('Clear all planner content?')) {
    const fields = ['planThesis','planRoadmap','planHook','planB1P','planB1E','planB1X','planB2P','planB2E','planB2X','planB3C','planB3R','planConcThesis','planConcImpl'];
    fields.forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    updatePlanner();
  }
}

/* ══════════════════════════════════════════════════════════
   TOOL 4: PARAGRAPH SCRAMBLE
══════════════════════════════════════════════════════════ */
const scrambleState = { paraIdx: 0, items: [], checked: false };

function renderScramble(container) {
  const paras = PSIR101_DATA.scrambleParagraphs;
  const para = paras[scrambleState.paraIdx];
  if (!scrambleState.items.length || scrambleState.currentTopic !== para.topic) {
    scrambleState.items = shuffle(para.sentences);
    scrambleState.currentTopic = para.topic;
    scrambleState.checked = false;
  }

  const topicBtns = paras.map((p, i) =>
    `<button class="btn-sm" onclick="scrambleState.paraIdx=${i}; scrambleState.items=[]; renderScramble(document.getElementById('essayBody'))"
      style="background:${i === scrambleState.paraIdx ? 'var(--navy-dark)' : 'var(--muted)'}">${p.topic.split(' ').slice(0,3).join(' ')}</button>`
  ).join(' ');

  container.innerHTML = `
    <div>
      <div style="margin-bottom:16px;display:flex;flex-wrap:wrap;gap:6px">${topicBtns}</div>
      <h3 style="font-size:15px;font-weight:700;color:var(--navy);margin-bottom:6px">
        <i class="fas fa-random"></i> Paragraph Scramble: ${para.topic}
      </h3>
      <p style="font-size:13px;color:var(--muted);margin-bottom:16px">
        Drag and drop these sentences into the correct PEEL order. Each sentence belongs to a specific role: 
        <strong>P</strong>oint, <strong>E</strong>vidence, <strong>E</strong>xplanation, <strong>L</strong>ink.
      </p>
      <div id="scrambleList" style="display:flex;flex-direction:column;gap:8px">
        ${scrambleState.items.map((s, i) => `
          <div class="tl-item" draggable="true" data-sidx="${i}" data-role="${s.role}"
            ondragstart="scrambleDragStart(event,${i})" ondragover="event.preventDefault()" ondrop="scrambleDrop(event,${i})">
            <span class="tl-drag">⣿</span>
            <span style="font-size:11px;font-weight:700;color:var(--muted);min-width:24px">?</span>
            <span style="font-size:13px">${s.text}</span>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
        <button onclick="checkScramble()" class="btn-sm">✅ Check Order</button>
        <button onclick="revealScramble()" class="btn-sm" style="background:var(--green)">💡 Reveal Answer</button>
        <button onclick="scrambleState.items=[]; renderScramble(document.getElementById('essayBody'))" class="btn-sm" style="background:var(--muted)">🔄 Shuffle</button>
      </div>
      <div id="scrambleFeedback" style="margin-top:14px"></div>
    </div>
  `;
}

let scrambleDragging = null;
function scrambleDragStart(e, idx) {
  scrambleDragging = idx;
  e.dataTransfer.effectAllowed = 'move';
}
function scrambleDrop(e, targetIdx) {
  e.preventDefault();
  if (scrambleDragging === null || scrambleDragging === targetIdx) return;
  const items = scrambleState.items;
  const dragged = items.splice(scrambleDragging, 1)[0];
  items.splice(targetIdx, 0, dragged);
  scrambleDragging = null;
  renderScramble(document.getElementById('essayBody'));
}

function checkScramble() {
  const items = scrambleState.items;
  const listEls = document.querySelectorAll('#scrambleList .tl-item');
  let correct = 0;
  items.forEach((s, i) => {
    const el = listEls[i];
    if (s.order === i) {
      el.classList.add('correct-pos');
      el.classList.remove('wrong-pos');
      el.querySelector('span:nth-child(2)').textContent = s.role;
      correct++;
    } else {
      el.classList.add('wrong-pos');
      el.classList.remove('correct-pos');
    }
  });
  const fb = document.getElementById('scrambleFeedback');
  if (correct === items.length) {
    fb.className = 'quiz-feedback correct-fb';
    fb.innerHTML = `🎉 Perfect! All ${correct} sentences in the correct PEEL order!`;
    addArenaScore(20);
  } else {
    fb.className = 'quiz-feedback wrong-fb';
    fb.innerHTML = `${correct}/${items.length} correct. Green = right position. Red = wrong position. Keep adjusting!`;
  }
}

function revealScramble() {
  const para = PSIR101_DATA.scrambleParagraphs[scrambleState.paraIdx];
  scrambleState.items = [...para.sentences];
  renderScramble(document.getElementById('essayBody'));
  setTimeout(() => {
    document.querySelectorAll('#scrambleList .tl-item').forEach((el, i) => {
      el.classList.add('correct-pos');
      el.querySelector('span:nth-child(2)').textContent = para.sentences[i].role;
    });
    const fb = document.getElementById('scrambleFeedback');
    fb.className = 'quiz-feedback correct-fb';
    fb.innerHTML = `✅ Here is the correct PEEL order. Note how each sentence plays its role in building the paragraph.`;
  }, 100);
}

/* ══════════════════════════════════════════════════════════
   TOOL 5: SELF-ASSESSMENT SCORECARD
══════════════════════════════════════════════════════════ */
function renderScorecard(container) {
  container.innerHTML = `
    <div class="scorecard">
      <div style="background:var(--navy-light);border-radius:8px;padding:14px;margin-bottom:20px;font-size:13px;line-height:1.6">
        <strong>📊 Essay Self-Assessment</strong><br>
        Paste your draft below and rate yourself on the four PSIR101 Essay Toolkit criteria. 
        The tool will also run automatic checks to help you identify areas to improve.
      </div>

      <div style="margin-bottom:20px">
        <label style="display:block;font-weight:600;font-size:14px;margin-bottom:8px">Paste your essay draft here:</label>
        <textarea id="scEssayText" style="width:100%;min-height:180px;padding:12px;border:2px solid var(--border);border-radius:8px;font-size:13px;font-family:var(--font-body);resize:vertical"
          placeholder="Paste your paragraph, essay section, or full draft here..."></textarea>
        <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
          <button onclick="analyzeEssay()" class="btn-sm"><i class="fas fa-search"></i> Analyze Text</button>
          <span id="scWordCount" style="font-size:13px;color:var(--muted);align-self:center">0 words</span>
        </div>
      </div>

      <div id="scAnalysis" style="display:none">
        <h4 style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">Automatic Checks</h4>
        <div class="sc-gauges" id="scGauges"></div>
        <div class="sc-tips" id="scTips"></div>
      </div>

      <div style="margin-top:24px">
        <h4 style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:12px">Self-Rate Each Criterion (1–5)</h4>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px" id="scSliders">
          ${['Argument','Evidence','Structure','Engagement'].map((c, i) => `
            <div style="background:var(--bg);border-radius:8px;padding:14px">
              <div style="font-weight:700;font-size:13px;color:var(--navy);margin-bottom:6px">${c}</div>
              <div style="font-size:11px;color:var(--muted);margin-bottom:8px">${getSCHint(c)}</div>
              <input type="range" min="1" max="5" value="3" id="sc${c}" oninput="updateSCGauge(${i}, '${c}', this.value)" style="width:100%">
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted)">
                <span>1 – Needs work</span>
                <span id="scVal${i}">3</span>
                <span>5 – Excellent</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="scSummary" style="margin-top:20px;background:var(--bg);border-radius:8px;padding:16px;display:none">
        <h4 style="font-size:14px;font-weight:700;color:var(--navy);margin-bottom:10px">Your Score Summary</h4>
        <div id="scSummaryContent"></div>
      </div>
    </div>
  `;

  document.getElementById('scEssayText').addEventListener('input', function() {
    const words = this.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    document.getElementById('scWordCount').textContent = words + ' words';
  });
}

function getSCHint(criterion) {
  const hints = {
    'Argument': 'Does the essay have a clear, debatable thesis? Does it take a position?',
    'Evidence': 'Are there specific references to readings, cases, or data?',
    'Structure': 'Are paragraphs organized logically? Is PEEL structure evident?',
    'Engagement': 'Does the essay acknowledge and respond to counter-arguments?'
  };
  return hints[criterion] || '';
}

function updateSCGauge(idx, criterion, val) {
  document.getElementById('scVal' + idx).textContent = val;
}

function analyzeEssay() {
  const text = document.getElementById('scEssayText')?.value || '';
  if (!text.trim()) return;

  // Automatic checks
  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  // Argument signals
  const argSignals = ['argue','contend','claim','thesis','demonstrates','shows','suggests','proves','realist','liberal','constructivist','feminist','marxist','post-colonial'];
  const argScore = argSignals.filter(s => text.toLowerCase().includes(s)).length;

  // Evidence signals
  const evSignals = ['according to','baylis','smith','owens','p\.','pp\.','argues','states that','shilliam','diez','direkli','foreign affairs','un security','human rights watch','hathaway','shapiro'];
  const evScore = evSignals.filter(s => text.toLowerCase().includes(s)).length;

  // Structure signals
  const paraCount = (text.match(/\n\n|\n[A-Z]/g) || []).length + 1;
  const hasPEEL = ['however','therefore','this demonstrates','this suggests','this confirms','this reveals','thus'].some(s => text.toLowerCase().includes(s));

  // Engagement signals
  const engSignals = ['however','on the other hand','counter','critics','sceptics','although','while','despite','nevertheless','that said','challenge'];
  const engScore = engSignals.filter(s => text.toLowerCase().includes(s)).length;

  const analysis = document.getElementById('scAnalysis');
  analysis.style.display = 'block';

  const gaugeData = [
    { label: 'Argument', val: Math.min(5, argScore + 1), tip: argScore >= 2 ? 'Good use of argumentative language' : 'Try to include clearer thesis language: "I argue that..." or name a specific theory' },
    { label: 'Evidence', val: Math.min(5, evScore + 1), tip: evScore >= 2 ? 'Evidence references detected' : 'Include specific reading references: "According to Baylis et al. (p.X)..."' },
    { label: 'Structure', val: Math.min(5, Math.floor(paraCount * 1.5)), tip: hasPEEL ? 'Linking language present — PEEL structure evident' : 'Add linking sentences: "This demonstrates...", "Therefore..."' },
    { label: 'Engagement', val: Math.min(5, engScore + 1), tip: engScore >= 2 ? 'Counter-argument language detected' : 'Add: "However, critics would argue..." or "Although X claims..." to engage opposing views' }
  ];

  const colors = ['#1a4a8a','#c8a44a','#2e7d5e','#7b3d8c'];
  document.getElementById('scGauges').innerHTML = gaugeData.map((g, i) => `
    <div class="sc-gauge">
      <div class="sc-gauge-ring" style="border-color:${colors[i]};color:${colors[i]}">
        ${g.val}/5
      </div>
      <div class="sc-gauge-label">${g.label}</div>
    </div>
  `).join('');

  document.getElementById('scTips').innerHTML = `
    <div style="font-size:13px;font-weight:700;margin-bottom:8px">💡 Automated Feedback (${wordCount} words)</div>
    ${gaugeData.map(g => `<div class="sc-tip"><strong>${g.label}:</strong> ${g.tip}</div>`).join('')}
    <div class="sc-tip" style="margin-top:8px"><strong>Word count:</strong> ${wordCount} words. 
      ${wordCount < 200 ? 'This seems short for a full paragraph — aim for 200–250 words per body paragraph.' :
        wordCount < 800 ? 'Good length for a single paragraph or essay section.' :
        'Good length for a full essay response.'}</div>
  `;
}
