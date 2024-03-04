//show random blunts
//const numChildren = 5;
//const tiempoEntreChildren = 1000;
//const bluntElement = document.querySelector('.blunt');
//const childrenElements = [];
//const bluntRect = bluntElement.getBoundingClientRect();
//const bluntWidth = bluntRect.width;
//const bluntHeight = bluntRect.height;
//for (let i = 0; i < numChildren; i++) {
//  const child = document.createElement('div');
//  child.classList.add('children');
//  bluntElement.appendChild(child);
//  childrenElements.push(child);
//  const randomX = Math.random() * bluntWidth;
//  const randomY = Math.random() * bluntHeight;
//  const randomOpacity = Math.random();
//  setTimeout(() => {
//    child.style.opacity = 1;
//    child.style.transform = `translateY(-15px) translateX(${randomX}px) translateY(${randomY}px) rotate(45deg)`;
//    child.style.transition = `opacity 0.5s, transform 0.5s`;
//    child.style.opacity = randomOpacity;
//  }, i * tiempoEntreChildren);
//}

//show decorative elements with delay custom time
//const imagenesDecorativas = document.querySelectorAll('.deco');
//function aplicarEstilosConDelay(imagenes, tiempoEntreImagenes) {
//  imagenes.forEach((imagen, index) => {
//    const retraso = index * tiempoEntreImagenes * 1000; 
//    setTimeout(() => {
//      if (!imagen.classList.contains('noTranslate')) {
//        imagen.style.opacity = '1';
//        imagen.style.transform = 'translateY(0px)';
//      } else {
//        imagen.style.opacity = '1';
//      }
//    }, retraso);
//  });
//}
//aplicarEstilosConDelay(imagenesDecorativas, .2); 

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
// Mostrar los datos en la consola (opcional)
console.log(data);

const navIcon = document.querySelector('.navIcon');
const hMenu = document.querySelector('.menu');

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('open');
  hMenu.classList.toggle('showMenu');
});
