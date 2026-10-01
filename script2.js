const params = new URLSearchParams(window.location.search);
const societyId = params.get("id");
const society = societies.find(s => s.id === societyId);

const root = document.documentElement;

if (!society) {
    document.title = "Society Not Found | NSUT Recruitment";
    document.getElementById("society-page").innerHTML = `
        <section class="panel" style="margin-top:40px;text-align:center">
            <div class="section-label">404 — NOT FOUND</div>
            <h1 style="font-family:'New Amsterdam',sans-serif;font-size:4rem">Society not found</h1>
            <p style="color:#a9afb9">The society you're looking for doesn't exist in the sample data.</p>
            <a class="apply-btn" href="index.html">← Back to societies</a>
        </section>
    `;
} else {
    document.title = `${society.name} | NSUT Society Recruitment`;
    root.style.setProperty("--accent", society.color);

    document.getElementById("society-name").textContent = society.name;
    document.getElementById("category").textContent = `${society.category} Society`;
    document.getElementById("tagline").textContent = society.tagline;
    document.getElementById("description").textContent = society.description;

    const image = document.getElementById("society-image");
    image.src = society.img;
    image.alt = `${society.name} logo`;

    document.getElementById("society-icon").textContent = society.icon;

    document.getElementById("criteria").innerHTML = society.criteria
        .map(item => `<li>${item}</li>`)
        .join("");

    document.getElementById("roles").innerHTML = society.roles
        .map((role, index) => `
            <article class="role-card">
                <div class="role-number">ROLE ${String(index + 1).padStart(2, "0")}</div>
                <h3>${role.name}</h3>
                <p>${role.description}</p>
                <div class="skills">
                    ${role.skills.map(skill => `<span>${skill}</span>`).join("")}
                </div>
            </article>
        `)
        .join("");

    const applyUrl = `apply.html?id=${encodeURIComponent(society.id)}`;
    document.getElementById("apply-button").href = applyUrl;
    document.getElementById("bottom-apply").href = applyUrl;
}
