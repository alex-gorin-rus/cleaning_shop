import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class Powders extends Component{
  render(){
    return(
      <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title title="Стиральные порошки" />
          <div className="row">
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}


const Div_1 = styled.div`
position:absolute;
top:40%;
`
