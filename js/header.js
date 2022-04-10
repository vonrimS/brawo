const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () =>{
  let current = '';
  // console.log(scrollY);
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // console.log(sectionTop);
    const sectionHight = section.clientHeight;
    if(scrollY >= (sectionTop - sectionHight / 3)) {
      current = section.getAttribute('id')
    }
  })
  // console.log(current);
  navList.forEach(li => {
    li.classList.remove('active');
    if (li.classList.contains(current)){
      li.classList.add('active')
    }
  })
})