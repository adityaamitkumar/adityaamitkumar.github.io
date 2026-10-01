console.log("Welcome to my society website");
navbar=document.getElementById('navbar')
const societies = [
    {
        id: "the-alliance",
        name: "The Alliance",
        category: "literary",
        color: "#198754",
        icon: "✍",
        img: "assets/TheAlliance.jpeg",
        tagline: "NSUT's student-run newspaper connecting the entire campus community, covering news, features, interviews, and perspectives that matter to students across all years and departments."
    },
    {
        id: "debsoc",
        name: "DebSoc",
        category: "literary",
        color: "#198754",
        icon: "🗣",
        img: "assets/Debsoc.png",
        tagline: "Official debating society fostering articulate, confident, and analytical thinkers through debates, MUNs, discussion forums, and workshops strengthening communication abilities."
    },
    {
        id: "ieee-nsut",
        name: "IEEE NSUT",
        category: "technical",
        color: "#0d6efd",
        icon: "💻",
        img: "assets/IEEE.jpeg",
        tagline: "Student chapter promoting technical excellence, innovation, and research culture through workshops, seminars, technical talks, and hands-on sessions bridging theory and practice."
    },
    {
        id: "gdg-nsut",
        name: "GDG NSUT",
        category: "technical",
        color: "#0d6efd",
        icon: "🤖",
        img: "assets/gdg.svg",
        tagline: "Google Developer Group bringing together student developers for collaborative learning in web development, mobile apps, machine learning, cloud technologies, and UI/UX design."
    },
    {
        id: "ashwamedh",
        name: "ASHWAMEDH",
        category: "cultural",
        color: "#ffc107",
        icon: "🎭",
        img: "assets/ASHWAMEDH.jpg",
        tagline: "Dramatics and performing arts society creating opportunities to explore dramatic expression, acting, character development, and stagecraft through rehearsals, workshops, and productions."
    },
    {
        id: "crescendo",
        name: "CRESCENDO",
        category: "cultural",
        color: "#ffc107",
        icon: "🎵",
        img: "assets/crescendo.jpg",
        tagline: "Crescendo is the official music society of NSUT, serving as the premier campus hub for vocalists, instrumentalists, and music producers. The group performs diverse genres—from classical to rock."
    }
];

function displaySocieties(category) {
    const container=document.getElementById('societies');
    const iconContainer=document.getElementById('logo');
    filteredSocieties=[]
    societies.forEach(society => {
        if (society.category === category) {
            filteredSocieties.push(society);
        }
    })

    container.innerHTML = filteredSocieties.map(society => `
        <div class="society-card"">
            <img src="${society.img}" class="card-img-top" alt="${society.name}">

            <h3>${society.name}</h3>
            <div class="gradient-line"></div>
            <h5>${society.category.charAt(0).toUpperCase() + society.category.slice(1)} Society</h5>

            <p>${society.tagline}</p>

            <a href="gdg.html?id=${society.id}" class="btn btn-primary">Apply</a>
        </div>
    `).join("");

    iconContainer.innerHTML = filteredSocieties.map(society => `
        <h1 style="opacity: 1;">${society.icon}</h1>
    `).join("");
}
const tabs=document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => {t.classList.remove('active')
            t.style.backgroundColor = "white";
            t.style.color = "black";
        });
        tab.classList.add("active");
        const category=tab.textContent.toLowerCase();
        tab.style.backgroundColor = societies.find(society => society.category === category).color;
        navbar.style.backgroundColor = societies.find(society => society.category === category).color;
        tab.style.color = "#fff";
        displaySocieties(category);
    });
}
)
