import React from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';
import axios from 'axios';

// khai báo 1 hàm để lấy dữ liệu
const getProductData = () => axios.get('/getdata01').then((response) => response.data)   // then gọi là promise - lời hứa, thực hiện được cái trên thì trả về response
  .catch((error) => { console.log(error.response); return Promise.reject(error.response)}) // Nếu lỗi thì trả về catch


///nếu là get thì ko cần có tham số, nếu là post thì phải có tham số send
const addProductAction = (product_name,product_price,images) => (
  axios.post('/add',{product_name,product_price,images}).then((res)=> res.data));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:null,
      product_name:'',
      product_price: '',
      images:''
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
          images={value.images}/>
        ))
    }
  }

  isChange =(event) =>{
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]:value
    })
  }

  handleClick = () => {
    // console.log(JSON.stringify(this.state));

    var {product_name,product_price,images} = this.state;

    var dataTemp =[];

    //Lấy name trong form gắn vào item
    var item={};
    item.product_name = product_name;
    item.product_price = product_price;
    item.images = images;
    console.log(item);
    
    
    dataTemp = this.state.data;
    
    if(item.product_name !== ''){
      dataTemp.push(item); //Thêm vào dataTemp du lieu vua them moi
      this.setState({
        data:dataTemp
      })
    }

    console.log(dataTemp);
    

    // nếu có kết quả trả về thì in ra giá trị
    addProductAction (product_name,product_price,images).then((respo) => {
      console.log(respo);
    })
  }
  
  render() {
  //  console.log(this.state.data);
  return (
    <div>
      <Header/>
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            {this.printData()}
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <form>
              <div className="form-group">
                <label htmlFor="product_name">Tên sản phẩm</label>
                <input onChange={(event)=> this.isChange(event)} type="text" name="product_name" id="product_name" className="form-control" placeholder="Nhập tên sản phẩm" aria-describedby="product_name" />
              </div>
              <div className="form-group">
                <label htmlFor="product_price">Giá sản phẩm</label>
                <input onChange={(event)=> this.isChange(event)} type="text" name="product_price" id="product_price" className="form-control" placeholder="product_price" aria-describedby="name_text" />
              </div>
              <div className="form-group">
                <label htmlFor="images">Link hình</label>
                <input onChange={(event)=> this.isChange(event)} type="text" name="images" id="images" className="form-control" placeholder="Nhập link hình" aria-describedby="images" />
              </div>
              <button type="reset" onClick={() => this.handleClick()} className="btn btn-info btn-block">Thêm mới</button>
            </form>
          </div>
          </div>
      </div>
      </div>
    </div>
    
  );
}
}

export default App;