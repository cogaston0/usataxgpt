document.addEventListener("DOMContentLoaded", function () {

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
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    <a href="login.html">Login</a>
                    <a href="register.html">Register</a>
                </nav>
            </div>
        </header>
    `;

    const footer = `
        <footer class="site-footer">
            <p>© 2026 Carlos Olivencia Tax &amp; Financial Services |
            <a href="privacy.html">Privacy Policy</a> |
            <a href="terms.html">Terms of Service</a></p>
        </footer>
    `;

    const headerContainer = document.getElementById("site-header");
    const footerContainer = document.getElementById("site-footer");

    if (headerContainer) headerContainer.innerHTML = header;
    if (footerContainer) footerContainer.innerHTML = footer;

    // ── Highlight active nav link based on current page ──
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a").forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // ── Hamburger menu ──
    const btn = document.getElementById("hamburger");
    const nav = document.getElementById("mainNav");

    if (btn && nav) {
        btn.addEventListener("click", function () {
            btn.classList.toggle("open");
            nav.classList.toggle("open");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                btn.classList.remove("open");
                nav.classList.remove("open");
            });
        });
    }

});
