(function() {
  const html = document.querySelector("html");
  html.style.filter = 'invert(0)';
  const uninverted = document.querySelectorAll("img, video, iframe");
  for(let i = 0; i < uninverted.length; i++) uninverted[i].style.filter = 'invert(0)';
})();