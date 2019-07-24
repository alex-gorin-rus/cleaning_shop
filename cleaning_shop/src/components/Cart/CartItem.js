import React, {Component} from 'react';
import {ProductConsumer} from '../../context';
import '../../App.css';


export default function CartItem({item, value}){
  const {id, title, price, total, count, volume} = item;
  const {increment, decrement, removeItem} = value;
  return(
    <div className="row my-1 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <span>{title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span>{volume}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span>{price} тенге</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
        <span className="btn btn-count mx-1">{count}</span>
        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 red-fonts">
        <span>{total} тенге</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cartIcon" onClick={()=> removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
    </div>

    );
}




















































//10
