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
    console.log(details[0].getBoundingClientRect().left, details[2])
    if (detailPosition.left <= -50) {
      detail.style.marginLeft = `${Math.ceil((detailPosition.left * -1) * 5)}px`
      detail.style.transitionProperty = "transform"

    }
    if (detailPosition.left >= window.innerWidth - 200) {
      detail.style.marginLeft = `-30rem`
      detail.style.transitionProperty = "transform"

    }



  });
}, 1000);
