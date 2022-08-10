import { useMemo } from "react"
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
    // console.log(orders)

    // 주문목록상태 가 없을때
    if(orders.length === 0){
        return(
           <aside>
                <div className="empty">
                    <div className="empty__title">You don't have any orders</div>
                    <div className="empty__subtitle">Click on a + to add an orders</div>
                </div>
           </aside>
        )
    } else { 
        // 주문목록 상태 가 있을때
        return(
            <aside>
                <div className="order">
                    {/* 주문 목록 */}
                    <div className="order__body">
                        {/* orders상태 반복 */}
                        {orders.map(order => {
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
                                <div className="price">${totalPrice}</div>
                            </div>
                            <button className="btn btn--link btn--icon" onClick={removeAll}>
                                <i className="icon icon--delete" />
                            </button>
                        </div>
                    </div>
                    <button className="btn btn--secondary" style={{margin: 10, height: 50}}>Check Out</button>
                </div>
            </aside> 
        )
    }

}