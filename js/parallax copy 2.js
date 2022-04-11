var home_splitter = document.getElementById('home_splitter');
var about_splitter = document.getElementById('about_splitter');

var about_container = document.getElementById('about_container');
var mottoAllLines = document.getElementById('home_motto');

const mottoList = document.querySelectorAll('#home_motto li');


window.addEventListener('scroll', function (e) {
  let mottoOffset = mottoAllLines.offsetTop - window.scrollY;
  console.log(mottoOffset);
  

  if (mottoOffset < 150) {
    console.log(mottoList);
    mottoList.forEach((line, index) => {
      if (line.style.animation.name = 'mottoReveal') {
        // line.style.animation = '';
        line.style.animation = `mottoFade 2.5s ease forwards ${index / 2 + 0.2}s`;
        // line.style.animation = `mottoFade 0.5s ease forwards ${index/2 + 0.2}s`;
      } else {
        // line.style.animation = `mottoFade`;
        // console.log(index/5 + 0.2);
      }
    });
  }
  
  if (mottoOffset > 150) {
    mottoList.forEach((line, index) => {
      if (line.style.animation.name='mottoFade') {
        // line.style.animation = '';
        line.style.animation = `mottoReveal 1s ease-out forwards ${index / 2 + 0.2}s`;       
           
      } else {   
        console.log('...> 150')   
      }
    });
    
  }

    // mottoAllLines.style.opacity = 0;
    // mottoAllLines.style.transitionDuration = "1000ms";
  /*} else if (mottoOffset > 150) {
    // console.log(mottoList);
    mottoList.forEach((line, index) => {
      if (line.style.animation) {
        // line.style.animation = '';
        // line.style.animation = `mottoFade 0.5s ease forwards ${index/2 + 0.2}s`;
      } else {
        // line.style.animation = `mottoFade`;
        line.style.animation = `mottoFade 0.5s ease forwards ${
          index / 2 + 0.2
        }s`;
        // console.log(index/5 + 0.2);
      }
    });
    // mottoAllLines.style.opacity = 1;
    // mottoAllLines.style.transitionDuration = "1000ms";
  }*/
});
