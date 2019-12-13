import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div className="col-3">
          <div className="card text-left">
            <img className="card-img-top" src={this.props.product_image} alt="" />
            <div className="card-body">
              <h5 className="card-title float-left">{this.props.product_name}</h5>
              <p className="card-text float-right">{this.props.product_price}</p>
            </div>
          </div>
        </div>
    )
  }
}
