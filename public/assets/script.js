// Pass Autoservice – kleines Skript, die Seite funktioniert auch ohne JS.
document.documentElement.classList.remove("no-js");

// Heutigen Tag in den Öffnungszeiten markieren
const today = String(new Date().getDay());
document.querySelectorAll(".hours tr[data-days]").forEach((row) => {
  if (row.dataset.days.split(",").includes(today)) row.classList.add("is-today");
});

// Jahreszahl im Footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Google-Karte erst nach Klick laden
document.querySelectorAll("[data-map-load]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.closest("[data-map-src]");
    const frame = document.createElement("iframe");
    frame.src = box.dataset.mapSrc;
    frame.title = "Karte: Pass Autoservice, Industriestraße 43, 53721 Siegburg";
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    box.replaceWith(frame);
  });
});

// Sektionen beim Scrollen einblenden
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("is-in"));
}
