const portfolio = {
  name: "Swarnavo Sen",
  heroKicker: "Portfolio 2026",
  githubProfile: "https://github.com/swarnavosen10-byte",
  role: "CSE student, Python developer, OpenCV learner, and builder of practical healthcare, identity, and sustainability projects.",
  intro:
    "This portfolio reflects the real showcase projects from my GitHub profile: hospital resource coordination, KYC verification, blockchain-backed APIs, and early-stage sustainability work.",
  githubCopy:
    "GitHub profile verified on May 22, 2026. This portfolio highlights 4 showcase repositories from the profile, with the site repository kept out of the project gallery.",
  email: "swarnavosen10@gmail.com",
  location: "India",
  status: "Currently building MEDISYNC, this 3D portfolio, and stronger foundations in Python, DSA, OpenCV, Java, C++, and VHDL.",
  highlights: [
    {
      title: "Healthcare systems",
      detail: "MediSync connects hospital resources, beds, doctors, ambulance support, and emergency visibility."
    },
    {
      title: "Identity APIs",
      detail: "KYC verification with OCR, face matching, deepfake checks, MongoDB, and blockchain records."
    },
    {
      title: "Learning in public",
      detail: "A growing GitHub profile focused on Python, DSA, OpenCV, and real-world project building."
    }
  ],
  badges: ["3D command station", "Showcase repos", "Motion-rich UI"],
  stats: [
    { value: "3D", label: "interactive hero" },
    { value: "4", label: "showcase repos" },
    { value: "100%", label: "static deployable" },
    { value: "2026", label: "fresh project push" }
  ],
  marquee: ["Three.js", "Showcase repos", "Parallax", "Motion design", "Project modal", "Cursor trail", "Responsive", "Deployable"],
  projects: [
    {
      title: "MediSync Hospital Management",
      category: "Healthcare",
      year: "2026",
      summary:
        "A centralized healthcare platform for checking real-time bed availability, doctor information, ambulance support, emergency facilities, and map-based hospital status.",
      tags: ["TypeScript", "React", "FastAPI", "Maps", "Healthcare"],
      outcome: "Live demo available. Swarnavo Sen contributed frontend UI development.",
      repoUrl: "https://github.com/swarnavosen10-byte/HOSPITALMANAGEMENT",
      liveUrl: "https://hospitalmanagement-swart.vercel.app",
      featured: true
    },
    {
      title: "KYC Blockchain API",
      category: "Backend",
      year: "2025",
      summary:
        "A FastAPI system for document-based KYC verification with Aadhaar, PAN, selfie upload, OCR processing, face matching, deepfake detection, MongoDB storage, and blockchain hash verification.",
      tags: ["Python", "FastAPI", "MongoDB", "Blockchain", "OCR"],
      outcome: "Includes REST endpoints, Docker deployment notes, wallet creation, and KYC hash storage.",
      repoUrl: "https://github.com/swarnavosen10-byte/kyc-blockchain-api",
      featured: false
    },
    {
      title: "Eco Connect",
      category: "Sustainability",
      year: "2025",
      summary:
        "An early-stage Eco-Connect project repository. The public README is currently minimal, so this card is ready to grow as the project documentation becomes more detailed.",
      tags: ["Jupyter Notebook", "Sustainability", "Prototype"],
      outcome: "Public GitHub repository included from your account.",
      repoUrl: "https://github.com/swarnavosen10-byte/eco-connect",
      featured: false
    },
    {
      title: "GitHub Profile README",
      category: "Profile",
      year: "2026",
      summary:
        "A developer profile repository presenting Swarnavo Sen as a CSE student, Python developer, OpenCV learner, DSA enthusiast, and future software engineer.",
      tags: ["Markdown", "GitHub", "Developer Profile"],
      outcome: "Includes current focus, tech stack, analytics, contribution graph, and contact links.",
      repoUrl: "https://github.com/swarnavosen10-byte/swarnavosen10-byte",
      featured: false
    }
  ],
  rangeCopy:
    "I am building a base across software engineering fundamentals, Python, DSA, computer vision, APIs, and full-stack project work.",
  range: [
    {
      label: "01",
      title: "Frontend UI",
      summary: "Healthcare dashboards, responsive interfaces, map-based visuals, and clean workflows for real users.",
      tags: ["React", "TypeScript", "UI"]
    },
    {
      label: "02",
      title: "Backend APIs",
      summary: "FastAPI services, verification endpoints, database connections, Docker notes, and API documentation.",
      tags: ["Python", "FastAPI", "MongoDB"]
    },
    {
      label: "03",
      title: "Computer vision",
      summary: "OCR processing, face matching, image authenticity checks, and OpenCV learning through project work.",
      tags: ["OpenCV", "OCR", "KYC"]
    },
    {
      label: "04",
      title: "Problem solving",
      summary: "A learning loop around DSA, debugging, project building, and turning classroom knowledge into working software.",
      tags: ["DSA", "Java", "C++"]
    }
  ],
  process: [
    {
      label: "Learn",
      title: "Understand the system",
      summary:
        "Break down the domain, study the stack, and understand the real problem before writing the final code."
    },
    {
      label: "Build",
      title: "Make the working version",
      summary:
        "Create practical features first: dashboards, APIs, verification flows, maps, and data handling."
    },
    {
      label: "Improve",
      title: "Debug and document",
      summary:
        "Clean up the code, improve the README, test the flow, and make the project easier for others to understand."
    }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme");

// Feature flag: enable the project modal diorama for MediSync.
const ENABLE_PROJECT_DIORAMA = true;

// Cleanup any leftover diorama canvas or fullscreen modal state (in case previous runs left elements)
(function cleanupDioramaArtifacts() {
  try {
    const existing = document.getElementById('project-diorama');
    if (existing) existing.remove();
  } catch (e) {}
  try {
    const modal = document.getElementById('project-modal');
    if (modal) {
      const shell = modal.querySelector('.project-modal-shell');
      if (shell && shell.classList.contains('fullscreen')) shell.classList.remove('fullscreen');
    }
  } catch (e) {}
})();

const preloader = document.getElementById("preloader");

function hidePreloader() {
  if (!preloader) return;
  preloader.setAttribute("aria-hidden", "true");
}

if (savedTheme === "night") {
  root.dataset.theme = "night";
}

function renderContent() {
  $("[data-name]").textContent = portfolio.name;
  $("[data-hero-kicker]").textContent = portfolio.heroKicker;
  $("[data-role]").textContent = portfolio.role;
  $("[data-intro]").textContent = portfolio.intro;
  $("[data-range-copy]").textContent = portfolio.rangeCopy;
  const githubCopy = $("[data-github-copy]");
  if (githubCopy) githubCopy.textContent = portfolio.githubCopy;
  $("[data-status]").textContent = portfolio.status;
  $("[data-footer-name]").textContent = portfolio.name;
  $("[data-footer-meta]").textContent = portfolio.location;

  const emailLink = $("[data-email-link]");
  emailLink.href = `mailto:${portfolio.email}`;
  emailLink.textContent = portfolio.email;

  $$("[data-github-link]").forEach((link) => {
    link.href = portfolio.githubProfile;
  });

  const highlights = $("[data-highlights]");
  highlights.innerHTML = portfolio.highlights
    .map(
      (item) => `
        <article class="signal">
          <strong>${item.title}</strong>
          <span>${item.detail}</span>
        </article>
      `
    )
    .join("");

  const heroBadges = $("[data-hero-badges]");
  if (heroBadges) {
    heroBadges.innerHTML = portfolio.badges.map((badge) => `<span>${badge}</span>`).join("");
  }

  const stats = $("[data-stats]");
  if (stats) {
    stats.innerHTML = portfolio.stats
      .map(
        (item, index) => `
          <article class="stat-card" style="--delay:${index * 0.12}s">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
          </article>
        `
      )
      .join("");
  }

  const marquee = $("[data-marquee]");
  if (marquee) {
    const loop = [...portfolio.marquee, ...portfolio.marquee].map((item) => `<span>${item}</span>`).join("");
    marquee.innerHTML = loop;
  }

  renderFilters();
  renderProjects("All");
  renderRepoOrbit();
  renderRange();
  renderProcess();
}

function renderFilters() {
  const categories = ["All", ...new Set(portfolio.projects.map((project) => project.category))];
  const filters = $("[data-filters]");
  filters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-button" type="button" aria-pressed="${category === "All"}" data-filter="${category}">
          ${category}
        </button>
      `
    )
    .join("");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    $$("[data-filter]", filters).forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderProjects(button.dataset.filter);
    enhanceProjectCards();
  });
}

function renderProjects(filter) {
  const projects = filter === "All" ? portfolio.projects : portfolio.projects.filter((project) => project.category === filter);
  const projectGrid = $("[data-projects]");

    projectGrid.innerHTML = projects
      .map((project) => {
        const imgSrc = `screenshots/${getProjectArtworkSlug(project)}.svg`;
        return `
          <article class="project-card ${project.featured ? "featured" : ""}">
            <div class="project-body">
              <div class="project-number">${String(portfolio.projects.indexOf(project) + 1).padStart(2, "0")}</div>
              <div class="project-meta">
                <span>${project.category}</span>
                <span>${project.year}</span>
              </div>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
              <div class="project-tags">
                ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
              <div class="project-links" aria-label="${project.title} links">
                ${
                  project.title === "MediSync Hospital Management"
                    ? `<button class="project-overview-button" type="button" data-project-overview="${project.title}">Overview</button>`
                    : ""
                }
                ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo</a>` : ""}
              </div>
              <div class="project-outcome">${project.outcome}</div>
            </div>
            <div class="project-art" aria-hidden="true">
              <img src="${imgSrc}" alt="${project.title} screenshot" loading="lazy" onerror="this.style.display='none'" />
              <div class="project-scan">
                <span>${project.category}</span>
                <span>${project.tags.slice(0, 2).join(" + ")}</span>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProjectArtworkSlug(project) {
  const aliases = {
    "MediSync Hospital Management": "medisync"
  };
  return aliases[project.title] || slugify(project.title);
}

function renderRepoOrbit() {
  const orbit = $("[data-repo-orbit]");
  if (!orbit) return;

  orbit.innerHTML = portfolio.projects
    .map(
      (project, index) => `
        <a
          class="repo-node"
          href="${project.repoUrl || portfolio.githubProfile}"
          target="_blank"
          rel="noreferrer"
          style="--index:${index}; --total:${portfolio.projects.length}"
        >
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${project.title}</strong>
          <em>${project.tags.slice(0, 3).join(" / ")}</em>
        </a>
      `
    )
    .join("");
}

function renderRange() {
  $("[data-range]").innerHTML = portfolio.range
    .map(
      (item) => `
        <article class="range-item">
          <div class="range-meta">${item.label}</div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="range-tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderProcess() {
  $("[data-process]").innerHTML = portfolio.process
    .map(
      (step, index) => `
        <article class="process-item">
          <div class="process-step">${String(index + 1).padStart(2, "0")} / ${step.label}</div>
          <h3>${step.title}</h3>
          <p>${step.summary}</p>
        </article>
      `
    )
    .join("");
}

function bindInteractions() {
  $("[data-theme-toggle]").addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "night" ? "" : "night";
    if (nextTheme) {
      root.dataset.theme = nextTheme;
      localStorage.setItem("portfolio-theme", nextTheme);
    } else {
      delete root.dataset.theme;
      localStorage.removeItem("portfolio-theme");
    }
  });

  $("[data-copy-email]").addEventListener("click", async () => {
    const status = $("[data-copy-status]");
    try {
      await navigator.clipboard.writeText(portfolio.email);
      status.textContent = "Email copied.";
    } catch {
      status.textContent = portfolio.email;
    }
  });

  window.addEventListener(
    "pointermove",
    (event) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true }
  );

  const progress = $(`[data-scroll-progress]`);
  window.addEventListener(
    "scroll",
    () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const percent = Math.min(1, window.scrollY / max);
      if (progress) progress.style.transform = `scaleX(${percent})`;
    },
    { passive: true }
  );
}

function setStageStatus(status) {
  const nextStatus = {
    ...(window.__portfolioStageStatus || {}),
    ...status,
    updatedAt: Date.now()
  };
  window.__portfolioStageStatus = nextStatus;
  document.documentElement.dataset.stageEngine = nextStatus.engine || "";
  document.documentElement.dataset.stageActive = String(Boolean(nextStatus.active));
  document.documentElement.dataset.stageFrame = String(nextStatus.frame || 0);
  if (Number.isFinite(nextStatus.pixelEnergy)) {
    document.documentElement.dataset.stagePixelEnergy = String(nextStatus.pixelEnergy);
  }
  if (Number.isFinite(nextStatus.pixelColorful)) {
    document.documentElement.dataset.stagePixelColorful = String(nextStatus.pixelColorful);
  }
  if (Number.isFinite(nextStatus.pixelSamples)) {
    document.documentElement.dataset.stagePixelSamples = String(nextStatus.pixelSamples);
  }
}

async function startVisualStage() {
  let canvas = $("#hero-stage");
  const fallback = $("#fallback-visual");
  setStageStatus({ engine: "loading", frame: 0, active: false });

  try {
    // try a quick import first, then retry with a longer timeout if needed
    let THREE;
    try {
      THREE = await withTimeout(import("https://unpkg.com/three@0.165.0/build/three.module.js"), 1800);
    } catch (err) {
      THREE = await withTimeout(import("https://unpkg.com/three@0.165.0/build/three.module.js"), 6000);
    }
    await createThreeStage(THREE, canvas);
    hidePreloader();
  } catch (error) {
    // If Three.js fails to load, show the fallback canvas visual.
    fallback.classList.add("is-active");
    canvas = replaceStageCanvas(canvas);
    setStageStatus({ engine: "canvas-fallback", error: String(error).slice(0, 140) });
    createCanvasFallback(canvas);
    hidePreloader();
  }
}

function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error("Three.js import timed out")), timeoutMs);
    })
  ]);
}

function replaceStageCanvas(canvas) {
  const replacement = canvas.cloneNode(false);
  canvas.replaceWith(replacement);
  return replacement;
}

function createScreenTexture(THREE) {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 1024;
  textureCanvas.height = 560;
  const ctx = textureCanvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, textureCanvas.width, textureCanvas.height);
  gradient.addColorStop(0, "#11100d");
  gradient.addColorStop(0.48, "#162132");
  gradient.addColorStop(1, "#0d0f0f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

  ctx.strokeStyle = "rgba(255,248,234,0.08)";
  ctx.lineWidth = 1;
  for (let x = 0; x < textureCanvas.width; x += 56) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, textureCanvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < textureCanvas.height; y += 56) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(textureCanvas.width, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#f45f43";
  ctx.font = "700 30px Inter, Arial, sans-serif";
  ctx.fillText("SWARNAVO.OS", 56, 72);
  ctx.fillStyle = "rgba(255,248,234,0.9)";
  ctx.font = "800 64px Inter, Arial, sans-serif";
  ctx.fillText("PROJECT", 56, 164);
  ctx.fillText("COMMAND", 56, 232);

  const rows = ["MediSync hospital map online", "KYC verification API armed", "OpenCV learning pipeline", "GitHub profile synced"];
  rows.forEach((row, index) => {
    const y = 320 + index * 44;
    ctx.fillStyle = index % 2 ? "#69aef4" : "#57caa8";
    ctx.fillRect(56, y - 18, 14, 14);
    ctx.fillStyle = "rgba(255,248,234,0.78)";
    ctx.font = "600 25px Inter, Arial, sans-serif";
    ctx.fillText(row, 88, y);
  });

  ctx.strokeStyle = "#f45f43";
  ctx.lineWidth = 5;
  ctx.strokeRect(760, 58, 178, 178);
  ctx.strokeStyle = "#69aef4";
  ctx.beginPath();
  ctx.arc(849, 147, 58, 0.2, Math.PI * 1.66);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createPanelTexture(THREE, project, index) {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 640;
  textureCanvas.height = 360;
  const ctx = textureCanvas.getContext("2d");
  const accent = index % 2 ? "#1b78d8" : "#f45f43";

  ctx.fillStyle = "rgba(13,15,15,0.92)";
  ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 6;
  ctx.strokeRect(18, 18, textureCanvas.width - 36, textureCanvas.height - 36);
  ctx.fillStyle = accent;
  ctx.font = "800 28px Inter, Arial, sans-serif";
  ctx.fillText(String(index + 1).padStart(2, "0") + " / " + project.category.toUpperCase(), 42, 72);
  ctx.fillStyle = "#fff8ea";
  ctx.font = "800 46px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, project.title, 42, 145, 520, 52);
  ctx.fillStyle = "rgba(255,248,234,0.72)";
  ctx.font = "600 24px Inter, Arial, sans-serif";
  ctx.fillText(project.tags.slice(0, 3).join("  +  "), 42, 302);

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, y);
}

function createThreeStage(THREE, canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120);
  camera.position.set(0, 0.4, 12);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true
  });
  renderer.setClearColor(0x0d0f0f, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const group = new THREE.Group();
  scene.add(group);
  // expose refs so other utilities can raycast or reference camera/scene
  group.__cameraRef = camera;
  group.__sceneRef = scene;
  // attach group ref to canvas for global access
  if (canvas) canvas.__threeGroupRef = group;

  // soft particle field (points) to add depth and motion
  const particleCount = 220;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
  }
  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({ size: 0.06, color: 0xfff8ea, transparent: true, opacity: 0.18 });
  const pointCloud = new THREE.Points(particles, particleMaterial);
  group.add(pointCloud);

  const palette = [0xf45f43, 0x1b78d8, 0x198f70, 0xe0b654, 0xfff8ea];
  const nodeGeometry = new THREE.IcosahedronGeometry(0.075, 1);
  const nodeMaterials = palette.map(
    (color) =>
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.5,
        roughness: 0.35,
        metalness: 0.08
      })
  );

  const nodes = [];
  const nodeCount = 88;
  for (let index = 0; index < nodeCount; index += 1) {
    const radius = 2.6 + Math.random() * 4.1;
    const angle = (index / nodeCount) * Math.PI * 2;
    const height = (Math.random() - 0.5) * 3.8;
    const mesh = new THREE.Mesh(nodeGeometry, nodeMaterials[index % nodeMaterials.length]);
    mesh.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius);
    mesh.userData = {
      orbit: angle,
      radius,
      speed: 0.18 + Math.random() * 0.45,
      wobble: Math.random() * Math.PI * 2
    };
    nodes.push(mesh);
    group.add(mesh);
  }

  const curvePoints = [];
  for (let index = 0; index < 220; index += 1) {
    const t = index / 219;
    const angle = t * Math.PI * 2.85;
    const radius = 2.3 + Math.sin(t * Math.PI * 3) * 0.65;
    curvePoints.push(new THREE.Vector3(Math.cos(angle) * radius, (t - 0.5) * 4.6, Math.sin(angle) * radius));
  }

  const curve = new THREE.CatmullRomCurve3(curvePoints);
  const tube = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 220, 0.018, 8, false),
    new THREE.MeshStandardMaterial({
      color: 0xfff8ea,
      emissive: 0xf45f43,
      emissiveIntensity: 0.45,
      roughness: 0.28,
      metalness: 0.12
    })
  );
  group.add(tube);

  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.32, 0.08, 160, 12, 2, 3),
    new THREE.MeshStandardMaterial({
      color: 0x1b78d8,
      emissive: 0x1b78d8,
      emissiveIntensity: 0.25,
      metalness: 0.2,
      roughness: 0.22
    })
  );
  torus.position.set(2.8, -0.45, -1.2);
  group.add(torus);

  const station = new THREE.Group();
  station.position.set(2.35, -1.25, 0);
  station.rotation.y = -0.24;
  group.add(station);

  const matte = new THREE.MeshStandardMaterial({ color: 0x171512, roughness: 0.72, metalness: 0.18 });
  const graphite = new THREE.MeshStandardMaterial({ color: 0x242018, roughness: 0.58, metalness: 0.34 });
  const edgeGlow = new THREE.MeshStandardMaterial({
    color: 0xf45f43,
    emissive: 0xf45f43,
    emissiveIntensity: 0.72,
    roughness: 0.2,
    metalness: 0.2
  });
  const blueGlow = new THREE.MeshStandardMaterial({
    color: 0x1b78d8,
    emissive: 0x1b78d8,
    emissiveIntensity: 0.82,
    roughness: 0.2,
    metalness: 0.15
  });

  const screenTexture = createScreenTexture(THREE);
  const screenMaterial = new THREE.MeshStandardMaterial({
    map: screenTexture,
    emissive: 0xffffff,
    emissiveMap: screenTexture,
    emissiveIntensity: 0.88,
    roughness: 0.18,
    metalness: 0.05
  });

  const desk = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.18, 2.1), graphite);
  desk.position.set(0, -1.25, 0);
  station.add(desk);

  const monitorFrame = new THREE.Mesh(new THREE.BoxGeometry(3.25, 1.95, 0.18), matte);
  monitorFrame.position.set(0, 0.1, -0.18);
  station.add(monitorFrame);

  const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.92, 1.58), screenMaterial);
  screen.position.set(0, 0.1, -0.075);
  station.add(screen);

  const screenRimTop = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.035, 0.04), edgeGlow);
  screenRimTop.position.set(0, 0.99, -0.04);
  station.add(screenRimTop);
  const screenRimSide = new THREE.Mesh(new THREE.BoxGeometry(0.035, 1.78, 0.04), blueGlow);
  screenRimSide.position.set(1.61, 0.08, -0.035);
  station.add(screenRimSide);

  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.76, 0.18), graphite);
  stand.position.set(0, -0.84, -0.18);
  station.add(stand);
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.08, 0.72), graphite);
  base.position.set(0, -1.18, 0.12);
  station.add(base);

  const keyboard = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 0.48), matte);
  keyboard.position.set(-0.6, -1.07, 0.86);
  keyboard.rotation.x = -0.18;
  station.add(keyboard);

  const keyMeshes = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const keyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.025, 0.07), col % 4 === 0 ? edgeGlow : blueGlow);
      keyMesh.position.set(-1.38 + col * 0.16 + row * 0.035, -1.0, 0.72 + row * 0.11);
      keyMesh.rotation.x = -0.18;
      keyMesh.userData.phase = row * 0.7 + col * 0.18;
      keyMeshes.push(keyMesh);
      station.add(keyMesh);
    }
  }

  const tower = new THREE.Mesh(new THREE.BoxGeometry(0.74, 1.64, 0.92), matte);
  tower.position.set(2.28, -0.48, 0.16);
  station.add(tower);
  const towerLight = new THREE.Mesh(new THREE.BoxGeometry(0.045, 1.2, 0.035), blueGlow);
  towerLight.position.set(1.89, -0.48, 0.64);
  station.add(towerLight);

  const projectPanels = portfolio.projects.map((project, index) => {
    const panelGroup = new THREE.Group();
    const texture = createPanelTexture(THREE, project, index);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      emissive: 0xffffff,
      emissiveMap: texture,
      emissiveIntensity: 0.52,
      transparent: true,
      opacity: 0.92,
      roughness: 0.22,
      metalness: 0.05
    });
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.36, 0.78), material);
    const ring = new THREE.Mesh(
      new THREE.PlaneGeometry(1.44, 0.86),
      new THREE.MeshBasicMaterial({ color: index % 2 ? 0x1b78d8 : 0xf45f43, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
    );
    ring.position.z = -0.01;
    panelGroup.add(ring);
    panelGroup.add(panel);
    panelGroup.position.set(-2.35 + index * 1.58, 1.6 + Math.sin(index) * 0.24, -0.25 - index * 0.2);
    panelGroup.rotation.y = 0.28 - index * 0.16;
    panelGroup.userData.phase = index * 0.8;
    station.add(panelGroup);
    return panelGroup;
  });

  const hologram = new THREE.Mesh(
    new THREE.TorusGeometry(0.74, 0.01, 12, 90),
    new THREE.MeshBasicMaterial({ color: 0x57caa8, transparent: true, opacity: 0.6 })
  );
  hologram.position.set(1.26, -0.88, 0.82);
  hologram.rotation.x = Math.PI / 2;
  station.add(hologram);

  // enable click pulse behavior for nodes
  try {
    addNodeClickPulse(THREE, group);
  } catch (e) {
    // ignore if addNodeClickPulse not available
  }

  const ambient = new THREE.AmbientLight(0xfff4da, 1.25);
  scene.add(ambient);

  const key = new THREE.PointLight(0xf45f43, 95, 26);
  key.position.set(-5, 4, 7);
  scene.add(key);

  const fill = new THREE.PointLight(0x1b78d8, 80, 24);
  fill.position.set(5, -3, 5);
  scene.add(fill);

  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    renderer.setSize(Math.max(width, 1), Math.max(height, 1), false);
    camera.aspect = Math.max(width, 1) / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener("resize", resize);

  let frame = 0;
  const clock = new THREE.Clock();
  const gl = renderer.getContext();

  function animate() {
    const time = clock.getElapsedTime();
    frame += 1;

    target.x += (pointer.x - target.x) * 0.04;
    target.y += (pointer.y - target.y) * 0.04;

    if (!prefersReducedMotion) {
      nodes.forEach((node, index) => {
        const data = node.userData;
        const angle = data.orbit + time * data.speed * 0.18;
        node.position.x = Math.cos(angle) * data.radius;
        node.position.z = Math.sin(angle) * data.radius;
        node.position.y += Math.sin(time * 0.9 + data.wobble) * 0.0028;
        node.scale.setScalar(1 + Math.sin(time * 1.8 + index) * 0.18);
      });
      group.rotation.y = time * 0.045 + target.x * 0.18;
      group.rotation.x = -0.12 + target.y * 0.12;
      torus.rotation.x = time * 0.25;
      torus.rotation.y = time * 0.35;
      tube.rotation.y = -time * 0.025;
      station.rotation.y = -0.24 + target.x * 0.08 + Math.sin(time * 0.35) * 0.025;
      station.rotation.x = target.y * 0.035;
      screenRimTop.scale.x = 0.82 + Math.sin(time * 2.2) * 0.18;
      screenRimSide.scale.y = 0.72 + Math.cos(time * 1.7) * 0.2;
      towerLight.scale.y = 0.7 + Math.sin(time * 2.6) * 0.26;
      hologram.rotation.z = time * 0.9;
      hologram.scale.setScalar(1 + Math.sin(time * 1.8) * 0.08);
      keyMeshes.forEach((keyMesh) => {
        keyMesh.scale.y = 1 + Math.max(0, Math.sin(time * 3.2 + keyMesh.userData.phase)) * 0.75;
      });
      projectPanels.forEach((panel, index) => {
        panel.position.y = 1.6 + Math.sin(time * 0.9 + panel.userData.phase) * 0.18;
        panel.rotation.z = Math.sin(time * 0.6 + index) * 0.025;
      });
      // wiggle particles
      pointCloud.rotation.y = time * 0.02;
      const pos = pointCloud.geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        pos[i + 1] += Math.sin(time * 0.4 + i) * 0.0004;
      }
      pointCloud.geometry.attributes.position.needsUpdate = true;
    }

    camera.position.x = target.x * 0.9;
    camera.position.y = 0.35 - target.y * 0.55;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    const pixelStatus = frame % 30 === 0 ? sampleWebGlStage(gl) : {};
    setStageStatus({ engine: "three", frame, active: true, ...pixelStatus });
    requestAnimationFrame(animate);
  }

  animate();
}

// Reveal project cards and add pointer-tilt interactions
function enhanceProjectCards() {
  const cards = $$(`.project-card`);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { root: null, threshold: 0.12 }
  );

  cards.forEach((card) => {
    card.style.transformOrigin = "center center";
    observer.observe(card);

    card.addEventListener(
      "pointermove",
      (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        const rotX = (py * -1) * 6; // degrees
        const rotY = px * 10; // degrees
        card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.01)`;
      },
      { passive: true }
    );

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

// project modal
function setupProjectModal() {
  const modal = document.getElementById("project-modal");
  const close = modal.querySelector(".modal-close");

  function open(project) {
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    modal.querySelector("#project-modal-title").textContent = project.title;
    modal.querySelector(".project-modal-summary").textContent = project.summary;
    modal.querySelector(".project-modal-outcome").textContent = project.outcome || "";
    const media = modal.querySelector(".project-modal-media");
    media.innerHTML = `<img src="screenshots/${getProjectArtworkSlug(project)}.svg" alt="${project.title}" />`;
    const links = modal.querySelector(".project-modal-links");
    links.innerHTML = `${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""} ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo</a>` : ""}`;
    const tags = modal.querySelector(".project-modal-tags");
    tags.innerHTML = project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("");
    // set current index for carousel navigation
    const idx = portfolio.projects.findIndex((p) => p.title === project.title);
    modal.dataset.currentIndex = String(idx >= 0 ? idx : 0);
    // optionally show lightweight diorama for MediSync and expand modal to fullscreen
    const shell = modal.querySelector('.project-modal-shell');
    if (ENABLE_PROJECT_DIORAMA && project.title === "MediSync Hospital Management") {
      try {
        if (shell) shell.classList.add('fullscreen');
        modal.dataset.mode = "medisync";
        showProjectDiorama(project, modal).catch((err) => {
          if (shell) shell.classList.remove('fullscreen');
          delete modal.dataset.mode;
          console.warn('project diorama error', err);
        });
      } catch (err) {
        if (shell) shell.classList.remove('fullscreen');
        delete modal.dataset.mode;
        console.warn('project diorama error', err);
      }
    } else {
      if (shell) shell.classList.remove('fullscreen');
      if (modal.__diorama) destroyProjectDiorama(modal);
      delete modal.dataset.mode;
    }
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (ENABLE_PROJECT_DIORAMA) destroyProjectDiorama(modal);
    const shell = modal.querySelector('.project-modal-shell');
    if (shell) shell.classList.remove('fullscreen');
    delete modal.dataset.mode;
  }

  close.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // attach click handlers to project cards
  document.addEventListener("click", (e) => {
    const overviewButton = e.target.closest("[data-project-overview]");
    if (overviewButton) {
      const project = portfolio.projects.find((p) => p.title === overviewButton.dataset.projectOverview);
      if (project) open(project);
      return;
    }

    const card = e.target.closest('.project-card');
    if (!card) return;
    if (e.target.closest("a, button")) return;
    const title = card.querySelector('h3')?.textContent;
    const project = portfolio.projects.find((p) => p.title === title);
    if (project) open(project);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  // modal carousel controls
  const prevBtn = modal.querySelector('.modal-prev');
  const nextBtn = modal.querySelector('.modal-next');
  function showByIndex(idx) {
    const p = portfolio.projects[(idx + portfolio.projects.length) % portfolio.projects.length];
    if (p) open(p);
    modal.dataset.currentIndex = String((idx + portfolio.projects.length) % portfolio.projects.length);
  }
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const cur = Number(modal.dataset.currentIndex || 0);
    showByIndex(cur - 1);
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const cur = Number(modal.dataset.currentIndex || 0);
    showByIndex(cur + 1);
  });
}

// cursor trail
function startCursorTrail() {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);
  const dots = Array.from({ length: 6 }).map(() => {
    const d = document.createElement('div');
    d.className = 'cursor-dot';
    trail.appendChild(d);
    return d;
  });
  let positions = dots.map(() => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));
  window.addEventListener('pointermove', (e) => {
    positions[0] = { x: e.clientX, y: e.clientY };
  }, { passive: true });
  function animate() {
    for (let i = 1; i < positions.length; i++) {
      positions[i].x += (positions[i - 1].x - positions[i].x) * 0.18;
      positions[i].y += (positions[i - 1].y - positions[i].y) * 0.18;
    }
    dots.forEach((dot, i) => {
      dot.style.left = positions[i].x + 'px';
      dot.style.top = positions[i].y + 'px';
      dot.style.opacity = String(1 - i * 0.12);
      dot.style.transform = `scale(${1 - i * 0.08})`;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// node click pulse in three stage
function addNodeClickPulse(THREE, sceneGroup) {
  // expose a simple event: when a node mesh is clicked, spawn a small particle burst
  window.addEventListener('click', (e) => {
    // raycast from mouse
    // best-effort: skip if no canvas
    const canvas = document.getElementById('hero-stage');
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    const camera = sceneGroup.__cameraRef;
    const scene = sceneGroup.__sceneRef;
    if (!camera || !scene) return;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(sceneGroup.children, true);
    if (intersects.length) {
      const p = intersects[0].point;
      spawnBurst(THREE, scene, p);
    }
  });

  function spawnBurst(THREE, scene, position) {
    const geom = new THREE.BufferGeometry();
    const count = 24;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = position.x + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 1] = position.y + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 2] = position.z + (Math.random() - 0.5) * 0.3;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xfff8ea, size: 0.05, transparent: true, opacity: 0.95 });
    const points = new THREE.Points(geom, mat);
    scene.add(points);
    let life = 0;
    function tick() {
      life += 1;
      points.material.opacity -= 0.02;
      points.rotation.x += 0.06;
      if (life > 60) {
        scene.remove(points);
      } else {
        requestAnimationFrame(tick);
      }
    }
    tick();
  }
}

function createCanvasFallback(canvas) {
  const ctx = canvas.getContext("2d");
  const nodes = Array.from({ length: 72 }, (_, index) => ({
    angle: (index / 72) * Math.PI * 2,
    radius: 0.12 + Math.random() * 0.42,
    speed: 0.25 + Math.random() * 0.45,
    color: ["#f45f43", "#1b78d8", "#198f70", "#e0b654", "#fff8ea"][index % 5]
  }));
  let frame = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function animate() {
    const { width, height } = canvas.getBoundingClientRect();
    frame += 1;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#0d0f0f";
    ctx.fillRect(0, 0, width, height);

    const centerX = width * 0.62;
    const centerY = height * 0.5;
    const base = Math.min(width, height);

    ctx.save();
    ctx.translate(centerX - base * 0.04, centerY + base * 0.04);
    ctx.rotate(Math.sin(frame * 0.01) * 0.025);
    ctx.fillStyle = "rgba(255,248,234,0.08)";
    ctx.fillRect(-base * 0.33, base * 0.24, base * 0.66, base * 0.035);
    ctx.fillStyle = "#171512";
    ctx.fillRect(-base * 0.24, -base * 0.2, base * 0.48, base * 0.3);
    const screenGradient = ctx.createLinearGradient(-base * 0.21, -base * 0.17, base * 0.21, base * 0.1);
    screenGradient.addColorStop(0, "rgba(244,95,67,0.9)");
    screenGradient.addColorStop(0.45, "rgba(27,120,216,0.82)");
    screenGradient.addColorStop(1, "rgba(25,143,112,0.8)");
    ctx.fillStyle = screenGradient;
    ctx.fillRect(-base * 0.21, -base * 0.17, base * 0.42, base * 0.24);
    ctx.fillStyle = "rgba(13,15,15,0.9)";
    ctx.fillRect(-base * 0.18, -base * 0.13, base * 0.22, base * 0.032);
    ctx.fillRect(-base * 0.18, -base * 0.08, base * 0.32, base * 0.025);
    ctx.fillRect(-base * 0.18, -base * 0.035, base * 0.26, base * 0.025);
    ctx.fillStyle = "#242018";
    ctx.fillRect(-base * 0.03, base * 0.1, base * 0.06, base * 0.15);
    ctx.fillRect(-base * 0.14, base * 0.22, base * 0.28, base * 0.035);
    for (let index = 0; index < 28; index += 1) {
      ctx.fillStyle = index % 4 === 0 ? "#f45f43" : "#69aef4";
      ctx.globalAlpha = 0.42 + Math.sin(frame * 0.08 + index) * 0.22;
      ctx.fillRect(-base * 0.28 + (index % 10) * base * 0.035, base * 0.31 + Math.floor(index / 10) * base * 0.028, base * 0.022, base * 0.012);
    }
    ctx.globalAlpha = 1;
    ctx.restore();

    nodes.forEach((node, index) => {
      const angle = node.angle + frame * 0.004 * node.speed;
      const x = centerX + Math.cos(angle) * base * node.radius;
      const y = centerY + Math.sin(angle * 1.4) * base * node.radius;
      ctx.beginPath();
      ctx.fillStyle = node.color;
      ctx.globalAlpha = 0.54 + Math.sin(frame * 0.03 + index) * 0.22;
      ctx.arc(x, y, 2.4 + (index % 4), 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 0.24;
    ctx.strokeStyle = "#fff8ea";
    ctx.lineWidth = 1;
    for (let index = 0; index < 7; index += 1) {
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, base * (0.16 + index * 0.05), base * (0.08 + index * 0.035), index * 0.2, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    const pixelStatus = frame % 30 === 0 ? sampleCanvasStage(canvas, ctx) : {};
    setStageStatus({ engine: "canvas-fallback", frame, active: true, ...pixelStatus });
    requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener("resize", resize);
  animate();
}

function sampleWebGlStage(gl) {
  const width = gl.drawingBufferWidth;
  const height = gl.drawingBufferHeight;
  const pixel = new Uint8Array(4);
  const samples = [];
  const xs = [0.38, 0.5, 0.62, 0.74, 0.86];
  const ys = [0.24, 0.38, 0.52, 0.66, 0.8];

  xs.forEach((xRatio) => {
    ys.forEach((yRatio) => {
      const x = Math.max(0, Math.min(width - 1, Math.floor(width * xRatio)));
      const y = Math.max(0, Math.min(height - 1, Math.floor(height * yRatio)));
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
      samples.push([pixel[0], pixel[1], pixel[2], pixel[3]]);
    });
  });

  return summarizePixelSamples(samples);
}

function sampleCanvasStage(canvas, ctx) {
  const samples = [];
  const xs = [0.38, 0.5, 0.62, 0.74, 0.86];
  const ys = [0.24, 0.38, 0.52, 0.66, 0.8];

  xs.forEach((xRatio) => {
    ys.forEach((yRatio) => {
      const x = Math.max(0, Math.min(canvas.width - 1, Math.floor(canvas.width * xRatio)));
      const y = Math.max(0, Math.min(canvas.height - 1, Math.floor(canvas.height * yRatio)));
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      samples.push([pixel[0], pixel[1], pixel[2], pixel[3]]);
    });
  });

  return summarizePixelSamples(samples);
}

function summarizePixelSamples(samples) {
  let energy = 0;
  let colorful = 0;

  samples.forEach(([r, g, b]) => {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    energy += luma;
    if (max - min > 16 && max > 42) {
      colorful += 1;
    }
  });

  return {
    pixelEnergy: Math.round(energy),
    pixelColorful: colorful,
    pixelSamples: samples.length
  };
}

renderContent();
bindInteractions();
startVisualStage();
enhanceProjectCards();
setupProjectModal();
startCursorTrail();
setupScrollParallax();
typeHero();
revealSections();

// Typing effect for hero name and role
function typeHero() {
  const nameEl = $('[data-name]');
  const roleEl = $('[data-role]');
  if (!nameEl || !roleEl) return;
  const name = portfolio.name;
  const role = portfolio.role;
  nameEl.textContent = '';
  roleEl.textContent = '';
  let i = 0;
  let j = 0;
  const nameTimer = setInterval(() => {
    nameEl.textContent += name[i++] || '';
    if (i >= name.length) clearInterval(nameTimer);
  }, 60);
  setTimeout(() => {
    const roleTimer = setInterval(() => {
      roleEl.textContent += role[j++] || '';
      if (j >= role.length) clearInterval(roleTimer);
    }, 18);
  }, Math.min(800 + name.length * 40, 2000));
}

// Reveal sections using IntersectionObserver
function revealSections() {
  const sections = $$('section');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  sections.forEach((s) => obs.observe(s));
}

// gentle scroll-based camera parallax
function setupScrollParallax() {
  let target = 0;
  let current = 0;
  window.addEventListener('scroll', () => {
    const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
    target = window.scrollY / max;
  }, { passive: true });

  function tick() {
    current += (target - current) * 0.06;
    // attempt to find camera reference on the group
    const stageCanvas = document.getElementById('hero-stage');
    if (stageCanvas) {
      const group = stageCanvas.__threeGroupRef;
      if (group && group.__cameraRef) {
        const cam = group.__cameraRef;
        cam.position.z = 12 - current * 2.2; // move camera a bit on scroll
      }
    }
    requestAnimationFrame(tick);
  }
  tick();
}

// --- Project modal diorama (guarded by ENABLE_PROJECT_DIORAMA) ---
async function showProjectDiorama(project, modal) {
  if (!modal || modal.__diorama) return;
  const shell = modal.querySelector('.project-modal-shell');
  if (!shell) return;

  // create a canvas placeholder for the GLB renderer and a small status overlay
  const canvas = document.createElement('canvas');
  canvas.id = 'project-diorama';
  canvas.className = 'medisync-3d-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  const status = document.createElement('div');
  status.className = 'project-diorama-status';
  status.textContent = '3D: initializing...';
  shell.prepend(canvas);
  shell.prepend(status);
  modal.__diorama = { canvas, status };

  try {
    let THREE = window.THREE || (await withTimeout(import('https://unpkg.com/three@0.165.0/build/three.module.js'), 6000));
    THREE = THREE.default || THREE;
    window.THREE = THREE;

    const { GLTFLoader } = await import('https://unpkg.com/three@0.165.0/examples/jsm/loaders/GLTFLoader.js');
    const { OrbitControls } = await import('https://unpkg.com/three@0.165.0/examples/jsm/controls/OrbitControls.js');

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.05, 200);
    camera.position.set(0, 1.8, 6);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(5, 10, 7);
    scene.add(dir);
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const loader = new GLTFLoader();
    // attempt to add postprocessing for photorealism
    let composer, renderPass, bloomPass, ssaoPass;
    try {
      const { EffectComposer } = await import('https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/EffectComposer.js');
      const { RenderPass } = await import('https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/RenderPass.js');
      const { UnrealBloomPass } = await import('https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/UnrealBloomPass.js');
      const { SSAOPass } = await import('https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/SSAOPass.js');
      composer = new EffectComposer(renderer);
      renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);
      bloomPass = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.8, 0.4, 0.12);
      bloomPass.threshold = 0.85;
      bloomPass.strength = 0.6;
      bloomPass.radius = 0.55;
      composer.addPass(bloomPass);
      ssaoPass = new SSAOPass(scene, camera, 512, 512);
      ssaoPass.kernelRadius = 12;
      ssaoPass.minDistance = 0.001;
      ssaoPass.maxDistance = 0.02;
      composer.addPass(ssaoPass);
    } catch (e) {
      console.warn('postprocessing not available', e);
    }
    // Try a local model first (drop your hospital GLB at assets/models/hospital.glb),
    // then fall back to high-fidelity public samples (DamagedHelmet is a PBR demo).
    const MODEL_URLS = [
      'assets/models/hospital.glb',
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb',
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Marketplace/glTF-Binary/Marketplace.glb',
      'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/FlightHelmet/glTF-Binary/FlightHelmet.glb'
    ];

    // enhance realism: try to load an HDR environment and apply PMREM
    try {
      const { RGBELoader } = await import('https://unpkg.com/three@0.165.0/examples/jsm/loaders/RGBELoader.js');
      const hdrUrls = [
        'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr'
      ];
      for (const h of hdrUrls) {
        try {
          const rgbe = new RGBELoader();
          const hdrTex = await rgbe.setDataType(THREE.UnsignedByteType).loadAsync(h);
          const pmremGen = new THREE.PMREMGenerator(renderer);
          pmremGen.compileEquirectangularShader();
          const envMap = pmremGen.fromEquirectangular(hdrTex).texture;
          scene.environment = envMap;
          hdrTex.dispose();
          pmremGen.dispose();
          break;
        } catch (e) {
          console.warn('HDR load failed', h, e);
        }
      }
    } catch (e) {
      console.warn('RGBELoader not available or HDR failed', e);
    }

    // set renderer for PBR-friendly output
    try {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.outputEncoding = THREE.sRGBEncoding;
    } catch (e) {}

    let gltf = null;
    for (const url of MODEL_URLS) {
      try {
        if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = `3D: loading model ${url}`;
        gltf = await loader.loadAsync(url);
        if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = `3D: model loaded (${url})`;
        break;
      } catch (e) {
        console.warn('failed to load model', url, e);
        if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = `3D: failed to load ${url}`;
      }
    }

    if (!gltf) throw new Error('no GLB model could be loaded');

    const model = gltf.scene || gltf.scenes?.[0];
    model.traverse((n) => {
      if (n.isMesh) {
        n.castShadow = true;
        n.receiveShadow = true;
        if (n.material && Array.isArray(n.material) === false) {
          try {
            if (typeof n.material.envMapIntensity === 'number') n.material.envMapIntensity = 1.0;
            if (typeof n.material.metalness !== 'number') n.material.metalness = Math.min(0.6, n.material.metalness || 0.2);
            if (typeof n.material.roughness !== 'number') n.material.roughness = n.material.roughness || 0.6;
            n.material.needsUpdate = true;
          } catch (e) {
            n.material.needsUpdate = true;
          }
        }
      }
    });

    scene.add(model);
    // hide status after successful add
    if (modal.__diorama && modal.__diorama.status) {
      modal.__diorama.status.textContent = '3D: ready';
      modal.__diorama.status.style.opacity = '0';
      window.setTimeout(() => { try { modal.__diorama.status.remove(); } catch (e) {} }, 900);
    }

    // frame model
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera.fov * Math.PI) / 180;
    const camZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.6;
    camera.position.set(0, Math.max(1.0, size.y * 0.5), camZ);
    camera.lookAt(0, size.y * 0.15, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableDamping = true;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', resize);
    resize();

    let raf = 0;
    const tick = () => {
      controls.update();
      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    modal.__diorama = {
      canvas,
      renderer,
      scene,
      camera,
      controls,
      composer,
      status: modal.__diorama.status,
      cancel() {
        cancelAnimationFrame(raf);
        try {
          window.removeEventListener('resize', resize);
        } catch (e) {}
        try {
          if (composer && typeof composer.dispose === 'function') composer.dispose();
        } catch (e) {}
        try {
          renderer.dispose();
        } catch (e) {}
      }
    };

  } catch (err) {
    console.warn('GLB diorama failed, falling back to CSS diorama', err);
    try {
      if (modal.__diorama && modal.__diorama.canvas && modal.__diorama.canvas.remove) modal.__diorama.canvas.remove();
      if (modal.__diorama && modal.__diorama.status && modal.__diorama.status.remove) modal.__diorama.status.remove();
    } catch (e) {}
    const sceneEl = createMediSyncCssDiorama(modal);
    shell.prepend(sceneEl);
    modal.__diorama = { canvas: sceneEl, css: true, cancel: sceneEl.__cleanup };
  }
}

function createMediSyncCssDiorama(modal) {
  const scene = document.createElement("div");
  scene.id = "project-diorama";
  scene.className = "medisync-3d-scene is-photo-real";
  scene.setAttribute("aria-hidden", "true");
  scene.innerHTML = `
    <div class="medisync-photo-atmosphere"></div>
    <div class="medisync-photo-render" role="presentation"></div>
    <div class="medisync-photo-vignette"></div>
  `;
  const target = modal || scene;
  let raf = 0;
  const pointer = { x: 0, y: 0, dirty: false };
  const applyPointer = () => {
    raf = 0;
    if (!pointer.dirty) return;
    pointer.dirty = false;
    scene.style.setProperty("--med-pan-x", `${(pointer.x * 18).toFixed(2)}px`);
    scene.style.setProperty("--med-pan-y", `${(pointer.y * 10).toFixed(2)}px`);
    scene.style.setProperty("--med-scale", `${(1.015 + Math.abs(pointer.x) * 0.006).toFixed(4)}`);
    scene.style.setProperty("--med-light-x", `${Math.round(62 + pointer.x * 8)}%`);
    scene.style.setProperty("--med-light-y", `${Math.round(38 + pointer.y * 8)}%`);
  };
  const move = (event) => {
    const rect = scene.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
    pointer.y = (event.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
    pointer.dirty = true;
    if (!raf) raf = requestAnimationFrame(applyPointer);
  };
  const leave = () => {
    pointer.x = 0;
    pointer.y = 0;
    pointer.dirty = true;
    if (!raf) raf = requestAnimationFrame(applyPointer);
  };
  target.addEventListener("pointermove", move, { passive: true });
  target.addEventListener("pointerleave", leave);
  scene.__cleanup = () => {
    cancelAnimationFrame(raf);
    target.removeEventListener("pointermove", move);
    target.removeEventListener("pointerleave", leave);
  };
  return scene;
}

function createTextPlane(THREE, text, width, height, color, background, font, glowColor) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = font;
  ctx.fillStyle = color;
  if (glowColor) {
    ctx.shadowBlur = 24;
    ctx.shadowColor = glowColor;
  }
  const lines = text.split("\n");
  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, height / 2 + (index - (lines.length - 1) / 2) * 78);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
}

function addAmbulance(THREE, group, x, y, z, redMat, whiteMat) {
  const ambulance = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf7f7f2, roughness: 0.38 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x17324b, roughness: 0.18, metalness: 0.15 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x0b0c0d, roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.38, 0.42), bodyMat);
  body.position.y = 0.26;
  ambulance.add(body);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.32, 0.38), bodyMat);
  cab.position.set(-0.5, 0.24, 0);
  ambulance.add(cab);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.025), redMat);
  stripe.position.set(-0.02, 0.31, 0.225);
  ambulance.add(stripe);
  const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.14, 0.03), glass);
  windowMesh.position.set(-0.5, 0.35, 0.215);
  ambulance.add(windowMesh);
  const crossA = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.026), redMat);
  crossA.position.set(0.2, 0.36, 0.236);
  ambulance.add(crossA);
  const crossB = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.027), redMat);
  crossB.position.set(0.2, 0.36, 0.238);
  ambulance.add(crossB);
  [-0.48, 0.34].forEach((wheelX) => {
    [-0.24, 0.24].forEach((wheelZ) => {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.055, 18), tireMat);
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(wheelX, 0.08, wheelZ);
      ambulance.add(wheel);
    });
  });
  const light = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.045, 0.08), whiteMat);
  light.position.set(-0.08, 0.49, 0);
  ambulance.add(light);
  ambulance.position.set(x, y, z);
  ambulance.rotation.y = -0.16;
  group.add(ambulance);
}

function addSignPost(THREE, group, x, y, z, blueMat, whiteMat) {
  const postMat = new THREE.MeshStandardMaterial({ color: 0x344256, roughness: 0.4, metalness: 0.25 });
  const sign = new THREE.Group();
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.9, 0.08), postMat);
  post.position.y = 0.45;
  sign.add(post);
  const board = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.78, 0.08), blueMat);
  board.position.set(0, 0.94, 0);
  sign.add(board);
  const crossA = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.34, 0.085), whiteMat);
  crossA.position.set(0, 1.09, 0.045);
  sign.add(crossA);
  const crossB = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.07, 0.086), whiteMat);
  crossB.position.set(0, 1.09, 0.047);
  sign.add(crossB);
  sign.position.set(x, y, z);
  sign.rotation.y = -0.36;
  group.add(sign);
}

function addTree(THREE, group, x, y, z) {
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.06, 0.45, 10),
    new THREE.MeshStandardMaterial({ color: 0x5b3a23, roughness: 0.82 })
  );
  trunk.position.set(x, y + 0.25, z);
  group.add(trunk);
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x1d6b3e, roughness: 0.78 });
  for (let i = 0; i < 3; i += 1) {
    const leaves = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25 - i * 0.03), leafMat);
    leaves.position.set(x + (i - 1) * 0.12, y + 0.55 + i * 0.12, z + (i % 2 ? 0.08 : -0.04));
    leaves.castShadow = true;
    group.add(leaves);
  }
}

function addPathLight(THREE, group, x, y, z) {
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x2f3744, roughness: 0.5, metalness: 0.25 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xffe0a3 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.38, 10), poleMat);
  pole.position.set(x, y + 0.18, z);
  group.add(pole);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), glowMat);
  bulb.position.set(x, y + 0.4, z);
  group.add(bulb);
  const light = new THREE.PointLight(0xffd18a, 0.45, 1.4);
  light.position.set(x, y + 0.42, z);
  group.add(light);
}

function createMediSyncCanvasFallback(canvas) {
  const ctx = canvas.getContext("2d");
  let frame = 0;
  let animationFrame = 0;
  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  function draw() {
    const rect = canvas.getBoundingClientRect();
    frame += 1;
    ctx.clearRect(0, 0, rect.width, rect.height);
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#07111f");
    gradient.addColorStop(0.55, "#0d1c2d");
    gradient.addColorStop(1, "#04070d");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
    const cx = rect.width * 0.68;
    const cy = rect.height * 0.58;
    const s = Math.min(rect.width, rect.height) * 0.16;
    ctx.save();
    ctx.translate(cx, cy + Math.sin(frame * 0.02) * 4);
    ctx.fillStyle = "#dfe6ef";
    ctx.fillRect(-s * 2.2, -s * 1.7, s * 4.4, s * 2.4);
    ctx.fillRect(-s * 2.8, -s * 2.25, s * 1.35, s * 2.95);
    ctx.fillRect(s * 1.2, -s * 1.95, s * 1.6, s * 2.65);
    ctx.fillStyle = "#1b78d8";
    ctx.fillRect(-s * 0.7, -s * 1.55, s * 1.05, s * 2.25);
    ctx.fillStyle = "#ffd996";
    for (let row = 0; row < 5; row += 1) {
      for (let col = 0; col < 12; col += 1) {
        if ((row + col + frame) % 3 !== 0) ctx.fillRect(-s * 2.5 + col * s * 0.42, -s * 1.35 + row * s * 0.38, s * 0.18, s * 0.16);
      }
    }
    ctx.fillStyle = "#d91f2d";
    ctx.fillRect(-s * 0.7, s * 0.72, s * 1.48, s * 0.28);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 18px Inter, Arial";
    ctx.fillText("EMERGENCY", -s * 0.58, s * 0.93);
    ctx.strokeStyle = "#66bcff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, -s * 1.95, s * 0.45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    animationFrame = requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", resize);
  draw();
  return {
    resize,
    cancel() {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    }
  };
}

function destroyProjectDiorama(modal) {
  if (!modal || !modal.__diorama) return;
  if (modal.__dioramaFrame) cancelAnimationFrame(modal.__dioramaFrame);
  try { if (modal.__diorama.cancel) modal.__diorama.cancel(); } catch (e) {}
  try { if (modal.__diorama.resize) window.removeEventListener('resize', modal.__diorama.resize); } catch (e) {}
  try { if (modal.__diorama.renderer && typeof modal.__diorama.renderer.dispose === 'function') modal.__diorama.renderer.dispose(); } catch (e) {}
  try { modal.__diorama.canvas.remove(); } catch (e) {}
  delete modal.__diorama; delete modal.__dioramaFrame;
}
