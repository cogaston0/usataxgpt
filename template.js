/* ============================================
   CARLOS OLIVENCIA TAX SERVICES
   template.js — Shared Header & Footer
   
   HOW TO USE ON ANY NEW PAGE:
   1. Add this to your <head>:
        <link rel="stylesheet" href="style.css">
   2. Add this anywhere before </body>:
        <script src="template.js"></script>
   3. Add data-page="pagename" to your <body> tag
      to highlight the correct nav link, e.g.:
        <body data-page="services">
   ============================================ */

(function () {

  // ── NAV LINKS ─────────────────────────────
  // To add a new page to the nav, just add it here.
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
  }).join("\n            ");

  const headerHTML = `
<header class="site-header">
  <div class="header-container">
    <div class="logo">
      <img src="logo.png" alt="Carlos Olivencia Logo">
    </div>
    <nav class="main-nav">
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
  // Insert header at the very top of <body>
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  // Insert footer at the very bottom of <body>
  document.body.insertAdjacentHTML("beforeend", footerHTML);

})();
