$('.menu1 > li').hover(
	function () {
		$(this).find('.subgnb > li').stop().slideDown();
	},
	function () {
		$(this).find('.subgnb > li').stop().slideUp();
	}
);

$('.menu2 > li').hover(
	function () {
		$(this).find('.subgnb > li').stop().slideDown();
	},
	function () {
		$(this).find('.subgnb > li').stop().slideUp();
	}
);

$('.gnb_web > li').hover(
	function () {
		$(this).children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('.submenu').stop().slideUp();
	}
);

// $(document).ready(function () {
// 	$(window).scroll(function () {
// 		$('.quick').each(function (i) {
// 			var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
// 			var Top_of_window = $(window).scrollTop();

// 			if (bottom_of_window > bottom_of_element) {
// 				$(this).animate({ opacity: '1' }, 700);
// 			}
// 		});
// 	});
// });

// 1번째 슬라이드 메뉴

const menuSlides = document.querySelectorAll('.main_slidemenu article');

menuSlides.forEach((el, index) => {
	el.addEventListener('click', () => {
		for (let el of menuSlides) el.classList.remove('on');
		el.classList.add('on');
	});
});

// 2번째 스와이퍼
var swiper = new Swiper('#treatment', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',

	coverflowEffect: {
		rotate: 50,
		stretch: -100,
		depth: 400,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + '</span>';
		},
	},
	loop: true,
	spaceBetween: 0,
	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},
	speed: 1000,
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

// special 부분
//https://codepen.io/GreenSock/pen/oNdNLxL

var $sections = document.querySelectorAll('#container');
var tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.special',
		pin: true,
		scrub: 0.3,
		start: '0%',
		end: '100%',
	},
});
tl.from($sections, {
	x: '450',
	autoAlpha: 1,
	duration: 2,
	ease: 'none',
	stagger: 3,
	pin: true,
}).to($sections, {
	x: '-1700',
	duration: 3,
	pin: true,
	scrub: true,
});

// youtube api
let vidList = document.querySelector('.vidlist');
let key = 'AIzaSyBt3lo-oPPYPt30aJ3ISHHIwo-tB4Vo0Jo';
let playListId = 'PLVLOMqfu3-zvOvrs4zQsK8uNBbHrdubh6';
let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=6`;

fetch(url)
	.then((data) => {
		console.log(data);
		return data.json();
	})
	.then((json) => {
		console.log(json);
		let items = json.items;
		//json.items로 배열의 형태로 데이터들을 불러오고 있음
		let result = '';
		items.map((el) => {
			result += `
            <article>
				<a href="${el.snippet.resourceId.videoId}" class="pic">
					<img src="${el.snippet.thumbnails.medium.url}" alt="" />
				</a>
		    </article>`;
			// console.log(result);
			vidList.innerHTML = result;
		});
	});

let article = document.querySelectorAll('article');
console.log(article);

vidList.addEventListener('click', (e) => {
	e.preventDefault();
	if (!e.target.closest('a')) return;

	let vidId = e.target.closest('a').getAttribute('href');
	let pop = document.createElement('figure');
	pop.classList.add('pop');
	pop.innerHTML = `
	 <iframe src="https://www.youtube.com/embed/${vidId}"
	 frameobrder ="0" width="100%" height="100%"></iframe>
	 <span class="btnClose">X</span>
	 `;
	vidList.append(pop);
});

let close = document.querySelector('.btnClose');
vidList.addEventListener('click', (e) => {
	let pop = vidList.querySelector('.pop');

	if (pop) {
		let close = pop.querySelector('.btnClose');
		if (e.target == close) pop.remove();
	}
});

// 지도 좌측 화살표
$('.left_button > img').click(function () {
	$('#left').css('left', '0');
	$('#map').css('width', '50%');
	$('#map').css('position', 'absolute');
	$('#map').css('top', '0');
	$('#map').css('right', '0');
});
