import React from 'react'
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className="cart">
            <a href="#"><FontAwesomeIcon icon={faShoppingCart} /><span>0</span> </a>
        </div>
    )
}

export default CartWidget
