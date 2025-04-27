async function loadProjects() {
    const container = document.getElementById('projects-container');
    try {
    const response = await fetch('https://api.github.com/users/JzuvGTI/repos');
    const repos = await response.json();
    const selectedRepos = repos.slice(0, 3);
    selectedRepos.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.className = "bg-[#305b75]/70 p-6 rounded-lg border-[3px] border-[#6da2ad] shadow-md flex flex-col items-center space-y-4 drop-shadow-[2px_2px_0px_#000]";

        projectCard.innerHTML = `
        <div class="text-white text-5xl drop-shadow-[2px_2px_0px_#000]">
            <i class="fab fa-github"></i>
        </div>
        <h4 class="text-xl font-semibold drop-shadow-[2px_2px_0px_#000]">${repo.name}</h4>
        <p class="text-sm opacity-70 drop-shadow-[2px_2px_0px_#000] text-center">${repo.description || 'No description.'}</p>
        <a href="${repo.html_url}" target="_blank" class="w-full">
            <button type="button"
            class="w-full inline-flex items-center justify-center px-6 py-3 bg-[#305b75] border-[3px] border-[#6da2ad] 
                    rounded-lg text-white text-sm font-semibold shadow-md 
                    hover:bg-[#2a4f67] transition drop-shadow-[2px_2px_0px_#000]">
            <i class="fas fa-paper-plane mr-2"></i> View Project
            </button>
        </a>
        `;
        container.appendChild(projectCard);
    });

    } catch (error) {
    console.error('Error loading projects:', error);
    container.innerHTML = '<p class="text-red-500">Failed to load projects.</p>';
    }
}

loadProjects();
const text = `I graduated from SMK Wahidin Kota Cirebon, majoring in Rekayasa Perangkat Lunak (RPL).
As a Web Developer, I specialize in building modern, fast, and responsive websites.
I love turning ideas into cool and impactful digital solutions. Coding is my passion,
and every line of code brings me closer to achieving bigger dreams.`;


let index = 0;
const speed = 25; 

function typeWriter() {
    if (index < text.length) {
    document.getElementById('typing-text').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
    }
}

window.addEventListener('load', typeWriter);
AOS.init({
duration: 1000,   
offset: 200,       
delay: 100, 
});