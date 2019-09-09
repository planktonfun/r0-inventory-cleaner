var Location = function() {

  this.getPosition = function() {
       var $this = this;
    if(localStorage.getItem('latitude') !== null) {
        $this.latitude = localStorage.getItem('latitude');
        $this.longitude = localStorage.getItem('longitude');
        $this.distance = [$this.latitude, $this.longitude];

        lfg.addEvent('addedDistance', [user, localStorage.getItem('latitude'), localStorage.getItem('longitude')]);
      return;
    }

    if(navigator.geolocation){
       // timeout at 60000 milliseconds (60 seconds)
       var options = {timeout:60000};
       navigator.geolocation.getCurrentPosition(function(position){
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          localStorage.setItem('latitude', latitude);
          localStorage.setItem('longitude', longitude);

          $this.latitude = latitude;
          $this.longitude = longitude;
          $this.distance = [latitude, longitude];

          lfg.addEvent('addedDistance', [user, latitude, longitude]);

       }, function(err) {
          if(err.code == 1) {
             alert("Error: Access is denied!");
          } else if( err.code == 2) {
             alert("Error: Position is unavailable!");
          }
       }, options);
    } else{
       alert("Sorry, browser does not support geolocation!");
    }
  }

  this.getPosition();

  this.getDistance = function(user) {
    return this.eucd({
      lat: this.latitude,
      lng: this.longitude
    }, user);
  }

  this.rad = function(x) {
    return x * Math.PI / 180;
  };

  this.eucd = function(p1, p2) {
   var R = 6378137; // Earth’s mean radius in meter
   var dLat = this.rad(p2.lat - p1.lat);
   var dLong = this.rad(p2.lng - p1.lng);
   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
     Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
     Math.sin(dLong / 2) * Math.sin(dLong / 2);
   // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   var c = 2 * Math.asin(Math.sqrt(a));
   var d = R * c;
   return d; // returns the distance in meter
  };
}


var loc = new Location();