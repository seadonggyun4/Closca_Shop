import { useEffect } from "react"

export default function Loding(){
    
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

    // 쿠키 저장 메서드
    const setLoadingCookie = () => {
        var loadingCookie = "";
        loadingCookie += "loading=on;";
    
        // 쿠키에 넣는다.
        document.cookie = loadingCookie;
    }
      
      
    // 쿠키 가져오기 메서드
    const getCookie = (Name) => {
        let search = Name + "="
        if (document.cookie.length > 0) {
            let offset = document.cookie.indexOf(search)
            if (offset !== -1) {
                offset += search.length
                    
                let end = document.cookie.indexOf(";", offset)
                
                if (end === -1) end = document.cookie.length
                return unescape(document.cookie.substring(offset, end))
            }
        }
        return "";
    }
    
    
    
    useEffect(() => {
        if(getCookie("loading") === "on"){
            const loading = document.querySelector('.loding')
            loading.style.display = "none"

        } else {

            disableScroll() //스크롤 방지
            setTimeout(() => {
                const loading = document.querySelector('.loding')
                const waveBox = document.querySelector('.loading__wavebox')
    
                waveBox.classList.add('active')
                
                setTimeout(() => {
                    loading.classList.add('active')
                    enableScroll()// 스크롤 활성화
                    setLoadingCookie()//쿠키 저장
                },1000)
                
            },11000)

        }

    })



    return(
        <section className="loding">
            <h1 className="loding__title--effect">
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
            <div className="loading__wavebox">
                <div className="waves" aria-hidden="true">
                    <div className="wave wave1" ></div>
                    <div className="wave wave2" ></div>
                    <div className="wave wave3" ></div>
                    <div className="wave wave4" ></div>
                </div>
            </div>
            <div className="loading__area">
                <div className="loading__wrapper">
                    <div className="loading__bar">
                        <div className="loading__bg"></div>
                    </div>
                </div>
          </div>
        </section>
    )
}