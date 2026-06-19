const button = document.querySelector("button");

const createTooltip = (btn) => {
  const tooltipElement = document.createElement("div");
  tooltipElement.classList.add("tooltip", "hidden");

  const title = document.createElement("p");
  const content = document.createElement("p");

  title.textContent = btn.dataset.title;
  content.textContent = btn.dataset.content;
  tooltipElement.append(title, content);

  document.body.appendChild(tooltipElement);

  return tooltipElement;
};
const tooltip = createTooltip(button);

button.addEventListener("click", (e) => {
  tooltip.classList.toggle("hidden");

  const rectButton = button.getBoundingClientRect();
  const rectTooltip = tooltip.getBoundingClientRect();

  tooltip.style.top = `${rectButton.top - rectTooltip.height - 10}px`;
  tooltip.style.left = `${rectButton.left + rectButton.width / 2 - rectTooltip.width / 2}px`
});
