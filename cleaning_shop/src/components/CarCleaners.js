import React, {Component} from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class CarCleaners extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="Средства для чистки автомобилей" />
            <div className="row">
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
