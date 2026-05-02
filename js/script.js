// Función para cargar componentes dinámicamente y corregir rutas
document.addEventListener("DOMContentLoaded", () => {
    const isSubPage = location.pathname.includes("pages");
    const basePath = isSubPage ? "../" : "";

    // Función para corregir los enlaces (href) según la ubicación de la página
    const fixLinks = (container) => {
        container.querySelectorAll("a").forEach(link => {
            const href = link.getAttribute("href");
            
            // Si es un enlace externo o un ancla vacía, no hacer nada
            if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#") && !isSubPage) return;

            if (isSubPage) {
                // Si estamos en una subpágina (ej: pages/members.html)
                if (href === "index.html") {
                    link.href = "../index.html";
                } else if (href.startsWith("#")) {
                    // Anclas que apuntan al index
                    link.href = "../index.html" + href;
                } else if (href === "pages/members.html") {
                    link.href = "members.html";
                } else if (href.startsWith("pages/")) {
                    link.href = href.replace("pages/", "");
                }
            } else {
                // Si estamos en el index.html (raíz)
                // Aseguramos que los enlaces a subpáginas sean correctos
                if (href === "members.html") {
                    link.href = "pages/members.html";
                }
            }
        });
    };

    // Cargar Navbar
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        fetch(basePath + "components/navbar.html")
            .then(res => res.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                fixLinks(navbarContainer);
            });
    }
// Cargar Info history `component
    const infoContainer = document.getElementById("info");
    if (infoContainer) {
        fetch(basePath + "components/info-history.html")
            .then(res => res.text())
            .then(data => {
                infoContainer.innerHTML = data;
                fixLinks(infoContainer);
            });
    }
// Cargar Mision Vision
    const misionVisionContainer = document.getElementById("mision-vision");
    if (misionVisionContainer) {
        fetch(basePath + "components/mision-vision.html")
            .then(res => res.text())
            .then(data => {
                misionVisionContainer.innerHTML = data;
                fixLinks(misionVisionContainer);
            });
    }

    // Cargar Footer
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        fetch(basePath + "components/footer.html")
            .then(res => res.text())
            .then(data => {
                footerContainer.innerHTML = data;
                fixLinks(footerContainer);
            });
    }
});
