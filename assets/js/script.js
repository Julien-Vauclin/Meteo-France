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
    weather.innerHTML = '';
    temperature.innerHTML = '';
    humidity.innerHTML = '';
    wind.innerHTML = '';
    icon.innerHTML = '';
  } else if (tag != '') {
    let weather = document.getElementById('weather');
    let temperature = document.getElementById('temperature');
    let humidity = document.getElementById('humidity');
    let wind = document.getElementById('wind');
    let icon = document.getElementById('icon');
    let url = `https://api.openweathermap.org/data/2.5/forecast?appid=e2e45fe5701de8629a065e6427da0380&q=${tag.value}&lang=fr&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.cod == '404') {
          myville.innerHTML = "La ville n'existe pas";
          weather.innerHTML = '';
          temperature.innerHTML = '';
          humidity.innerHTML = '';
          wind.innerHTML = '';
          icon.innerHTML = '';
        } else {
          console.log(data.city['name']);
          console.log(data.cod);
          let nomville = data.city['name'];
          myville.innerHTML = nomville.toUpperCase();
          let description = data.list[0]['weather'][0]['description'];
          weather.innerHTML =
            description.charAt(0).toUpperCase() + description.slice(1);
          temperature.innerHTML =
            'Température : ' + Math.round(data.list[0]['main']['temp']) + '°C';
          humidity.innerHTML =
            'Humidité : ' + data.list[0]['main']['humidity'] + '%';
          wind.innerHTML =
            'Vitesse du vent : ' + data.list[0]['wind']['speed'] + 'km/h';
          icon.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[0]['weather'][0]['icon'] +
            `@2x.png">`;
          let heure1 = document.getElementById('heure1');
          let icon1 = document.getElementById('icon1');
          let temp1 = document.getElementById('temp1');
          let heure2 = document.getElementById('heure2');
          let icon2 = document.getElementById('icon2');
          let temp2 = document.getElementById('temp2');

          heure1.innerHTML = data.list[0]['dt_txt'].slice(11, 16);
          icon1.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[0]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp1.innerHTML = Math.round(data.list[0]['main']['temp']) + '°C';
          heure2.innerHTML = data.list[1]['dt_txt'].slice(11, 16);
          icon2.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[1]['weather'][0]['icon'] +
            `@2x.png">
          `;
          // On affiche la température en arrondissant à l'entier le plus proche
          temp2.innerHTML = Math.round(data.list[1]['main']['temp']) + '°C';
        }
      });
  }
});
