// Arrange icons in a circle dynamically
const icons = document.querySelectorAll(".icon");
const radius = 130; // px from center
const step = (2 * Math.PI) / icons.length;

icons.forEach((icon, i) => {
  const angle = i * step;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  icon.style.left = `${(radius + x)}px`;
  icon.style.top = `${(radius + y)}px`;
});

// Handle click with loader
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const url = icon.getAttribute("data-url");
    const loader = document.getElementById("loader");
    loader.style.display = "flex";

    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  });
});
