import React from 'react';
import './cart-dropdown.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';

import CustomBotton from '../custom-button/custom-botton.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          :
          <span className='empty-message'>Your Cart is Empty</span>
      }
    </div>
    <CustomBotton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}> GO TO CHECKOUT
    </CustomBotton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

// withRouter passes the match, history, location objects into the component being rendered
export default withRouter(connect(mapStateToProps)(CartDropdown));