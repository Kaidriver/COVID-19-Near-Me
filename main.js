var stateLocs = [
{
  "state":"Alaska",
  "latitude":61.3850,
  "longitude":-152.2683
},
{
  "state":"Alabama",
  "latitude":32.7990,
  "longitude":-86.8073
},
{
  "state":"Arkansas",
  "latitude":34.9513,
  "longitude":-92.3809
},
{
  "state":"Arizona",
  "latitude":33.7712,
  "longitude":-111.3877
},
{
  "state":"California",
  "latitude":36.1700,
  "longitude":-119.7462
},
{
  "state":"Colorado",
  "latitude":39.0646,
  "longitude":-105.3272
},
{
  "state":"Connecticut",
  "latitude":41.5834,
  "longitude":-72.7622
},
{
  "state":"Delaware",
  "latitude":39.3498,
  "longitude":-75.5148
},
{
  "state":"Florida",
  "latitude":27.8333,
  "longitude":-81.7170
},
{
  "state":"Georgia",
  "latitude":32.9866,
  "longitude":-83.6487
},
{
  "state":"Hawaii",
  "latitude":21.1098,
  "longitude":-157.5311
},
{
  "state":"Iowa",
  "latitude":42.0046,
  "longitude":-93.2140
},
{
  "state":"Idaho",
  "latitude":44.2394,
  "longitude":-114.5103
},
{
  "state":"Illinois",
  "latitude":40.3363,
  "longitude":-89.0022
},
{
  "state":"Indiana",
  "latitude":39.8647,
  "longitude":-86.2604
},
{
  "state":"Kansas",
  "latitude":38.5111,
  "longitude":-96.8005
},
{
  "state":"Kentucky",
  "latitude":37.6690,
  "longitude":-84.6514
},
{
  "state":"Louisiana",
  "latitude":31.1801,
  "longitude":-91.8749
},
{
  "state":"Massachusetts",
  "latitude":42.2373,
  "longitude":-71.5314
},
{
  "state":"Maryland",

  "latitude":39.0724,
  "longitude":-76.7902

},
{
  "state":"Maine",
  "latitude":44.6074,
  "longitude":-69.3977
},
{
  "state":"Michigan",
  "latitude":43.3504,
  "longitude":-84.5603
},
{
  "state":"Minnesota",
  "latitude":45.7326,
  "longitude":-93.9196
},
{
  "state":"Missouri",
  "latitude":38.4623,
  "longitude":-92.3020
},
{
  "state":"Mississippi",
  "latitude":32.7673,
  "longitude":-89.6812
},
{
  "state":"Montana",
  "latitude":46.9048,
  "longitude":-110.3261
},
{
  "state":"North Carolina",
  "latitude":35.6411,
  "longitude":-79.8431
},
{
  "state":"North Dakota",
  "latitude":47.5362,
  "longitude":-99.7930
},
{
  "state":"Nebraska",
  "latitude":41.1289,
  "longitude":-98.2883
},
{
  "state":"New Hampshire",
  "latitude":43.4108,
  "longitude":-71.5653
},
{
  "state":"New Jersey",
  "latitude":40.3140,
  "longitude":-74.5089
},
{
  "state":"New Mexico",
  "latitude":34.8375,
  "longitude":-106.2371
},
{
  "state":"Nevada",
  "latitude":38.4199,
  "longitude":-117.1219
},
{
  "state":"New York",
  "latitude":42.1497,
  "longitude":-74.9384
},
{
  "state":"Ohio",
  "latitude":40.3736,
  "longitude":-82.7755
},
{
  "state":"Oklahoma",
  "latitude":35.5376,
  "longitude":-96.9247
},
{
  "state":"Oregon",
  "latitude":44.5672,
  "longitude":-122.1269
},
{
  "state":"Pennsylvania",
  "latitude":40.5773,
  "longitude":-77.2640
},
{
  "state":"Rhode Island",
  "latitude":41.6772,
  "longitude":-71.5101
},
{
  "state":"South Carolina",
  "latitude":33.8191,
  "longitude":-80.9066
},
{
  "state":"South Dakota",
  "latitude":44.2853,
  "longitude":-99.4632
},
{
  "state":"Tennessee",
  "latitude":35.7449,
  "longitude":-86.7489
},
{
  "state":"Texas",
  "latitude":31.1060,
  "longitude":-97.6475
},
{
  "state":"Utah",
  "latitude":40.1135,
  "longitude":-111.8535
},
{
  "state":"Virginia",
  "latitude":37.7680,
  "longitude":-78.2057
},
{
  "state":"Vermont",
  "latitude":44.0407,
  "longitude":-72.7093
},
{
  "state":"Washington",
  "latitude":47.3917,
  "longitude":-121.5708
},
{
  "state":"Wisconsin",
  "latitude":44.2563,
  "longitude":-89.6385
},
{
  "state":"West Virginia",
  "latitude":38.4680,
  "longitude":-80.9696
},
{
  "state":"Wyoming",
  "latitude":42.7475,
  "longitude":-107.2085
}
];

var abrevs = {
"Alabama": "AL",
"Alaska": "AK",
"American Samoa": "AS",
"Arizona": "AZ",
"Arkansas": "AR",
"California": "CA",
"Colorado": "CO",
"Connecticut": "CT",
"Delaware": "DE",
"District Of Columbia": "DC",
"Federated States Of Micronesia": "FM",
"Florida": "FL",
"Georgia": "GA",
"Guam": "GU",
"Hawaii": "HI",
"Idaho": "ID",
"Illinois": "IL",
"Indiana": "IN",
"Iowa": "IA",
"Kansas": "KS",
"Kentucky": "KY",
"Louisiana": "LA",
"Maine": "ME",
"Marshall Islands": "MH",
"Maryland": "MD",
"Massachusetts": "MA",
"Michigan": "MI",
"Minnesota": "MN",
"Mississippi": "MS",
"Missouri": "MO",
"Montana": "MT",
"Nebraska": "NE",
"Nevada": "NV",
"New Hampshire": "NH",
"New Jersey": "NJ",
"New Mexico": "NM",
"New York": "NY",
"North Carolina": "NC",
"North Dakota": "ND",
"Northern Mariana Islands": "MP",
"Ohio": "OH",
"Oklahoma": "OK",
"Oregon": "OR",
"Palau": "PW",
"Pennsylvania": "PA",
"Puerto Rico": "PR",
"Rhode Island": "RI",
"South Carolina": "SC",
"South Dakota": "SD",
"Tennessee": "TN",
"Texas": "TX",
"Utah": "UT",
"Vermont": "VT",
"Virgin Islands": "VI",
"Virginia": "VA",
"Washington": "WA",
"West Virginia": "WV",
"Wisconsin": "WI",
"Wyoming": "WY"
}

function update(stateInfo, countyInfo, pos) {

  fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs")
    .then(blob => blob.json())
    .then(data => {
      let locations = data.locations;
      console.log(locations)


      let state = stateInfo;
      let county = countyInfo;

      let confirmedNum = 0;
      let deathsNum = 0;

      let stateCounties = [];
      let totalConfirmed = 0;
      for (var i = 0; i < locations.length; i++) {
        if (state === locations[i].province) {
          if (locations[i].county === county) {
            confirmedNum = locations[i].latest.confirmed;
            deathsNum = locations[i].latest.deaths;
          }

          stateCounties.push(locations[i])
          totalConfirmed += locations[i].latest.confirmed;
        }
      }

      console.log(stateCounties)

      let confirmed = document.getElementById("confirm");
      let deaths = document.getElementById("deaths");
      let place = document.getElementById("loc");

      console.log(state, county)
      place.innerHTML = "Place: " + county + " County, " + state;

      confirmed.innerHTML = confirmedNum;
      deaths.innerHTML = deathsNum;

      let loc = 0;
      for (var i = 0; i < stateLocs.length; i++) {
        if (stateLocs[i].state === state) {
          loc = i;
          break;
        }
      }


      var location = {lat: stateLocs[loc].latitude, lng: stateLocs[loc].longitude};
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: location,
        disableDefaultUI: true
      });
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Current Location'
      });

      for (var i = 0; i < stateCounties.length; i++) {
        let link = `https://us-county-boundary-api.herokuapp.com/api?state=${abrevs[state]}&county=${stateCounties[i].county}`;
        let confirmedCases = stateCounties[i].latest.confirmed;
        let severity = confirmedCases / totalConfirmed * 100.0;

        fetch(link)
          .then(blob => blob.json())
          .then(data => {
              if(data != null) {
                var countyCoords = [];
                for (var j = 0; j < data.shape.length; j++) {
                  let locPair = {lat: parseFloat(data.shape[j][0]), lng: parseFloat(data.shape[j][1])};
                  countyCoords.push(locPair);
                }
                console.log(countyCoords)


                var r, g, b = 0;
                if(severity < 3) {
                  g = 255;
                  r = Math.round(510 - 5.10 * severity);

                }
                else {
                  r = 255;
                  g = 255 - Math.round(5.1 * severity);
                }
                var h = r * 0x10000 + g * 0x100 + b * 0x1;

                var boundary = new google.maps.Polygon({
                  paths: countyCoords,
                  strokeColor: 'black',
                  strokeOpacity: .5,
                  strokeWeight: 1.5,
                  fillColor: '#' + ('000000' + h.toString(16)).slice(-6),
                  fillOpacity: 1
                });

                boundary.setMap(map)
                var infowindow = new google.maps.InfoWindow();
                infowindow.opened = false;

                google.maps.event.addListener(boundary, 'mouseover', function(evt) {

                  infowindow.setContent("Confirmed: " + confirmedCases);
                  infowindow.setPosition(evt.latLng);
                  infowindow.open(map);

                });
                google.maps.event.addListener(boundary, 'mouseout', function(evt) {
                  infowindow.close();
                  infowindow.opened = false;
                });
              }

          });
      }
  });
}
function getLoc() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': pos}, function(results, status) {
      if (status == 'OK') {
        console.log(results)

        let num = 7;
        for (var i = 0; i < results.length; i++) {
          if (results[i].types[0] === "administrative_area_level_2") {
            num = i;
            console.log(num)
            break;
          }
        }
        let address = results[num].address_components;
        let countyInfo = address[0].long_name.split(" ")[0];
        let stateInfo = address[1].long_name;
        update(stateInfo, countyInfo, pos);
      }
      else {
        alert("Failed to fetch location");
      }
    })

  }, function() {
    alert("Failed to fetch location");
  })
}

var expanded = false;
var expanded2 = false;
function expand() {
  if (!expanded) {
    document.getElementById("menu").style.transform = 'scale(3)';
    document.querySelector(".fa-plus").style.opacity = 0;
    expanded = true;
  }
  else {
    document.getElementById("menu").style.transform = 'scale(0)';
    document.getElementById("menu2").style.transform = 'scale(0)';
    document.getElementById("center-text").innerHTML = "Preventative Measures (WHO)";
    document.querySelector(".fa-plus").style.opacity = 1;
    expanded = false;
  }
}


document.getElementById("toggle").addEventListener("click", expand);
var selectors = document.querySelectorAll('.info')

for (var i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener("click", function(evt) {
    let texts = ["Wash Hands Frequently", "Practice Social Distancing", "Avoid Touching Eyes and Mouth", "Cover Your Mouth When Coughing", "Seek Medical Care when Symptoms Occur", "Stay Informed By Health Care Provider", "Symptom: Persistent Coughing", "Symptom: Fever/Tiredness", "Symptom: Difficulty Breathing"];
    document.getElementById("center-text").innerHTML = texts[evt.currentTarget.dataset.num];
    console.log(evt.currentTarget.dataset.num)
    if (evt.currentTarget.dataset.num == 4 && !expanded2) {
      document.getElementById("menu2").style.transform = 'scale(2)'
      expanded2 = true;
    }
    else if (evt.currentTarget.dataset.num < 6){
      document.getElementById("menu2").style.transform = 'scale(0)'
      expanded2 = false;
    }
  });
}


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const msg = new SpeechSynthesisUtterance();
msg.volume = 1;
msg.rate = 1;
msg.pitch = 1;
msg.voiceURI = "Alexa";
msg.lang = "en-US"
recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
  if (transcript.includes("voice control")) {
    msg.text = "Welcome to Coronavirus near me. Say 'get cases' to retrieve local coronavirus cases. Say 'get measures' to get coronavirus preventative measures. Say 'change place' followed by county name and state to search another area";
    speechSynthesis.speak(msg);
  }
  else if (transcript.includes("get preventative measures")) {
    msg.text = "Information source is from WHO. Step 1 Wash Hands Frequently. Step 2 Practice Social Distancing. Step 3 Avoid Touching Eyes and Mouth. Step 4 Seek Medical Care when these symptoms occur: coughing, fever, tiredness, difficulty breathing. Step 4 Practice respiratory hygiene and Step 5 Stay informed by your health care provider."
    speechSynthesis.speak(msg);
  }
  else if (transcript.includes("get cases")) {
    console.log(document.getElementById("loc").value);
    msg.text = `Cases in ${document.getElementById("loc").innerHTML}: ${document.getElementById("confirm").innerHTML} confirmed cases and ${document.getElementById("deaths").innerHTML} deaths.`
    speechSynthesis.speak(msg);
  }
  else if (transcript.includes("change place") || transcript.includes("change Place") || transcript.includes("Change place")) {
    let county = "";
    let words = transcript.split(" ");
    let counter = 2;
    do {
      county += words[counter] + " ";
      counter++;
    } while (words[counter] != "county" && words[counter] != "County");
    county = county.trim();

    let state = "";
    for (var i = counter + 1; i < words.length; i++) {
      state += words[i] + " ";
    }
    state = state.trim();
    update(state, county, null);

    msg.text = `Place updated, say get cases to hear statistics`;
    speechSynthesis.speak(msg);
  }
  console.log(transcript);
});
recognition.addEventListener('end', recognition.start);
recognition.start();

document.getElementById("updateInfo").addEventListener("click", function() {

  let county = document.getElementById("countyInput").value;
  let state = document.getElementById("stateInput").value;

  update(state, county, null);
});
