import React, {Component} from 'react';
import Products from './Products';
import Title from './Title'
import {ProductConsumer} from '../context';

export default class CleanersList extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title title="Чистящие моющие средства" />
            <div className="row">
              <ProductConsumer>
                {value =>{
                    return value.products.map(cleaners =>{
                        return <Products key={cleaners.id} cleaners = {cleaners} />;
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
