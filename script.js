// Simple mobile menu toggle (you can expand this to a drawer if needed)
const btn = document.getElementById("menuBtn");
btn?.addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  if (!nav) return;
  const visible = getComputedStyle(nav).display !== "none";
  nav.style.display = visible ? "none" : "flex";
});
