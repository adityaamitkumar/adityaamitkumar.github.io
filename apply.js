const params = new URLSearchParams(window.location.search);
const societyId = params.get("id");
const society = societies.find(s => s.id === societyId);

const root = document.documentElement;
const form = document.getElementById("application-form");
const successState = document.getElementById("success-state");
const roleSelect = document.getElementById("role");
const whyField = document.getElementById("why");
const counter = document.getElementById("counter");

function setAccent() {
    if (society) root.style.setProperty("--accent", society.color);
}

function showMissingSociety() {
    document.title = "Application | NSUT Society Recruitment";
    document.getElementById("apply-society").textContent = "the selected society";
    document.getElementById("back-link").textContent = "← All societies";
    roleSelect.innerHTML = '<option value="">No society selected</option>';
}

if (!society) {
    showMissingSociety();
} else {
    setAccent();
    document.title = `Apply to ${society.name} | NSUT Recruitment`;
    document.getElementById("apply-society").textContent = society.name;
    document.getElementById("back-link").href = `gdg.html?id=${encodeURIComponent(society.id)}`;

    roleSelect.innerHTML += society.roles
        .map(role => `<option value="${role.name}">${role.name}</option>`)
        .join("");
}

function validateField(field) {
    const error = field.closest(".field").querySelector(".error");
    let message = "";

    if (!field.value.trim()) message = "This field is required.";

    if (field.id === "why" && field.value.trim().length > 0 && field.value.trim().length < 20) {
        message = "Give us a little more detail (at least 20 characters).";
    }

    field.classList.toggle("invalid", Boolean(message));
    error.textContent = message;
    return !message;
}

["name", "year", "branch", "role", "why"].forEach(id => {
    const field = document.getElementById(id);
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
        if (field.classList.contains("invalid")) validateField(field);
    });
});

whyField.addEventListener("input", () => {
    counter.textContent = `${whyField.value.length} / 500`;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = ["name", "year", "branch", "role", "why"]
        .map(id => document.getElementById(id));

    const valid = fields.map(validateField).every(Boolean);

    if (!valid || !society) {
        const firstInvalid = fields.find(field => field.classList.contains("invalid"));
        if (firstInvalid) firstInvalid.focus();
        return;
    }

    const application = {
        society: society.name,
        societyId: society.id,
        name: document.getElementById("name").value.trim(),
        year: document.getElementById("year").value,
        branch: document.getElementById("branch").value.trim(),
        role: document.getElementById("role").value,
        why: document.getElementById("why").value.trim()
    };

    // Required by the brief: no backend; demonstrate submission in the console.
    console.log("NSUT Society Application:", application);

    document.getElementById("success-message").textContent =
        `Thanks, ${application.name}. Your application for ${society.name} — ${application.role} has been recorded for this demo.`;

    document.getElementById("success-details").href =
        `gdg.html?id=${encodeURIComponent(society.id)}`;

    form.hidden = true;
    successState.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
});
