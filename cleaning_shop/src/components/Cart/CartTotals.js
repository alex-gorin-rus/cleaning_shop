import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import '../../App.css';

export default function CartTotals({value}){
  const {cartSubTotal, cartTotal, clearCart} = value;
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button className="btn btn-outline-danger mb-3 px-5"
                onClick={()=> clearCart()}>
                Очистить корзину
              </button>
            </Link>
            <h5>
              <span className="text-title-2">В корзине товаров на сумму: <strong className="red-fonts">{cartTotal}</strong></span><h5> тенге</h5>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}












































//10
