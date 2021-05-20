import React from 'react';

import CustomBotton from '../custom-button/custom-botton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"/>
    <CustomBotton> GO TO CHECKOUT </CustomBotton>
  </div>
)

export default CartDropdown;