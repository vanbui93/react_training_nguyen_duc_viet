import React, { Component } from 'react'

export default class EditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userEditObject.id,
      name : this.props.userEditObject.name,
      tel : this.props.userEditObject.tel,
      Permission : this.props.userEditObject.Permission
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
  }
  
  saveButton =() => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.Permission = this.state.Permission;

    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus(); // Ẩn form
  }
  
  render() {
    return (
      
      <div className="card border-primary text-white bg-warning mb-3 mt-2">
      <form>
        <div className="card-header text-center">Sửa thông tin User</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input defaultValue = {this.props.userEditObject.name} onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
          </div>
          <div className="form-group">
            <input defaultValue = {this.props.userEditObject.tel} onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select defaultValue={this.props.userEditObject.Permission} onChange={(event) => this.isChange(event)} className="custom-select" required name="Permission">
              <option value>Chọn quyền mặc định</option>
              <option value={1}>Admin</option>
              <option value={2}>Modrator</option>
              <option value={3}>Nomal</option>
            </select>
          </div>
          <div className="form-group">
            <input type="button" className="btn btn-block btn-danger" onClick={()=>this.saveButton()} value="Lưu"></input>
          </div>
        </div>
      </form>
    </div>
    )
  }
}
