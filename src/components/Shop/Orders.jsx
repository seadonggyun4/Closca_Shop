import { useEffect, useMemo } from "react"
import useActions from "../../hooks/useActions"
import useOrders from "../../hooks/useOrders"
import useProducts from "../../hooks/useProducts"

export default function Orders(){
    // Hooks
    const orders = useOrders()
    const products = useProducts()
    const { remove, removeAll } = useActions()
    const totalPrice = useMemo(() => {
        return orders.map(order => {
            const {id, quantity} = order
            const prototype = products.find(p => p.id === id)

            return prototype.price * quantity
        }).reduce((l, r) => l + r, 0)
    }, [orders, products])

    
    // ==================== [ 세션 스토리지 실패의 흔적들 ...] ====================
    
    // orders.forEach((order, i) => {
    //     // 주문 세션 저장 메서드
    //     const setIdSettion = (id) => {
    //         sessionStorage.setItem(`key${i}`, id);
    //         sessionStorage.setItem(`length`, i);
    //     }

    //     setIdSettion(order.id)
    // })

    // // 주문 길이 가져오기 메서드
    // const getLengthSettion = () => {
    //     return sessionStorage.getItem(`length`)
    // }
    // const length = getLengthSettion()

    // useEffect(() => {
    //     for (let i = 0; i < length + 1; i++) {
    //         // 주문 세션 가져오기 메서드
    //         const getIdSettion = (i) => {
    //             return sessionStorage.getItem(`key${i}`)
    //         }
    //         const ordersID = getIdSettion(length)
            
    //         const prototype = products.find(p => p.id === ordersID)
    
    //         const click = () => {
    //             remove(ordersID)
    //         }

    //         if(prototype !== undefined){
    //             const orderBody = document.querySelector('.order__body')
    //             const item = document.createElement('div')
    //             item.classList.add('item')
    //             item.innerHTML = `<div class="img">
    //                                             <img src=${prototype.thumbnail} alt="상품 이미지!!"/>
    //                                         </div>
    //                                         <div class="content">
    //                                             <p class="title"> 1 X ${prototype.title}</p>
    //                                         </div>
    //                                         <div class="action">
    //                                             <p class="price">${prototype.price * 1}</p>
    //                                             <button class="btn btn--link btn--icon">
    //                                                 <i class="icon icon--cross" />
    //                                             </button>
    //                                         </div>`    
    //             orderBody.appendChild(item)
    //         }
        

    //     }
    // })

    const activeCart = () => {
        const overlay = document.querySelector('.over-lay')
        const emty = document.querySelector('.empty.sm-only')
        const order = document.querySelector('.order-modile.sm-only')

        overlay.classList.add('active')
        if(emty){
            emty.classList.add('active')
        } else {
            order.classList.add('active')
        }
    }

    const disableCart = (e) => {
        const emty = document.querySelector('.empty.sm-only')
        const order = document.querySelector('.order-modile.sm-only')

        e.currentTarget.classList.remove('active')
        if(emty){
            emty.classList.remove('active')
        } else {
            order.classList.remove('active')
        }
    }
    


    // 주문목록상태 가 없을때
    if(orders.length <= 0){
        return(
           <aside className="cart">
                <div className="empty sm-hidden">
                    <div className="empty__title">You don't have any orders</div>
                    <div className="empty__subtitle">Click on a + to add an orders</div>
                </div>
                <div className="empty sm-only">
                    <div className="empty__title">You don't have any orders</div>
                    <div className="empty__subtitle">Click on a + to add an orders</div>
                </div>
                <div className="mobile-btn btn btn--secondary sm-only" onClick={activeCart}>Show Cart</div>
                <div className="over-lay sm-only" aria-hidden="true" onClick={disableCart} ></div>
           </aside>
        )
    } else { 
        // 주문목록 상태 가 있을때
        return(
            <aside className="cart">
                <div className="order sm-hidden">
                    {/* 주문 목록 */}
                    <div className="order__body">
                        {/* orders상태 반복 */}
                        {orders.map( (order) => {
                            const { id } = order



                            const prototype = products.find(p => p.id === id)
                            const click = () => {
                                remove(id)
                            }



                            return(
                                <div className="item" key={id}>
                                    <div className="img">
                                        <img src={prototype.thumbnail} alt="상품 이미지!!"/>
                                    </div>
                                    <div className="content">
                                        <p className="title">{order.quantity} X {prototype.title}</p>
                                    </div>
                                    <div className="action">
                                        <p className="price">${prototype.price * order.quantity}</p>
                                        <button className="btn btn--link btn--icon" onClick={click}>
                                            <i className="icon icon--cross" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* 주문 합계 */}
                    <div className="order__total">
                        <hr/>
                        <div className="item">
                            <div className="content">Total</div>
                            <div className="action">
                                <div className="price total-price" >${totalPrice}</div>
                            </div>
                            <button className="btn btn--link btn--icon" onClick={removeAll}>
                                <i className="icon icon--delete" />
                            </button>
                        </div>
                    </div>
                    <button className="btn btn--secondary" style={{margin: 10, height: 50}}>Check Out</button>
                </div>
                <div className="order-modile sm-only">
                    {/* 주문 목록 */}
                    <div className="order__body">
                        {/* orders상태 반복 */}
                        {orders.map( (order) => {
                            const { id } = order



                            const prototype = products.find(p => p.id === id)
                            const click = () => {
                                remove(id)
                            }



                            return(
                                <div className="item" key={id}>
                                    <div className="img">
                                        <img src={prototype.thumbnail} alt="상품 이미지!!"/>
                                    </div>
                                    <div className="content">
                                        <p className="title">{order.quantity} X {prototype.title}</p>
                                    </div>
                                    <div className="action">
                                        <p className="price">${prototype.price * order.quantity}</p>
                                        <button className="btn btn--link btn--icon" onClick={click}>
                                            <i className="icon icon--cross" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* 주문 합계 */}
                    <div className="order__total">
                        <hr/>
                        <div className="item">
                            <div className="content">Total</div>
                            <div className="action">
                                <div className="price total-price" >${totalPrice}</div>
                            </div>
                            <button className="btn btn--link btn--icon" onClick={removeAll}>
                                <i className="icon icon--delete" />
                            </button>
                        </div>
                    </div>
                    <button className="btn btn--secondary" style={{margin: 10, height: 50}}>Check Out</button>
                </div>
                <div className="mobile-btn btn btn--secondary sm-only" onClick={activeCart}>Show Cart</div>
                <div className="over-lay sm-only" aria-hidden="true"  onClick={disableCart}></div>
            </aside> 
        )
    }
    


    
    
    




}