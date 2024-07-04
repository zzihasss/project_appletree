// 지도 좌측 화살표
$('.left_button > img').click(function () {
	$('#left').css('left', '0');
	$('#map').css('width', '50%');
	$('#map').css('position', 'absolute');
	$('#map').css('top', '0');
	$('#map').css('right', '0');
});
