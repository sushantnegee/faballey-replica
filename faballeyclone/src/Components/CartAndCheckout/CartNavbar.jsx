import React from 'react'
import styles from '../../Pages/Cart/Cart.module.css'
import { FaShoppingCart, FaCreditCard, FaUserAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
function CartNavbar(props) {
  let NavigateToPage = useNavigate();
  function Navigate(link){
    NavigateToPage(link)
  }


  return (
    <div><div className={styles.CartNavbar}>
    <div className={styles.CartSiteLogo}>
      <img src="https://www.faballey.com/images/logo.png" alt="img" />
      <img src="https://www.faballey.com/images/mobile/moblogo.png" alt="" />
    </div>
    <div className={styles.CartAllIcons}>
      <div onClick={()=>Navigate('/cart')} style={{cursor:"pointer"}} className={props.CartIconStyle ? styles.ActiveIconLowerBorder:styles.InactiveIconColor}>
        <FaShoppingCart className={styles.ReactFaCart} />
        <p>Bag</p>
      </div>
      <div onClick={()=>Navigate('/checkout')} style={{cursor:"pointer"}} className={props.ShippingIconStyle ? styles.ActiveIconLowerBorder:styles.InactiveIconColor}>
        <MdLocalShipping className={styles.ReactMdShip} />
        <p>Shipping</p>
      </div>
      <div onClick={()=>Navigate('/payment')} style={{cursor:"pointer"}} className={props.PaymentIconStyle ? styles.ActiveIconLowerBorder:styles.InactiveIconColor}>
        <FaCreditCard className={styles.ReactFaCart} />
        <p>Payment</p>
      </div>
    </div>
    <div className={styles.CartUserName}>
      <FaUserAlt className={styles.UserIcon}/>
      <p>nishant</p>
    </div>
  </div>
</div>
  )
}

export default CartNavbar