import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class FeedBack extends Component{
  render(){
    return(
      <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title title="Отзывы о компании и продукции" />
          <div className="row">
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}


const DivOfFeedBack = styled.div`
position: absolute:
top:30%;
`
