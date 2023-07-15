const marquee = document.querySelectorAll('.marquee__content');

// Pause both marquee__content elements when hovering over an li element
const liElements = document.querySelectorAll('.marquee__content li');

liElements.forEach(li => {
  li.addEventListener('mouseenter', () => {

    for (let i = 0; i < marquee.length; i++) {
      marquee[i].style.animationPlayState = 'paused';
    }
  });
  li.addEventListener('mouseleave', () => {
    for (let i = 0; i < marquee.length; i++) {
      marquee[i].style.animationPlayState = 'running';
    }
  });
});
// Get the position of the .details element
const details = document.querySelectorAll('.details');
setInterval(() => {
  details.forEach((detail) => {
    const detailPosition = detail.getBoundingClientRect();

    if (detailPosition.left <= -50) {
      detail.style.marginLeft = `30rem`;
    }
    if (detailPosition.left >= 400 ) {
      detail.style.marginLeft = `0px`;
    }
  

  });
}, 1);
