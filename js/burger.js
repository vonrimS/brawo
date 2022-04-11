const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li'); 


  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // nav.style.display = 'inline-block';
    // console.log("....111")
    
    // console.log(nav.style.display);

    navLinks.forEach((link, index) => {

      if(link.style.animation){
        link.style.animation = '';
      }
      else{
        link.style.animation = `navLinkFade 0.5s ease backwards ${index/14 + 0.2}s`;
        // console.log(index/5 + 0.2);
      }
      
    })

    // burger animation
    burger.classList.toggle('toggle')
  })

 
}

navSlide();