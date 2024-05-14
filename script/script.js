$('.gnb_web > li').hover(
	function () {
		$(this).children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('.submenu').stop().slideUp();
	}
);

// 메뉴 호출
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

// 2번째 슬라이드 메뉴
let active_index = 0;
let enable_event = true;
$('.service_ul>li').on('click', function (event) {
	event.preventDefault();
	// 현재 활성화클래스가 있는 인덱스를 구함

	// 예: 현재 5번이 보이고 2번을 누르는 상태라면
	// 현재 활성화 클래스가 있는 인덱스는 = 5
	if (enable_event) {
		enable_event = false;

		let current_index = $('.bg_container>li').filter('.on').index();
		let target_index = $(this).index();
		active_index = target_index;
		// 만약 활성화인덱스와 타겟인덱스가 같다면? ==> 해당 li로 이동하게끔
		if (active_index == current_index) {
			$('#tabMenu>ul>li>a').removeClass('on');
			$('.bg_conatiner>li').addClass('on');
		}
	}
});

// 지도
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = {
	//지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.4895097, 126.7835609), //지도의 중심좌표.
	level: 1, //지도의 레벨(확대, 축소 정도)
};

var marker = {
	position: new kakao.maps.LatLng(37.4895097, 126.7835609),
	text: '사과나무치과병원', // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
};

var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
	staticMapOption = {
		center: new kakao.maps.LatLng(37.4895097, 126.7835609), // 이미지 지도의 중심좌표
		level: 3, // 이미지 지도의 확대 레벨
		marker: marker, // 이미지 지도에 표시할 마커
	};

// 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
