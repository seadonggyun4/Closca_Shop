import { useEffect } from "react";


export default function Header() {

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; } 
        }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }

      


    //LifeCiycle
    useEffect(() => {
      setTimeout(() => {
        const container = document.querySelector('.container')
        const footer = document.querySelector('.footer')
        const title = document.querySelector('.banner .banner__title')
        const titleEffect = document.querySelector('.banner .banner__title--effect')
        const btnArea = document.querySelector('.banner .banner__btn__area')
        const loadingArea = document.querySelector('.banner .banner__loading__area')

        container.classList.add('hide')
        footer.style.display = "none"
        // 스크롤 방지
        disableScroll()
  
        setTimeout(() => {
          titleEffect.classList.add('hide')
          title.classList.add('show')
          loadingArea.classList.add('show')
          container.classList.remove('hide')


          setTimeout(() => {
            loadingArea.classList.remove('show')
            
            setTimeout(() => {
              btnArea.classList.add('show')
              footer.style.display = "block"
              setTimeout(() => {
                // 스크롤 활성화
                enableScroll()
              }, 500)  

            }, 1000)
            
          },15000)
          
        }, 10000);
      }, 1)
    },[])

    // 아래로 이동 버튼
    const moveDown = () => {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    }

    

    return (
        <div className="banner">
          <h1 className="banner__title--effect">
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
            <div className="text" aria-hidden="true">CloscaShop</div>
          </h1>
          <h1 className="banner__title">Closca Shop</h1>
          <div className="banner__subtitle">
            이 사이트는 React 와 Redux를 공부하며 만든 사이트 입니다.<br />
            해당 사이트에서 SCSS 와 WebGL을 이용해 만든 멋진 효과를 경험해 보세요 😃
          </div>
          <div className="banner__btn__area" >
              <button onClick={moveDown}>Move Down</button>
          </div>
          <div className="banner__loading__area">
            <div className="loading__word">
              Loading
            </div>
            <div className="loading__wrapper">
              <div className="loading__bar">
                <div className="loading__bg"></div>
              </div>
            </div>
          </div>
        </div>
    );
  }