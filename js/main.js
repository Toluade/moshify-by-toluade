const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach((item) => {
  item.addEventListener('click', () => {
    const notClickedCollapsibles = Array.from(collapsibles).filter((notClickedItem) => {
      return notClickedItem !== item;
    });

    notClickedCollapsibles.forEach((notClickedItem) => {
      notClickedItem.classList.remove('collapsible--expanded');
    });

    item.classList.add('collapsible--expanded');
  });
});