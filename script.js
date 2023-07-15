const links = document.querySelectorAll('.tickerTape > div > .link-container');

links.forEach(link => {
  const a = link.querySelector('a');
  const details = link.querySelector('.details');


  link.addEventListener('mouseover', () => {
    details.classList.add('flip-in'); // add flip-in class to show the details element
  });

  link.addEventListener('mouseout', () => {
    details.classList.remove('flip-in'); // remove flip-in class to hide the details element
  });
});