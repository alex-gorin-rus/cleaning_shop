import React, {Component} from 'react';

export default function EmptyCart(){
  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Моя корзина пока пуста</h1>
        </div>
      </div>
    </div>
  );
}