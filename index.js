const footer = document.querySelector('.footer-bar');

function checkFooterVisibility() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.offsetHeight;

  if (bodyHeight <= windowHeight) {
    // 콘텐츠가 화면보다 짧거나 같을 때 무조건 보여주기
    footer.classList.add('show');
  } else if (scrollY + windowHeight >= bodyHeight - 10) {
    // 스크롤 해서 맨 밑에 도착했을 때 보여주기
    footer.classList.add('show');
  } else {
    footer.classList.remove('show');
  }
}

// 스크롤할 때마다 체크
window.addEventListener('scroll', checkFooterVisibility);

// 페이지 로드할 때 체크 (최초 노출용)
window.addEventListener('load', checkFooterVisibility);
