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

        fetch("https://cors-anywhere.herokuapp.com/https://coronavirus-county-api.herokuapp.com/latest")
          .then(blob => blob.json())
          .then(data => {
            console.log(data);

            let state = stateInfo;
            let county = countyInfo;

            let confirmed = document.getElementById("confirm");
            let deaths = document.getElementById("deaths");
            let place = document.getElementById("loc");
            console.log(state, county)
            place.innerHTML = "Place: " + county + " County, " + state;

            if (data[state][county] == null ) {
              confirmed.innerHTML = "0";
              deaths.innerHTML =  "0";
            }
            else {
              confirmed.innerHTML = data[state][county].confirmed;
              deaths.innerHTML = data[state][county].deaths;
            }

          });
      }
      else {
        alert("Failed to fetch location");
      }
    })

  }, function() {
    alert("Failed to fetch location");
  })
}
