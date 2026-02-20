// ── Inject Header ──
(function () {
  const currentPage = document.body.getAttribute("data-page") || "";

  const links = [
    { href: "index.html",    label: "Home",     page: "home"     },
    { href: "services.html", label: "Services", page: "services" },
    { href: "about.html",    label: "About",    page: "about"    },
    { href: "contact.html",  label: "Contact",  page: "contact"  },
    { href: "login.html",    label: "Login",    page: "login"    },
  ];

  const navLinks = links.map(function (l) {
    const active = l.page === currentPage ? ' class="active"' : '';
    return '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
  }).join("\n        ");

  const header = `
  <header class="site-header">
    <div class="header-container">
      <div class="logo">
        <img src="logo.png" alt="Carlos Olivencia Logo">
      </div>
      <button class="hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" id="mainNav">
        ${navLinks}
      </nav>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    © 2025 Carlos Olivencia Tax &amp; Financial Services |
    <a href="privacy.html">Privacy Policy</a> |
    <a href="terms.html">Terms of Service</a>
  </footer>`;

  // Insert header at top of body
  document.body.insertAdjacentHTML("afterbegin", header);

  // Insert footer at end of body
  document.body.insertAdjacentHTML("beforeend", footer);

  // ── Hamburger toggle ──
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("mainNav");

  btn.addEventListener("click", function () {
    const isOpening = !btn.classList.contains("open");
    btn.classList.toggle("open");
    nav.classList.toggle("open");

    // Hide intake card if present
    const card = document.getElementById("draggableCard");
    if (card) {
      card.style.visibility = isOpening ? "hidden" : "visible";
      card.style.opacity    = isOpening ? "0"      : "1";
    }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      btn.classList.remove("open");
      nav.classList.remove("open");
      const card = document.getElementById("draggableCard");
      if (card) {
        card.style.visibility = "visible";
        card.style.opacity    = "1";
      }
    });
  });
})();
