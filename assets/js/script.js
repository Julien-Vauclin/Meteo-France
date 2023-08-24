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
    myville.innerHTML = 'Veuillez saisir une ville';
    div1.innerHTML = '';
    div2.innerHTML = '';
    div3.innerHTML = '';
    div4.innerHTML = '';
    div5.innerHTML = '';
  } else if (tag != '') {
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let div3 = document.getElementById('div3');
    let div4 = document.getElementById('div4');
    let div5 = document.getElementById('div5');
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=e2e45fe5701de8629a065e6427da0380&q=${tag.value}&lang=fr&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.cod == '404') {
          myville.innerHTML = "La ville n'existe pas";
          div1.innerHTML = '';
          div2.innerHTML = '';
          div3.innerHTML = '';
          div4.innerHTML = '';
          div5.innerHTML = '';
        } else {
          console.log(data.city['name']);
          console.log(data.cod);
          let nomville = data.city['name'];
          myville.innerHTML = nomville.toUpperCase();
          let description = data.list[0]['weather'][0]['description'];
          div1.innerHTML =
            description.charAt(0).toUpperCase() + description.slice(1);
          div2.innerHTML = data.list[0]['main']['temp'] + '°C';
          div3.innerHTML = data.list[0]['main']['humidity'] + "% d'humidité";
          div4.innerHTML = data.list[0]['wind']['speed'] + 'km/h';
          div5.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[0]['weather'][0]['icon'] +
            `@2x.png">`;
        }
      });
  }
});
