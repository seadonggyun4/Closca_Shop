import { useCallback, useState } from 'react'
import AppStateContext from '../contexts/AppStateContexts'
import handleData from '../data/handleData'

const AppStateProvider = ({children}) => {

    const [products,] = useState(handleData())
    const [orders, setOrders] = useState([]);
    // 상품 추가함수
    const addToOrder = useCallback((id) => {
      setOrders(orders => {
        const finded = orders.find(order => order.id === id)

        if(finded === undefined){
          return [...orders, {id, quantity:1}]
        } else {
          return orders.map(order => {
            if(order.id === id){
              return {
                id,
                quantity: order.quantity + 1
              }
            } else {
              return order
            }
          })
        }
      })
    },[])
    // 상품 제거함수
    const remove = useCallback((id) => {
      setOrders(orders => {
        return orders.filter(order => order.id !== id)
      })
    },[])
    // 상품 모두 제거함수
    const removeAll = useCallback(() => {
      setOrders([])
    },[])


    return(
        <AppStateContext.Provider value={{
            products,
            orders,
            addToOrder,
            remove,
            removeAll
        }}>
            {children}
        </AppStateContext.Provider>
    )
}


export default AppStateProvider