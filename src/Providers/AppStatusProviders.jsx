import { useCallback, useState } from 'react'
import AppStateContext from '../contexts/AppStateContexts'

const AppStateProvider = ({children}) => {
    const [products,] = useState([
        {
          id: "pp-01",
          title: "Wave Antarctica - Blue",
          artist: "Thomas Buisson",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Antarctica_450ml_Close_04765724-94f5-4762-a1b8-c1bf6098454c_1100x.jpg?v=1638455109",
          backThumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/antartida-02_square_1a8289fd-3ff2-4290-9771-13af3da6cbdb_1100x.jpg?v=1638455109",
          maskThumbnail:
            "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/01.jpg",
          price: 10,
        },
        {
          id: "pp-02",
          title: "Wave Antarctica - Red",
          artist: "Ahmed Amr",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Arizona_450ml_Close_4a2823ce-ec02-4b6f-b5b8-4d0b542dd950_1100x.jpg?v=1638455109",
          backThumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/wave_arizona_03_800x800_5738d980-7672-4791-a8bf-6888c52c7a21_1100x.jpg?v=1638455109",
          maskThumbnail:
            "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/02.jpg",
          price: 20,
        },
        {
          id: "pp-03",
          title: "Wave Arizona - Green",
          artist: "Dominik Kandravý",
          desc: "Folder concept prototype by Dominik Kandravý.",
          thumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Amazonia_450ml_Close_b215804b-865d-48be-b342-dd7dad7b1604_1100x.jpg?v=1638455109",
          backThumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAmazonia_mochila_1100x.jpg?v=1638455109",
          maskThumbnail:
            "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/03.jpg",
          price: 30,
        },
        {
          id: "pp-04",
          title: "Wave Arizona - Darkblue",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_ABYSS_450ml_Close_1100x.jpg?v=1638455109",
          backThumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaWaveAbyss_loop_8_860x.jpg?v=1638455109",
          maskThumbnail:
            "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/04.jpg",
          price: 40,
        },
        {
          id: "pp-05",
          title: "Wave Arizona - Lightpurple",
          artist: "Tony Kim",
          desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
          thumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/Closca_Bottle_Wave_Himalaya_450ml_close_b5b06d8b-34bb-43b0-bbbf-4198b804196b_1100x.jpg?v=1638455109",
          backThumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/CloscaHelmetLoopHimalaya_wave_8_1100x.jpg?v=1638455109",
          maskThumbnail:
            "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/05.jpg",
          price: 50,
        },
        {
          id: "pp-06",
          title: "Black Savana",
          artist: "Richard Oldfield",
          desc: `Made exclusively for Protopie Playoff 2021
                  Shout up if you get stuck!
                  For the full experience. View in the Protopie App.
                  #PieDay #PlayOff #ProtoPie`,
          thumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/BLACK_SUN_CLOSED_REDDOT_1100x.jpg?v=1635316925",
          backThumbnail:
            "https://cdn.shopify.com/s/files/1/0689/1443/products/01_Blacksavanna2ok_1100x.jpg?v=1635174448",
          maskThumbnail:
            "https://raw.githubusercontent.com/ivanalbizu/WEBGL-texture-Hover/main/src/img/displacements/06.jpg",
          price: 60,
        },
      ])
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