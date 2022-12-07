const tag = document.getElementById('tag');

function cambiar(rojo) {
  const numCirculo = document.getElementById(rojo);
  numCirculo.style.backgroundColor = 'red';
  tag.innerHTML = rojo;
}

function change(yellow) {
  const numRedondo = document.getElementById(yellow);
  numRedondo.style.backgroundColor = 'yellow';
  tag.innerHTML = yellow;
}
