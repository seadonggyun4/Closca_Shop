import { useContext } from "react"
import AppStateContext from "../contexts/AppStateContexts"

export default function useProducts(){
    const {products} = useContext(AppStateContext)

    return products
}