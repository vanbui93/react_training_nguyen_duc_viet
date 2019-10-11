import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state ={
      trangThaiEdit: false
    }
  }

  changedTrangThai = () =>{
    this.setState({
      trangThaiEdit: !this.state.trangThaiEdit
    })
  }

  showButton = ()=>{
    if(this.state.trangThaiEdit===true){
      return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.changedTrangThai()}>Close</div>
    } else {
      return <div className="btn btn-block btn-outline-info" onClick={() => this.changedTrangThai()}>Thêm mới</div>
    }
  }
  showForm = ()=> {
    if(this.state.trangThaiEdit === true){
      return(
        <div className="card border-primary mb-3 mt-2">
          <div className="card-header">Thêm mới User vào hệ thống</div>
          <div className="card-body text-primary">
            <label>Tên User</label>
            <div className="form-group">
              <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
            </div>
            <label>Điện thoại</label>
            <div className="form-group">
              <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
            </div>
            <div className="form-group">
              <select className="custom-select" required>
                <option value>Chọn quyền mặc định</option>
                <option value={1}>Admin</option>
                <option value={2}>Modrator</option>
                <option value={3}>Nomal</option>
              </select>
            </div>
            <div className="form-group">
              <div className="btn btn-block btn-primary">Thêm mới</div>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="col-3">
        {this.showButton()}
        {this.showForm()}
        
      </div>

    )
  }
}
