import { useState, useEffect } from "react"
import gsap from 'gsap'

export default function VerticalScroll(){


    // ============================================================  [ Vertical Scroll animation ] ============================================================
    // gsap 사용
    

    //state
    const [scrollY, setScrollY] = useState();


    // 가로 스크롤 메서드
    const verticalScroll = () => {
        const scrollSection = document.querySelector(".horizontal-scroll__section");
        const scrollContent = document.querySelector(".horizontal-scroll__content");
    
        var scrolled = window.pageYOffset;
        var sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
        var notReachedBottom = parseInt(
            Math.max(
                0,
                scrollSection.getBoundingClientRect().bottom - window.innerHeight
            )
        );
        

        if (scrollSection.offsetTop <= scrolled && notReachedBottom) { 
            gsap.to(scrollContent, {
                x: -sectionOffset
            });
        }
    }

    // 색상변환 메서드
    const changeColor = () => {
        // ============================================================  [ 색상변환 메서드 ] ============================================================
        const scrollSection = document.querySelector(".horizontal-scroll__section");
        const scrollContent = document.querySelector(".horizontal-scroll__content");
        const contentText = document.querySelectorAll(".content div p")

        contentText.forEach((p) => {
            
            const contentTransform = window.getComputedStyle(scrollContent).transform //transform 값 받아오기
            if(contentTransform !== 'none'){

                const XData = Number(contentTransform.match(/-\d*/)[0]) //transform값에서 X데이터만 추출

                if(typeof(XData) !== null ){
                    if(XData < -4000){//초기화
                        scrollSection.style.background = "#fff"
                        scrollSection.style.color = "#000"
                        p.style.color = "rgba(0, 0, 0, 0.6)"
                    } else if(XData < -3300){//fourt color
                        scrollSection.style.background = "#e3857a"
                        scrollSection.style.color = "#f1dba7"
                        p.style.color = "#f1dba7"
                    } else if (XData < -2300){//tird color
                        scrollSection.style.background = "#536fae"
                        scrollSection.style.color = "#eacbd1"
                        p.style.color = "#eacbd1"
                    } else if(XData < -1300){//second color
                        scrollSection.style.background = "#eacbd1"
                        scrollSection.style.color = "#536fae"
                        p.style.color = "#536fae"
                    } else if(XData < -500){//first color
                        scrollSection.style.background = "#bcb8ad"
                        scrollSection.style.color = "#032f35"
                        p.style.color = "#032f35"
                    } else if(XData >= -500){//초기화
                        scrollSection.style.background = "#fff"
                        scrollSection.style.color = "#000"
                        p.style.color = "rgba(0, 0, 0, 0.6)"
                    }
                }
               
            }
        })
    }



    // [ Life Ciycle ]  
    useEffect(() => {
        //window.pageYOffset 값을 저장하기 위함
        window.addEventListener('scroll', () => setScrollY(window.pageYOffset));
   
        verticalScroll()
        changeColor()

        //window.pageYOffset 값을 저장하기 위함
        return () => {
            window.removeEventListener('scroll', () =>
                setScrollY(window.pageYOffset)
            );
        };
    })

    return(
        <section className="about horizontal-scroll__section">
            <div className="horizontal-scroll__wrapper">
                <div className="horizontal-scroll__content">
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveSahara_bolso_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>What attained our violin</h3>
                                <p>Been is in merely immune makes back peacefully.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Sahara_450ml_Close_a3f0e978-72ff-4b5c-878e-dd6cab7e2625_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>Imitation believed nothing soft</h3>
                                <p>A this that not, most god, to in times and a no question.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAmazonia_mochila_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>A the he didn't however white</h3>
                                <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Amazonia_450ml_Close_b215804b-865d-48be-b342-dd7dad7b1604_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>Much of contracting</h3>
                                <p>A gets the can sitting however by turned it built it about and yes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaHelmetLoopHimalaya_wave_8_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>Completely derived</h3>
                                <p>Were no heavy was for little him the seem few be cleaning separated.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Himalaya_450ml_close_b5b06d8b-34bb-43b0-bbbf-4198b804196b_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>What attained our violin</h3>
                                <p>Been is in merely immune makes back peacefully.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAbyss_loop_8_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>Imitation believed nothing soft</h3>
                                <p>A this that not, most god, to in times and a no question.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_ABYSS_450ml_Close_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>A the he didn't however white</h3>
                                <p>Nice structure when on to could hotel cannot as proposal, seven way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/wave_arizona_02_800x800_e6c9f29c-e252-4a7c-8106-96000a71717d_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>Much of contracting</h3>
                                <p>A gets the can sitting however by turned it built it about and yes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__item">
                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Arizona_450ml_Close_4a2823ce-ec02-4b6f-b5b8-4d0b542dd950_1100x.jpg?v=1638455109" alt="상품 이미지"/>
                        </div>
                        <div className="content">
                            <div>
                                <h3>Completely derived</h3>
                                <p>Were no heavy was for little him the seem few be cleaning separated.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}