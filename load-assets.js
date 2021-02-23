class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar" role="navigation">
            <div id="home-btn">
                <a href="/">SABRINA HYUNMI KO</a>
            </div>
            <div id="menu">
                <a href="/#about">About</a>
                <a href="/#projects">Projects</a>
                <a href="/#contact">Contact</a>
            </div>
        </nav>
        `;
      }
}

class Head extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/png" href="src/favicon.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;700&family=Fraunces:ital,wght@0,500;0,700;1,700&display=swap" rel="stylesheet">
        <script src="navbar.js"></script>
        `;
    }
}

window.customElements.define('nav-bar', NavBar);
window.customElements.define('head-content', Head)