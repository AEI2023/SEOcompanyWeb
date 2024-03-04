//show decorative blunts with delay custom time
const numChildren = 7;
const tiempoEntreChildren = .3;
const bluntElement = document.querySelector('.blunt');
const bluntWidth = bluntElement.offsetWidth;
const bluntHeight = bluntElement.offsetHeight;

for (let i = 0; i < numChildren; i++) {
  const child = document.createElement('div');
  child.classList.add('children');
  bluntElement.appendChild(child);

  gsap.set(child, {
    opacity: 0,
    x: Math.random() * bluntWidth,
    y: Math.random() * bluntHeight,
    rotation: 45,
  });

  gsap.to(child, {
    opacity: Math.random(),
    duration: 0.5,
    delay: i * tiempoEntreChildren,
    ease: "power2.out",
    y: "-=15",
  });
}

//Animate HeroTXT
gsap.set(".heroTxt > *", { opacity: 0, y: 20 });
gsap.to(".heroTxt > *", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5,
  ease: "power4.out"
});

//Animate Decorative elements
gsap.set(".decorative > .deco", { opacity: 0, y: 20 });
gsap.to(".decorative > .deco", {
  opacity: 1,
  y: 0,
  duration: 1, 
  stagger: 0.2,
  ease: "power4.out"
});
gsap.set(".gridCircle > span", { opacity: 0, y: 20 });  
gsap.to(".gridCircle > span", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.25,
  ease: "power4.out"
});

//Animate badge OFF
gsap.set(".badgeOff", { scale: 0, opacity: 0, rotation: 180 });
gsap.to(".badgeOff", {
  opacity: 1,
  rotation: 0,
  scale: 1,
  duration: 1,
  ease: "power3.out"
});

window.addEventListener('load', function () {
  var divs = document.querySelectorAll('.clipPathinit');
  var lastDiv = divs[divs.length - 1];
  if (lastDiv.classList.contains('opacero')) {
    lastDiv.classList.remove('opacero');
  }
  setTimeout(function () {
    divs.forEach(function (div) {
      div.classList.remove('clipPathinit');
    });
  }, 2000);
});
var heroItems = document.querySelectorAll('.heroItem');
var data = {
  cantidad_total_items: heroItems.length,
  items: []
};
heroItems.forEach(function (item) {
  var title = item.querySelector('h1').innerHTML; // Utilizamos innerHTML en lugar de innerText
  var text = item.querySelector('p').innerText;
  var link = {
    href: item.querySelector('a').getAttribute('href'),
    text: item.querySelector('a').innerText
  };
  var imagen = {
    src: item.querySelector('.heroImg img').getAttribute('src'),
    alt: item.querySelector('.heroImg img').getAttribute('alt')
  };

  data.items.push({
    title: title,
    text: text,
    link: link,
    imagen: imagen
  });
});
console.log(data);

const navIcon = document.querySelector('.navIcon');
const hMenu = document.querySelector('.menu');

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  hMenu.classList.toggle('showMenu');
});
