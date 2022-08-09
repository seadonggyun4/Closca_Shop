import { useEffect } from "react"
// import gsap from "gsap"
import ScrollMagic from 'scrollmagic' 

export default function TitleSection(){
    //Life Ciycle
    useEffect(() => {
        // ============================================================  [ Title section animation ] ============================================================
        // scrollMagic 사용
        const heroBackground = document.querySelector('.titleSection__background')

        new ScrollMagic
          .Scene({
            triggerElement: heroBackground,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(heroBackground, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new ScrollMagic.Controller());


        // scrollMagic 사용
        const productImage = document.querySelector('.product-img')   

        new ScrollMagic
          .Scene({
            triggerElement: productImage,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(productImage, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new ScrollMagic.Controller());

        const textContentH3 = document.querySelector('.text-content h3')
        const textContentP = document.querySelector('.text-content p')


        new ScrollMagic
          .Scene({
            triggerElement: textContentH3,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(textContentH3, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new ScrollMagic.Controller());


        new ScrollMagic
          .Scene({
            triggerElement: textContentP,
            triggerHook: .8,
            // duration: "40%"
          })
          .setClassToggle(textContentP, 'active') // setClassToggle(적용될 식별자, 토글될 클래스 명)
          .addTo(new ScrollMagic.Controller());
    },[])
    
    return(
        <section className="titleSection">
            <div className="titleSection__top">
                <div>
                    <h1>Our goal is to create design.</h1>
                    <p>
                        From have searching their not business, officers. Question. Are
                        like…. Periodic structure the evils what's present derive bit
                        without.
                    </p>
                </div>
                <div className="titleSection__background"></div>
            </div>
            <div className="titleSection__bottom">
                <div className="product-img">
                    <img src="https://cdn.shopify.com/s/files/1/0689/1443/products/CBF-caos-450_black4_729014ce-4a6f-4514-a96a-ace4aa3d79ca_1100x.jpg?v=1646639804" alt="product-img"/>
                </div>
                <div className="text-content">
                    <h3>Hero Bottle</h3>
                    <p>
                        This Bottle is sooooo Nice to drink water <br/>
                        and it will make you fill happy!!
                    </p>
                </div>
            </div>
        </section>
    )
}