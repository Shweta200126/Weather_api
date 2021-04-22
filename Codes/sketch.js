var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=0a6683906048eba448ec3182721c18d7';
var units = '&units=metric';
var lang = '&lang=';

//Boston, Seattle, Chicago, New York
var input;
var lan;

function setup() {
  createCanvas(400, 250);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');
  lan = select('#lang');
}

  function weatherAsk(){
    var url = api + input.value() + apiKey + units + lang + lan.value();
    loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
  //print(data);
  weather = data;
}

function draw() {
  background(255, 204, 0);

      if (weather){
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        var city = weather.name;
        var lon = weather.coord.lon;
        var lat = weather.coord.lat;
        var max = weather.main.temp_max;
        var min = weather.main.temp_min;
        fill(300, 300, 300);
        text("City: " +city, 5, 20);
        text("Longitude "+lon, 5, 40);
        text("Latitude " +lat, 5, 60);
        text("The current temp is " +temp+"°C", 5, 80);
        text("The humidity is " +humidity, 5, 100);
        text("Min temp is " +min+"°C", 5, 120);
        text("Max temp is " +max+"°C", 5, 140);
        
        ellipse(200, 100, temp, temp);
        fill(0, 0, 0);
        text("Left circle made up of temp's radius.",5, 200);
        fill(300, 300, 300);
        ellipse(300, 100, humidity, humidity);
        fill(0, 0, 0);
        text("Right circle made up of humidity's radius.", 5, 220);
}
}
