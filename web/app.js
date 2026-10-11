/* Ravens Opponent Dossier — offline EXAMPLE scouting board. No live stats. */
(function () {
  "use strict";

  const STORAGE_KEY = "ravens-opponent-dossier-v1";
  const DEMO = "EXAMPLE / DEMO DATA";

  const COVERAGES = {
    cover2: {
      label: "COVER 2 — EXAMPLE",
      caption: "Two-deep safeties, five underneath. Corners soft squat. EXAMPLE only.",
      note: "Cover 2 (EXAMPLE): Safeties split deep halves. Linebackers expand to flats / hooks. Corners play soft leverage — beaters are seams and deep outs.",
      bullets: ["Seam windows vs 2-high", "Flat stretch with RB / TE", "Play-action freeze on LB drop"],
      conf: 72,
      zones: [
        { type: "ellipse", cx: 220, cy: 90, rx: 160, ry: 70, fill: "rgba(245,215,110,.18)" },
        { type: "ellipse", cx: 580, cy: 90, rx: 160, ry: 70, fill: "rgba(245,215,110,.18)" },
        { type: "rect", x: 40, y: 180, w: 140, h: 110, fill: "rgba(107,76,255,.2)" },
        { type: "rect", x: 200, y: 200, w: 140, h: 90, fill: "rgba(107,76,255,.18)" },
        { type: "rect", x: 360, y: 200, w: 140, h: 90, fill: "rgba(107,76,255,.18)" },
        { type: "rect", x: 520, y: 200, w: 140, h: 90, fill: "rgba(107,76,255,.18)" },
        { type: "rect", x: 620, y: 180, w: 140, h: 110, fill: "rgba(107,76,255,.2)" }
      ],
      defense: [
        { id: "FS", x: 250, y: 70, c: "#f5d76e" },
        { id: "SS", x: 550, y: 70, c: "#f5d76e" },
        { id: "CB", x: 90, y: 210, c: "#c4b5fd" },
        { id: "LB", x: 260, y: 230, c: "#c4b5fd" },
        { id: "MIKE", x: 400, y: 240, c: "#c4b5fd" },
        { id: "LB", x: 540, y: 230, c: "#c4b5fd" },
        { id: "CB", x: 710, y: 210, c: "#c4b5fd" },
        { id: "DE", x: 300, y: 310, c: "#a78bfa" },
        { id: "NT", x: 400, y: 320, c: "#a78bfa" },
        { id: "DE", x: 500, y: 310, c: "#a78bfa" },
        { id: "OLB", x: 200, y: 300, c: "#a78bfa" }
      ],
      offense: [
        { id: "WR", x: 80, y: 300, c: "#fff" },
        { id: "WR", x: 720, y: 300, c: "#fff" },
        { id: "TE", x: 280, y: 340, c: "#fff" },
        { id: "RB", x: 450, y: 360, c: "#fff" },
        { id: "QB", x: 400, y: 355, c: "#f5d76e" },
        { id: "OL", x: 340, y: 335, c: "#ddd" },
        { id: "OL", x: 380, y: 335, c: "#ddd" },
        { id: "OL", x: 420, y: 335, c: "#ddd" },
        { id: "OL", x: 460, y: 335, c: "#ddd" },
        { id: "OL", x: 500, y: 335, c: "#ddd" },
        { id: "WR", x: 160, y: 320, c: "#fff" }
      ],
      routes: [
        { d: "M80 300 C120 250, 180 160, 220 100", stroke: "#fff", dash: "6 4" },
        { d: "M720 300 C680 240, 620 150, 580 95", stroke: "#fff", dash: "6 4" },
        { d: "M280 340 C320 300, 360 260, 400 220", stroke: "#f5d76e", dash: "" },
        { d: "M450 360 C500 340, 560 300, 620 260", stroke: "#f5d76e", dash: "4 3" }
      ]
    },
    cover3: {
      label: "COVER 3 — EXAMPLE",
      caption: "Three-deep thirds, four underneath. Corners carry deep outside. EXAMPLE only.",
      note: "Cover 3 (EXAMPLE): Free safety mid-third, corners deep outside thirds. Hook / curl defenders underneath. Beaters: flood concepts, sail, and deep crossers behind flat defenders.",
      bullets: ["Flood the weak flat", "Sail / smash vs corner third", "Post vs middle third collision"],
      conf: 68,
      zones: [
        { type: "path", d: "M40 40 L280 40 L320 200 L40 200 Z", fill: "rgba(245,215,110,.16)" },
        { type: "path", d: "M280 40 L520 40 L480 200 L320 200 Z", fill: "rgba(245,215,110,.2)" },
        { type: "path", d: "M520 40 L760 40 L760 200 L480 200 Z", fill: "rgba(245,215,110,.16)" },
        { type: "rect", x: 60, y: 210, w: 160, h: 90, fill: "rgba(107,76,255,.18)" },
        { type: "rect", x: 240, y: 220, w: 140, h: 80, fill: "rgba(107,76,255,.2)" },
        { type: "rect", x: 420, y: 220, w: 140, h: 80, fill: "rgba(107,76,255,.2)" },
        { type: "rect", x: 580, y: 210, w: 160, h: 90, fill: "rgba(107,76,255,.18)" }
      ],
      defense: [
        { id: "FS", x: 400, y: 65, c: "#f5d76e" },
        { id: "CB", x: 120, y: 90, c: "#f5d76e" },
        { id: "CB", x: 680, y: 90, c: "#f5d76e" },
        { id: "SS", x: 280, y: 230, c: "#c4b5fd" },
        { id: "MIKE", x: 400, y: 245, c: "#c4b5fd" },
        { id: "WILL", x: 520, y: 230, c: "#c4b5fd" },
        { id: "NB", x: 180, y: 240, c: "#c4b5fd" },
        { id: "DE", x: 310, y: 310, c: "#a78bfa" },
        { id: "NT", x: 400, y: 320, c: "#a78bfa" },
        { id: "DE", x: 490, y: 310, c: "#a78bfa" },
        { id: "OLB", x: 220, y: 295, c: "#a78bfa" }
      ],
      offense: [
        { id: "WR", x: 70, y: 295, c: "#fff" },
        { id: "WR", x: 730, y: 295, c: "#fff" },
        { id: "TE", x: 300, y: 340, c: "#fff" },
        { id: "RB", x: 460, y: 360, c: "#fff" },
        { id: "QB", x: 400, y: 355, c: "#f5d76e" },
        { id: "OL", x: 340, y: 335, c: "#ddd" },
        { id: "OL", x: 380, y: 335, c: "#ddd" },
        { id: "OL", x: 420, y: 335, c: "#ddd" },
        { id: "OL", x: 460, y: 335, c: "#ddd" },
        { id: "OL", x: 500, y: 335, c: "#ddd" },
        { id: "WR", x: 180, y: 315, c: "#fff" }
      ],
      routes: [
        { d: "M70 295 C90 200, 110 120, 130 80", stroke: "#fff", dash: "" },
        { d: "M730 295 C700 220, 650 150, 560 180", stroke: "#f5d76e", dash: "5 4" },
        { d: "M300 340 C360 300, 440 260, 520 220", stroke: "#fff", dash: "4 3" },
        { d: "M180 315 C240 280, 300 250, 340 230", stroke: "#f5d76e", dash: "" }
      ]
    },
    cover1: {
      label: "COVER 1 — EXAMPLE",
      caption: "Man-free: single-high safety, man coverage underneath. EXAMPLE only.",
      note: "Cover 1 (EXAMPLE): Free safety centerfield. Corners and LBs in man. Pressure often tied to this shell. Beaters: rub / mesh, deep post vs FS leverage, and hot throws vs blitz.",
      bullets: ["Mesh / rub vs trail technique", "Post vs single-high lean", "Hot routes vs simulated pressure"],
      conf: 61,
      zones: [
        { type: "ellipse", cx: 400, cy: 80, rx: 200, ry: 85, fill: "rgba(245,215,110,.2)" },
        { type: "ellipse", cx: 100, cy: 240, rx: 50, ry: 50, fill: "rgba(107,76,255,.22)" },
        { type: "ellipse", cx: 220, cy: 260, rx: 45, ry: 45, fill: "rgba(107,76,255,.22)" },
        { type: "ellipse", cx: 400, cy: 270, rx: 45, ry: 45, fill: "rgba(107,76,255,.22)" },
        { type: "ellipse", cx: 580, cy: 260, rx: 45, ry: 45, fill: "rgba(107,76,255,.22)" },
        { type: "ellipse", cx: 700, cy: 240, rx: 50, ry: 50, fill: "rgba(107,76,255,.22)" }
      ],
      defense: [
        { id: "FS", x: 400, y: 70, c: "#f5d76e" },
        { id: "CB", x: 95, y: 250, c: "#c4b5fd" },
        { id: "NB", x: 210, y: 270, c: "#c4b5fd" },
        { id: "LB", x: 340, y: 280, c: "#c4b5fd" },
        { id: "LB", x: 480, y: 280, c: "#c4b5fd" },
        { id: "SS", x: 600, y: 260, c: "#c4b5fd" },
        { id: "CB", x: 710, y: 245, c: "#c4b5fd" },
        { id: "DE", x: 300, y: 310, c: "#a78bfa" },
        { id: "NT", x: 400, y: 318, c: "#a78bfa" },
        { id: "DE", x: 500, y: 310, c: "#e85d5d" },
        { id: "BLITZ", x: 560, y: 300, c: "#e85d5d" }
      ],
      offense: [
        { id: "WR", x: 80, y: 295, c: "#fff" },
        { id: "WR", x: 720, y: 295, c: "#fff" },
        { id: "TE", x: 290, y: 340, c: "#fff" },
        { id: "RB", x: 440, y: 365, c: "#fff" },
        { id: "QB", x: 400, y: 355, c: "#f5d76e" },
        { id: "OL", x: 340, y: 335, c: "#ddd" },
        { id: "OL", x: 380, y: 335, c: "#ddd" },
        { id: "OL", x: 420, y: 335, c: "#ddd" },
        { id: "OL", x: 460, y: 335, c: "#ddd" },
        { id: "OL", x: 500, y: 335, c: "#ddd" },
        { id: "WR", x: 170, y: 318, c: "#fff" }
      ],
      routes: [
        { d: "M80 295 C140 260, 220 200, 300 140", stroke: "#fff", dash: "" },
        { d: "M720 295 C660 250, 580 200, 500 160", stroke: "#fff", dash: "5 4" },
        { d: "M290 340 C330 300, 370 270, 400 240", stroke: "#f5d76e", dash: "" },
        { d: "M170 318 C250 300, 340 290, 400 285", stroke: "#f5d76e", dash: "4 3" }
      ]
    }
  };

  const MATCHUPS = [
    {
      id: "m1", filter: "pressure", edge: true, title: "EDGE vs RT",
      left: "BAL EXAMPLE Edge", right: "OPP EXAMPLE RT",
      blurb: "EXAMPLE pressure matchup. Script chips / hot on early downs. Not a live injury or depth read.",
      strength: 74, lean: "BAL edge (EXAMPLE)"
    },
    {
      id: "m2", filter: "pass", fav: true, title: "WR1 vs CB1",
      left: "BAL EXAMPLE WR1", right: "OPP EXAMPLE CB1",
      blurb: "EXAMPLE outside one-on-one. Favors release wins on fade / go. DEMO only.",
      strength: 66, lean: "Slight BAL (EXAMPLE)"
    },
    {
      id: "m3", filter: "pass", title: "TE vs LB / Safety",
      left: "BAL EXAMPLE TE", right: "OPP EXAMPLE LB",
      blurb: "EXAMPLE seam / dig window vs zone droppers. Useful vs Cover 2 / 3 shells.",
      strength: 58, lean: "Neutral → BAL (EXAMPLE)"
    },
    {
      id: "m4", filter: "run", title: "OL vs Interior DL",
      left: "BAL EXAMPLE OL", right: "OPP EXAMPLE IDL",
      blurb: "EXAMPLE double-team lanes and climb rules. Not a verifiable trench ranking.",
      strength: 55, lean: "Toss-up (EXAMPLE)"
    },
    {
      id: "m5", filter: "pressure", edge: true, title: "QB Pocket / Pressure",
      left: "BAL EXAMPLE QB", right: "OPP EXAMPLE Pass Rush",
      blurb: "EXAMPLE pocket timer and hot map. Labels are fictional scouting notes.",
      strength: 62, lean: "Protect early (EXAMPLE)"
    },
    {
      id: "m6", filter: "pass", title: "Slot WR vs Nickel",
      left: "BAL EXAMPLE Slot", right: "OPP EXAMPLE NB",
      blurb: "EXAMPLE option routes and glance RPOs. DEMO strength meter only.",
      strength: 70, lean: "BAL slot (EXAMPLE)"
    },
    {
      id: "m7", filter: "run", title: "Backside Edge Contain",
      left: "BAL EXAMPLE Zone", right: "OPP EXAMPLE OLB",
      blurb: "EXAMPLE cutback discipline vs stretch. Coaching cue for film night.",
      strength: 48, lean: "Watch cutback (EXAMPLE)"
    },
    {
      id: "m8", filter: "pressure", title: "Blitz Pickup ID",
      left: "BAL EXAMPLE Protection", right: "OPP EXAMPLE Pressure",
      blurb: "EXAMPLE A-gap / simulated pressure ID. Practice chalkboard only.",
      strength: 60, lean: "ID early (EXAMPLE)"
    }
  ];

  const DND_BARS = [
    { label: "1st & 10 run", pct: 54, cls: "alt" },
    { label: "1st & 10 pass", pct: 46, cls: "" },
    { label: "2nd & short", pct: 61, cls: "goldish" },
    { label: "2nd & long", pct: 38, cls: "" },
    { label: "3rd & 1–3", pct: 57, cls: "alt" },
    { label: "3rd & 4–6", pct: 49, cls: "" },
    { label: "3rd & 7+", pct: 33, cls: "goldish" },
    { label: "Red zone pass", pct: 58, cls: "" }
  ];

  const COV_MIX = [
    { label: "Cover 3", pct: 34, cls: "goldish" },
    { label: "Cover 2", pct: 22, cls: "" },
    { label: "Cover 1", pct: 18, cls: "" },
    { label: "Quarters", pct: 14, cls: "alt" },
    { label: "Cover 0 / blitz", pct: 12, cls: "goldish" }
  ];

  const PERSONNEL = [
    ["11 (3 WR)", "42%", "48%", "61%", "EXAMPLE base nickel look"],
    ["12 (2 TE)", "28%", "22%", "12%", "EXAMPLE early-down jumbo-lite"],
    ["21 (2 RB)", "18%", "14%", "6%", "EXAMPLE play-action heavy"],
    ["Empty", "7%", "10%", "15%", "EXAMPLE tempo / empty ID"],
    ["13 / heavy", "5%", "6%", "6%", "EXAMPLE short-yardage"]
  ];

  const DRIVES = [
    {
      name: "Drive 1 · EXAMPLE openers",
      plays: [
        { down: "1st & 10", play: "Outside zone weak", result: "+4 · EXAMPLE", fp: 28, note: "Establish edge stretch. Watch backside contain. EXAMPLE coaching note only.", ticks: ["Check front shade", "RB track discipline", "No live call sheet"] },
        { down: "2nd & 6", play: "Play-action dig", result: "+12 · EXAMPLE", fp: 40, note: "Sell boot / zone fake to freeze EXAMPLE LB drop. Dig vs Cover 2 hook.", ticks: ["Safety depth pre-snap", "TE chip then release", "DEMO route tree"] },
        { down: "1st & 10", play: "RPO glance", result: "+7 · EXAMPLE", fp: 47, note: "EXAMPLE glance vs soft corner squat. Pull if flat defender sits.", ticks: ["Pre-snap leverage", "Mesh vs man", "EXAMPLE only"] },
        { down: "2nd & 3", play: "Duo / gap", result: "+3 · EXAMPLE 1st", fp: 50, note: "EXAMPLE downhill gap to keep nickel honest. Not a real call.", ticks: ["Combo to LB", "Fullback / H insert", "Demo yardage"] }
      ]
    },
    {
      name: "Drive 2 · EXAMPLE pressure script",
      plays: [
        { down: "1st & 10", play: "Max protect sail", result: "Inc · EXAMPLE", fp: 22, note: "EXAMPLE sail vs Cover 3 corner third. Chip help on edge.", ticks: ["ID single-high", "RB chip to flat", "DEMO incomplete"] },
        { down: "2nd & 10", play: "Draw / delay", result: "+9 · EXAMPLE", fp: 31, note: "Change-up vs EXAMPLE pass-rush lane integrity.", ticks: ["Sell pass set", "Pull backside", "Fictional gain"] },
        { down: "3rd & 1", play: "QB sneak / sneak-look", result: "+1 · EXAMPLE", fp: 32, note: "EXAMPLE short-yardage. Label is DEMO — not a play call sheet.", ticks: ["Center leverage", "Crowd noise cue", "EXAMPLE conversion"] },
        { down: "1st & 10", play: "Crosser / dig combo", result: "+18 · EXAMPLE", fp: 50, note: "Clear-out crosser vs EXAMPLE Cover 1 trail.", ticks: ["Rub timing", "FS lean", "DEMO chunk"] }
      ]
    },
    {
      name: "Drive 3 · EXAMPLE red-zone finish",
      plays: [
        { down: "1st & 10", play: "Flood weak", result: "+11 · EXAMPLE", fp: 65, note: "Flood EXAMPLE Cover 3 flat. High-low the curl/flat defender.", ticks: ["Trips into boundary", "RB flat timing", "EXAMPLE"] },
        { down: "1st & 10", play: "Slant / pick", result: "+8 · EXAMPLE", fp: 73, note: "Inside the 30 — EXAMPLE man-match beater.", ticks: ["Legal pick spacing", "QB eyes off", "DEMO"] },
        { down: "2nd & 2", play: "Fade / back-shoulder", result: "Inc · EXAMPLE", fp: 75, note: "EXAMPLE fade vs press. Incomplete — scouting chalkboard only.", ticks: ["Release win", "Sideline clock", "Not live"] },
        { down: "3rd & 2", play: "TE stick / option", result: "TD · EXAMPLE", fp: 90, note: "EXAMPLE stick vs goal-to-go man. Celebratory DEMO score only.", ticks: ["Option branch", "Hot vs blitz", "EXAMPLE TD"] }
      ]
    }
  ];

  /* ---------- state ---------- */
  let state = loadState();
  let currentCov = "cover2";
  let playing = true;
  let animT = 0;
  let animId = null;
  let driveIdx = 0;
  let playIdx = 0;
  let matchFilter = "all";

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
    } catch (_) {
      return {};
    }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  /* ---------- tabs ---------- */
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panels = {
    briefing: document.getElementById("panel-briefing"),
    scheme: document.getElementById("panel-scheme"),
    matchups: document.getElementById("panel-matchups"),
    tendencies: document.getElementById("panel-tendencies"),
    script: document.getElementById("panel-script")
  };

  function showTab(name) {
    if (!panels[name]) name = "briefing";
    tabs.forEach((t) => {
      const on = t.dataset.tab === name;
      t.classList.toggle("on", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    Object.keys(panels).forEach((k) => {
      const p = panels[k];
      const on = k === name;
      p.classList.toggle("on", on);
      if (on) p.removeAttribute("hidden");
      else p.setAttribute("hidden", "");
    });
    if (location.hash.replace("#", "") !== name) {
      history.replaceState(null, "", "#" + name);
    }
    if (name === "scheme") ensureYardLines();
    if (name === "tendencies") animateBars();
  }

  tabs.forEach((t) => t.addEventListener("click", () => showTab(t.dataset.tab)));
  window.addEventListener("hashchange", () => showTab(location.hash.slice(1) || "briefing"));

  document.querySelectorAll("[data-jump]").forEach((el) => {
    el.addEventListener("click", () => showTab(el.getAttribute("data-jump")));
  });

  /* ---------- wall / help ---------- */
  const btnWall = document.getElementById("btnWall");
  const btnHelp = document.getElementById("btnHelp");
  const helpDlg = document.getElementById("helpDlg");
  const btnCloseHelp = document.getElementById("btnCloseHelp");
  btnWall.addEventListener("click", () => {
    document.body.classList.toggle("wall");
    btnWall.textContent = document.body.classList.contains("wall") ? "Exit wall" : "Wall";
  });
  btnHelp.addEventListener("click", () => helpDlg.showModal());
  btnCloseHelp.addEventListener("click", () => helpDlg.close());

  /* ---------- checklist ---------- */
  const checks = document.querySelectorAll("#scoutChecks input[type=checkbox]");
  checks.forEach((inp) => {
    const k = inp.dataset.k;
    inp.checked = !!(state.checks && state.checks[k]);
    inp.addEventListener("change", () => {
      state.checks = state.checks || {};
      state.checks[k] = inp.checked;
      saveState();
    });
  });
  document.getElementById("btnResetChecks").addEventListener("click", () => {
    state.checks = {};
    checks.forEach((i) => { i.checked = false; });
    saveState();
  });

  /* ---------- scheme board ---------- */
  const svg = document.getElementById("schemeField");
  const yardG = document.getElementById("yardLines");
  const zonesG = document.getElementById("coverageZones");
  const playersG = document.getElementById("players");
  const routesG = document.getElementById("routes");
  const covLabel = document.getElementById("covLabel");
  const covCaption = document.getElementById("covCaption");
  const schemeNoteBody = document.getElementById("schemeNoteBody");
  const schemeBullets = document.getElementById("schemeBullets");
  const shellConf = document.getElementById("shellConf");
  const shellMeter = document.getElementById("shellMeter");
  const btnPlayPause = document.getElementById("btnPlayPause");
  const btnResetScheme = document.getElementById("btnResetScheme");

  function ensureYardLines() {
    if (yardG.childElementCount) return;
    for (let i = 0; i <= 10; i++) {
      const x = 40 + i * 72;
      const line = document.createElementNS(svg.namespaceURI, "line");
      line.setAttribute("x1", x); line.setAttribute("x2", x);
      line.setAttribute("y1", 30); line.setAttribute("y2", 390);
      yardG.appendChild(line);
      if (i > 0 && i < 10) {
        const t = document.createElementNS(svg.namespaceURI, "text");
        t.setAttribute("x", x + 4); t.setAttribute("y", 55);
        t.setAttribute("fill", "rgba(255,255,255,.45)");
        t.setAttribute("font-size", "10");
        t.textContent = String(i * 10);
        yardG.appendChild(t);
      }
    }
    const mid = document.createElementNS(svg.namespaceURI, "rect");
    mid.setAttribute("x", 392); mid.setAttribute("y", 30);
    mid.setAttribute("width", 16); mid.setAttribute("height", 360);
    mid.setAttribute("fill", "rgba(255,255,255,.06)");
    yardG.appendChild(mid);
  }

  function clearG(g) { while (g.firstChild) g.removeChild(g.firstChild); }

  function drawZones(zones) {
    clearG(zonesG);
    zones.forEach((z) => {
      let el;
      if (z.type === "ellipse") {
        el = document.createElementNS(svg.namespaceURI, "ellipse");
        el.setAttribute("cx", z.cx); el.setAttribute("cy", z.cy);
        el.setAttribute("rx", z.rx); el.setAttribute("ry", z.ry);
      } else if (z.type === "rect") {
        el = document.createElementNS(svg.namespaceURI, "rect");
        el.setAttribute("x", z.x); el.setAttribute("y", z.y);
        el.setAttribute("width", z.w); el.setAttribute("height", z.h);
        el.setAttribute("rx", 8);
      } else {
        el = document.createElementNS(svg.namespaceURI, "path");
        el.setAttribute("d", z.d);
      }
      el.setAttribute("fill", z.fill);
      el.setAttribute("stroke", "rgba(245,215,110,.25)");
      el.setAttribute("stroke-width", "1");
      zonesG.appendChild(el);
    });
  }

  function drawPlayers(list, groupTag) {
    list.forEach((p, i) => {
      const g = document.createElementNS(svg.namespaceURI, "g");
      g.setAttribute("data-group", groupTag);
      g.setAttribute("data-i", String(i));
      const c = document.createElementNS(svg.namespaceURI, "circle");
      c.setAttribute("cx", p.x); c.setAttribute("cy", p.y);
      c.setAttribute("r", groupTag === "off" ? 9 : 10);
      c.setAttribute("fill", p.c);
      c.setAttribute("stroke", "#0a0a0c");
      c.setAttribute("stroke-width", "1.5");
      c.setAttribute("filter", "url(#glowDot)");
      c.classList.add("player-dot");
      const t = document.createElementNS(svg.namespaceURI, "text");
      t.setAttribute("x", p.x); t.setAttribute("y", p.y + 3.5);
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("font-size", "7");
      t.setAttribute("font-weight", "800");
      t.setAttribute("fill", p.c === "#fff" || p.c === "#ddd" || p.c === "#f5d76e" ? "#111" : "#fff");
      t.setAttribute("pointer-events", "none");
      t.textContent = p.id.length > 4 ? p.id.slice(0, 3) : p.id;
      g.appendChild(c); g.appendChild(t);
      playersG.appendChild(g);
      g._base = { x: p.x, y: p.y };
    });
  }

  function drawRoutes(routes) {
    clearG(routesG);
    routes.forEach((r) => {
      const path = document.createElementNS(svg.namespaceURI, "path");
      path.setAttribute("d", r.d);
      path.setAttribute("stroke", r.stroke);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-width", "2.4");
      path.setAttribute("stroke-linecap", "round");
      if (r.dash) path.setAttribute("stroke-dasharray", r.dash);
      path.setAttribute("opacity", "0.85");
      const len = 400;
      path.style.strokeDasharray = r.dash || String(len);
      path.style.strokeDashoffset = "0";
      path.dataset.anim = "1";
      routesG.appendChild(path);
    });
  }

  function applyCoverage(key) {
    currentCov = key;
    const cov = COVERAGES[key];
    document.querySelectorAll(".seg-btn[data-cov]").forEach((b) => {
      b.classList.toggle("on", b.dataset.cov === key);
    });
    covLabel.textContent = cov.label;
    covCaption.textContent = cov.caption;
    schemeNoteBody.innerHTML = "<p>" + cov.note + "</p>";
    schemeBullets.innerHTML = cov.bullets.map((b) => "<li>" + b + "</li>").join("");
    shellConf.textContent = cov.conf + "%";
    shellMeter.style.width = cov.conf + "%";
    clearG(playersG);
    drawZones(cov.zones);
    drawPlayers(cov.defense, "def");
    drawPlayers(cov.offense, "off");
    drawRoutes(cov.routes);
    animT = 0;
  }

  document.querySelectorAll(".seg-btn[data-cov]").forEach((b) => {
    b.addEventListener("click", () => applyCoverage(b.dataset.cov));
  });

  function tickAnim() {
    if (!playing) { animId = requestAnimationFrame(tickAnim); return; }
    animT += 0.016;
    const bob = Math.sin(animT * 2.2) * 3;
    const sway = Math.sin(animT * 1.4) * 2;
    Array.from(playersG.children).forEach((g) => {
      const base = g._base;
      if (!base) return;
      const c = g.querySelector("circle");
      const t = g.querySelector("text");
      const def = g.getAttribute("data-group") === "def";
      const nx = base.x + (def ? sway * 0.4 : -sway * 0.3);
      const ny = base.y + (def ? bob * 0.5 : Math.sin(animT * 2.8 + base.x) * 2);
      c.setAttribute("cx", nx); c.setAttribute("cy", ny);
      t.setAttribute("x", nx); t.setAttribute("y", ny + 3.5);
    });
    Array.from(routesG.children).forEach((path, i) => {
      const phase = (animT * 40 + i * 30) % 80;
      path.setAttribute("stroke-dashoffset", String(-phase));
      if (!path.getAttribute("stroke-dasharray") || path.getAttribute("stroke-dasharray").length < 3) {
        path.setAttribute("stroke-dasharray", "12 10");
      }
    });
    Array.from(zonesG.children).forEach((z, i) => {
      z.setAttribute("opacity", String(0.45 + 0.12 * Math.sin(animT * 1.5 + i)));
    });
    animId = requestAnimationFrame(tickAnim);
  }

  btnPlayPause.addEventListener("click", () => {
    playing = !playing;
    btnPlayPause.textContent = playing ? "Pause" : "Play";
    btnPlayPause.setAttribute("aria-pressed", playing ? "true" : "false");
  });
  btnResetScheme.addEventListener("click", () => applyCoverage(currentCov));

  /* ---------- matchups ---------- */
  const matchupGrid = document.getElementById("matchupGrid");

  function renderMatchups() {
    matchupGrid.innerHTML = "";
    MATCHUPS.forEach((m) => {
      if (matchFilter !== "all" && m.filter !== matchFilter) return;
      const art = document.createElement("article");
      art.className = "card match-card" + (m.edge ? " edge" : "") + (m.fav ? " fav" : "");
      art.innerHTML =
        '<span class="tag-ex badge-ex">EXAMPLE</span>' +
        '<div class="match-head"><h3>' + m.title + '</h3><span class="match-side">' + m.filter + '</span></div>' +
        '<div class="match-sides"><div class="left">' + m.left + '</div><div class="vs-mini">VS</div><div class="right">' + m.right + '</div></div>' +
        '<p>' + m.blurb + '</p>' +
        '<div class="strength-row"><div class="meter-label"><span>Strength meter</span><span>' + m.strength + '% · ' + m.lean + '</span></div>' +
        '<div class="meter"><div class="meter-fill" style="width:0%" data-w="' + m.strength + '"></div></div></div>' +
        '<div class="stat-pills"><span class="stat-pill"><strong>DEMO</strong> not live</span><span class="stat-pill">Film cue only</span></div>';
      matchupGrid.appendChild(art);
    });
    requestAnimationFrame(() => {
      matchupGrid.querySelectorAll(".meter-fill[data-w]").forEach((el) => {
        el.style.width = el.getAttribute("data-w") + "%";
      });
    });
  }

  document.querySelectorAll(".filter-bar .seg-btn").forEach((b) => {
    b.addEventListener("click", () => {
      matchFilter = b.dataset.filter;
      document.querySelectorAll(".filter-bar .seg-btn").forEach((x) => x.classList.toggle("on", x === b));
      renderMatchups();
    });
  });

  /* ---------- tendencies ---------- */
  function buildBars(el, rows) {
    el.innerHTML = rows.map((r) =>
      '<div class="bar-row"><span class="label">' + r.label + '</span>' +
      '<div class="bar-track"><div class="bar-fill ' + (r.cls || "") + '" data-w="' + r.pct + '" style="width:0%"></div></div>' +
      '<span class="bar-val">' + r.pct + '%</span></div>'
    ).join("") +
    '<p class="hint tiny mt-1"><span class="spark"></span>All percentages are EXAMPLE / DEMO DATA — not live opponent stats.</p>';
  }

  function animateBars() {
    document.querySelectorAll(".bar-fill[data-w]").forEach((el) => {
      el.style.width = "0%";
      requestAnimationFrame(() => { el.style.width = el.getAttribute("data-w") + "%"; });
    });
  }

  function buildPersonnelTable() {
    const tb = document.querySelector("#persTable tbody");
    tb.innerHTML = PERSONNEL.map((row) =>
      "<tr>" + row.map((c) => "<td>" + c + "</td>").join("") + "</tr>"
    ).join("");
  }

  /* ---------- game script ---------- */
  const driveTimeline = document.getElementById("driveTimeline");
  const driveLabel = document.getElementById("driveLabel");
  const scriptTitle = document.getElementById("scriptTitle");
  const scriptMeta = document.getElementById("scriptMeta");
  const scriptBody = document.getElementById("scriptBody");
  const scriptTicks = document.getElementById("scriptTicks");
  const fpText = document.getElementById("fpText");
  const fpBall = document.getElementById("fpBall");

  function renderDrive() {
    const d = DRIVES[driveIdx];
    driveLabel.textContent = d.name;
    driveTimeline.innerHTML = "";
    d.plays.forEach((p, i) => {
      const li = document.createElement("li");
      li.className = "tl-item" + (i === playIdx ? " on" : "");
      li.tabIndex = 0;
      li.innerHTML =
        '<div class="tl-down">' + p.down + ' · EXAMPLE</div>' +
        '<div class="tl-play">' + p.play + '</div>' +
        '<div class="tl-result">' + p.result + '</div>';
      li.addEventListener("click", () => selectPlay(i));
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectPlay(i); }
      });
      driveTimeline.appendChild(li);
    });
    selectPlay(playIdx);
  }

  function selectPlay(i) {
    playIdx = i;
    const p = DRIVES[driveIdx].plays[i];
    Array.from(driveTimeline.children).forEach((li, idx) => li.classList.toggle("on", idx === i));
    scriptTitle.textContent = p.play;
    scriptMeta.textContent = p.down + " · " + p.result;
    scriptBody.textContent = p.note;
    scriptTicks.innerHTML = p.ticks.map((t) => "<li>" + t + "</li>").join("");
    fpText.textContent = "EXAMPLE ball @ " + p.fp + " yd line";
    fpBall.style.left = Math.min(95, Math.max(5, p.fp)) + "%";
  }

  document.getElementById("btnPrevDrive").addEventListener("click", () => {
    driveIdx = (driveIdx + DRIVES.length - 1) % DRIVES.length;
    playIdx = 0;
    renderDrive();
  });
  document.getElementById("btnNextDrive").addEventListener("click", () => {
    driveIdx = (driveIdx + 1) % DRIVES.length;
    playIdx = 0;
    renderDrive();
  });

  /* ---------- background particles ---------- */
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  let parts = [];
  let w = 0, h = 0;

  function resizeBg() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    parts = Array.from({ length: Math.min(70, Math.floor(w / 22)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.35 - 0.05,
      a: Math.random() * 0.45 + 0.1,
      gold: Math.random() > 0.72
    }));
  }
  function paintBg() {
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w * 0.5, 0, 0, w * 0.5, 0, h * 0.7);
    g.addColorStop(0, "rgba(36,23,115,0.35)");
    g.addColorStop(1, "rgba(10,10,12,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    parts.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? "rgba(245,215,110," + p.a + ")" : "rgba(107,76,255," + p.a + ")";
      ctx.fill();
    });
    requestAnimationFrame(paintBg);
  }
  window.addEventListener("resize", resizeBg);

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, button, [contenteditable]")) return;
    const map = { "1": "briefing", "2": "scheme", "3": "matchups", "4": "tendencies", "5": "script" };
    if (map[e.key]) showTab(map[e.key]);
    if (e.key === "?" || (e.shiftKey && e.key === "/")) helpDlg.showModal();
  });

  /* ---------- boot ---------- */
  function boot() {
    document.getElementById("weekLabel").textContent = "DEMO · Week Demo · " + DEMO;
    ensureYardLines();
    applyCoverage("cover2");
    renderMatchups();
    buildBars(document.getElementById("dndChart"), DND_BARS);
    buildBars(document.getElementById("covMixChart"), COV_MIX);
    buildPersonnelTable();
    renderDrive();
    resizeBg();
    paintBg();
    tickAnim();
    const hash = location.hash.slice(1);
    showTab(hash && panels[hash] ? hash : "briefing");
    console.info("[Ravens Opponent Dossier]", DEMO, "— offline TokenMax burn");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
