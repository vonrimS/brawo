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
  

  if (mottoOffset < x) {
    console.log('less than marker')
    mottoList.forEach((line, index) => {
      if (line.style.animationDirection === 'reverse') {
        line.style.animationDirection = 'normal';
        console.log(line.style.animationDirection);
      } else {
        line.style.animation = `mottoFade 2s ease forwards ${index / 2 + 0.2}s`;
        // console.log(line.style.animation)
      }
    });
  }

  if(mottoOffset > 150) {
        mottoList.forEach((line, index) => {
          if (line.style.animation) {
            // line.style.animationDirection = "reverse";
            line.style.animation = '';
            // console.log(line.style.animation)
          } else {
          }
        });
      }
});
