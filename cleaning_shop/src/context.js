import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();

class ProductProvider extends Component{

  state = {
    products:[],
    cart:[],
    detailProduct:detailProduct,
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTotal:0
  }

  componentDidMount(){
    this.setProducts();
  };


setProducts = () =>{
  let tempProducts = [];
  storeProducts.forEach(item =>{
    const singleItem = {...item};
    tempProducts = [...tempProducts, singleItem];
  });
  this.setState(()=>{
    return {products: tempProducts};
  });
};



handleDetail = (id) => {
  const product = this.getItem(id);
  this.setState(()=>{
    return{detailProduct:product};
  });
};



getItem = id => {
  const product = this.state.products.find(item => item.id === id);
  return product;
};




addToCart = id => {
  let tempProducts = [...this.state.products];
  const index = tempProducts.indexOf(this.getItem(id));
  const product = tempProducts[index];
  product.inCart = true;
  const price = product.price;
  product.count = 1;
  product.total = price;
  this.setState(()=>{
    return {product: tempProducts, cart: [...this.state.cart, product]};
  }, ()=>{
    this.addTotals();
  });
};



openModal = id =>{
  const product = this.getItem(id);
  this.setState(()=>{
  return {modalProduct:product, modalOpen:true};
  });
};


closeModal = () =>{
  this.setState(()=>{
    return{modalOpen:false};
  });
};

increment = (id) => {
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count + 1;
  product.total = product.count * product.price;

  this.setState(()=>{
    return{
      cart:[...tempCart]
    }
  }, ()=> {
    this.addTotals();
  });
};

decrement = (id) => {
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item => item.id === id);
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count - 1;
    if(product.count === 0){
      this.removeItem(id);
    }else{
      product.total = product.count * product.price;
      this.setState(()=>{
        return{
          cart:[...tempCart]
        }
      }, ()=> {
        this.addTotals();
      });  
    };
};

removeItem = (id) => {
  let tempProduct = [...this.state.products];
  let tempCart = [...this.state.cart];

  tempCart = tempCart.filter(item => item.id !== id);

  const index = tempProduct.indexOf(this.getItem(id));
  let removedProduct = tempProduct[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.total = 0;

  this.setState(()=>{
    return{
      cart:[...tempCart],
      products:[...tempProduct]
    }
  }, ()=>{
    this.addTotals();
  });
};

clearCart = () => {
  this.setState(()=>{
    return{cart: []}
  },()=>{
    this.setProducts();
    this.addTotals();
  });
};
addTotals =() => {
  let discount = 1.1;
  let cartTotal = 0;
  this.state.cart.map(item => (cartTotal += item.total));
  this.setState(()=>{
    return{
      cartTotal:cartTotal
    }
  });

}
  render(){
    return(
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart
      }}>
      {this.props.children}
      </ProductContext.Provider>
    );}
}

const ProductConsumer =  ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
