let bouton = document.getElementById('bouton');
var today = new Date();
var datedujour = document.getElementById('datedujour');
datedujour.innerHTML = today.toLocaleDateString('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
let myville = document.getElementById('myville');
// On lie l'API avec la clé

// fonction qui permet de clic quand on appuie sur entrée
function toucheEntree(event) {
  if (event.keyCode === 13) {
    document.getElementById('bouton').click();
  }
}
bouton.addEventListener('click', function () {
  if (tag.value == '') {
    alert('Veuillez saisir une ville');
  } else if (tag != '') {
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=e2e45fe5701de8629a065e6427da0380&q=${tag.value}&lang=fr&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        console.log(data.city['name']);
        console.log(data.cod);
        myville.innerHTML = data.city['name'];
      });
  }
});
