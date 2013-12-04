function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(49.265984,-123.127491),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  //ADDING LOCATION TYPE + AUTOCOMPLETE TEXTFIELD FEATURE
  var acOptions = {
    types: ['establishment']
    // types: ['beauty_salon', 'hair_care']
  }

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
  autocomplete.bindTo('bounds',map);

  //ADDING A MARKER
  var marker = new google.maps.Marker({
    map: map
  });

  //ADDING INFO WINDOW
  var infoWindow = new google.maps.InfoWindow();

  //ADDING AN EVENT LISTENER FOR THE CLICK EVENT
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
  infoWindow.close();
  var place = autocomplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  marker.setPosition(place.geometry.location);
  // infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  infoWindow.setContent('<div><a href="details.html">' + place.name + '</a><br>');
  infoWindow.open(map, marker);
  google.maps.event.addListener(marker,'click',function(e){

    infoWindow.open(map, marker);

    });
  });

}

google.maps.event.addDomListener(window, 'load', initialize);