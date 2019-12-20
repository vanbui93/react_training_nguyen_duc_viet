import React, { Component } from 'react'
import axios from 'axios';

const addProductAction = (product_name,product_price,product_image) => (
  axios.post('/add',{product_name,product_price,product_image}) ///nếu là get thì ko cần có tham số, nếu là post thì phải có tham số send
  .then((res)=> res.data))

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state ={
      product_name:'',
      product_price: '',
      product_image:''
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
    console.log(JSON.stringify(this.state));
    var {product_name,product_price,product_image} = this.state;

    // nếu có kết quả trả về thì in ra giá trị
    addProductAction (product_name,product_price,product_image).then((response) => {
      console.log(response);
    })
  }
  
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-8 mx-auto">
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
                <label htmlFor="product_image">Link hình</label>
                <input onChange={(event)=> this.isChange(event)} type="text" name="product_image" id="product_image" className="form-control" placeholder="Nhập link hình" aria-describedby="product_image" />
              </div>
              <button type="reset" onClick={() => this.handleClick()} className="btn btn-info">Thêm mới</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
