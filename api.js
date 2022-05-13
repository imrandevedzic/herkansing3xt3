function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//Date
var today = new Date();

var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
document.getElementById('date').innerHTML = maanden[today.getMonth()];


var dagenWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById('date').innerHTML = dagenWeek[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()];
// End date

//Weather
function getAPIdata() {
  var city="Amsterdam"

  var apiKey= '9f7ba05c7d8da1a9afbab654ff09ab2a'
  // construct request
  var request = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=' + city + '&lang=en';
  // get current weather
  fetch(request)  
  
  // parse response to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // do something with response
  .then(function(response) {
    // show full JSON object
    console.log(response);
    var weatherBox = document.getElementById('weather');
    //weatherBox.innerHTML = response;
    //weatherBox.innerHTML = response.weather[0].description;
    //weatherBox.innerHTML = response.main.temp;
    document.getElementById('cloudImg').src=" " + response.weather[0].icon + '@2x.png';

    var degC = document.getElementById('degree');
    degC = Math.floor(response.main.temp - 273.15);

    // var weatherBox = document.getElementById('weather');
    weatherBox.innerHTML = degC + '&#176;C <br>';

    var description = document.getElementById('description');
    description.innerHTML = response.weather[0].description;
  });
}

// init data stream
getAPIdata();



//map



mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZHkyNjEyIiwiYSI6ImNrbWtsN3czMTEyMHoyd2s1enk1MGpua2sifQ.r0EyBB7Z2WxupnzAjxxe1Q';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-streets-v11',
center:  [4.8936041, 52.3727598],
zoom: 13.5
});
 
// create the popup
var popup1 = new mapboxgl.Popup().setHTML('<h3 id="title">Amsterdam Central Station</h3><p id="popup">A major international railway hub, it is used by 192,000 passengers a day, making it the second busiest railway station in the country after Utrecht Centraal.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.9005805, 52.378901])
.setPopup(popup1) // sets a popup on this marker
.addTo(map);

// create the popup
var popup2 = new mapboxgl.Popup().setHTML('<h3 id="title"> Anne Frank House</h3><p id="popup"> The Anne Frank Houseis a writers house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands. </p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker2';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.8840807, 52.3751558])
.setPopup(popup2) // sets a popup on this marker
.addTo(map);

// create the popup
var popup3 = new mapboxgl.Popup().setHTML('<h3 id="title">Van Gogh Museum</h3><p id="popup">The Van Gogh Museum is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South, close to the Stedelijk Museum, the Rijksmuseum, and the Concertgebouw.</p>'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker3';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([4.88109, 52.3583673])
.setPopup(popup3) // sets a popup on this marker
.addTo(map);


