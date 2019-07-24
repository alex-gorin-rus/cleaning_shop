import React, {Component} from 'react';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartColums from './CartColums';
import CartTotals from './CartTotals';

export default class MyCart extends Component{
  render(){
    return(
      <section className="pt-5">
        <ProductConsumer>
          {value =>{
            const {cart} = value;
            if(cart.length > 0){
              return(
                <React.Fragment>
                  <Title title="моя корзина" />
                  <CartTotals value={value} />
                  <CartColums />
                  <CartList value={value} />
                </React.Fragment>
              );
            }else{
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}


const DivForEmptyCart = styled.div`
position: absolute;
top:20%;
border:1px solid red;
`
