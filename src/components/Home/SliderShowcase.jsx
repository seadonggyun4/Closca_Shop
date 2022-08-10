import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade} from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SliderShowcase(){
    // 쿠키 저장 메서드
    const setslideCookie = (index) => {
        var slideCookie = "";
        slideCookie += `slide=${index}`;

        // 쿠키에 넣는다.
        document.cookie = slideCookie;
    }


    const onSwiper = () => {
        
    };

    const onSlideChange = (sld) => {
        //슬라이드 바뀔때 data-sld 속성 생성
        document.body.setAttribute('data-sld', sld.realIndex);

        //쿠키 세팅
        const index = sld.realIndex
        setslideCookie(index)
    };



    return(
        <div className="swiperContainer">
            <div className="mySwiper">
                <Swiper className="swiper-wrapper" slides-per-view={1}  onSwiper={onSwiper} onSlideChange={onSlideChange} modules={[Navigation, Pagination, EffectFade]} effect="fade" loop="true"  navigation>
                    <SwiperSlide className="swiper-slide" id="beach">
                        <div className="content">
                            <div className="content-header">
                                <h3 className="content-title-top">Closca Bottle</h3>
                                <h1 className="content-title">Beach</h1>
                                <h2 className="content-subtitle">€ 39.90</h2>
                            </div>
                            <div className="content-main">
                                <div className="content-main__title">In 20 years, there could be more plastic in our oceans than fish.</div>
                                <div className="content-main__subtitle">Plastic pollution injures more than 100.000 marine animals every year.It takes around 450 years for one plastic bottle to decompose.</div>
                                <div className="more-menu">
                                    Shop Now
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="-5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <div className="images-wrapper">
                                <img className="images-bg" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530" alt=""/>
                                <img className="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514"  alt=''/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" id="savanna">
                        <div className="content">
                            <div className="content-header">
                                <h3 className="content-title-top">Closca Bottle</h3>
                                <h1 className="content-title">Savanna</h1>
                                <h2 className="content-subtitle">€ 39.90</h2>
                            </div>
                            <div className="content-main">
                                <div className="content-main__title">The Earth’s area affected by desertification is approx 11 times India’s size.
                                </div>
                                <div className="content-main__subtitle">The Savannas act as a carbon sink, absorbing CO2 from the atmosphere and helping to maintain the balance of global temperatures.</div>
                                <div className="more-menu">
                                    Shop Now
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="-5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <div className="images-wrapper">
                                <img className="images-bg" src="https://images.unsplash.com/photo-1613109526778-27605f1f27d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt=""/>
                                <img className="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557" alt=''/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" id="glacier">
                        <div className="content">
                            <div className="content-header">
                                <h3 className="content-title-top">Closca Bottle</h3>
                                <h1 className="content-title">Glacier</h1>
                                <h2 className="content-subtitle">€ 39.90</h2>
                            </div>
                            <div className="content-main">
                                <div className="content-main__title">Glaciers contain 75% of the World's freshwater.
                                </div>
                                <div className="content-main__subtitle">The effects of melting ice glaciers are biodiversity loss, the rising of the sea level and the deficiency of freshwater, among others.</div>
                                <div className="more-menu">
                                    Shop Now
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="-5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <div className="images-wrapper">
                                <img className="images-bg" src="https://www.discover-the-world.com/app/uploads/2018/05/chile-patagonia-calving-glacier-is-1150x863-c-default.jpg" alt=""/>
                                <img className="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Glacier_OK.png?v=7185877315400411030" alt=''/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" id="coral">
                        <div className="content">
                            <div className="content-header">
                                <h3 className="content-title-top">Closca Bottle</h3>
                                <h1 className="content-title">Coral</h1>
                                <h2 className="content-subtitle">€ 39.90</h2>
                            </div>
                            <div className="content-main">
                                <div className="content-main__title">We will have lost 60% of our coral reefs by 2030.
                                </div>
                                <div className="content-main__subtitle">Coral reefs are essential to humans, as they protect the shorelines and are a source of
                                nutrients and habitat for thousands of marine species.</div>
                                <div className="more-menu">
                                    Shop Now
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="-5" y1="12" x2="19" y2="12" />
                                        <line x1="15" y1="16" x2="19" y2="12" />
                                        <line x1="15" y1="8" x2="19" y2="12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="images">
                            <div className="images-wrapper">
                                <img className="images-bg" src="https://images.unsplash.com/photo-1546500840-ae38253aba9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8 &amp;ixlib=rb-1.2.1 &amp;auto=format &amp;fit=crop &amp;w=3260 &amp;q=80" alt=""/>
                                <img className="images-bottle" src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Coral_OK.png?v=14596995446202437119" alt=''/>   
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}