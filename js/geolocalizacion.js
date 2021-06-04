$(document).ready(function () {
  function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

<<<<<<< HEAD
     console.log(lat)
     console.log(lon)
    
     $.get(
      `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`,
      function (data) {
        $.get(
          `https://www.metaweather.com/api/location/${data[0].woeid}`,
          function (weather) {
            $('#futer').html(`TEMPERATURA: <img  src='https://www.metaweather.com/static/img/weather/${weather.consolidated_weather[0].weather_state_abbr}.svg' height='25px'>
            ${weather.consolidated_weather[0].the_temp}°C`);
          }
        );
      }
    );

    }
  if (navigator.geolocation){
          
          navigator.geolocation.getCurrentPosition(function(posision){
            showPosition(posision);
          })
        
        }else{
          alert("navergador no soporta la geolocalizacion")
        }
  
  })
  
