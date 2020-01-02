import React, { Component } from 'react'

export default class Product extends Component {  
  render() {
    return (
        <div className="col-3">
          <div className="card text-left">
            <img className="card-img-top" src={this.props.images} alt="" />
            <div className="card-body">
              <b className="card-title float-left">{this.props.product_name}</b>
              <i className="card-text float-right">{this.props.product_price}</i>
            </div>
          </div>
        </div>
    )
  }
}
