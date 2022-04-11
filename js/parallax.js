var home_splitter = document.getElementById('home_splitter');
var about_splitter = document.getElementById('about_splitter');
var about_container = document.getElementById('about_container');
var mottoAllLines = document.getElementById('home_motto');
const mottoList = document.querySelectorAll('#home_motto li');

window.addEventListener('scroll', function (e) {
  let mottoOffset = mottoAllLines.offsetTop - window.scrollY;
  console.log(mottoOffset);  

  if (mottoOffset < 150) {   
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
        line.style.animationDirection = "reverse";        
        line.style.animation = '';       
      } else {      
      }
    });
  }  
});
