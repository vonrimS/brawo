var logo = document.getElementById('header_logo')
logo.style.opacity = 0;
logo.style.marginTop = "1vw";

window.addEventListener('load', ()=>{
  // console.log('success')
  logo.style.opacity = 1;
  logo.style.marginTop = 0;
  logo.style.transitionDuration = "1000ms";   
})


// margin-left: 3vw;
// margin-top: 0px;