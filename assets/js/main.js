document.addEventListener("DOMContentLoaded", function () {
    fetchGitHubProjects();
    setupThemeToggle();
    setupScrollEffects();
    setupTypingEffect();
});

// Fetch GitHub Projects
function fetchGitHubProjects() {
    fetch("https://api.github.com/users/JzuvGTI/repos?per_page=6&sort=updated")
        .then(response => response.json())
        .then(repos => {
            let projectList = document.getElementById("project-list");
            projectList.innerHTML = "";
            repos.forEach(repo => {
                let projectItem = `
                    <div class="glass p-5 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300">
                        <h3 class="text-xl font-bold text-neon">${repo.name}</h3>
                        <p class="text-sm text-gray-400 mt-2">${repo.description || "No description available."}</p>
                        <a href="${repo.html_url}" target="_blank" class="mt-4 inline-block px-4 py-2 bg-neon text-black rounded-lg hover:scale-105 transition">
                            <i class="fab fa-github"></i> View Project
                        </a>
                    </div>
                `;
                projectList.innerHTML += projectItem;
            });
        })
        .catch(error => console.error("Error fetching GitHub projects:", error));
}

// Theme Toggle (Dark/Light Mode)
function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
}

// Smooth Scroll and Back-to-Top Button
function setupScrollEffects() {
    const toTopBtn = document.createElement("button");
    toTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    toTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(toTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            toTopBtn.classList.add("visible");
        } else {
            toTopBtn.classList.remove("visible");
        }
    });

    toTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Typing Effect in Hero Section
function setupTypingEffect() {
    const words = ["Creative Full Stack Developer", "Web Developer", "Software Engineer"];
    let wordIndex = 0;
    let letterIndex = 0;
    const typingElement = document.getElementById("typing-effect");

    function type() {
        if (letterIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][letterIndex];
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    type();
}
