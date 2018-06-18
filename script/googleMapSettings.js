function initMap() {
    let uluru = {lat: 50.026135, lng: 36.214613};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title:"Hello World!",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "img/contacts/marker.png",
            scaledSize: new google.maps.Size(64, 96)
        }

    });
}

