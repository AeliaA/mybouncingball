$(document).ready(function(){			
	$('.ball').draggable();
	setInterval(function() {
    $('.ball').effect('bounce',1000)
}, 1000);
});