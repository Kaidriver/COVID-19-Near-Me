function getLoc() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({'location': pos}, function(results, status) {
      if (status == 'OK') {
        let address = results[7].address_components;
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

            place.innerHTML = "Place: " + county + " County, " + state;
            confirmed.innerHTML = "Confirmed: " + data[state][county].confirmed;
            deaths.innerHTML = "Deaths: " + data[state][county].deaths;
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
