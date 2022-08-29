function initMap() {
    const coor = { lat: 28.1163624, lng: -15.4465691 };
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 16,
            center: coor,
        }
    );

    const marker = new google.maps.Marker({
        position: coor,
        map: map,
    });
}