function displayLocation(position) 
{
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var pLocation = document.getElementById("location");
    pLocation.innerHTML += latitude + ", " + longitude + "<br>";

}
window.onload = funtion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);

    }else {
        alert("SOrry,this browser doesn't support geolocation!");
    }
    }
