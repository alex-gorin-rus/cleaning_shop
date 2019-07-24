import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Header extends Component{
  render(){
    return(

      <DivForHeader>
        <DivForHeaderRelative>
          <Home><Link to="/">На главную</Link></Home>
          <Cleaners><Link className="text" to="/cleaners">Моющие средства</Link></Cleaners>
          <Powders><Link className="text" to="/powders">Порошки и кондиционеры</Link></Powders>
          <CarCleaners><Link className="text" to="/car cleaners">Авто химия</Link></CarCleaners>
          <FeedBack><Link className="text" to="/feedback">Отзывы</Link></FeedBack>
          <Contacts><Link className="text" to="/contacts">Контакты</Link></Contacts>
            <MyBacket><i className="fa fa-cart-plus pr-3"/><Link to="/cart">Моя корзина</Link></MyBacket>
        </DivForHeaderRelative>
      </DivForHeader>

    );
  }
}

const DivForHeader = styled.div`
position: fixed;
top:0;
border: 1px solid black;
width:100vw;
height:9vh;
background:#D83F3B;
z-index:100;
`;

const DivForHeaderRelative = styled.div`
position: relative;
`;

const Home = styled.div`
position:absolute;
top:2vh;
left:2vw;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
color:white;
`;

const Cleaners = styled.p`
position:absolute;
top:2vh;
left:15vw;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
color:white;
`;

const Powders = styled.p`
position:absolute;
top:2vh;
left:32vw;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
`;

const CarCleaners = styled.p`
position:absolute;
top:2vh;
left:52vw;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
`;

const FeedBack = styled.p`
position:absolute;
top:2vh;
left:66vw;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
`
const Contacts = styled.div`
position:absolute;
top:2vh;
left:77vw;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
`

const MyBacket = styled.div`
position:absolute;
top:2vh;
right:5vh;
background:white;
font-size:1rem;
padding:3px 6px 3px 6px;
border-radius: 5px;
cursor:pointer;
`;
