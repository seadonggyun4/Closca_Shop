import { useEffect } from "react";


export default function Header() {

    //LifeCiycle
    useEffect(() => {
      const title = document.querySelector('.banner__title')
      const btnArea = document.querySelector('.banner__btn__area')

      title.classList.add('active')
      btnArea.classList.add('active')

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
          <h1 className="banner__title">Closca Shop</h1>
          <div className="banner__subtitle">
            이 사이트는 React 와 Redux를 공부하며 만든 사이트 입니다.<br />
            해당 사이트에서 SCSS 와 WebGL을 이용해 만든 멋진 효과를 경험해 보세요 😃
          </div>
          <div className="banner__btn__area" >
              <button onClick={moveDown}>Move Down</button>
          </div>
        </div>
    );
  }