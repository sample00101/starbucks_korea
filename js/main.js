/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)


toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


/**
 * 슬라이드 요소 관리
 */
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
  }
});

/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('section.promotion');
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');


// PROMOTION 영역을 숨겨진 상태로 시작하기 위해 "hide" 클래스를 추가
promotionEl.classList.add('hide');

// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  promotionEl.classList.toggle('hide'); // "hide" 클래스 토글
});

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
