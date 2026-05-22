const portfolio = {
  name: "Swarnavo Sen",
  heroKicker: "Portfolio 2026",
  role: "CSE student, Python developer, OpenCV learner, and builder of practical healthcare, identity, and sustainability projects.",
  intro:
    "This portfolio now reflects the public projects from my GitHub profile: hospital resource coordination, KYC verification, blockchain-backed APIs, and early-stage sustainability work.",
  email: "swarnavosen10@gmail.com",
  location: "India",
  status: "Currently building MEDISYNC and strengthening Python, DSA, OpenCV, Java, C++, and VHDL.",
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

if (savedTheme === "night") {
  root.dataset.theme = "night";
}

function renderContent() {
  $("[data-name]").textContent = portfolio.name;
  $("[data-hero-kicker]").textContent = portfolio.heroKicker;
  $("[data-role]").textContent = portfolio.role;
  $("[data-intro]").textContent = portfolio.intro;
  $("[data-range-copy]").textContent = portfolio.rangeCopy;
  $("[data-status]").textContent = portfolio.status;
  $("[data-footer-name]").textContent = portfolio.name;
  $("[data-footer-meta]").textContent = portfolio.location;

  const emailLink = $("[data-email-link]");
  emailLink.href = `mailto:${portfolio.email}`;
  emailLink.textContent = portfolio.email;

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

  renderFilters();
  renderProjects("All");
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

    function slugify(text) {
      return String(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    projectGrid.innerHTML = projects
      .map((project) => {
        const imgSrc = `screenshots/${slugify(project.title)}.svg`;
        return `
          <article class="project-card ${project.featured ? "featured" : ""}">
            <div class="project-body">
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
                ${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo</a>` : ""}
              </div>
              <div class="project-outcome">${project.outcome}</div>
            </div>
            <div class="project-art" aria-hidden="true">
              <img src="${imgSrc}" alt="${project.title} screenshot" loading="lazy" onerror="this.style.display='none'" />
            </div>
          </article>
        `;
      })
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
    const THREE = await withTimeout(import("https://unpkg.com/three@0.165.0/build/three.module.js"), 1800);
      // give a slightly longer time for slower networks
      // (we'll retry with a longer timeout path below if needed)
    createThreeStage(THREE, canvas);
  } catch (error) {
    // If Three.js fails to load, show the fallback canvas visual.
    fallback.classList.add("is-active");
    canvas = replaceStageCanvas(canvas);
    setStageStatus({ engine: "canvas-fallback", error: String(error).slice(0, 140) });
    createCanvasFallback(canvas);
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
    modal.querySelector("#project-modal-title").textContent = project.title;
    modal.querySelector(".project-modal-summary").textContent = project.summary;
    modal.querySelector(".project-modal-outcome").textContent = project.outcome || "";
    const media = modal.querySelector(".project-modal-media");
    media.innerHTML = `<img src="screenshots/${project.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.svg" alt="${project.title}" />`;
    const links = modal.querySelector(".project-modal-links");
    links.innerHTML = `${project.repoUrl ? `<a href="${project.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""} ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">Live demo</a>` : ""}`;
    const tags = modal.querySelector(".project-modal-tags");
    tags.innerHTML = project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("");
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
  }

  close.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // attach click handlers to project cards
  document.addEventListener("click", (e) => {
    const card = e.target.closest('.project-card');
    if (!card) return;
    const title = card.querySelector('h3')?.textContent;
    const project = portfolio.projects.find((p) => p.title === title);
    if (project) open(project);
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
