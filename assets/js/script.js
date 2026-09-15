
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e)=>{
  glow.style.left = e.clientX - 150 + 'px';
  glow.style.top = e.clientY - 150 + 'px';
});

window.addEventListener('scroll', ()=>{
  document.querySelector('.navbar').style.background =
    window.scrollY > 20 ? 'rgba(0,0,0,0.85)' : 'transparent';
});
