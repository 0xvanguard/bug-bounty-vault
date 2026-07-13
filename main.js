// =============================================
// BUG BOUNTY VAULT — main.js
// Actualiza las variables de TRACKER con tu
// progreso real. El resto es automático.
// =============================================

// ─── TRACKER: CAMBIA ESTOS VALORES ───────────
const BB_EARNED   = 0;    // USD ganados (número)
const BB_TARGET   = 1000; // Meta en USD
const BB_REPORTS  = 0;    // Total reportes enviados
const BB_VALID    = 0;    // Válidos / triaged
const BB_NA       = 0;    // N/A o duplicados

// Milestones completados: cambia a true cuando los logres
const MILESTONES = {
  m1: false, // Primer reporte enviado
  m2: false, // Primer reporte válido
  m3: false, // Primer bounty cobrado
  m4: false, // $100 acumulados
  m5: false, // $500 acumulados
  m6: false, // $1000 acumulados
};
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  initTyped();
  initTracker();
  initMilestones();
});

// MATRIX BACKGROUND
function initMatrix() {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEF';
  const fontSize = 13;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);
  function draw() {
    ctx.fillStyle = 'rgba(6,8,16,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#22c55e';
    ctx.font = fontSize + 'px Share Tech Mono';
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 50);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// HERO TYPED TEXT
function initTyped() {
  const el = document.getElementById('hero-typed');
  if (!el) return;
  const phrases = [
    'Encuentra vulnerabilidades. Cobra en dólares.',
    'Plataforma de inteligencia viva para hunters.',
    'De $0 a $1,000 USD con metodología real.',
    'Pensadores sin límites. Hunters con sistema.',
  ];
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const phrase = phrases[pi];
    el.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
    if (!deleting && ci > phrase.length) { deleting = true; setTimeout(type, 1400); return; }
    if (deleting && ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    setTimeout(type, deleting ? 35 : 60);
  }
  type();
}

// TRACKER
function initTracker() {
  const pct = Math.min((BB_EARNED / BB_TARGET) * 100, 100);
  const bar = document.getElementById('t-bar');
  const pctEl = document.getElementById('t-pct');
  const rep = document.getElementById('t-reports');
  const val = document.getElementById('t-valid');
  const na = document.getElementById('t-na');
  const earned = document.getElementById('t-earned');
  setTimeout(() => { if (bar) bar.style.width = pct.toFixed(1) + '%'; }, 400);
  if (pctEl) pctEl.textContent = pct.toFixed(1) + '%';
  if (rep) rep.textContent = BB_REPORTS;
  if (val) val.textContent = BB_VALID;
  if (na) na.textContent = BB_NA;
  if (earned) earned.textContent = '$' + BB_EARNED.toLocaleString();
}

// MILESTONES
function initMilestones() {
  Object.entries(MILESTONES).forEach(([id, done]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (done) {
      el.classList.add('done');
      const check = el.querySelector('.m-check');
      if (check) check.textContent = '✅';
    }
  });
}
