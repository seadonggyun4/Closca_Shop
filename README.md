# 내일의 집

![main](https://user-images.githubusercontent.com/84368302/184287843-bb0a4eee-6350-41f3-8135-885580486ff0.PNG)
<br>
<br>

# ✅ 내일의 집이란?
  자취생 들의 필수어플 "오늘의 집" 의 상품판매 페이지의 UI 를 SCSS 를 활용해

크게는Layout 단위부터 componet 단위까지 자세하게 분석한뒤 똑같이 만들어 볼수 있다.
<br>
프런트엔드를 구성하는 가장 기초적인 assets 단위부터 SCSS를 통해 상태관리하는 방법 과 SCSS의 문법 등을 배울수 있다.
<br>
<br>
<br>


## 🔨기술스택 : HTML, SCSS, JavaScript


| Skill | Info       | ✔   |
| ------ | --------------- | --------------- | 
| HTML    | Semantic 한 내일의집 UI Mark up | ✔   |
|         | Login 상태 / 비회원 상태 Mark up | ✔   |
| SCSS     | constants / mixins / modules 선언| ✔   |
|          | layout / components 단위 UI 구축 | ✔   |
| JavaScript | Tiny slider.js 를 활용한 carousel 구현 | ✔ |

<strong>🌱 구현 과정 : (https://seaplus.tistory.com/59) </strong>

<br>
<br>
<br>

# 🔧 UI Mark up

### 유저 인터렉션 에 따른 UI
|         | .is-active | .is-open   |
| ------ | -----------| ------------ | 
| GNB    | ✔ |      |
| LNB    | ✔ |      |
| Star-rating | ✔ |      |
| Select-Group|  ✔ |      |
- .is-active / .is-open 은 사용자의 인터렉션에 따라 반응하기위한 클래스명
- .is-active 클래스는 작동되었다는 상태표시를 함
- .is-open 클래스는 숨어있던 UI를 나타냄
<br>
<br>
<br>

## 경우의수 에 따른 UI
|         | 회원/비회원 | 반응형   | 그외 조건들   |
| ------ | -----------| ------------ | ------------ | 
| GNB    | ✔ |      |   |
| .Sidebar-user    | ✔ |      |   |
| .sidebar-user-menu   | ✔ |      |   |
| .search-modal    | ✔ |      |   |
| .product-info-price |  |   ✔    |  |
| .user-gallery-carousel |  |   ✔    |  |
| .review-item | ✔ |       |  ✔ |
| .inquiry-item | ✔ |       |  ✔ |
| .order-CTA |  |       |  ✔ |

- 다양한 경우에 따라 같은 UI라도 여러종류로 나뉘게 된다. 이를위해 Markup 을 여러번 한 UI
- 회원/비회원 은 로그인/비로그인 상태에 따라 나뉘는 UI.
- 반응형은 기기종류 혹은 디스플레이 넓이에 따라 바뀌는 UI.


<br>
<br>
<br>

# 🔧 Carousels

``` javascript
const productCarousel = tns({
  container: '.product-carousel .slider-list', //케러샐화 시킬 요소들
  controls: false,
  navContainer: '.product-carousel .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
  navAsThumbnails: true,
  arrowKeys: true, //화살표로 움직이기
  autoplay: true, //자동재생
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
  autoplayTimeout: 5000, //자동재생 시간
  //   items: 3,
  //   slideBy: 'page',
})
const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  controls:false,
  navContainer: '.user-gallery.is-mobile .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
  gutter: 4, // 캐러셀 이미지와 이미지 간의 간격
  edgePadding: 16, // 사진 양 옆에 padding 값 부여(캐러셀의 영역이 줄어든다)
  loop: false, //캐러셀 루프 설정
  arrowKeys: true, //화살표로 움직이기
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
})
const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  navContainer: '.user-gallery.is-desktop .thumbnail-list', // 케러셀 요소를 컨트롤할 요소들
  gutter: 6, // 캐러셀 이미지와 이미지 간의 간격
  edgePadding: 75, // 사진 양 옆에 padding 값 부여(캐러셀의 영역이 줄어든다)
  loop: false, //캐러셀 루프 설정
  arrowKeys: true, //화살표로 움직이기
  mouseDrag: true, //마우스 드래그로 움직일수 있는가.
  preventScrollOnTouch: true, //마우스 드래그 콘솔에 오류뜨는거 막기
})
```
사용 라이브러리: <strong>Tiny slider.js</strong>
- 장점은 다른 캐러셀 라이브러리보다 가볍다.
- https://github.com/ganlanyuan/tiny-slider
<br>
<br>
<br>
