function setWidth(id) {
  if (!document.getElementById)
    return;
  var width = window.innerWidth - window.innerWidth*0.35;
  console.log(width);
  console.log(window.innerWidth);
  var p = document.getElementById(id);
  p.style.width = width+"px";     
  p.style.backgroundSize = window.innerWidth+"px";
  p.style.overflow = "hidden";      
}

var home = document.getElementById("home");
home.addEventListener('mousemove', function (e) {  
  var h_pic = document.getElementById("home_pic");   
  var x = (e.pageX * -1 / 1950);
  var y = (e.pageY * -1 / 950);  
  h_pic.style.backgroundPosition = `calc(50% - ${x}px) calc(50% - ${y}px)`;  
});


var about = document.getElementById("about");
about.addEventListener('mousemove', function (e) {  
  var pic = document.getElementById("about_pic");     
  var x = (e.pageX * -1 / 1950);
  var y = (e.pageY * -1 / 950);  
  pic.style.backgroundPosition = `calc(50% - ${x}px) calc(50% - ${y}px)`;  
});


setWidth("home_pic");
setWidth("about_pic");

