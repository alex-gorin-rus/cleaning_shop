import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MyImage from '../images/back_3.jpg';
import Header from './Header';
import '../App.css';


export default class HomePage extends Component{
  render(){
    return(
      <Header_1>
      <Image src={MyImage} alt="cleaner"/>
          <Crystall>Crystall</Crystall>
          <Header></Header>
        <Text>Кристал - это торговая марка для средств профессионального клининга. Вся наша продукция производится из качественного сырья, поставляемого крупными заводами России, Европы и США. <TextIndent>Бренд Кристалл постоянно совершенствуется и обновляется. В ассортимент компании Кристал входят: средств для мытья полов, для мытья посуды, жидкое мыло, универсальный очиститель, средства для сантехники и канализации и др. профессионаольные средства для уборки помещений.</TextIndent> Ассортимент средств профессионального клининга постоянно расширяется. При разработке товаров учитываются новые научные тенденции мировых производителей химии. Средства нашей компании соответсвуют мировым стандартам "ISO 9001 - 2011 (ISO 9001: 2008)".  </Text>
      </Header_1>
    )
  }
}





const Image = styled.img`
width:100vw;
height:100vh;
`;

const Header_1 = styled.div`
position:absolute;
`;

const Crystall = styled.h1`
position: absolute;
font-size:4em;
font-family: 'Caveat', cursive;
top:16vh;
left:44vw;
color:white;
text-shadow: 1px 1px 1px #2121FD;

`;







const Text = styled.div`
position: absolute;
width:80vw;
top:30vh;
left:10vw;
color:var(--textColor);
font-size:1.4rem;
font-family: 'Concert One', cursive;
`;

const TextIndent = styled.p`
text-indent: 20px;
`;
