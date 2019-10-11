import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-3">Project quản lý thành viên bằng React JS</h1>
          <p className="lead">Load với dữ liệu json</p>
          <hr className="my-2" />
        </div>
      </div>
    )
  }
}
