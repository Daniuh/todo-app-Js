
        const toggleButton = document.getElementById("theme-toggle");
        const body = document.body;

        toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Claro";
            localStorage.setItem("theme", "dark");
        } else {
            toggleButton.textContent = "🌙 Oscuro";
            localStorage.setItem("theme", "light");
        }
        });

        // Mantener el modo elegido al recargar
        if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Claro";
        }