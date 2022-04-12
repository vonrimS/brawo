var home_splitter = document.getElementById('home_splitter');
var about_splitter = document.getElementById('about_splitter');
var about_container = document.getElementById('about_container');
var mottoAllLines = document.getElementById('home_motto');
const mottoList = document.querySelectorAll('#home_motto li');
// const mottoList = document.getElementsById('#home_motto');

// console.log(mottoList)
// const mottoList = document.querySelectorAll('.fade-in');

console.log(mottoList);
const x = mottoAllLines.offsetTop;

window.addEventListener('scroll', function (e) {
  let mottoOffset = mottoAllLines.offsetTop - window.scrollY;
  console.log(mottoOffset);
  // console.log('const: ' + x)

  if (mottoOffset < x) {
    console.log('less than marker')
    mottoList.forEach((line, index) => {
      if (line.style.animationDirection === 'reverse') {
        line.style.animationDirection = 'normal';
        console.log(line.style.animationDirection);
      } else {
        line.style.animation = `mottoFade 2s ease forwards ${index / 2 + 0.2}s`;
      }
    });
  }

  if(mottoOffset > 150) {
        mottoList.forEach((line, index) => {
          if (line.style.animationDirection === 'normal') {
            // line.style.animationDirection = "reverse";
            line.style.animation = '';
          } else {
          }
        });
      }
});
/*
const faders = document.querySelectorAll('.fade-in');
console.log(faders);

const options = {
  // root: null,
  root: document.querySelector('#home'),
  rootMargin: '0px',
  threshold: 1.0,
};

const appearOnScroll = new InteractionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    // if (!entry.isIntersecting) {
    //   console.log(entry);
    //   return;
    // } else {
      entry.target.classList.add('appear');
      console.log(entry);
      // appearOnScroll.unobserve(entry.target);
    // }
  });
},
options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});*/

// var target = document.getElementById('home');

// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// }

// let callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.target.id === 'target'){
//       target.innerText = (entry.isIntersecting) ? '11111' : '00000'
//     }
//   })

// }

// let observer = new InteractionObserver(callback, option);
// observer.observe(target);
