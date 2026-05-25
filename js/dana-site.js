function go(id) {
  document.querySelectorAll(".page").forEach(function (p) {
    p.classList.remove("active");
  });
  var el = document.getElementById(id);
  if (el) el.classList.add("active");
  var nav = document.getElementById("navlinks");
  if (nav) nav.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.getElementById("burger") &&
  document.getElementById("burger").addEventListener("click", function () {
    document.getElementById("navlinks").classList.toggle("open");
  });

function buildMarquee(trackId, items, cssClass) {
  var track = document.getElementById(trackId);
  if (!track) return;
  var html = "";
  items.forEach(function (label) {
    html +=
      '<span class="marquee-item ' +
      (cssClass || "") +
      '">' +
      label +
      "</span>";
  });
  track.innerHTML = html + html;
}

var clients = [
  "Experian",
  "COPEC",
  "Codelco",
  "Derco / Inchcape",
  "Deloitte",
  "Ministerio de Transportes",
  "DATCO",
  "Vantaz · AMSA",
  "UC Norte",
  "PMI Santiago",
];

var tools = [
  "WhatsApp Business API",
  "LLM · RAG",
  "n8n",
  "Power Automate",
  "Jira",
  "Confluence",
  "SAP ECC",
  "AWS · EKS",
  "Kubernetes",
  "HubSpot",
  "Salesforce",
  "Google Calendar",
  "PostgreSQL",
  "Figma · Miro",
];

buildMarquee("marquee-clients", clients, "highlight");
buildMarquee("marquee-tools", tools, "tool");

document.querySelectorAll(".ind-chip").forEach(function (chip) {
  chip.addEventListener("click", function () {
    var id = chip.getAttribute("data-ind");
    document.querySelectorAll(".ind-chip").forEach(function (c) {
      c.classList.remove("active");
    });
    document.querySelectorAll(".ind-detail").forEach(function (d) {
      d.classList.remove("active");
    });
    chip.classList.add("active");
    var panel = document.getElementById("ind-" + id);
    if (panel) panel.classList.add("active");
  });
});
