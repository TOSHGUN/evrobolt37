/*global $, jQuery, alert*/

$(document).ready(function () {

    "use strict";

	// Скроллинг к секции с ID
	$("a[href*='#sec-goods']").mPageScroll2id();
	$("a[href*='#sec-contacts']").mPageScroll2id();
	$("a[href*='#main-footer']").mPageScroll2id();
	
	// PopUp for Item Card
	$(".popup-work-descr").magnificPopup({type: "inline"});

	ymaps.ready(init);
	var IKMap, myPlacemark;

	function init(){
		IKMap = new ymaps.Map("ik-map", {
			center: [56.989596, 40.995229],
			zoom: 16
		});
		
		IKMap.controls
			.remove('geolocationControl')
			.remove('trafficControl')
			.remove('rulerControl')
			.remove('searchControl')
			.remove('typeSelector');
		
		IKMap.behaviors.disable([
			'drag',
			//'scrollZoom'
		]);
		
		myPlacemark = new ymaps.Placemark([56.989596, 40.995229], {
			balloonContentHeader: 'Евроболт',
			balloonContentBody: 'Адрес: г. Иваново, ул. Смирнова д. 83<br />Телефон: +7 (4932) 42-62-32<br />E-mail: evrobolt2006@yandex.ru',
			balloonContentFooter: 'Пн-Пт 08:30-18:30<br />Сб-Вс 9:00-16:00',
			hintContent: 'Евроболт - широкий выбор по низким ценам в г.Иваново'
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/map-icon.svg',
			iconImageSize: [43, 63],
			iconImageOffset: [-25, -62]
		});
		
		IKMap.geoObjects.add(myPlacemark);
	}
});