import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class Contacts extends Component{
  render(){
    return(
      <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title title="Контакты" />
          <div className="row">
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}
