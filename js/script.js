// Función para cargar componentes dinámicamente
document.addEventListener("DOMContentLoaded", () => {
    const path = location.pathname.includes("pages") ? "../" : "";

    // Cargar Navbar
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        fetch(path + "components/navbar.html")
            .then(res => {
                if (!res.ok) throw new Error("Error al cargar el navbar");
                return res.text();
            })
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(err => console.error(err));
    }

    // Cargar Footer
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        fetch(path + "components/footer.html")
            .then(res => {
                if (!res.ok) throw new Error("Error al cargar el footer");
                return res.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(err => console.error(err));
    }
});
