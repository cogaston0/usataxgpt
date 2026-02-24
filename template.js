// ── Inject Header + Footer + Hamburger ──
document.addEventListener("DOMContentLoaded", function() {
  var currentPage = document.body.getAttribute("data-page") || "";
  var links = [
    { href: "index.html",    label: "Home",     page: "home"     },
    { href: "services.html", label: "Services", page: "services" },
    { href: "about.html",    label: "About",    page: "about"    },
    { href: "contact.html",  label: "Contact",  page: "contact"  },
    { href: "login.html",    label: "Login",    page: "login"    },
  ];
  var navLinks = links.map(function(l) {
    var active = l.page === currentPage ? ' class="active"' : '';
    return '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
  }).join("\n        ");

  var header = '<header class="site-header"><div class="header-container"><div class="logo"><img src="logo.png" alt="Carlos Olivencia Logo"></div><button class="hamburger" id="hamburger" aria-label="Open menu"><span></span><span></span><span></span></button><nav class="main-nav" id="mainNav">' + navLinks + '</nav></div></header>';

  var footer = '<footer class="site-footer">&copy; 2025 Carlos Olivencia Tax &amp; Financial Services | <a href="privacy.html">Privacy Policy</a> | <a href="terms.html">Terms of Service</a></footer>';

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  // Hamburger toggle
  var btn = document.getElementById("hamburger");
  var nav = document.getElementById("mainNav");

  btn.addEventListener("click", function() {
    var isOpening = !btn.classList.contains("open");
    btn.classList.toggle("open");
    nav.classList.toggle("open");
    var card = document.getElementById("draggableCard");
    if (card) {
      card.style.visibility = isOpening ? "hidden" : "visible";
      card.style.opacity    = isOpening ? "0" : "1";
    }
  });

  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      btn.classList.remove("open");
      nav.classList.remove("open");
      var card = document.getElementById("draggableCard");
      if (card) {
        card.style.visibility = "visible";
        card.style.opacity    = "1";
      }
    });
  });
});
