import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOIeO-WZ6tc_IE3gVoZOIlL6jmpned_1M",
  authDomain: "projects-website-f1359.firebaseapp.com",
  projectId: "projects-website-f1359",
  storageBucket: "projects-website-f1359.firebasestorage.app",
  messagingSenderId: "257873715911",
  appId: "1:257873715911:web:1a8794711beceb841054e2",
  measurementId: "G-3695RQQFZ0"
};

const app = initializeApp(firebaseConfig);
try {
  getAnalytics(app);
} catch {
  // ignore analytics failures (e.g., localhost, blocked scripts)
}

const db = getFirestore(app);

const runTypewriter = () => {
  const target = document.getElementById("typed-role");
  if (!target) return;

  const roles = ["Android Developer"].filter(Boolean);
  const respectReducedMotion = false;
  const prefersReducedMotion =
    window.matchMedia && typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  if (!roles.length) {
    target.textContent = "";
    return;
  }

  if (respectReducedMotion && prefersReducedMotion) {
    target.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeDelayMs = 75;
  const deleteDelayMs = 40;
  const startDelayMs = 250;
  const holdAfterTypeMs = 900;
  const holdAfterDeleteMs = 250;

  const getRole = () => roles[roleIndex % roles.length] || "";

  const tick = () => {
    const text = getRole();

    if (!deleting) {
      charIndex += 1;
      target.textContent = text.slice(0, charIndex);

      if (charIndex >= text.length) {
        deleting = true;
        window.setTimeout(tick, holdAfterTypeMs);
        return;
      }

      window.setTimeout(tick, typeDelayMs);
      return;
    }

    charIndex -= 1;
    target.textContent = text.slice(0, Math.max(0, charIndex));

    if (charIndex <= 0) {
      deleting = false;
      roleIndex += 1;
      window.setTimeout(tick, holdAfterDeleteMs);
      return;
    }

    window.setTimeout(tick, deleteDelayMs);
  };

  target.textContent = "";
  window.setTimeout(tick, startDelayMs);
};

const createEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (typeof text === "string") el.textContent = text;
  return el;
};

const renderProjects = (projects) => {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!projects.length) {
    grid.appendChild(createEl("p", "project-text", "Projects coming soon..."));
    return;
  }

  for (const p of projects) {
    const card = createEl("article", "project-card");

    if (p.tags && p.tags.length) {
      const tags = createEl("ul", "project-tags project-tags--overlay");
      for (const t of p.tags) {
        const li = createEl("li", "project-tag", t);
        tags.appendChild(li);
      }
      card.appendChild(tags);
    }

    if (p.githubUrl) {
      const a = document.createElement("a");
      a.className = "project-icon-link";
      a.href = p.githubUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", p.name ? `${p.name} GitHub` : "Project GitHub");
      a.innerHTML =
        '<svg class="project-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path fill="currentColor" d="M12 .5C5.73.5.75 5.77.75 12.29c0 5.2 3.44 9.62 8.21 11.18.6.11.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.67-4.04-1.67-.55-1.42-1.34-1.8-1.34-1.8-1.09-.77.08-.76.08-.76 1.2.09 1.84 1.28 1.84 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.67-.32-5.48-1.38-5.48-6.14 0-1.36.46-2.47 1.22-3.34-.12-.31-.53-1.57.12-3.27 0 0 1.01-.33 3.3 1.28.96-.27 1.98-.4 3-.4 1.02 0 2.05.14 3.01.4 2.28-1.61 3.29-1.28 3.29-1.28.65 1.7.24 2.96.12 3.27.76.87 1.22 1.98 1.22 3.34 0 4.78-2.81 5.82-5.5 6.13.43.38.81 1.13.81 2.28 0 1.65-.02 2.97-.02 3.37 0 .33.22.72.83.6 4.77-1.57 8.2-5.98 8.2-11.18C23.25 5.77 18.27.5 12 .5z"/>' +
        "</svg>";
      card.appendChild(a);
    }

    const thumbnailUrl = p.gifUrl || p.displayImageUrl;
    if (thumbnailUrl) {
      const img = document.createElement("img");
      img.className = "project-image";
      img.alt = p.name ? `${p.name} preview` : "Project preview";
      img.loading = "lazy";
      img.src = thumbnailUrl;
      img.addEventListener(
        "load",
        () => {
          if (img.naturalWidth && img.naturalHeight && img.naturalHeight > img.naturalWidth) {
            img.classList.add("project-image--portrait");
          }
        },
        { once: true }
      );
      card.appendChild(img);
    }

    const body = createEl("div", "project-body");
    body.appendChild(createEl("h3", "project-title", p.name || "Untitled Project"));
    if (p.overview) body.appendChild(createEl("p", "project-text", p.overview));

    card.appendChild(body);
    grid.appendChild(card);
  }
};

const loadProjects = async () => {
  const grid = document.getElementById("projects-grid");
  if (grid) grid.textContent = "Loading projects...";

  const snap = await getDocs(collection(db, "Projects"));
  const projects = snap.docs.map((d) => {
    const data = d.data() || {};
    return {
      name: data["Project Name"],
      overview: data["Project_Overview"],
      displayImageUrl: data["Display Image"],
      gifUrl: data["GIF"],
      githubUrl: data["GitHub"],
      tags: Array.isArray(data["Tags"]) ? data["Tags"] : []
    };
  });

  renderProjects(projects);
};

const initMobileNav = () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  const setExpanded = (expanded) => {
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  };

  const close = () => {
    menu.classList.remove("is-open");
    setExpanded(false);
  };

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    setExpanded(open);
  });

  menu.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t instanceof HTMLElement && t.tagName === "A") close();
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!menu.classList.contains("is-open")) return;
    if (target instanceof Node && (menu.contains(target) || toggle.contains(target))) return;
    close();
  });
};

const initSectionNav = () => {
  const container = document.querySelector(".section-nav");
  if (!container) return;

  const prevBtn = container.querySelector('[data-section-nav="prev"]');
  const nextBtn = container.querySelector('[data-section-nav="next"]');
  if (!(prevBtn instanceof HTMLButtonElement) || !(nextBtn instanceof HTMLButtonElement)) return;

  const getSections = () => Array.from(document.querySelectorAll("main > section[id]"));

  const getActiveIndex = () => {
    const sections = getSections();
    if (!sections.length) return -1;

    const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
    const y = headerHeight + 24;

    let bestIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < sections.length; i += 1) {
      const rect = sections[i].getBoundingClientRect();
      const dist = Math.abs(rect.top - y);
      if (rect.top <= y && dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }

    return bestIndex;
  };

  const scrollToIndex = (idx) => {
    const sections = getSections();
    const target = sections[idx];
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateDisabled = () => {
    const sections = getSections();
    const idx = getActiveIndex();
    const last = Math.max(0, sections.length - 1);

    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= last;
  };

  prevBtn.addEventListener("click", () => {
    const idx = getActiveIndex();
    scrollToIndex(Math.max(0, idx - 1));
  });

  nextBtn.addEventListener("click", () => {
    const sections = getSections();
    const idx = getActiveIndex();
    scrollToIndex(Math.min(sections.length - 1, idx + 1));
  });

  let rafId = 0;
  const onScroll = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(() => {
      rafId = 0;
      updateDisabled();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateDisabled();
};

const initContactForm = () => {
  const form = document.getElementById("contact-form");
  if (!(form instanceof HTMLFormElement)) return;

  const emailTo = "deepakdeodhar01@gmail.com";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const fullSubject = subject || "Portfolio Contact";
    const bodyLines = [
      message,
      "",
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : ""
    ].filter(Boolean);

    const mailto =
      `mailto:${emailTo}?subject=${encodeURIComponent(fullSubject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  });
};

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      initMobileNav();
      initSectionNav();
      initContactForm();
      runTypewriter();
      loadProjects().catch(() => renderProjects([]));
    },
    { once: true }
  );
} else {
  initMobileNav();
  initSectionNav();
  initContactForm();
  runTypewriter();
  loadProjects().catch(() => renderProjects([]));
}
