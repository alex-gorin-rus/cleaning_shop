import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from "./Button";
import {ButtonPrice} from './ButtonPrice';
import {Link} from 'react-router-dom';
import '../App.css';


export default class Modal extends Component {
  render(){
    return(
      <ProductConsumer>
        {(value)=>{
          const {modalOpen,closeModal} = value;
          const {id, img, title, info, inCart, price, volume} = value.modalProduct;


          if(!modalOpen){
            return null;
          }
          else{
            return(
            <ModalContainer>
              <CleanersContainer>
                <Title>{title}</Title>
                <img src={img} className=" cleanersImg" alt="image"></img>
                <ModalText>{info}</ModalText>


            <CleanersPrice>
              <div className="container-fluid text-center  d-lg-block">
                  <div className="row">
                      <p className="ml-5 mr-4">{volume}</p>
                      <p className="ml-5">{price} тенге</p>
                    <button className="buttonInModal ml-5 my_cart cart-btn"
                    cart = "true"
                    disabled={inCart ? true : false}
                    onClick={()=>{
                      value.addToCart(id);
                    }} >
                    {inCart ? (<p className="mb-0" disabled>
                    Добавлено в корзину
                    </p>):(<i className="fas fa-cart-plus p-2" />)}
                    </button>
                  </div>
                </div>
              </CleanersPrice>
                <PhoneOrdering>
                  Вы можете оплатить выбранные товары картой банка, либо заказать их по телефону: 00-00-00
                </PhoneOrdering>
                <ButtonCont>
                  <Link to="/cleaners">
                    <ButtonContainer className="button-container" onClick={()=>closeModal()}>
                      Вернуться
                    </ButtonContainer>
                  </Link>
                  <Link to="/cart">
                    <ButtonPrice className="button-container" onClick={()=>closeModal()}>
                      Перейти в корзину
                    </ButtonPrice>
                  </Link>
                </ButtonCont>
              </CleanersContainer>
            </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.5);
display:flex;
z-index:50;
#modal{
  background:white;
}
.my_cart{
  background:#EDC2C0;
  border-radius:7%;
  padding:2px 20px 2px 20px;
  border:2px solid red;
  transition:0.5s linear;
}
.my_cart:hover{
  border:2px solid #1226DE;
  color:white;
  background:red;
  transition:0.5s linear;
}
`;

const Title = styled.p`
  position:absolute;
  top:10%;
  width:100%;
  text-align: center;
  font-size:1.5rem;
  font-family: 'Literata', serif;
`


const CleanersContainer = styled.div`
position:fixed;
top:0;
left:20%;
width:60vw;
height:100%;
background:white;
`

const ModalText = styled.p`
position:absolute;
top:20%;
left:45%;
right:2%;
font-size:1rem;
`

const CleanersPrice = styled.div`
position:absolute;
top:65%;
left:0;
width:100%;
height:20%;

`

const ButtonCont = styled.div`
position: absolute;
top:90%;
left:60%;
`
const PhoneOrdering = styled.div`
position:absolute;
top:80%;
left:10%;
width:100%;
height:10%;
color:red;
font-size:1rem;
font-family: 'Concert One', cursive !important;
`














































//1
