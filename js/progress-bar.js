function updateProgressBar() {
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
  
  document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent); 
}

document.addEventListener('scroll', updateProgressBar);



// const progressBar = document.querySelector('#progressBar');
// const maxScrollValue = document.body.scrollHeight - window.innerHeight;

// window.addEventListener('scroll', () => {
//   const newProgressValue = (window.scrollY / maxScrollValue) * 100;
//   progressBar.value = newProgressValue;
// });