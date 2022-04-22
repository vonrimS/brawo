window.addEventListener('DOMContentLoaded', setup);

function setup() {
  const options = {};

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show')
      } 
      if (!entry.isIntersecting && entry.target.classList.contains('show')){
        entry.target.classList.remove('show')
      }
        // entry.target.classList.toggle('show')
      
      // if(entry.isIntersecting){
      //   entry.target.classList.toggle('show')
      // }else{
      //   return
      // }
    })
  }, options);
  
  const squares = document.querySelectorAll('motto_li')
  squares.forEach(square => observer.observe(square))


  const split_options = {
    rootMargin: '-20px'
    // threshold: [1, 0.5]
  }

  const split_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // console.log(entry.target)
      if(entry.isIntersecting){
        entry.target.classList.toggle('spread-up')

      }
      // if (entry.isIntersecting && entry.target.classList.contains('spread-up')){
      //   entry.target.classList.remove('spread-up')
      // }
      // if (entry.isIntersecting && entry.target.classList.contains('spread-up')){
      //   entry.target.classList.remove('spread-up')
      // }

      // if (entry.isIntersecting){
      //   entry.target.classList.add('show')
      // } 
      // if (!entry.isIntersecting && entry.target.classList.contains('show')){
      //   entry.target.classList.remove('show')
      // }

        // entry.target.classList.toggle('show')
      
      // if(entry.isIntersecting){
      //   entry.target.classList.toggle('show')
      // }else{
      //   return
      // }
    })
  }, split_options);

  const splitters = document.querySelectorAll('splitter');
  splitters.forEach(s => split_observer.observe(s))



}