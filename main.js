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

        fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=csbs")
          .then(blob => blob.json())
          .then(data => {
            let locations = data.locations;
            console.log(locations)


            let state = stateInfo;
            let county = countyInfo;

            let confirmedNum = 0;
            let deathsNum = 0;
            for (var i = 0; i < locations.length; i++) {
              if (locations[i].county === county && state === locations[i].province) {
                confirmedNum = locations[i].latest.confirmed;
                deathsNum = locations[i].latest.deaths;

                break;
              }
            }

            let confirmed = document.getElementById("confirm");
            let deaths = document.getElementById("deaths");
            let place = document.getElementById("loc");

            console.log(state, county)
            place.innerHTML = "Place: " + county + " County, " + state;

            confirmed.innerHTML = confirmedNum;
            deaths.innerHTML = deathsNum;
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
