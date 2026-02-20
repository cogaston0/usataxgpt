/* ============================================
   CARLOS OLIVENCIA TAX SERVICES
   template.js — Shared Header & Footer

   HOW TO USE ON ANY NEW PAGE:
   1. Add to <head>:
        <link rel="stylesheet" href="style.css">
   2. Add before </body>:
        <script src="template.js"></script>
   3. Add data-page="pagename" to <body> tag
      to highlight the correct nav link, e.g.:
        <body data-page="services">
   ============================================ */

(function () {

  // ── NAV LINKS ─────────────────────────────
  const navLinks = [
    { label: "Home",     href: "index.html" },
    { label: "Services", href: "services.html" },
    { label: "About",    href: "about.html" },
    { label: "Contact",  href: "contact.html" },
    { label: "Login",    href: "login.html" },
  ];

  // ── HEADER ────────────────────────────────
  const currentPage = document.body.dataset.page || "";

  const navHTML = navLinks.map(link => {
    const isActive = link.label.toLowerCase() === currentPage.toLowerCase();
    return `<a href="${link.href}"${isActive ? ' class="active"' : ''}>${link.label}</a>`;
  }).join("\n      ");

  const headerHTML = `
<header class="site-header">
  <div class="header-container">
    <div class="logo">
      <img src="logo.png" alt="Carlos Olivencia Logo">
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <nav class="main-nav" id="mainNav">
      ${navHTML}
    </nav>
  </div>
</header>`;

  // ── FOOTER ────────────────────────────────
  const year = new Date().getFullYear();
  const footerHTML = `
<footer class="site-footer">
  © ${year} Carlos Olivencia Tax &amp; Financial Services |
  <a href="privacy.html">Privacy Policy</a> |
  <a href="terms.html">Terms of Service</a>
</footer>`;

  // ── INJECT ────────────────────────────────
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // ── HAMBURGER TOGGLE ──────────────────────
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");

  // Any element with class "intake-card" or id "draggableCard" gets hidden
  function setCardVisibility(visible) {
    const card = document.getElementById("draggableCard") ||
                 document.querySelector(".intake-card");
    if (card) {
      card.style.visibility = visible ? "visible" : "hidden";
      card.style.opacity    = visible ? "1" : "0";
    }
  }

  btn.addEventListener("click", function () {
    const isOpening = !btn.classList.contains("open");
    btn.classList.toggle("open");
    nav.classList.toggle("open");
    setCardVisibility(!isOpening); // hide when opening, show when closing
  });

  // Close menu and restore card when a link is tapped
  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function () {
      btn.classList.remove("open");
      nav.classList.remove("open");
      setCardVisibility(true);
    });
  });

})();
