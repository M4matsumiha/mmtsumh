/* =====================================================
   EDIT YOUR INFORMATION HERE
   Change the text between the quotes. Leave the commas.
   ===================================================== */
const CONFIG = {
  name: "Johnathaniel G. Carbonel",
  firstName: "Johnathaniel",
  age: "21",
  school: "Nueva Vizcaya State University",
  course: "Network Design Management",
  profilePicture: "me.jpg",   // e.g. "me.jpg" (put the file in this folder). Empty = placeholder avatar
  biography: "I am an Information Technology student at Nueva Vizcaya State University majoring in Netword Design Management, I am always interested on things aslong as im involved in it, and I always believe everyone has a mask.",

  education: [
    { level: "Elementary", school: "EM's Signal Village Elementary School" },
    { level: "Junior High School", school: "Taguig Integrated School" },
    { level: "Senior High School", school: "New Era University" },
    { level: "College", school: "Nueva Vizcaya State University", note: "Course: Network Design Management" }
  ],

  // EDIT: college achievements (add or remove { } blocks)
  collegeAchievements: [
    { icon: "🏆", title: "[Achievement title]", description: "[Short description]", date: "" },
    { icon: "🎖️", title: "[Achievement title]", description: "[Short description]", date: "" },
    { icon: "⭐", title: "[Achievement title]", description: "[Short description]", date: "" }
  ],

  // EDIT: Hack for Gov information
  hackForGov: {
    year: "2026",
    team: "ET'Hack",
    role: "Versatile",
    result: "9th Runner Up",
    image: "certificate.jpg"   // e.g. "certificate.jpg". Empty = placeholder box
  },

  // EDIT: skills / areas of study (not claims of expertise)
  skills: ["Networking","Software Development","Web Development","Cybersecurity","Java","JavaScript","HTML","CSS","Problem Solving","Teamwork"],

  // EDIT: projects (copy a { } block to add more)
  projects: [
    { name: "Project Name", description: "Short project description.", tech: "HTML / CSS / JavaScript" },
    { name: "Project Name", description: "Short project description.", tech: "[Technologies]" }
  ],

  // EDIT: academic achievements by level (leave [] if none yet; add text in quotes)
  academic: {
    "Elementary": ["[]"],
    "Junior High School": ["[]"],
    "Senior High School": ["[]"],
    "College": ["[]", "[]", "[]"]
  },

  // EDIT: contact links
  contact: {
    Email: "strangerdangeryouare@gmail.com",
    GitHub: "github.com/M4matsumiha",
  }
};
/* ============ END OF EDIT AREA ============ */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// ---------- Build page from CONFIG ----------
function build() {
  const c = CONFIG;
  $("heroName").textContent = "Hello, I'm " + c.firstName;
  $("bio").textContent = c.biography;
  $("copy").textContent = "© 2026 " + c.name + ". All Rights Reserved.";
  $("avatar").src = c.profilePicture ||
    "data:image/svg+xml;utf8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#111"/>' +
      '<circle cx="100" cy="78" r="36" fill="#444"/><path d="M30 190c6-46 40-64 70-64s64 18 70 64z" fill="#444"/></svg>');

  $("infoCard").innerHTML = [["Name", c.name], ["Age", c.age], ["Current School", c.school], ["Course", c.course]]
    .map(r => `<div class="row"><span>${r[0]}</span><span>${esc(r[1])}</span></div>`).join("");

  $("timeline").innerHTML = c.education.map(e =>
    `<div class="t-item card"><small>${esc(e.level)}</small><h3>${esc(e.school)}</h3>${e.note ? `<p>${esc(e.note)}</p>` : ""}</div>`).join("");

  $("achGrid").innerHTML = c.collegeAchievements.map((a, i) =>
    `<div class="card"><span class="icon">${a.icon}</span><small class="date"> College Achievement #${i + 1}</small>
     <h3>${esc(a.title)}</h3><p>${esc(a.description)}</p>${a.date ? `<p class="date">${esc(a.date)}</p>` : ""}</div>`).join("");

  const h = c.hackForGov;
  $("hack").innerHTML = `<span class="icon">🌸</span><h3>Participant — Hack for Gov</h3>
    <p>Participated in the Hack for Gov competition as part of my experience in technology, problem solving, and collaborative software development.</p>
    <div class="meta">${[["Competition year", h.year], ["Team name", h.team], ["Role", h.role], ["Project", h.project], ["Achievement / result", h.result]]
      .map(m => `<div><b>${m[0]}</b>${esc(m[1])}</div>`).join("")}
      <div>${h.image ? `<img src="${esc(h.image)}" alt="Hack for Gov" style="max-width:100%;border-radius:8px">` : "<b>Certificate / competition image</b>[Add image]"}</div></div>`;

  $("skills").innerHTML = c.skills.map(s => `<span class="badge">${esc(s)}</span>`).join("");

  $("projects").innerHTML = c.projects.map((p, i) =>
    `<div class="card"><small class="date">Project ${String(i + 1).padStart(2, "0")}</small><h3>${esc(p.name)}</h3>
     <p>${esc(p.description)}</p><p style="margin-top:10px"><b style="color:#fff">Technologies:</b> ${esc(p.tech)}</p></div>`).join("");

  $("academic").innerHTML = Object.entries(c.academic).map(([lvl, list]) =>
    `<div class="card"><h3>${esc(lvl)} Academic Achievements</h3><ul>${
      (list.length ? list : ["[Achievement]"]).map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");

  $("contactGrid").innerHTML = Object.entries(c.contact).map(([k, v]) =>
    `<div class="card"><h3>${k}</h3><p>${esc(v)}</p></div>`).join("");
}

// ---------- Petals (intro logo + background) ----------
function drawLogo() {
  let p = "";
  for (let i = 0; i < 5; i++)
    p += `<path transform="rotate(${i * 72})" d="M0 -6 C-14 -22 -12 -40 0 -44 C12 -40 14 -22 0 -6 M0 -44 L0 -37"/>`;
  $("petals").innerHTML = p;
}
function petals(parent, n) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "petal";
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDuration = 9 + Math.random() * 9 + "s";
    s.style.animationDelay = -Math.random() * 12 + "s";
    s.style.transform = `scale(${0.6 + Math.random()})`;
    parent.appendChild(s);
  }
}

// ---------- Start ----------
build(); drawLogo();
document.body.classList.add("locked");
petals($("intro"), 7);
petals(document.body, 12);

setTimeout(() => {
  $("intro").classList.add("out");
  document.body.classList.remove("locked");
  setTimeout(() => $("intro").remove(), 1000);
}, 3000);

$("menuBtn").onclick = () => $("menu").classList.toggle("open");
$("menu").onclick = () => $("menu").classList.remove("open");
