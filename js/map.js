// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;

function initialize() {
  //ADDING THE MAP
  var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  //ADDING LOCATION TYPE + AUTOCOMPLETE TEXTFIELD FEATURE
  var acOptions = {
  	types: ['establishment']
  }

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
  autocomplete.bindTo('bounds',map);

  //ADDING A MARKER
  var markersOptions = {
  	position: new google.maps.LatLng(37.7831,-122.4039)
  };

  var marker = new google.maps.Marker(markersOptions);
  marker.setMap(map);

  //ADDING INFO WINDOW
  var infoWindowOptions = {
  	content: 'Barbershop Info Window'
  }

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker,'click', function(e){
  	infoWindow.open(map, marker);
  });

}



google.maps.event.addDomListener(window, 'load', initialize);




