/* ============================================
   CARLOS OLIVENCIA TAX SERVICES
   Shared Stylesheet — All Pages
   ============================================ */

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* BODY */
body {
    font-family: 'Cinzel', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: url('krsna.png') no-repeat center center fixed;
    background-size: cover;
    color: #f3e8c8;
}

/* ===== HEADER ===== */
.site-header {
    background: transparent;
    padding: 25px 35px;
    position: relative;
    z-index: 10;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 105px;
    width: auto;
    display: block;
}

.main-nav a {
    text-decoration: none;
    margin-left: 35px;
    font-size: 16px;
    letter-spacing: 2px;
    color: #f3e8c8;
    transition: 0.3s ease;
}

.main-nav a:hover {
    color: #ffffff;
}

/* Active nav link — add class="active" to the <a> on each page */
.main-nav a.active {
    color: #f2c94c;
    border-bottom: 1px solid #f2c94c;
    padding-bottom: 2px;
}

/* ===== PAGE BODY (wraps unique content) ===== */
.page-body {
    flex: 1;
    position: relative;
}

/* ===== HERO VARIANT (index page) ===== */
.hero {
    flex: 1;
    position: relative;
    min-height: 480px;
    padding: 80px 80px;
}

/* ===== CENTERED VARIANT (login, register, forms) ===== */
.page-body.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}

/* ===== STANDARD CONTENT VARIANT (services, about, etc.) ===== */
.page-body.standard {
    padding: 60px 80px;
}

/* ===== CARD (glass effect — used on intake, login, register) ===== */
.card {
    background: rgba(30, 36, 48, 0.75);
    backdrop-filter: blur(6px);
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
    padding: 35px;
}

/* Narrow card for forms */
.card.narrow {
    width: 380px;
}

/* ===== INTAKE / DRAGGABLE CARD ===== */
.intake-card {
    width: 420px;
    padding: 35px;
    background: rgba(30, 36, 48, 0.75);
    backdrop-filter: blur(6px);
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
    cursor: move;
    position: absolute;
    top: 80px;
    left: 80px;
    z-index: 20;
    user-select: none;
}

.intake-card h2 {
    font-size: 24px;
    margin-bottom: 15px;
}

.secure {
    color: #38d39f;
    font-size: 14px;
    margin-bottom: 20px;
}

.intake-card p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 18px;
}

/* ===== FORM ELEMENTS ===== */
.form-title {
    text-align: center;
    margin-bottom: 25px;
    color: #f2c94c;
    font-size: 22px;
    letter-spacing: 2px;
}

.input-group {
    margin-bottom: 18px;
}

.input-group label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    letter-spacing: 1px;
    color: #f3e8c8;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    border: none;
    font-family: 'Cinzel', serif;
    font-size: 14px;
}

.input-area {
    display: flex;
    margin-top: 15px;
}

.input-area input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 6px 0 0 6px;
    font-family: 'Cinzel', serif;
}

.input-area button {
    padding: 10px 18px;
    border: none;
    background: #294c8e;
    color: white;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
    font-family: 'Cinzel', serif;
    transition: 0.3s ease;
}

.input-area button:hover {
    background: #3a66c1;
}

/* Primary button */
.btn-primary {
    width: 100%;
    padding: 12px;
    background: #294c8e;
    border: none;
    border-radius: 6px;
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.3s ease;
}

.btn-primary:hover {
    background: #3a66c1;
}

/* Form footer link */
.form-link {
    text-align: center;
    margin-top: 18px;
    font-size: 13px;
}

.form-link a {
    color: #f2c94c;
    text-decoration: none;
    letter-spacing: 1px;
}

.form-link a:hover {
    color: #ffffff;
}

/* ===== FOOTER ===== */
.site-footer {
    text-align: center;
    padding: 30px;
    font-size: 13px;
    color: #e6d6a8;
    position: relative;
    z-index: 10;
}

.site-footer a {
    color: #e6d6a8;
    text-decoration: none;
}

.site-footer a:hover {
    color: #ffffff;
}

/* ===== HEADINGS ===== */
h1, h2, h3 {
    font-family: 'Cinzel', serif;
    color: #f2c94c;
}

/* ===== GOLD DIVIDER ===== */
.divider {
    border: none;
    border-top: 1px solid rgba(242, 201, 76, 0.3);
    margin: 30px 0;
}

/* ===== MOBILE NAV ===== */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
    background: none;
    border: none;
    padding: 5px;
    z-index: 100;
}

.hamburger span {
    display: block;
    width: 28px;
    height: 3px;
    background: #f3e8c8;
    border-radius: 3px;
    transition: 0.3s ease;
}

/* Animate to X when open */
.hamburger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

@media (max-width: 768px) {
    .logo img {
        height: 70px;
    }

    .hamburger {
        display: flex;
    }

    .main-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(20, 30, 55, 0.97);
        backdrop-filter: blur(8px);
        padding: 20px 0;
        z-index: 99;
        text-align: center;
    }

    .main-nav.open {
        display: block;
    }

    .main-nav a {
        display: block;
        margin: 0;
        padding: 14px 20px;
        font-size: 15px;
        border-bottom: 1px solid rgba(243, 232, 200, 0.1);
    }

    .main-nav a:last-child {
        border-bottom: none;
    }

    /* Hero on mobile */
    .hero {
        padding: 30px 20px;
        min-height: 500px;
    }

    .intake-card {
        width: calc(100vw - 40px);
        left: 20px !important;
        top: 20px !important;
        padding: 25px;
    }
}
