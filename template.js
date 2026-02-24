document.addEventListener("DOMContentLoaded", function() {

    const header = `
        <header>
            <div class="logo-container">
                <img src="logo.png" alt="Carlos Olivencia Logo" class="logo">
            </div>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="contact.html">Contact</a>
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            </nav>
        </header>
    `;

    const footer = `
        <footer>
            <p>© 2026 Carlos Olivencia Tax Services — All Rights Reserved</p>
        </footer>
    `;

    const headerContainer = document.getElementById("site-header");
    const footerContainer = document.getElementById("site-footer");

    if (headerContainer) {
        headerContainer.innerHTML = header;
    }

    if (footerContainer) {
        footerContainer.innerHTML = footer;
    }

});
