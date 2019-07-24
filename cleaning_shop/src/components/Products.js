import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import GoToCart from './GoToCart';

export default class Products extends Component{
  render(){
    const {id, title, info, img, cart, inCart, price, volume} = this.props.cleaners;
    return(
      <ProductWrapper className="info-container">
        <div className="card img-container">

        <ProductConsumer>
          {(value) => (
            <p
              className="details"
                onClick={()=> {
                  value.openModal(id);
              }}>
                Подробнее о продукте
            </p>
          )}
        </ProductConsumer>

            <ProductConsumer>
              {value => (
                <div
                  className="img-container ">
                      <img src={img} alt="image of the cleaner" className="card-img-top" />
                </div>)}
            </ProductConsumer>

              <ProductConsumer>
                {(value) =>{
                  return(
                  <div>
                    <button
                    cart = "true"
                    className="cart-btn"
                      disabled={inCart?true:false}
                      onClick={()=>{
                        value.addToCart(id);
                      }}>
                      {inCart ? (<p className="mb-0 added-to-cart" disabled>Добавлено в корзину</p>) : (<i className="fas fa-cart-plus add-to-cat">Добавить в корзину </i>)}
                    </button>
                  </div>
                  );
                }}
              </ProductConsumer>



        {/*cart footer*/}
          <div className="cart-footer d-flex justify-content-between">
            <p className=" cleaner-title">{title}<span className="div-for-empty"></span> {volume} <span className="div-for-empty"></span>  {price} тенге</p>
          </div>
        </div>
        <div className="go-to-cart"><Link to="/cart"><GoToCart /></Link></div>
      </ProductWrapper>
    );
  }
}


const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition:all 1s linear;

}
.cleaner-title{
  position:absolute;
  width:100%;
  top:0%;
  left:40%;
  color:red;
}
.info-container{
  width:100%;
  height:10%;
}

.details{
  position:absolute;
  top:40%;
  left:-100%;
  transition:all 0.4s linear;
  cursor:pointer;
  font-size:1.2rem;
  z-index:20;
}
.add-to-cat{
  padding-right:10px;
}
.added-to-cart{
  font-family: 'Literata', serif;
  padding-right:10px;
}
.divDetails{
  position:absolute;
  top:40%;
  left:-100%;
  z-index:10;
  font-size:3rem;
  cursor:pointer;
  transition:all 1s linear;
}
.divDetails:hover{
  left:0;
  transition:all 1s linear;
}
.cart-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
  border-radius: 20px;
  padding-top: 5px;
  font-family: 'Literata', serif !important;
}
&:hover {
  .cart-btn{
    left:-19%;
  }
  .card-img-top{
    opacity:0.3;
  }
  .details{
    left:0;
    transition:all 1s linear;
  }
}

.details:hover{
  color:red;
  transition:all 0.4s linear;
}

.img-container{
  position:relative;
  width:90%;
  overflow:hidden;
  background:#E0CDCE;
  margin-bottom:20px;
}
.card-img-top{
  width:10%;
  height:auto;
  opacity:1;
  transition:all 0.5s linear;
}

.cart-btn{
  position:absolute;
  top:0%;
  left:-100%;
  background:var(--lightBlue);
  color:var(--mainWhite);
  border:none;
  border-radius:0.5rem;
  transform:translate(100%);
  transition:all 1s linear;
  padding:0.3rem, 30px, 0.3rem, 0.3rem;
  cursor:pointer;
  z-index:20;
}

.cart-btn:hover{
  cursor:pointer;
}
.go-to-cart{
  position:fixed;
  right:0;
  top:10%;
  width:15%;
  padding:10px 10px 10px 10px;
  border:1px solid var(--mainPink);
  border-radius:5px;
  background:var(--veryLightBlue);
  cursor:pointer;
}

`


Products.propTypes = {
  cleaners:PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    img:PropTypes.string,
    price_0_5_litre:PropTypes.number,
    price_1_litre:PropTypes.number,
    price_5_litre:PropTypes.number,
    inCart_0_5_litre:PropTypes.bool,
    inCart_1_litre:PropTypes.bool,
    inCart_5_litre:PropTypes.bool
  }).isRequired
};
