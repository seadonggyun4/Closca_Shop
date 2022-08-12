import useActions from "../../hooks/useActions";
import useProducts from "../../hooks/useProducts";
import {Curtains, Plane} from 'curtainsjs'; //for webGL
import gsap from "gsap"; // for gsap
import { useEffect } from "react";




export default function Products() {
    //Hooks
    const  products  = useProducts()
    const { addToOrder } = useActions()

    //LifeCiycle
    useEffect(() => {
      
          class WebglHover {
            constructor(set) {
              this.canvas = set.canvas
              this.webGLCurtain = new Curtains({
                container: this.canvas,
                watchScroll: false,
                pixelRatio: Math.min(1.5, window.devicePixelRatio)
              })
              this.planeElement = set.planeElement
              this.mouse = {
                x: 0,
                y: 0
              }
              this.params = {
                vertexShader: document.getElementById("vs").textContent,
                fragmentShader: document.getElementById("fs").textContent,
                widthSegments: 40,
                heightSegments: 40, // 40*40*6 = 9600 vertices
                uniforms: {
                  time: {
                    name: "uTime",
                    type: "1f",
                    value: 0
                  },
                  mousepos: {
                    name: "uMouse",
                    type: "2f",
                    value: [0, 0]
                  },
                  resolution: {
                    name: "uReso",
                    type: "2f",
                    value: [window.innerWidth, window.innerHeight]
                  },
                  progress: {
                    name: "uProgress",
                    type: "1f",
                    value: 0
                  }
                }
              }
              this.initPlane()
            }
          
            initPlane() {
              this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params)
          
              if (this.plane) {
                this.plane.onReady(() => {
                  this.update()
                  this.initEvent()
                })
              }
            }
          
            update() {
              this.plane.onRender(() => {
                this.plane.uniforms.time.value += 0.01
          
                this.plane.uniforms.resolution.value = [window.innerWidth, window.innerHeight]
              })
            }
          
            initEvent() {
              this.planeElement.addEventListener("mouseenter", () => {
                gsap.to(this.plane.uniforms.progress, .8, {
                  value: 1
                })
              })
          
              this.planeElement.addEventListener("mouseout", () => {
                gsap.to(this.plane.uniforms.progress, .8, {
                  value: 0
                })
              })
            }
          }
          
          document.querySelectorAll('.product').forEach(product => {
            const canvas = product.querySelector('.canvas')
            const planeElement = product.querySelector('.product__thumbnail')

            
            new WebglHover({
              canvas,
              planeElement
            })
          })

    },[])


    
    //HTML 랜더
    return (
      <main>
        <div className="products">
          {/* prtotypes상태 반복 */}
          {products.map((item) => {
            const {id, thumbnail, backThumbnail, maskThumbnail, title, price, desc} = item

            // 장바구니에 아이템 id 값 넘기는 함수
            const click = () => {
              addToOrder(id)
            }

            return(
                <div className="product" key={id}>
                    <div className="canvas"></div>
                    <div className="product__thumbnail">
                        <img src={thumbnail}  alt="상품 이미지!" data-sampler="texture0" id="texture0" crossOrigin="anonymous"/>
                        <img src={backThumbnail} alt="상품 배경 이미지!" data-sampler="texture1" id="texture1" crossOrigin="anonymous"/>
                        <img src={maskThumbnail} alt="상품 효과 이미지!" data-sampler="map" id="map" crossOrigin="anonymous"/>
                    </div>
                    <div className="product__body">
                        <div className="product__title">
                            <div className="btn btn--primary float--right" onClick={click} style={{marginLeft: 15}}>
                                Add Cart
                                <i className="icon icon--plus"></i>
                            </div>
                            {title}
                        </div>
                        <p className="product__price">$ {price}</p>
                        <p className="product__desc">{desc}</p>
                    </div>
                </div>
            )
          })}
        </div>
      </main>
    );


}