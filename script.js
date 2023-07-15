const marquee = document.querySelectorAll('.marquee__content');

// Get the width of the details container
const detailsWidth = document.querySelector('.details').offsetWidth;

// Set the left margin of the last list item to the width of the details container

for (let i = 0; i < marquee.length; i++) {
  marquee[i].lastElementChild.style.marginRight = `${detailsWidth}px`;
}

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
    if(detail.getBoundingClientRect().left<=-100){
      detail.style.marginLeft ="20rem"
    }
    console.log();
  });
}, 10);

// Continuously update the position of the .other-element element
