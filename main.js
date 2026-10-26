/* ==========================================================================
   Heladería Inma — interacciones
   ========================================================================== */

(function () {
  "use strict";

  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const navToggle = document.querySelector(".nav-toggle");
  const notice = document.getElementById("notice");
  const toTop = document.querySelector(".to-top");
  const year = document.getElementById("year");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ */
  /* Cabecera con sombra al hacer scroll                                 */
  /* ------------------------------------------------------------------ */

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (toTop) {
      toTop.classList.toggle("is-visible", window.scrollY > 700);
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ------------------------------------------------------------------ */
  /* Aviso de cierre                                                     */
  /* ------------------------------------------------------------------ */

  if (notice) {
    const close = notice.querySelector(".notice-close");
    close.addEventListener("click", () => {
      notice.style.display = "none";
    });
  }

  /* ------------------------------------------------------------------ */
  /* Menú móvil                                                          */
  /* ------------------------------------------------------------------ */

  function closeNav() {
    nav.classList.remove("is-open");
    nav.style.removeProperty("max-height");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("nav-open");
  }

  function openNav() {
    // El panel se coloca justo debajo de la cabecera, aunque el aviso se cierre.
    const headerBottom = Math.max(0, header.getBoundingClientRect().bottom);
    nav.style.top = headerBottom + "px";
    nav.style.maxHeight = Math.max(180, window.innerHeight - headerBottom) + "px";
    nav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Cerrar menú");
    document.body.classList.add("nav-open");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeNav() : openNav();
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeNav();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 920) {
        closeNav();
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Enlace activo según la sección visible                              */
  /* ------------------------------------------------------------------ */

  const navLinks = Array.from(document.querySelectorAll(".nav a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

  /* ------------------------------------------------------------------ */
  /* Aparición de bloques al hacer scroll                                */
  /* ------------------------------------------------------------------ */

  const revealItems = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    revealItems.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Volver arriba                                                       */
  /* ------------------------------------------------------------------ */

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Año actual en el pie                                                */
  /* ------------------------------------------------------------------ */

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
