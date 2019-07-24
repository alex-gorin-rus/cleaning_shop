import React, {Component} from 'react';
import {storeCleaners_0_5} from './DataCleaners_0_5';

const Cleaners_0_5_Context = React.createContext();

class Cleaners_0_5_Provider extends Component{
state = {
  cleaners_0_5:[],
  cart_0_5:[],

}

componentDidMount(){
  this.setCleaners_0_5();
};

setCleaners_0_5 = () => {
  let tempProducts_0_5 = [];
  storeCleaners_0_5.forEach(item => {
    const singleItem_0_5 = {...item};
    tempProducts_0_5 = [...tempProducts_0_5, singleItem_0_5];
  });
  this.setState(() => {
    return {cleaners_0_5: tempProducts_0_5};
  });
};

getItem_0_5 = id => {
  const cleaner_0_5 = this.state.cleaners_0_5.find(item => item.id === id);
  return cleaner_0_5;
};



addToCart_0_5 = id => {
  let tempProducts_0_5 = [...this.state.cleaners_0_5];
  const index_0_5 = tempProducts_0_5.indexOf(this.getItem_0_5(id));
  const cleaner_0_5 = tempProducts_0_5[index_0_5];
  cleaner_0_5.inCart_0_5_litre = true;
  cleaner_0_5.count_0_5 = 1;
  const price_0_5 = cleaner_0_5.price_0_5_litre;
  cleaner_0_5.total_0_5 = price_0_5;
  this.setState(()=>{
    return{cleaners_0_5: tempProducts_0_5, cart:[...this.state.cart_0_5, cleaner_0_5]};
  },
  () => {
    console.log(this.state);
  }
);
};

render(){
  return(
    <Cleaners_0_5_Context.Provider value={{
      ...this.state,
      addToCart_0_5:this.addToCart_0_5
    }}>
    {this.props.children}
    </Cleaners_0_5_Context.Provider>
  );}

}

const Cleaners_0_5_Consumer = Cleaners_0_5_Context.Consumer;
export {Cleaners_0_5_Provider, Cleaners_0_5_Consumer};
