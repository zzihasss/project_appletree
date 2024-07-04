$('#bottom .slidebox .box').eq(0).siblings().hide();

let slideIndex = 0;

setInterval(function () {
	if (slideIndex < 2) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}

	$('#bottom .slidebox .box').eq(slideIndex).siblings().fadeOut();
	$('#bottom .slidebox .box').eq(slideIndex).fadeIn();
}, 3000);

function changeOpacity(val) {
	let image = document.getElementById('after');
	image.style.opacity = val;
}

// 지도 좌측 화살표
$('.left_button > img').click(function () {
	$('#left').css('left', '0');
	$('#map').css('width', '50%');
	$('#map').css('position', 'absolute');
	$('#map').css('top', '0');
	$('#map').css('right', '0');
});
