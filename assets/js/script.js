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
          //Déclaration variables heure icon et temperature
          let heure1 = document.getElementById('heure1');
          let heure2 = document.getElementById('heure2');
          let heure3 = document.getElementById('heure3');
          let heure4 = document.getElementById('heure4');
          let heure5 = document.getElementById('heure5');
          let heure6 = document.getElementById('heure6');
          let heure7 = document.getElementById('heure7');
          let heure8 = document.getElementById('heure8');
          let icon1 = document.getElementById('icon1');
          let icon2 = document.getElementById('icon2');
          let icon3 = document.getElementById('icon3');
          let icon4 = document.getElementById('icon4');
          let icon5 = document.getElementById('icon5');
          let icon6 = document.getElementById('icon6');
          let icon7 = document.getElementById('icon7');
          let icon8 = document.getElementById('icon8');
          let temp1 = document.getElementById('temp1');
          let temp2 = document.getElementById('temp2');
          let temp3 = document.getElementById('temp3');
          let temp4 = document.getElementById('temp4');
          let temp5 = document.getElementById('temp5');
          let temp6 = document.getElementById('temp6');
          let temp7 = document.getElementById('temp7');
          let temp8 = document.getElementById('temp8');
          // heure 1
          heure1.innerHTML = 'Actuellement';
          icon1.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[0]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp1.innerHTML = Math.round(data.list[0]['main']['temp']) + '°C';
          // heure 2
          heure2.innerHTML = data.list[1]['dt_txt'].slice(11, 16);
          icon2.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[1]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp2.innerHTML = Math.round(data.list[1]['main']['temp']) + '°C';
          // heure 3
          heure3.innerHTML = data.list[2]['dt_txt'].slice(11, 16);
          icon3.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[2]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp3.innerHTML = Math.round(data.list[2]['main']['temp']) + '°C';
          // heure 4
          heure4.innerHTML = data.list[3]['dt_txt'].slice(11, 16);
          icon4.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[3]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp4.innerHTML = Math.round(data.list[3]['main']['temp']) + '°C';
          // heure 5
          heure5.innerHTML = data.list[4]['dt_txt'].slice(11, 16);
          icon5.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[4]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp5.innerHTML = Math.round(data.list[4]['main']['temp']) + '°C';
          // heure 6
          heure6.innerHTML = data.list[5]['dt_txt'].slice(11, 16);
          icon6.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[5]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp6.innerHTML = Math.round(data.list[5]['main']['temp']) + '°C';
          // heure 7
          heure7.innerHTML = data.list[6]['dt_txt'].slice(11, 16);
          icon7.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[6]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp7.innerHTML = Math.round(data.list[6]['main']['temp']) + '°C';
          // heure 8
          heure8.innerHTML = data.list[7]['dt_txt'].slice(11, 16);
          icon8.innerHTML =
            `<img src="https://openweathermap.org/img/wn/` +
            data.list[7]['weather'][0]['icon'] +
            `@2x.png">
          `;
          temp8.innerHTML = Math.round(data.list[7]['main']['temp']) + '°C';
        }
      });
  }
});
