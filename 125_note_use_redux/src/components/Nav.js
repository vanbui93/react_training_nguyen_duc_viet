import React, { Component } from 'react'
import { connect } from 'react-redux';

class Nav extends Component {
  handleAdd = (event) => {
    event.preventDefault();
    this.props.changeEditState();
    this.props.changeAddState();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="http://vanbui.info">Van Bui</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mt-2 mt-lg-0 float-right">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://zing.vn" onClick={(event) => this.handleAdd(event)}>Thêm mới ghi chú</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditState: () => {
      dispatch({
        type: "change_isEdit"
      })
    },
    changeAddState: () => {
      dispatch({
        type: "change_isAdd"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);