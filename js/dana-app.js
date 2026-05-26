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

var danaDemoFeatures = {
  inbound: [
    "Responde al instante y califica la intención del cliente",
    "Registra el lead y deriva solo oportunidades reales",
    "Integración con calendario, CRM y resumen al equipo",
  ],
  outbound: [
    "Reactiva conversaciones dormidas con contexto previo",
    "Propone siguiente paso (llamada, demo, visita) sin fricción",
    "Mantiene el pipeline caliente sin más headcount",
  ],
  preventa: [
    "Cotiza con reglas de negocio y adjunta propuesta",
    "Enruta a compras o ejecutivo según monto y urgencia",
    "Reduce ciclos de preventa en WhatsApp",
  ],
  postventa: [
    "Resuelve incidencias frecuentes con base de conocimiento",
    "Escala a humano con contexto completo del chat",
    "Identifica oportunidades de renovación y upgrade",
  ],
};

function danaDemoSwitch(id) {
  var w = document.getElementById("dana-demos-widget");
  if (!w) return;
  w.querySelectorAll(".adw-tab").forEach(function (t) {
    t.classList.remove("active");
  });
  var tab = w.querySelector('[data-adw="' + id + '"]');
  if (tab) tab.classList.add("active");
  w.querySelectorAll(".adw-panel").forEach(function (p) {
    p.classList.remove("active");
  });
  var panel = document.getElementById("adw-" + id);
  if (panel) panel.classList.add("active");
  var list = document.getElementById("adw-features");
  var items = danaDemoFeatures[id];
  if (list && items) {
    list.innerHTML = items
      .map(function (text) {
        return "<li>" + text + "</li>";
      })
      .join("");
  }
}
