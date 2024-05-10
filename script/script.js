$('.gnb_web > li').hover(
	function () {
		$(this).children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('.submenu').stop().slideUp();
	}
);

$('.btnCall').click(function () {
	$('.menuMo').addClass('on');
});
$('.close').click(function () {
	$('.menuMo').removeClass('on');
});

const menuSlides = document.querySelectorAll('.main_slidemenu article');

menuSlides.forEach((el, index) => {
	el.addEventListener('click', () => {
		for (let el of menuSlides) el.classList.remove('on');
		el.classList.add('on');
	});
});

let bg = document.querySelectorAll($('.bg_container>li'));
console.log($('.bg_container>li'));

let active_index = 0;
let enable_event = true;
let len = $('.service_ul>li').length;

console.log($('.service_ul>li'));
$('.service_ul > li').on('click', function (event) {
	event.preventDefault();
});

function show_bg(index) {
	$('.service_ul > li')
		.filter('.on')
		.stop()
		.animate({ left: '-100%' }, 500, function () {
			$(this).removeClass('on').hide();
		});
	//위 코드는 현재활성화된 슬라이드li를 옆으로(넥스트방향으로) 이동하는 코드

	//이다음코드는 이후 슬라이드가 나타나게하는 코드
	$('.panel>li')
		.eq(index)
		.show()
		.css({ left: '100%' })
		.animate({ left: '0%' }, 500, function () {
			$(this).addClass('on');
			enable_event = true;
		});
	$('.navi>li>a').removeClass('on');
	$('.navi>li').eq(index).children('a').addClass('on');
}
