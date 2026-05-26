(function () {
  "use strict";

  var clients = [
    "Experian",
    "COPEC",
    "Codelco",
    "DERCO · Inchcape",
    "Deloitte",
    "Ministerio de Transportes",
    "DATCO",
    "UC Católica del Norte",
    "PMI Global",
  ];

  var tools = [
    "WhatsApp Business API",
    "LLM · RAG",
    "SAP ECC",
    "AWS",
    "Kubernetes",
    "n8n",
    "Jira",
    "HubSpot",
    "Salesforce",
    "Power Automate",
  ];

  function fillMarquee(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    var html = "";
    items.forEach(function (t) {
      html += "<span>" + t + "</span>";
    });
    el.innerHTML = html + html;
  }

  fillMarquee("marquee-clients", clients);
  fillMarquee("marquee-tools", tools);

  var menuBtn = document.getElementById("menuBtn");
  var overlay = document.getElementById("navOverlay");
  if (menuBtn && overlay) {
    menuBtn.addEventListener("click", function () {
      overlay.classList.toggle("open");
      document.body.style.overflow = overlay.classList.contains("open")
        ? "hidden"
        : "";
    });
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  var header = document.querySelector(".g-header");
  window.addEventListener(
    "scroll",
    function () {
      if (!header) return;
      if (window.scrollY > 80) {
        header.style.mixBlendMode = "normal";
        header.style.background = "rgba(17,17,17,0.94)";
        header.style.color = "#eee";
      } else {
        header.style.mixBlendMode = "difference";
        header.style.background = "transparent";
        header.style.color = "#fff";
      }
    },
    { passive: true }
  );

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
