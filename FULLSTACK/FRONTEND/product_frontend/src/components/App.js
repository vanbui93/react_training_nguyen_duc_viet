import React from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';
import axios from 'axios';
import AddProduct from './AddProduct';

// khai báo 1 hàm để lấy dữ liệu
const getProductData = () => {
  // then gọi là promise - lời hứa, thực hiện được cái trên thì trả về response
  return axios.get('/getdata01')
  .then((response) => response.data)
  .catch((error) => {
    console.log(error.response);
    return Promise.reject(error.response);
  }) // Nếu lỗi thì trả về catch
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:null
    }
  }

  
  UNSAFE_componentWillMount () {
    if(this.state.data === null){
      // console.log(getProductData())  // vì đây là const nên gọi thẳng ra luôn ko cần this
      getProductData().then((res) => {
        this.setState({
          data:res
        });
      })
    }
  }
  
  printData =() => {
    if(this.state.data !== null){
      return this.state.data.map((value,key) => (
          <Product 
          key={key} 
          product_name={value.product_name} 
          product_price={value.product_price} 
          product_image={value.images}/>
        ))
    }
  }
  
  render() {
  //  console.log(this.state.data);
  return (
    <div>
      <Header/>
      <AddProduct/>
      <div className="container">
      <div className="row">
        {this.printData()}
      </div>
      </div>
    </div>
    
  );
}
}

export default App;