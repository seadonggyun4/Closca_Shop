import { useEffect } from "react";

export default function Header() {
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