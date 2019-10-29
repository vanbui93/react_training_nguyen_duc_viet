import React from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';
import axios from 'axios';

// khai báo 1 hàm để lấy dữ liệu
const getProductData = () => {
  return axios.get('http://localhost:4000/getdata01')
  .then((response) => response.data)
  .catch((error) => error)
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
  
  
  render() {
   console.log(this.state.data)
  return (
    <div>
      <Header/>
      <div className="container">
      <div className="row">
        <Product product_name="but chì" product_price="90000" product_image="https://sohanews.sohacdn.com/zoom/260_162/2019/10/29/xjskfyecfam0013978-157224805165883125939-1572311859518544572504-crop-15723118647041406799156.jpg"/>
        <Product product_name="but chì" product_price="90000" product_image="https://sohanews.sohacdn.com/zoom/260_162/2019/10/29/xjskfyecfam0013978-157224805165883125939-1572311859518544572504-crop-15723118647041406799156.jpg"/>
        <Product product_name="but chì" product_price="90000" product_image="https://sohanews.sohacdn.com/zoom/260_162/2019/10/29/xjskfyecfam0013978-157224805165883125939-1572311859518544572504-crop-15723118647041406799156.jpg"/>
        <Product product_name="but chì" product_price="90000" product_image="https://sohanews.sohacdn.com/zoom/260_162/2019/10/29/xjskfyecfam0013978-157224805165883125939-1572311859518544572504-crop-15723118647041406799156.jpg"/>
      </div>
      </div>
    </div>
    
  );
}
}

export default App;