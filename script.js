ymaps.ready(init);

let center = [61.093725374606215,72.61775300038127]

var placemarks = [
    {
        latitude: 61.093725374606215,
        longitude: 72.61775300038127,
		balloonContent: [
			`
			<div class="map_balloon"> 

				<img class="map_img" src="img/so.jfif"/>

				<div class="balloon_info">
					<p href="">Пропала собака, чёрный цвет, примерно в 15:04</p>
				</div>

				<div class="balloon_contacts">
					<p>Пожалуйста, при находке обратитесь по номеру: 89661899925</p>
				</div>

			</div>
		`
		] 

    }, 
	{
        latitude: 61.103725374606215,
        longitude: 72.62775300038127,
		balloonContent: [
			`
			<div class="map_balloon">

				<img class="map_img" src="img/ko.jfif"/>

				<div class="balloon_info">
					<p href="">Пропала кошка, рыжий цвет. Пропала кошка, рыжий цвет. Пропала кошка, рыжий цвет. Пропала кошка, рыжий цвет. Пропала кошка, рыжий цвет.</p>
				</div>

				<div class="balloon_contacts">
					<p>Пожалуйста, при находке обратитесь по номеру: 89661899925</p>
				</div>

			</div>
		`
		] 

    }
],

	geoObjects= [];


function init() {
    var map = new ymaps.Map('map', {
        center: center,
        zoom: 16,
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {

                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}