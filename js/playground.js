const collapsibles = document.querySelectorAll(".collapsible-nav");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
