import Banner from '../components/Shop/Banner'
import Products from '../components/Shop/Products'
import Orders from '../components/Shop/Orders'

export default function Shop  (){
    

    return (
        <>
            <Banner />
            <div className="container">
                <Products />
                <Orders />
            </div>
        </>
    )
}