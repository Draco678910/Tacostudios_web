import { useEffect, useState } from "react"

export default function useCart() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const saved = localStorage.getItem("cart")
        if (saved) setCart(JSON.parse(saved))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (joc) => {
        setCart(prev => {
            if (prev.find(item => item.id === joc.id)) return prev
            return [...prev, joc]
        })
    }

    return { cart, addToCart }
}