import React, {Component} from 'react';
import '../../App.css';

export default function CartColums(){
  return(
    <div className="container-fluid text-center d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 my-font">
          Название продукта
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          Объем
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          Цена
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          колличество:
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          Общая сумма за данный продукт:
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          Удалить этот продукт из корзины
        </div>
      </div>
    </div>
  );
}
