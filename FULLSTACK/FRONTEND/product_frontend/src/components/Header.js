import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Danh sách sản phẩm</h1>
          <p className="lead">Sử dụng react js lấy dữ liệu từ node js</p>
          <hr />
        </div>
      </div>
    )
  }
}
