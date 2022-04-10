
var home_splitter = document.getElementById("home_splitter");
var about_splitter = document.getElementById("about_splitter");

var about_container = document.getElementById("about_container");
var mottoAllLines = document.getElementById("home_motto");

const mottoList = document.querySelectorAll('#home .motto ul li');

window.addEventListener("scroll", function (e) {
  if (home_splitter.offsetTop - this.window.scrollY <= 300){
    home_splitter.style.backgroundColor = "rgb(88, 28, 28)";
    home_splitter.style.filter = "drop-shadow(6px 10px 20px rgba(0, 0, 0, 0.6))";
    home_splitter.style.height = "17vh";
    home_splitter.style.marginLeft="-50vw";
    home_splitter.style.width = "200vw";
    home_splitter.style.transitionDuration = "1000ms";     
    home_splitter.style.marginTop = "-15vh";
    home_splitter.style.transform = "rotate(1deg)";    
  }
  else {
    home_splitter.style.backgroundColor = "rgb(88, 28, 28)";   
    home_splitter.style.marginTop = 0;
    home_splitter.style.transform = "rotate(0deg)";  
    home_splitter.style.height = "5vh";
    home_splitter.style.transitionDuration = "1000ms";
  }    

  if (about.offsetTop-this.window.scrollY > 100){
    mottoList.forEach(element => {
      // console.log(mottoAllLines.offsetTop - this.window.scrollY );
      // if (element.offsetTop - this.window.scrollY <= 100){
        element.style.marginLeft = '0vw';
        element.style.opacity = 1;
        element.style.transitionDuration = "1000ms"; 
        // console.log(element);    
      // }
    })  
  }; 

  mottoList.forEach(element => {
    // console.log(element);
    if (element.offsetTop - this.window.scrollY <= 1){
      element.style.marginLeft = '-10vw';
      element.style.opacity = 0;
      element.style.transitionDuration = "1000ms";     
      // console.log(element.offsetTop);
    }   
  })
});


window.addEventListener("scroll", function (e) {
  if (about_splitter.offsetTop - this.window.scrollY <= 300){
    about_splitter.style.backgroundColor = "rgb(88, 28, 28)";
    about_splitter.style.filter = "drop-shadow(6px 10px 20px rgba(0, 0, 0, 0.6))";
    about_splitter.style.height = "17vh";
    about_splitter.style.marginLeft="-50vw";
    about_splitter.style.width = "200vw";
    about_splitter.style.transitionDuration = "1000ms";     
    about_splitter.style.marginTop = "-15vh";
    about_splitter.style.transform = "rotate(1deg)";    
  }
  else {
    about_splitter.style.backgroundColor = "rgb(88, 28, 28)";   
    about_splitter.style.marginTop = 0;
    about_splitter.style.transform = "rotate(0deg)";  
    about_splitter.style.height = "5vh";
    about_splitter.style.transitionDuration = "1000ms";
  }    

});