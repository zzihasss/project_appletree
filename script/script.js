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

var map = new kakao.maps.Map(container, options);

var imageSrc = './img/지도-마커.png', // 마커이미지의 주소입니다
	imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
	imageOption = { offset: new kakao.maps.Point(25, 50) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new kakao.maps.LatLng(37.4895097, 126.7835609); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
	position: markerPosition,
	image: markerImage, // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 상담신청

let form = document.querySelector('#footer');
let btnSubmit = document.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	// 증상
	if (!isTxt1('cc', 2)) {
		e.preventDefault();
	}
	// 이름
	if (!isTxt2('username', 1)) {
		e.preventDefault();
	}
	// 연락처
	if (!isTxt3('phonenumber', 7)) {
		e.preventDefault();
	}
});
function isTxt1(cc, len) {
	let input = form.querySelector(`[name=${cc}]`);
	let txt = input.value;
	if (txt.length >= 2) {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		return true;
	} else {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		let errMsg = document.createElement('p');
		errMsg.append(`증상을 2글자 이상 입력하세요.`);
		input.closest('td').append(errMsg);
		return false;
	}
}
function isTxt2(username, len) {
	let input = form.querySelector(`[name=${username}]`);
	let txt = input.value;
	if (txt.length >= 1) {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		return true;
	} else {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		let errMsg = document.createElement('p');
		errMsg.append(`이름을 정확히 입력하세요.`);
		input.closest('td').append(errMsg);
		return false;
	}
}
function isTxt3(phonenumber, len) {
	let input = form.querySelector(`[name=${[phonenumber]}]`);
	let txt = input.value;
	if (txt.length >= 7) {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		return true;
	} else {
		let iserrMsgs = input.closest('td').querySelectorAll('p');
		if (iserrMsgs.length > 0) {
			input.closest('td').querySelector('p').remove();
		}
		let errMsg = document.createElement('p');
		errMsg.append(`연락처를 정확히 입력하세요.`);
		input.closest('td').append(errMsg);
		return false;
	}
}
