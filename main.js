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

// Compute base URL for assets (handles GitHub Pages subdirectory correctly)
const getAssetPath = (() => {
  let basePath = '';
  if (typeof window !== 'undefined') {
    const loc = window.location;
    const pathname = loc.pathname;
    // Check if we're on GitHub Pages PORTFOLIO-WEBSITE subdirectory
    if (pathname.includes('/PORTFOLIO-WEBSITE')) {
      // Extract base: /PORTFOLIO-WEBSITE/ or /PORTFOLIO-WEBSITE
      const match = pathname.match(/^\/PORTFOLIO-WEBSITE\/?/);
      basePath = match ? match[0].replace(/\/$/, '') : '';
    }
  }
  return (relativePath) => basePath ? basePath + '/' + relativePath : relativePath;
})();

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
  } catch (e) { }
  try {
    const modal = document.getElementById('project-modal');
    if (modal) {
      const shell = modal.querySelector('.project-modal-shell');
      if (shell && shell.classList.contains('fullscreen')) shell.classList.remove('fullscreen');
    }
  } catch (e) { }
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
                ${project.title === "MediSync Hospital Management"
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

  async function open(project) {
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
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("no-scroll");
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

// Kick off a conservative global prefetch of the user's canonical MediSync GLB so
// the modal can parse the buffer instantly when opened. This mirrors the
// per-modal prefetch but starts earlier on page load to restore the prior
// fast-open behavior for large files.
if (!window.__hospitalGLBPromise) {
  window.__hospitalGLBBuffer = null;
  window.__hospitalGLBPromise = (async () => {
    try {
      const modelPath = getAssetPath('assets/models/hospital (2).glb');
      console.log('[diorama] global prefetch starting', modelPath);
      const r = await fetch(modelPath);
      if (!r.ok) {
        console.warn('[diorama] global prefetch returned', r.status);
        return null;
      }
      const ab = await r.arrayBuffer();
      window.__hospitalGLBBuffer = ab;
      window.__hospitalGLBUrl = modelPath;
      console.log('[diorama] global prefetch complete bytes=', ab.byteLength);
      return ab;
    } catch (e) {
      console.warn('[diorama] global prefetch failed', e);
      return null;
    }
  })();
}

if (!window.__threeModulePromise) {
  window.__threeModulePromise = import('three').then((m) => {
    window.THREE = m;
    return m;
  }).catch((e) => {
    console.warn('[diorama] three preload failed', e);
    return null;
  });
}

if (!window.__gltfLoaderPromise) {
  window.__gltfLoaderPromise = import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js?module').then((m) => m?.GLTFLoader || m?.default || m).catch((e) => {
    console.warn('[diorama] GLTFLoader preload failed', e);
    return null;
  });
}

if (!window.__orbitControlsPromise) {
  window.__orbitControlsPromise = import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js?module').then((m) => m?.OrbitControls || m?.default || m).catch((e) => {
    console.warn('[diorama] OrbitControls preload failed', e);
    return null;
  });
}

if (!window.__dioramaEffectsPromise) {
  window.__dioramaEffectsPromise = Promise.all([
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/EffectComposer.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/RenderPass.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/UnrealBloomPass.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/SSAOPass.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/ShaderPass.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/shaders/FXAAShader.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/postprocessing/BokehPass.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/shaders/ColorCorrectionShader.js?module'),
    import('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/shaders/VignetteShader.js?module')
  ]).then((mods) => {
    const [ec, rp, ub, ssao, sp, fxaa, bokeh, cc, vg] = mods;
    return {
      EffectComposer: ec?.EffectComposer || ec?.default || ec,
      RenderPass: rp?.RenderPass || rp?.default || rp,
      UnrealBloomPass: ub?.UnrealBloomPass || ub?.default || ub,
      SSAOPass: ssao?.SSAOPass || ssao?.default || ssao,
      ShaderPass: sp?.ShaderPass || sp?.default || sp,
      FXAAShader: fxaa?.FXAAShader || fxaa?.default || fxaa,
      BokehPass: bokeh?.BokehPass || bokeh?.default || bokeh,
      ColorCorrectionShader: cc?.ColorCorrectionShader || cc?.default || cc,
      VignetteShader: vg?.VignetteShader || vg?.default || vg
    };
  }).catch((e) => {
    console.warn('[diorama] effects preload failed', e);
    return null;
  });
}

renderContent();
bindInteractions();
startVisualStage();
startPortfolioRoom();
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
      if (entry.isIntersecting || entry.target.classList.contains('marquee-band')) {
        entry.target.classList.add('is-visible');
      }
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
  // use a distinct id for the canvas to avoid colliding with the CSS fallback div (#project-diorama)
  canvas.id = 'project-diorama-canvas';
  canvas.className = 'medisync-3d-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  // start hidden until model is ready
  canvas.style.opacity = '0.3';
  canvas.style.transition = 'opacity 360ms ease';
  canvas.style.filter = 'none';
  canvas.style.background = 'transparent';
  const status = document.createElement('div');
  status.className = 'project-diorama-status';
  status.textContent = '3D: initializing...';
  shell.prepend(canvas);
  shell.prepend(status);
  try {
    shell.style.backgroundImage = 'linear-gradient(180deg, rgba(6, 10, 16, 0.88), rgba(6, 10, 16, 0.74))';
    shell.style.backgroundSize = 'cover';
    shell.style.backgroundPosition = 'center center';
    shell.style.backgroundRepeat = 'no-repeat';
    shell.style.backgroundColor = '#0a1118';
  } catch (e) { }
  modal.__diorama = { canvas, status };

  // Start prefetch on page load (if not already started). This will fetch and cache
  // the hospital GLB so parsing can happen instantly when the modal opens.
  if (!window.__hospitalGLBPromise) {
    window.__hospitalGLBBuffer = null;
    window.__hospitalGLBPromise = (async () => {
      const preloadUrls = [
        getAssetPath('assets/models/hospital (2).glb'),
        getAssetPath('assets/models/hospital-building-v2/hospital-building-v2.glb')
      ];
      for (const url of preloadUrls) {
        try {
          console.log('[diorama] preloading', url);
          const r = await fetch(url);
          if (!r.ok) {
            console.warn('[diorama] preload returned', url, r.status);
            continue;
          }
          const ab = await r.arrayBuffer();
          window.__hospitalGLBBuffer = ab;
          window.__hospitalGLBUrl = url;
          console.log('[diorama] preloaded', url, 'bytes=', ab.byteLength);
          return ab;
        } catch (e) {
          console.warn('[diorama] preload error for', url, e);
        }
      }
      return null;
    })();
  }

  try {
    const THREE = window.THREE || (await window.__threeModulePromise) || (await withTimeout(import('three'), 6000));
    window.THREE = THREE;

    const GLTFLoader = window.__gltfLoaderPromise ? await window.__gltfLoaderPromise : null;
    const OrbitControls = window.__orbitControlsPromise ? await window.__orbitControlsPromise : null;
    if (!GLTFLoader || !OrbitControls) {
      throw new Error('GLTFLoader or OrbitControls failed to preload');
    }

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    // keep the image crisp but avoid the heavy GPU cost of true 4K rendering
    const DPR = Math.min(window.devicePixelRatio || 1, 1.25);
    renderer.setPixelRatio(DPR);
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = false;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.05, 240);
    camera.position.set(0, 1.5, 8);

    // create and add a procedural hospital exterior immediately so the modal shows
    // a hospital-like background instantly while GLBs load in the background.
    let proceduralHospital = null;
    function createProceduralHospital() {
      const proc = new THREE.Group();
      const buildingGeom = new THREE.BoxGeometry(6, 3.2, 2.5);
      const buildingMat = new THREE.MeshStandardMaterial({ color: 0xe9eef2, metalness: 0.05, roughness: 0.7 });
      const building = new THREE.Mesh(buildingGeom, buildingMat);
      building.position.set(0, 1.6, 0);
      proc.add(building);
      // make building smaller and push it back so it reads as a distant background
      proc.scale.set(0.55, 0.55, 0.55);
      proc.position.set(0, 0.6, -4);
      proc.rotation.y = -0.12;
      const windowGeom = new THREE.PlaneGeometry(0.5, 0.5);
      for (let row = 0; row < 3; row++) {
        for (let col = -2; col <= 2; col++) {
          const winMat = new THREE.MeshStandardMaterial({ color: 0x0b2b3a, emissive: 0x0, roughness: 0.3 });
          const win = new THREE.Mesh(windowGeom, winMat);
          win.position.set(col * 1.2, 2.6 - row * 0.9, 1.26);
          proc.add(win);
          if (Math.random() > 0.6) {
            win.material.emissive = new THREE.Color(0xfff6c8);
            win.material.emissiveIntensity = 0.45;
          }
        }
      }
      const doorGeom = new THREE.BoxGeometry(1.2, 1.6, 0.1);
      const doorMat = new THREE.MeshStandardMaterial({ color: 0x1b2b33, metalness: 0.1, roughness: 0.6 });
      const door = new THREE.Mesh(doorGeom, doorMat);
      door.position.set(0, 0.9, 1.26);
      proc.add(door);
      const signGeom = new THREE.PlaneGeometry(0.6, 0.6);
      const signMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff4d4d, emissiveIntensity: 0.9 });
      const sign = new THREE.Mesh(signGeom, signMat);
      sign.position.set(2.6, 2.6, 1.25);
      proc.add(sign);
      const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x030406, roughness: 1 }));
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = 0.01;
      proc.add(ground);
      return proc;
    }
    try {
      proceduralHospital = createProceduralHospital();
      scene.add(proceduralHospital);
    } catch (e) {
      console.warn('[diorama] procedural hospital creation failed', e);
    }

    scene.add(new THREE.HemisphereLight(0xf7fbff, 0xd7e4ef, 1.95));
    const dir = new THREE.DirectionalLight(0xffffff, 2.8);
    dir.position.set(8, 12, 10);
    scene.add(dir);
    scene.add(new THREE.AmbientLight(0xffffff, 1.05));
    const cursorLight = new THREE.PointLight(0xffc39f, 1.2, 42, 2);
    cursorLight.position.set(0, 3.5, 10);
    scene.add(cursorLight);

    const loader = new GLTFLoader();
    let ContactShadows = null;
    let SimplifyModifier = null;
    // Use the user's canonical MediSync model only
    const MODEL_URLS = [
      getAssetPath('assets/models/hospital (2).glb')
    ];
    try {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      renderer.outputEncoding = THREE.sRGBEncoding;
    } catch (e) { }

    let gltf = null;
    let loadedModelKind = null;
    let loadedModelUrl = null;
    let loadedFromPreload = false;

    // If we have a preloaded hospital buffer, try parsing it first to avoid network latency
    if (window.__hospitalGLBBuffer) {
      try {
        console.log('[diorama] parsing preloaded hospital.glb buffer');
        if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = '3D: parsing preloaded hospital.glb';
        gltf = await new Promise((resolve, reject) => {
          loader.parse(window.__hospitalGLBBuffer, '', resolve, reject);
        });
        loadedFromPreload = true;
        loadedModelUrl = window.__hospitalGLBUrl || getAssetPath('assets/models/hospital (2).glb');
        console.log('[diorama] parsed preloaded hospital.glb', gltf);
      } catch (e) {
        console.warn('[diorama] parse of preloaded buffer failed', e);
        gltf = null;
      }
    }

    if (!gltf) {
      for (const url of MODEL_URLS) {
        try {
          console.log('[diorama] attempting to load model:', url);
          if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = `3D: loading model ${url}`;
          gltf = await loader.loadAsync(url);
          loadedModelUrl = url;
          loadedModelKind = 'gltf';
          loadedFromPreload = /hospital\.glb$/i.test(url);
          console.log('[diorama] model loaded:', url, gltf);
          if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = `3D: model loaded (${url})`;
          break;
        } catch (e) {
          console.warn('[diorama] failed to load model', url, e);
          if (modal.__diorama && modal.__diorama.status) modal.__diorama.status.textContent = `3D: failed to load ${url}`;
        }
      }
    }

    let model = null;
    if (gltf) {
      model = gltf.scene || gltf.scenes?.[0];
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
      const lod = new THREE.LOD();
      lod.name = 'hospital-lod';
      lod.addLevel(model, 0);
      try {
        const lowDetail = model.clone(true);
        lowDetail.traverse((n) => {
          if (n.isMesh && n.geometry && SimplifyModifier) {
            try {
              const modifier = new SimplifyModifier();
              const geometry = n.geometry.clone();
              if (!geometry.index) geometry = geometry.toNonIndexed();
              const targetCount = Math.max(48, Math.floor((geometry.attributes.position.count || 0) * 0.35));
              const simplified = modifier.modify(geometry, targetCount);
              if (simplified) n.geometry = simplified;
            } catch (e) {
              // keep the clone if simplification fails
            }
            try {
              if (Array.isArray(n.material) === false && n.material) {
                n.material.roughness = Math.min(0.92, (n.material.roughness ?? 0.6) + 0.12);
                n.material.metalness = Math.min(0.4, (n.material.metalness ?? 0.15) * 0.6);
                n.material.envMapIntensity = Math.min(0.8, (n.material.envMapIntensity ?? 1) * 0.72);
              }
            } catch (e) { }
          }
        });
        lod.addLevel(lowDetail, 52);
      } catch (e) {
        console.warn('[diorama] LOD proxy build failed', e);
      }
      scene.add(lod);
      model = lod;
      scene.background = new THREE.Color(0xd7e6f2);
      scene.fog = new THREE.Fog(0xd7e6f2, 16, 46);

      try {
        if (ContactShadows) {
          const contactShadows = new ContactShadows({
            renderer,
            scene,
            mesh: lod,
            camera,
            opacity: 0.72,
            scale: 12,
            blur: 2.8,
            far: 10
          });
          contactShadows.position.set(0, -1.92, 0);
          contactShadows.rotation.x = -Math.PI / 2;
          contactShadows.visible = true;
          scene.add(contactShadows);
        }
      } catch (e) {
        console.warn('[diorama] contact shadows failed', e);
      }
    }
    try {
      if (proceduralHospital && model && proceduralHospital !== model && gltf) {
        try {
          proceduralHospital.traverse((n) => {
            if (n.isMesh) {
              if (n.geometry) n.geometry.dispose && n.geometry.dispose();
              if (n.material) {
                if (Array.isArray(n.material)) n.material.forEach(m => m.dispose && m.dispose());
                else n.material.dispose && n.material.dispose();
              }
            }
          });
        } catch (e) { }
        try { scene.remove(proceduralHospital); } catch (e) { }
        proceduralHospital = null;
      }
    } catch (e) { }

    if (!model) {
      console.warn('[diorama] no GLB model could be loaded — keeping the subtle procedural fallback');
      model = proceduralHospital;
    }

    // make the canvas visible now that the model is present
    try { canvas.style.opacity = '0.96'; } catch (e) { }
    // remove any CSS diorama elements so the GL canvas is visible
    try {
      const shellEl = shell || modal.querySelector('.project-modal-shell');
      if (shellEl) {
        shellEl.querySelectorAll('.medisync-photo-render, .medisync-3d-scene').forEach((el) => {
          try { el.remove(); } catch (e) { }
        });
      }
    } catch (e) { }
    // hide status after successful add
    if (modal.__diorama && modal.__diorama.status) {
      modal.__diorama.status.textContent = '3D: ready';
      modal.__diorama.status.style.opacity = '0';
      window.setTimeout(() => { try { modal.__diorama.status.remove(); } catch (e) { } }, 900);
    }

    // normalize model scale so large OBJ units don't fling the camera away
    const fitBox = new THREE.Box3().setFromObject(model);
    const fitSize = fitBox.getSize(new THREE.Vector3());
    const fitMax = Math.max(fitSize.x, fitSize.y, fitSize.z);
    if (fitMax > 0) {
      // increase the target so medium-sized assets appear more prominent in the modal
      const targetMax = 8.5;
      const fitScale = targetMax / fitMax;
      // Always normalize model scale so very small or very large assets are framed consistently.
      if (fitScale > 0 && Number.isFinite(fitScale)) {
        model.scale.multiplyScalar(fitScale);
        model.updateMatrixWorld(true);
      }
    }

    // frame model
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera.fov * Math.PI) / 180;
    const camZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 0.66;
    // keep the model smaller in frame so the full building is visible on first load
    camera.position.set(maxDim * 0.01, Math.max(1.3, size.y * 0.42), camZ * 0.36);
    camera.lookAt(0, size.y * 0.16, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;
    controls.enableDamping = true;
    controls.target.set(0, size.y * 0.12, 0);

    const modelRig = new THREE.Group();
    modelRig.add(model);
    scene.add(modelRig);

    const cursor = { x: 0, y: 0, tx: 0, ty: 0 };
    const updateCursor = (event) => {
      try {
        const rect = canvas.getBoundingClientRect();
        // compute normalized coords relative to canvas
        const nx = (event.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
        const ny = (event.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
        cursor.tx = THREE.MathUtils.clamp(nx, -0.6, 0.6);
        cursor.ty = THREE.MathUtils.clamp(ny, -0.6, 0.6);
      } catch (e) { }
      try { controls.autoRotate = false; } catch (e) { }
    };
    const resetCursor = () => {
      cursor.tx = 0;
      cursor.ty = 0;
      try { controls.autoRotate = true; } catch (e) { }
    };
    // pointer handling attached to the diorama canvas for correct local coordinates
    // and to avoid interference from other page-level pointer listeners.
    const pointerTarget = shell || canvas || renderer.domElement;
    try {
      pointerTarget.style.touchAction = pointerTarget.style.touchAction || 'none';
    } catch (e) { }
    pointerTarget.addEventListener('pointermove', updateCursor, { passive: true });
    pointerTarget.addEventListener('pointerleave', resetCursor);
    pointerTarget.addEventListener('pointercancel', resetCursor);

    const label = createTextPlane(
      THREE,
      'MediSync',
      1024,
      320,
      '#f8fbff',
      'rgba(12, 22, 36, 0.72)',
      'bold 112px Arial, sans-serif',
      'rgba(124, 211, 255, 0.95)'
    );
    label.scale.set(Math.max(2.1, size.x * 0.72), Math.max(0.68, size.y * 0.16), 1);
    label.position.set(0, size.y * 0.64, Math.max(0.12, size.z * 0.2));
    label.renderOrder = 20;
    try {
      label.material.transparent = true;
      label.material.depthWrite = false;
      label.material.depthTest = false;
    } catch (e) { }
    try {
      if (scene.environment && label.material && 'envMap' in label.material) {
        label.material.envMap = scene.environment;
        label.material.envMapIntensity = 1.15;
        label.material.metalness = 0.28;
        label.material.roughness = 0.42;
        label.material.needsUpdate = true;
      }
    } catch (e) { }
    model.add(label);

    let composer = null;
    let bloomPass = null;
    let colorPass = null;
    let vignettePass = null;
    let fxaaPass = null;
    window.__dioramaEffectsPromise.then((effects) => {
      if (!effects || !modal.__diorama || modal.__diorama.cancelled) return;
      try {
        const { EffectComposer, RenderPass, UnrealBloomPass, ShaderPass, ColorCorrectionShader, VignetteShader } = effects;
        if (!EffectComposer || !RenderPass || !ShaderPass) return;
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const effectWidth = Math.max(320, Math.floor(window.innerWidth * DPR * 0.55));
        const effectHeight = Math.max(240, Math.floor(window.innerHeight * DPR * 0.55));
        bloomPass = new UnrealBloomPass(new THREE.Vector2(effectWidth, effectHeight), 0.25, 0.12, 0.08);
        bloomPass.threshold = 0.94;
        bloomPass.strength = 0.08;
        bloomPass.radius = 0.08;
        colorPass = new ShaderPass(ColorCorrectionShader);
        colorPass.uniforms.powRGB.value.set(1.0, 1.0, 1.0);
        colorPass.uniforms.mulRGB.value.set(1.02, 1.01, 1.01);
        colorPass.uniforms.addRGB.value.set(0.0, 0.0, 0.0);
        vignettePass = new ShaderPass(VignetteShader);
        vignettePass.uniforms.darkness.value = 1.03;
        vignettePass.uniforms.offset.value = 1.0;
        composer.addPass(bloomPass);
        composer.addPass(colorPass);
        composer.addPass(vignettePass);
        modal.__diorama.composer = composer;
      } catch (e) {
        console.warn('[diorama] effects setup failed', e);
      }
    });

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, true);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (composer && typeof composer.setSize === 'function') composer.setSize(width, height);
    }

    window.addEventListener('resize', resize);
    resize();

    let raf = 0;
    const clock = new THREE.Clock();
    const tick = () => {
      const delta = Math.min(clock.getDelta(), 0.05);
      // tuned damping for a responsive but stable feel
      cursor.x = THREE.MathUtils.damp(cursor.x, cursor.tx, 7.5, delta);
      cursor.y = THREE.MathUtils.damp(cursor.y, cursor.ty, 7.5, delta);

      // slightly stronger motion so cursor interaction is obvious but still stable
      modelRig.rotation.y = cursor.x * 0.42;
      modelRig.rotation.x = -cursor.y * 0.14;
      modelRig.position.x = cursor.x * 0.28;
      modelRig.position.y = cursor.y * 0.18;
      modelRig.position.z = Math.sin(performance.now() * 0.00045) * 0.08;
      if (cursorLight) {
        cursorLight.position.x = cursor.x * 9.5;
        cursorLight.position.y = Math.max(1.9, size.y * 0.45) + cursor.y * 2.6;
        cursorLight.position.z = 10 + cursor.x * 4.5;
      }

      camera.position.x = THREE.MathUtils.damp(camera.position.x, maxDim * 0.01 + cursor.x * 0.16, 6, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, Math.max(1.25, size.y * 0.42) + cursor.y * 0.14, 6, delta);
      camera.lookAt(0, size.y * 0.16, 0);
      controls.update();
      if (composer) {
        if (fxaaPass) fxaaPass.material.uniforms['resolution'].value.set(1 / (window.innerWidth * DPR), 1 / (window.innerHeight * DPR));
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
      // expose pointerTarget so cleanup can remove listeners reliably
      _pointerTarget: pointerTarget,
      cancelled: false,
      cancel() {
        this.cancelled = true;
        cancelAnimationFrame(raf);
        try {
          window.removeEventListener('resize', resize);
        } catch (e) { }
        try {
          if (pointerTarget && pointerTarget.removeEventListener) {
            pointerTarget.removeEventListener('pointermove', updateCursor);
            pointerTarget.removeEventListener('pointerleave', resetCursor);
            pointerTarget.removeEventListener('pointercancel', resetCursor);
          }
        } catch (e) { }
        try {
          if (composer && typeof composer.dispose === 'function') composer.dispose();
        } catch (e) { }
        try {
          renderer.dispose();
        } catch (e) { }
      }
    };

  } catch (err) {
    console.warn('GLB diorama failed, falling back to CSS diorama', err);
    try {
      if (modal.__diorama && modal.__diorama.canvas && modal.__diorama.canvas.remove) modal.__diorama.canvas.remove();
      if (modal.__diorama && modal.__diorama.status && modal.__diorama.status.remove) modal.__diorama.status.remove();
    } catch (e) { }
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
  const pointer = { x: 0, y: 0, tx: 0, ty: 0, dirty: false };
  const applyPointer = () => {
    raf = 0;
    if (!pointer.dirty) return;
    pointer.dirty = false;
    pointer.x += (pointer.tx - pointer.x) * 0.12;
    pointer.y += (pointer.ty - pointer.y) * 0.12;
    scene.style.setProperty("--med-pan-x", `${(pointer.x * 18).toFixed(2)}px`);
    scene.style.setProperty("--med-pan-y", `${(pointer.y * 10).toFixed(2)}px`);
    scene.style.setProperty("--med-scale", `${(1.015 + Math.abs(pointer.x) * 0.006).toFixed(4)}`);
    scene.style.setProperty("--med-light-x", `${Math.round(62 + pointer.x * 8)}%`);
    scene.style.setProperty("--med-light-y", `${Math.round(38 + pointer.y * 8)}%`);
  };
  const move = (event) => {
    const rect = scene.getBoundingClientRect();
    pointer.tx = (event.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
    pointer.ty = (event.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
    pointer.dirty = true;
    if (!raf) raf = requestAnimationFrame(applyPointer);
  };
  const leave = () => {
    pointer.tx = 0;
    pointer.ty = 0;
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
  const mat = new THREE.MeshStandardMaterial({ map: texture, transparent: true, metalness: 0.18, roughness: 0.46 });
  // don't assume env yet - will be set by caller when available
  return new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
}

function startPortfolioRoom() {
  const canvas = document.getElementById("portfolio-room-canvas");
  const stage = canvas ? canvas.closest(".portfolio-room-stage") : null;
  const status = $("[data-portfolio-room-status]");
  const list = $("[data-portfolio-room-list]");
  if (!canvas) return;

  if (list) {
    list.innerHTML = portfolio.projects
      .map((project) => `<span>${project.title.replace(" Hospital Management", "")}</span>`)
      .join("");
  }

  const setStatus = (text, ready = false) => {
    if (!status) return;
    status.textContent = text;
    status.dataset.ready = ready ? "true" : "false";
  };

  (async () => {
    try {
      const THREE = window.THREE || (await window.__threeModulePromise) || (await import("three"));
      const loaderModule = await import("https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/loaders/GLTFLoader.js?module");
      const controlsModule = await import("https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js?module");
      const GLTFLoader = loaderModule.GLTFLoader || loaderModule.default || loaderModule;
      const OrbitControls = controlsModule.OrbitControls || controlsModule.default || controlsModule;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x101820);
      scene.fog = new THREE.Fog(0x101820, 9, 22);
      const roomRig = new THREE.Group();
      scene.add(roomRig);

      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(3.2, 2.35, 4.9);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = false;
      controls.minDistance = 2.2;
      controls.maxDistance = 5.8;
      controls.maxPolarAngle = Math.PI * 0.54;
      controls.target.set(0, 0.95, 0);

      scene.add(new THREE.HemisphereLight(0xd8ecff, 0x24180f, 2.15));
      const keyLight = new THREE.DirectionalLight(0xfff1dc, 3.2);
      keyLight.position.set(-3.5, 5, 4);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      scene.add(keyLight);

      const neonA = new THREE.PointLight(0xff684f, 32, 9);
      neonA.position.set(-2.5, 1.6, 2.4);
      scene.add(neonA);
      const neonB = new THREE.PointLight(0x4f9eff, 30, 8);
      neonB.position.set(2.8, 1.3, -1.2);
      scene.add(neonB);
      const monitorGlow = new THREE.PointLight(0x79e7ff, 24, 6);
      monitorGlow.position.set(0, 1.55, 1.55);
      scene.add(monitorGlow);

      setStatus("Loading gaming room...");
      const gameRoomUrl = getAssetPath("assets/models/gaming_room_1.glb");
      const gltf = await new GLTFLoader().loadAsync(gameRoomUrl);
      const model = gltf.scene || gltf.scenes?.[0];
      model.traverse((node) => {
        if (!node.isMesh) return;
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) {
          node.material.envMapIntensity = 1.25;
          node.material.roughness = Math.max(0.28, node.material.roughness || 0.5);
        }
      });

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const horizontalSize = Math.max(size.x, size.z);
      const scale = 6.7 / horizontalSize;
      model.scale.setScalar(scale);
      model.position.sub(center.multiplyScalar(scale));
      model.position.y += 0.04;
      roomRig.add(model);
      model.updateWorldMatrix(true, true);
      canvas.__threeGroupRef = roomRig;
      canvas.__roomModelRef = model;

      applyPortfolioRoomTextures(THREE, model, roomRig);

      const focusBox = new THREE.Box3().setFromObject(model);
      const focusCenter = focusBox.getCenter(new THREE.Vector3());
      controls.target.copy(focusCenter).add(new THREE.Vector3(0.16, 0.18, -0.08));
      camera.position.copy(focusCenter).add(new THREE.Vector3(2.85, 1.95, 3.35));

      setStatus("Click for full view", true);
      if (stage) {
        stage.classList.add("is-ready");
        stage.addEventListener("click", () => {
          stage.classList.add("is-fullscreen");
          setStatus("Fullscreen portfolio room");
          if (stage.requestFullscreen && document.fullscreenElement !== stage) {
            stage.requestFullscreen().catch(() => { });
          }
        });
        document.addEventListener("fullscreenchange", () => {
          stage.classList.toggle("is-fullscreen", document.fullscreenElement === stage);
          setStatus(document.fullscreenElement === stage ? "Fullscreen portfolio room" : "Click for full view", true);
          resize();
        });
      }

      function resize() {
        const rect = canvas.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }

      const clock = new THREE.Clock();
      const cursor = { x: 0, y: 0, tx: 0, ty: 0 };
      canvas.addEventListener(
        "pointermove",
        (event) => {
          const rect = canvas.getBoundingClientRect();
          cursor.tx = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
          cursor.ty = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
        },
        { passive: true }
      );
      canvas.addEventListener(
        "pointerleave",
        () => {
          cursor.tx = 0;
          cursor.ty = 0;
        },
        { passive: true }
      );
      function animate() {
        const time = clock.getElapsedTime();
        cursor.x += (cursor.tx - cursor.x) * 0.055;
        cursor.y += (cursor.ty - cursor.y) * 0.055;
        roomRig.rotation.y = cursor.x * 0.12;
        roomRig.rotation.x = -cursor.y * 0.035;
        monitorGlow.intensity = 14 + Math.sin(time * 1.7) * 3;
        neonA.intensity = 28 + Math.sin(time * 1.1) * 4;
        neonB.intensity = 26 + Math.cos(time * 1.3) * 4;
        scene.traverse((node) => {
          if (node.userData.floatPhase !== undefined) {
            node.position.y = node.userData.baseY + Math.sin(time * 1.2 + node.userData.floatPhase) * 0.008;
          }
        });
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      resize();
      window.addEventListener("resize", resize);
      animate();
    } catch (error) {
      console.warn("[portfolio-room] failed", error);
      setStatus("Room model could not load. The project list is still available.");
      createPortfolioRoomFallback(canvas);
    }
  })();
}

function addPortfolioRoomOverlays(THREE, scene, model) {
  const mainMonitor = findModelPart(model, ["monitor_7", "monitor.001_14", "monitor.002_22", "layar_laptop_51"]);
  const screen = createPortfolioScreenPlane(THREE);
  placePlaneOnModelPart(THREE, screen, mainMonitor, {
    fallback: { position: [0.26, 1.08, 0.72], rotation: [-0.38, 0.05, 0], scale: [0.86, 0.48, 1] },
    scaleMultiplier: 0.7,
    lift: 0.008,
    forceReadable: true
  });
  screen.userData.portfolioOverlay = true;
  scene.add(screen);

  const projectNames = portfolio.projects.map((project) =>
    project.title
      .replace(" Hospital Management", "")
      .replace(" Blockchain API", "")
      .replace(" README", "")
  );
  const gameParts = ["b1_53", "b2_54", "b3_55", "b4_56", "b5_57", "b6_58", "b7_60", "b1.001_61"]
    .map((name) => findModelPart(model, [name]))
    .filter(Boolean);
  const fallbackPositions = [
    [-0.96, 0.74, 0.82, -0.18],
    [-0.48, 0.77, 0.92, 0.04],
    [0.02, 0.76, 0.88, 0.12],
    [0.54, 0.74, 0.78, 0.2]
  ];

  projectNames.forEach((name, index) => {
    const label = createGameLabelPlane(THREE, name, index);
    const [x, y, z, rotY] = fallbackPositions[index] || [index * 0.32 - 0.5, 0.74, 0.86, 0];
    placePlaneOnModelPart(THREE, label, gameParts[index], {
      fallback: { position: [x, y, z], rotation: [-Math.PI * 0.5, rotY, 0], scale: [0.32, 0.12, 1] },
      scaleMultiplier: 0.58,
      lift: 0.018,
      layFlat: true
    });
    label.userData = { floatPhase: index * 0.9, baseY: label.position.y };
    scene.add(label);
  });
}

function applyPortfolioRoomTextures(THREE, model, roomRig) {
  applyTextureToModelParts(THREE, model, ["Object_34", "Object_35"], createRoomMonitorTexture(THREE), 1.06);
  applyTextureToModelParts(THREE, model, ["Object_13", "Object_14"], createProjectOverviewTexture(THREE, portfolio.projects[0], "#ff684f", 1), 0.86);
  applyTextureToModelParts(THREE, model, ["Object_54", "Object_55"], createProjectOverviewTexture(THREE, portfolio.projects[1], "#4f9eff", 2), 0.86);
  applyTextureToModelParts(THREE, model, ["Object_123", "Object_124"], createProjectOverviewTexture(THREE, portfolio.projects[2], "#62d29e", 3), 0.86);
  addMissingRoomWalls(THREE, model);
  return;

  // Main big monitor — unchanged
  applyTextureToModelParts(THREE, model, ["Object_34"], createRoomMonitorTexture(THREE), 1.08);

  // ── Small project monitors ────────────────────────────────────────────────
  // Strategy: inject a camera-facing overlay plane directly in front of each
  // monitor mesh.  This bypasses GLB UV orientation entirely.
  // The planes are added to roomRig so they rotate with the room on cursor move.
  // animate() calls plane.lookAt(localCam) every frame to keep them facing the camera.

  const screenAssignments = [
    { screen: "Object_13", project: portfolio.projects[1], accent: "#4f9eff" },
    { screen: "Object_54", project: portfolio.projects[2], accent: "#62d29e" },
    { screen: "Object_123", project: portfolio.projects[0], accent: "#ff684f" }
  ];

  // Estimate where the camera will be placed (mirrors startPortfolioRoom logic)
  const modelBox = new THREE.Box3().setFromObject(model);
  const focusCenter = modelBox.getCenter(new THREE.Vector3());
  const initialCamPos = focusCenter.clone().add(new THREE.Vector3(2.85, 1.95, 3.35));

  const overlays = [];

  screenAssignments.forEach((assignment, index) => {
    const part = findModelPart(model, [assignment.screen]);
    if (!part) return;

    part.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(part);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Plane dimensions — scale up well beyond the physical mesh so text is clearly readable.
    // The overlay intentionally covers the screen + part of the bezel; it glows so it reads like
    // a lit monitor screen even at a distance.
    const planeW = Math.max(Math.max(size.x, size.z) * 2.4, 0.38);
    const planeH = Math.max(size.y * 2.4, 0.24);

    const tex = createProjectOverviewTexture(THREE, assignment.project, assignment.accent, index + 1);
    tex.flipY = true;          // standard Three.js PlaneGeometry UVs expect flipY=true
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.anisotropy = 16;
    tex.needsUpdate = true;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(planeW, planeH),
      new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, depthWrite: true })
    );
    plane.name = `monitor_overlay_${assignment.screen}`;

    // Place at monitor world center (= roomRig local space since roomRig starts at origin)
    plane.position.copy(center);
    // Initial orientation: face toward the camera starting position
    plane.lookAt(initialCamPos);
    plane.renderOrder = 10;

    roomRig.add(plane);
    overlays.push(plane);
  });

  // Store on roomRig so animate() can access them without closure capture
  roomRig.__monitorOverlays = overlays;

  ["Object_35"].forEach((name) => {
    const node = findModelPart(model, [name]);
    if (!node || !node.material || Array.isArray(node.material)) return;
    node.material = node.material.clone();
    node.material.map = null;
    node.material.emissiveMap = null;
    node.material.color.set("#121a24");
    node.material.roughness = 0.72;
    node.material.metalness = 0.02;
    node.material.needsUpdate = true;
  });
  addMissingRoomWalls(THREE, model);
}

function addScreenOverlay(THREE, model, partNames, texture, scaleMultiplier) {
  if (!model.parent) return;
  const parts = partNames.map((name) => findModelPart(model, [name])).filter(Boolean);
  if (!parts.length) return;

  const box = new THREE.Box3();
  parts.forEach((part) => {
    part.updateWorldMatrix(true, true);
    box.union(new THREE.Box3().setFromObject(part));
  });
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const anchor = parts[0];
  const anchorPosition = new THREE.Vector3();
  const anchorQuaternion = new THREE.Quaternion();
  anchor.getWorldPosition(anchorPosition);
  anchor.getWorldQuaternion(anchorQuaternion);
  const dimensions = [size.x, size.y, size.z];
  const normalAxis = dimensions.indexOf(Math.min(...dimensions));
  let width = 1;
  let height = 1;
  let liftVector = new THREE.Vector3(0, 0, 1);
  let faceRotation = new THREE.Euler(0, 0, 0);

  if (normalAxis === 0) {
    width = Math.max(size.z, 0.2) * scaleMultiplier;
    height = Math.max(size.y, 0.2) * scaleMultiplier;
    liftVector = new THREE.Vector3(1, 0, 0);
    faceRotation = new THREE.Euler(0, Math.PI / 2, 0);
  } else if (normalAxis === 1) {
    width = Math.max(size.x, 0.2) * scaleMultiplier;
    height = Math.max(size.z, 0.2) * scaleMultiplier;
    liftVector = new THREE.Vector3(0, 1, 0);
    faceRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
  } else {
    width = Math.max(size.x, 0.2) * scaleMultiplier;
    height = Math.max(size.y, 0.2) * scaleMultiplier;
    liftVector = new THREE.Vector3(0, 0, 1);
    faceRotation = new THREE.Euler(0, 0, 0);
  }

  const panel = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false })
  );
  panel.name = "portfolio_readable_screen_overlay";
  panel.position.copy(center).add(liftVector.clone().applyQuaternion(anchorQuaternion).multiplyScalar(0.014));
  panel.quaternion.copy(anchorQuaternion).multiply(new THREE.Quaternion().setFromEuler(faceRotation));
  panel.scale.setScalar(0.98);
  panel.renderOrder = 20;
  model.parent.add(panel);
}

function applyTextureToModelParts(THREE, model, partNames, texture, intensity) {
  partNames.forEach((name) => {
    const part = findModelPart(model, [name]);
    if (!part) return;
    part.traverse((node) => {
      if (!node.isMesh) return;
      node.material = new THREE.MeshStandardMaterial({
        map: texture,
        emissive: 0xffffff,
        emissiveMap: texture,
        emissiveIntensity: intensity,
        roughness: 0.22,
        metalness: 0.04,
        side: THREE.DoubleSide
      });
      node.material.needsUpdate = true;
    });
  });
}

function createPortfolioScreenTexture(THREE, rotate180 = false) {
  const mesh = createPortfolioScreenPlane(THREE);
  const texture = mesh.material.map;
  applyReadableUvFix(THREE, texture);
  if (rotate180) texture.rotation = Math.PI;
  texture.flipY = false;
  return texture;
}

function createRoomMonitorTexture(THREE) {
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 900;
  const ctx = canvas.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, 1600, 900);
  bg.addColorStop(0, "#06101f");
  bg.addColorStop(0.55, "#101d30");
  bg.addColorStop(1, "#05070b");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1600, 900);

  ctx.fillStyle = "rgba(255,255,255,0.05)";
  for (let x = 120; x < 1520; x += 150) ctx.fillRect(x, 0, 2, 900);
  for (let y = 110; y < 850; y += 130) ctx.fillRect(0, y, 1600, 2);

  ctx.strokeStyle = "rgba(121,231,255,0.45)";
  ctx.lineWidth = 16;
  ctx.strokeRect(32, 32, 1536, 836);

  ctx.fillStyle = "#ff684f";
  ctx.font = "900 34px Inter, Arial, sans-serif";
  ctx.fillText("SWARNAVO SEN / PORTFOLIO", 92, 98);

  ctx.fillStyle = "#fff8ea";
  ctx.font = "900 114px Inter, Arial, sans-serif";
  ctx.fillText("PROJECT ROOM", 92, 214);

  ctx.fillStyle = "rgba(255,248,234,0.78)";
  ctx.font = "700 40px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, "The main monitor is reserved for the room overview, with the showcase projects listed below in the same display.", 96, 286, 1400, 54);

  const rows = [
    ["MediSync Hospital Management", "TypeScript / React / FastAPI", "#ff684f"],
    ["KYC Blockchain API", "Python / FastAPI / MongoDB", "#4f9eff"],
    ["Eco Connect", "Jupyter Notebook / Sustainability", "#62d29e"],
    ["GitHub Profile README", "Markdown / GitHub / Developer Profile", "#f0c15c"]
  ];

  rows.forEach((row, index) => {
    const y = 392 + index * 110;
    ctx.fillStyle = "rgba(255,248,234,0.06)";
    ctx.fillRect(86, y - 56, 1428, 84);
    ctx.fillStyle = row[2];
    ctx.fillRect(100, y - 38, 18, 48);
    ctx.fillStyle = "#fff8ea";
    ctx.font = "800 54px Inter, Arial, sans-serif";
    ctx.fillText(row[0], 140, y);
    ctx.fillStyle = "rgba(255,248,234,0.72)";
    ctx.font = "700 28px Inter, Arial, sans-serif";
    ctx.fillText(row[1], 140, y + 38);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.center.set(0.5, 0.5);
  texture.rotation = 0;
  texture.flipY = true;
  return texture;
}

function createGameLabelTexture(THREE, name, index) {
  const mesh = createGameLabelPlane(THREE, name, index);
  const texture = mesh.material.map;
  texture.flipY = false;
  return texture;
}

function createProjectOverviewTexture(THREE, project, accent, index) {
  // Fixed 1600×900 canvas — the overlay plane is sized to the monitor,
  // so this resolution always fills the physical screen regardless of monitor size.
  const W = 1600, H = 900;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const title = project.title
    .replace(" Hospital Management", "")
    .replace(" Blockchain API", "");

  const subtitleMap = {
    "MediSync Hospital Management": "Beds · Doctors · Ambulance · Emergency",
    "KYC Blockchain API": "OCR · Face match · Blockchain hash",
    "Eco Connect": "Sustainability · Jupyter · Prototype",
    "GitHub Profile README": "Profile · Stack · Developer identity"
  };
  const subtitle = subtitleMap[project.title] || project.tags.slice(0, 3).join(" · ");
  const tags = project.tags.slice(0, 3).join("  /  ");

  if (project.title === "KYC Blockchain API") {
    ctx.fillStyle = "#04101e";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = accent;
    ctx.lineWidth = 24;
    ctx.strokeRect(28, 28, W - 56, H - 56);
    ctx.fillStyle = accent;
    ctx.font = "900 44px Inter, Arial, sans-serif";
    ctx.fillText("PROJECT 02", 70, 108);
    ctx.fillStyle = "#ffffff";
    ctx.font = "900 170px Inter, Arial, sans-serif";
    ctx.shadowColor = accent;
    ctx.shadowBlur = 32;
    ctx.fillText("KYC", 70, 300);
    ctx.font = "900 120px Inter, Arial, sans-serif";
    ctx.fillText("BLOCKCHAIN", 70, 430);
    ctx.shadowBlur = 0;
    const points = ["OCR documents", "Face match checks", "Blockchain hash verify"];
    ctx.font = "800 58px Inter, Arial, sans-serif";
    points.forEach((point, pointIndex) => {
      const y = 575 + pointIndex * 82;
      ctx.fillStyle = accent;
      ctx.fillRect(78, y - 40, 24, 24);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillText(point, 128, y - 18);
    });
    ctx.fillStyle = "rgba(255,255,255,0.74)";
    ctx.font = "800 42px Inter, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Python / FastAPI / MongoDB", W / 2, H - 58);
    ctx.textAlign = "left";
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = true;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    texture.anisotropy = 16;
    texture.needsUpdate = true;
    return texture;
  }

  // Background
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#04101e");
  bg.addColorStop(0.6, "#081728");
  bg.addColorStop(1, "#020810");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Subtle dot-grid
  ctx.fillStyle = "rgba(255,255,255,0.045)";
  for (let x = 100; x < W; x += 100) for (let y = 80; y < H; y += 80) ctx.fillRect(x - 1, y - 1, 2, 2);

  // Thick accent border
  ctx.strokeStyle = accent;
  ctx.lineWidth = 18;
  ctx.strokeRect(18, 18, W - 36, H - 36);

  // Accent top bar glow
  const topGlow = ctx.createLinearGradient(0, 18, 0, 56);
  topGlow.addColorStop(0, accent);
  topGlow.addColorStop(1, "transparent");
  ctx.fillStyle = topGlow;
  ctx.fillRect(18, 18, W - 36, 38);

  // Index badge
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.roundRect(52, 70, 160, 64, 10);
  ctx.fill();
  ctx.fillStyle = "#000";
  ctx.font = "900 44px Inter, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`0${index}`, 132, 118);

  // Compact project title so it stays readable on the small in-room screens.
  ctx.textAlign = "left";
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 132px Inter, Arial, sans-serif";
  ctx.shadowColor = accent;
  ctx.shadowBlur = 28;
  wrapCanvasText(ctx, title.toUpperCase(), 52, 270, W - 104, 142);
  ctx.shadowBlur = 0;

  // Subtitle
  ctx.fillStyle = "rgba(255,255,255,0.86)";
  ctx.font = "700 54px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, subtitle, 56, 545, W - 112, 66);

  // Bottom tag bar
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.fillRect(18, H - 108, W - 36, 90);
  ctx.fillStyle = accent;
  ctx.fillRect(18, H - 112, W - 36, 8);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "700 42px Inter, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(tags, W / 2, H - 48);
  ctx.textAlign = "left";

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = true;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

function applyReadableUvFix(THREE, texture) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;
}

function addMissingRoomWalls(THREE, model) {
  if (!model.parent) return;
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const floorY = box.min.y + 0.02;
  const wallHeight = size.y * 0.74;
  const wallY = floorY + wallHeight * 0.5;
  const depth = size.z * 0.98;
  const width = size.x * 0.98;
  const roomMat = findRoomWallMaterial(THREE, model);

  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(depth, wallHeight), roomMat.clone());
  rightWall.name = "portfolio_matching_right_wall";
  rightWall.position.set(box.max.x - 0.02, wallY, center.z);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.receiveShadow = true;
  model.parent.add(rightWall);

  const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(width, wallHeight), roomMat.clone());
  frontWall.name = "portfolio_matching_front_wall";
  frontWall.position.set(center.x, wallY, box.max.z - 0.02);
  frontWall.rotation.y = Math.PI;
  frontWall.receiveShadow = true;
  model.parent.add(frontWall);
}

function findRoomWallMaterial(THREE, model) {
  let material = null;
  const wall = findModelPart(model, ["Object_5", "tembok", "ruangan_1"]);
  if (wall) {
    wall.traverse((node) => {
      if (!material && node.isMesh && node.material && node.name !== "Object_4") {
        material = Array.isArray(node.material) ? node.material[0] : node.material;
      }
    });
  }
  if (material) {
    const clone = material.clone();
    clone.side = THREE.DoubleSide;
    clone.color.set("#07156b");
    clone.roughness = Math.max(clone.roughness || 0.5, 0.7);
    return clone;
  }
  return new THREE.MeshStandardMaterial({ color: 0x07156b, roughness: 0.72, metalness: 0.03, side: THREE.DoubleSide });
}

function createRoomWallTexture(THREE, base, panel, withLine) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, panel);
  gradient.addColorStop(0.45, base);
  gradient.addColorStop(1, "#090d24");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.06)";
  for (let i = 0; i < 9; i += 1) {
    const x = 90 + i * 98;
    ctx.fillRect(x, 0, 2, canvas.height);
  }

  if (withLine) {
    ctx.strokeStyle = "rgba(221, 244, 229, 0.9)";
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.moveTo(150, 760);
    ctx.lineTo(365, 540);
    ctx.lineTo(520, 650);
    ctx.lineTo(790, 360);
    ctx.lineTo(940, 460);
    ctx.stroke();
    ctx.strokeStyle = "rgba(120, 194, 219, 0.9)";
    ctx.lineWidth = 12;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
}

function addDeskGameCases(THREE, model, projectNames) {
  const desk = findModelPart(model, ["meja_6", "Object_11"]);
  if (!desk) return;
  const deskBox = new THREE.Box3().setFromObject(desk);
  const y = deskBox.max.y + 0.012;
  const z = deskBox.max.z - 0.22;
  const startX = deskBox.min.x + 0.52;

  projectNames.slice(0, 4).forEach((name, index) => {
    const gameCase = new THREE.Group();
    const texture = createGameLabelTexture(THREE, name, index);
    const accent = [0xff684f, 0x4f9eff, 0x62d29e, 0xf0c15c][index % 4];
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.018, 0.32),
      new THREE.MeshStandardMaterial({ color: 0x11151e, roughness: 0.42, metalness: 0.05 })
    );
    body.castShadow = true;
    body.receiveShadow = true;
    gameCase.add(body);

    const cover = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.3),
      new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide })
    );
    cover.rotation.x = -Math.PI / 2;
    cover.position.y = 0.012;
    gameCase.add(cover);

    const spine = new THREE.Mesh(
      new THREE.BoxGeometry(0.018, 0.02, 0.32),
      new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.12, roughness: 0.35 })
    );
    spine.position.x = -0.11;
    gameCase.add(spine);

    gameCase.position.set(startX + index * 0.26, y, z - (index % 2) * 0.05);
    gameCase.rotation.y = -0.12 + index * 0.08;
    model.parent.add(gameCase);
  });
}

function addPortfolioUpgradeKit(THREE, scene) {
  const kit = new THREE.Group();
  kit.name = "portfolio_upgrade_kit";
  kit.position.set(0.72, -0.78, 0.96);
  kit.rotation.y = -0.08;
  scene.add(kit);

  const wood = new THREE.MeshStandardMaterial({ color: 0x3b251a, roughness: 0.58, metalness: 0.08 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x10151d, roughness: 0.36, metalness: 0.48 });
  const cyan = new THREE.MeshStandardMaterial({
    color: 0x74e8ff,
    emissive: 0x2bc9ff,
    emissiveIntensity: 0.65,
    roughness: 0.24,
    metalness: 0.16
  });

  const table = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.08, 0.72), wood);
  table.position.set(0, 0, 0);
  table.castShadow = true;
  table.receiveShadow = true;
  kit.add(table);

  [-0.74, 0.74].forEach((x) => {
    [-0.25, 0.25].forEach((z) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.58, 0.06), metal);
      leg.position.set(x, -0.31, z);
      leg.castShadow = true;
      kit.add(leg);
    });
  });

  const monitorFrame = new THREE.Mesh(new THREE.BoxGeometry(1.28, 0.72, 0.045), metal);
  monitorFrame.position.set(0.08, 0.62, -0.28);
  monitorFrame.rotation.x = -0.04;
  monitorFrame.castShadow = true;
  kit.add(monitorFrame);

  const screen = createPortfolioScreenPlane(THREE);
  screen.position.set(0.08, 0.62, -0.252);
  screen.rotation.x = -0.04;
  screen.scale.set(1.16, 0.62, 1);
  kit.add(screen);

  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.42, 0.06), metal);
  stand.position.set(0.08, 0.28, -0.3);
  kit.add(stand);
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.04, 0.24), metal);
  base.position.set(0.08, 0.08, -0.16);
  kit.add(base);

  const glowBar = new THREE.Mesh(new THREE.BoxGeometry(1.74, 0.025, 0.035), cyan);
  glowBar.position.set(0, 0.07, 0.38);
  kit.add(glowBar);

  const projectNames = portfolio.projects.map((project) =>
    project.title
      .replace(" Hospital Management", "")
      .replace(" Blockchain API", "")
      .replace(" README", "")
  );
  const gamePositions = [
    [-0.62, 0.095, 0.18, -0.2],
    [-0.2, 0.105, 0.22, 0.08],
    [0.24, 0.095, 0.18, 0.2],
    [0.62, 0.105, 0.2, 0.34]
  ];
  projectNames.forEach((name, index) => {
    const box = new THREE.Group();
    const color = [0xff684f, 0x4f9eff, 0x62d29e, 0xf0c15c][index % 4];
    const shell = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.075, 0.24),
      new THREE.MeshStandardMaterial({ color, roughness: 0.42, metalness: 0.08, emissive: color, emissiveIntensity: 0.08 })
    );
    shell.castShadow = true;
    shell.receiveShadow = true;
    box.add(shell);

    const label = createGameLabelPlane(THREE, name, index);
    label.position.set(0, 0.041, 0);
    label.rotation.x = -Math.PI / 2;
    label.scale.set(0.31, 0.105, 1);
    box.add(label);

    const [x, y, z, rotY] = gamePositions[index];
    box.position.set(x, y, z);
    box.rotation.y = rotY;
    kit.add(box);
  });

  const fill = new THREE.PointLight(0x74e8ff, 9, 2.5);
  fill.position.set(0.08, 0.6, 0.05);
  kit.add(fill);
}

function addMainDeskPortfolioDetails(THREE, scene) {
  const screen = createPortfolioScreenPlane(THREE);
  screen.name = "main_monitor_portfolio_screen";
  screen.position.set(1.15, 0.18, -1.04);
  screen.rotation.set(-0.03, -0.08, 0);
  screen.scale.set(0.86, 0.48, 1);
  scene.add(screen);

  const glow = new THREE.PointLight(0x74e8ff, 10, 2.8);
  glow.position.set(1.15, 0.18, -0.72);
  scene.add(glow);

  const projectNames = portfolio.projects.map((project) =>
    project.title
      .replace(" Hospital Management", "")
      .replace(" Blockchain API", "")
      .replace(" README", "")
  );
  const casePositions = [
    [0.46, -0.42, -0.56, -0.16],
    [0.76, -0.415, -0.52, 0.04],
    [1.06, -0.42, -0.55, 0.18],
    [1.35, -0.415, -0.5, 0.3]
  ];

  projectNames.forEach((name, index) => {
    const gameCase = new THREE.Group();
    gameCase.name = `project_game_${index + 1}`;
    const accent = [0xff684f, 0x4f9eff, 0x62d29e, 0xf0c15c][index % 4];
    const caseBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.018, 0.34),
      new THREE.MeshStandardMaterial({
        color: 0x151922,
        roughness: 0.38,
        metalness: 0.04,
        emissive: accent,
        emissiveIntensity: 0.06
      })
    );
    caseBody.castShadow = true;
    caseBody.receiveShadow = true;
    gameCase.add(caseBody);

    const cover = createGameLabelPlane(THREE, name, index);
    cover.position.set(0, 0.012, 0);
    cover.rotation.x = -Math.PI / 2;
    cover.scale.set(0.22, 0.32, 1);
    gameCase.add(cover);

    const spine = new THREE.Mesh(
      new THREE.BoxGeometry(0.025, 0.022, 0.34),
      new THREE.MeshStandardMaterial({ color: accent, roughness: 0.3, metalness: 0.12, emissive: accent, emissiveIntensity: 0.16 })
    );
    spine.position.x = -0.125;
    gameCase.add(spine);

    const [x, y, z, rotY] = casePositions[index];
    gameCase.position.set(x, y, z);
    gameCase.rotation.y = rotY;
    scene.add(gameCase);
  });
}

function completePortfolioRoom(THREE, group, focusBox) {
  const size = focusBox.getSize(new THREE.Vector3());
  const center = focusBox.getCenter(new THREE.Vector3());
  const floorY = focusBox.min.y - 0.025;
  const width = Math.max(size.x + 3.2, 7.2);
  const depth = Math.max(size.z + 3.2, 7.4);
  const height = Math.max(size.y + 1.8, 4.5);
  const backZ = center.z - depth * 0.5;
  const frontZ = center.z + depth * 0.5;
  const leftX = center.x - width * 0.5;
  const rightX = center.x + width * 0.5;
  const topY = floorY + height;

  const floorMat = new THREE.MeshStandardMaterial({ color: 0x15191f, roughness: 0.74, metalness: 0.06 });
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x172233, roughness: 0.66, metalness: 0.04 });
  const sideWallMat = new THREE.MeshStandardMaterial({ color: 0x121b2a, roughness: 0.7, metalness: 0.04 });
  const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x1b222b, roughness: 0.82, metalness: 0.02 });

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(center.x, floorY, center.z);
  floor.receiveShadow = true;
  group.add(floor);

  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(width, height), wallMat);
  backWall.position.set(center.x, floorY + height * 0.5, backZ);
  backWall.receiveShadow = true;
  group.add(backWall);

  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(depth, height), sideWallMat);
  leftWall.position.set(leftX, floorY + height * 0.5, center.z);
  leftWall.rotation.y = Math.PI / 2;
  leftWall.receiveShadow = true;
  group.add(leftWall);

  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(depth, height), sideWallMat);
  rightWall.position.set(rightX, floorY + height * 0.5, center.z);
  rightWall.rotation.y = -Math.PI / 2;
  rightWall.receiveShadow = true;
  group.add(rightWall);

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(center.x, topY, center.z);
  group.add(ceiling);

  const trimMat = new THREE.MeshStandardMaterial({ color: 0x2b3d58, roughness: 0.48, metalness: 0.18 });
  const trimPieces = [
    [width, 0.04, 0.045, center.x, floorY + 0.08, backZ + 0.02],
    [width, 0.045, 0.045, center.x, topY - 0.08, backZ + 0.02],
    [0.045, 0.04, depth, leftX + 0.02, floorY + 0.08, center.z],
    [0.045, 0.04, depth, rightX - 0.02, floorY + 0.08, center.z]
  ];
  trimPieces.forEach(([w, h, d, x, y, z]) => {
    const trim = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), trimMat);
    trim.position.set(x, y, z);
    trim.castShadow = true;
    group.add(trim);
  });

  const glowTexture = createSoftWallGlowTexture(THREE);
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(width * 0.82, height * 0.52),
    new THREE.MeshBasicMaterial({ map: glowTexture, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  glow.position.set(center.x + width * 0.04, floorY + height * 0.62, backZ + 0.035);
  group.add(glow);

  const rug = new THREE.Mesh(
    new THREE.PlaneGeometry(width * 0.46, depth * 0.32),
    new THREE.MeshStandardMaterial({ color: 0x283247, roughness: 0.88, metalness: 0.02 })
  );
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(center.x + 0.65, floorY + 0.006, center.z + depth * 0.18);
  rug.receiveShadow = true;
  group.add(rug);
}

function createSoftWallGlowTexture(THREE) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(256, 160, 16, 256, 160, 260);
  gradient.addColorStop(0, "rgba(116, 232, 255, 0.32)");
  gradient.addColorStop(0.45, "rgba(79, 158, 255, 0.16)");
  gradient.addColorStop(1, "rgba(79, 158, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function findModelPart(model, names) {
  for (const name of names) {
    const exact = model.getObjectByName(name);
    if (exact) return exact;
  }
  const lowered = names.map((name) => name.toLowerCase());
  let found = null;
  model.traverse((node) => {
    if (found || !node.name) return;
    const nodeName = node.name.toLowerCase();
    if (lowered.some((name) => nodeName.includes(name.replace(/_\d+$/, "")))) {
      found = node;
    }
  });
  return found;
}

function placePlaneOnModelPart(THREE, plane, part, options) {
  const fallback = options.fallback;
  if (!part) {
    plane.position.set(...fallback.position);
    plane.rotation.set(...fallback.rotation);
    plane.scale.set(...fallback.scale);
    return;
  }

  part.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(part);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const width = Math.max(size.x, size.z, 0.12) * (options.scaleMultiplier || 0.7);
  const height = Math.max(Math.min(size.y || size.z, width * 0.56), width * 0.32);
  const anchorPosition = new THREE.Vector3();
  const anchorQuaternion = new THREE.Quaternion();
  part.getWorldPosition(anchorPosition);
  part.getWorldQuaternion(anchorQuaternion);

  plane.position.copy(center);
  if (options.layFlat) {
    plane.position.y = box.max.y + (options.lift || 0.015);
    plane.quaternion.copy(anchorQuaternion);
    plane.rotateX(-Math.PI * 0.5);
    plane.scale.set(width, Math.max(width * 0.34, 0.11), 1);
  } else {
    plane.position.copy(anchorPosition).add(new THREE.Vector3(0, 0, options.lift || 0.012).applyQuaternion(anchorQuaternion));
    plane.quaternion.copy(anchorQuaternion);
    plane.scale.set(width * (options.forceReadable ? 0.86 : 1), height * (options.forceReadable ? 0.82 : 1), 1);
  }
}

function createPortfolioScreenPlane(THREE) {
  const canvas = document.createElement("canvas");
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#07111f");
  gradient.addColorStop(0.58, "#14202d");
  gradient.addColorStop(1, "#0a0d13");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#79e7ff";
  ctx.lineWidth = 10;
  ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);
  ctx.fillStyle = "#ff684f";
  ctx.font = "800 34px Inter, Arial, sans-serif";
  ctx.fillText("SWARNAVO SEN / PORTFOLIO", 70, 95);
  ctx.fillStyle = "#fff8ea";
  ctx.font = "900 82px Inter, Arial, sans-serif";
  ctx.fillText("PROJECT ROOM", 70, 205);
  ctx.font = "700 34px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, "MediSync, KYC Blockchain, Eco Connect, and GitHub Profile are staged as playable table projects.", 74, 290, 900, 48);
  portfolio.projects.forEach((project, index) => {
    const y = 440 + index * 52;
    ctx.fillStyle = index % 2 ? "#79e7ff" : "#ff684f";
    ctx.fillRect(76, y - 24, 18, 18);
    ctx.fillStyle = "rgba(255,248,234,0.86)";
    ctx.font = "700 30px Inter, Arial, sans-serif";
    ctx.fillText(project.title, 112, y - 7);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshStandardMaterial({
      map: texture,
      emissive: 0xffffff,
      emissiveMap: texture,
      emissiveIntensity: 0.95,
      roughness: 0.18,
      metalness: 0.04,
      side: THREE.DoubleSide
    })
  );
}

function createGameLabelPlane(THREE, name, index) {
  const canvas = document.createElement("canvas");
  canvas.width = 720;
  canvas.height = 240;
  const ctx = canvas.getContext("2d");
  const colors = ["#ff684f", "#4f9eff", "#62d29e", "#f0c15c"];
  ctx.fillStyle = "#11141a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = colors[index % colors.length];
  ctx.fillRect(0, 0, canvas.width, 24);
  ctx.fillRect(0, canvas.height - 24, canvas.width, 24);
  ctx.strokeStyle = "rgba(255,248,234,0.36)";
  ctx.lineWidth = 8;
  ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);
  ctx.fillStyle = "#fff8ea";
  ctx.font = "900 58px Inter, Arial, sans-serif";
  wrapCanvasText(ctx, name.toUpperCase(), 46, 104, 620, 64);
  ctx.fillStyle = "rgba(255,248,234,0.68)";
  ctx.font = "700 24px Inter, Arial, sans-serif";
  ctx.fillText("PROJECT GAME CARD", 48, 204);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide })
  );
}

function createPortfolioRoomFallback(canvas) {
  const ctx = canvas.getContext("2d");
  let frame = 0;
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
    ctx.fillStyle = "#080b12";
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "#151b24";
    ctx.fillRect(rect.width * 0.18, rect.height * 0.58, rect.width * 0.64, rect.height * 0.1);
    ctx.fillStyle = "#79e7ff";
    ctx.fillRect(rect.width * 0.32, rect.height * 0.22 + Math.sin(frame * 0.03) * 3, rect.width * 0.36, rect.height * 0.24);
    ctx.fillStyle = "#fff8ea";
    ctx.font = "800 22px Inter, Arial";
    ctx.fillText("PROJECT ROOM", rect.width * 0.36, rect.height * 0.35);
    portfolio.projects.forEach((project, index) => {
      ctx.fillStyle = index % 2 ? "#4f9eff" : "#ff684f";
      ctx.fillRect(rect.width * (0.26 + index * 0.12), rect.height * 0.53, rect.width * 0.1, rect.height * 0.05);
    });
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", resize);
  draw();
}

function addAmbulance(THREE, group, x, y, z, redMat, whiteMat) {
  const ambulance = new THREE.Group();
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
  try { if (modal.__diorama.cancel) modal.__diorama.cancel(); } catch (e) { }
  try { if (modal.__diorama.resize) window.removeEventListener('resize', modal.__diorama.resize); } catch (e) { }
  try { if (modal.__diorama.renderer && typeof modal.__diorama.renderer.dispose === 'function') modal.__diorama.renderer.dispose(); } catch (e) { }
  try { modal.__diorama.canvas.remove(); } catch (e) { }
  delete modal.__diorama; delete modal.__dioramaFrame;
}
