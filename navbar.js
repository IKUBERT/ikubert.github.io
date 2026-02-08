document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <a href="index.html" class="logo-container">
            <img src="/src/logo.png" alt="IKUBERT Logo" class="nav-logo">
            <span class="logo-text">IKUBERT</span>
        </a>
        <div class="menu">
            <a href="index.html">Home</a>
            <a href="acerca.html">Acerca de</a>
            <a href="contacto.html">Contacto</a>
        </div>
    `;
    document.getElementById("navbar").innerHTML = navHTML;
});
