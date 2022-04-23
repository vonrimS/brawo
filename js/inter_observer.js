window.addEventListener('DOMContentLoaded', setup);

function setup() {
  const options = {
    root: null,
    rootMargin: '-300px 0px 300px 0px',
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry.target)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      if (!entry.isIntersecting && entry.target.classList.contains('show')) {
        entry.target.classList.remove('show');
      }
    });
  }, options);

  const motto_lines = document.querySelectorAll('#home_motto > li');
  console.log(motto_lines)
  // const motto_lines = document.querySelectorAll('motto_li');
  motto_lines.forEach((motto_line) => observer.observe(motto_line));

  const page_name_observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        // observer.unobserve(entry.target);
      }
      if (!entry.isIntersecting && entry.target.classList.contains('appear')) {
        entry.target.classList.remove('appear');
      }
    });
  }, {
    root: null,
    // rootMargin: '100px 0px 30px 0px'
    threshold: [0.5, 0]
  });

  const page_names = document.querySelectorAll('page_name')
  // console.log(page_names)
  page_names.forEach(n => page_name_observer.observe(n))
}
