import React, { Component } from 'react'

export default class AddUser extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      Permission: ""
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name);
    console.log(value);
    this.setState({
      [name]: value
    })

    // đóng gói (packet)) thành 1 mảng (item)
    // var item ={}
    // item.id = this.state.id;
    // item.name =this.state.name;
    // item.tel = this.state.tel;
    // item.Permission = this.state.Permission;

    // in ra kiem tra thu
    // console.log(item);
    
  }
  

  checkTrangThai = () => {
  if(this.props.hienThiForm1 === true){
    return (
      <div className="card border-primary mb-3 mt-2">
        <form>
          <div className="card-header">Thêm mới User vào hệ thống</div>
          <div className="card-body text-primary">
            <label>Tên User</label>
            <div className="form-group">
              <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
            </div>
            <label>Điện thoại</label>
            <div className="form-group">
              <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
            </div>
            <div className="form-group">
              <select className="custom-select" required name="Permission" onChange={(event) => this.isChange(event)}>
                <option value>Chọn quyền mặc định</option>
                <option value={1}>Admin</option>
                <option value={2}>Modrator</option>
                <option value={3}>Nomal</option>
              </select>
            </div>
            <div className="form-group">
              <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission) => this.props.add(this.state.name, this.state.tel,this.state.Permission)} value="Thêm mới"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

render() {
  // console.log(this.state);
  
  return (
    <div>
      {this.checkTrangThai()}
    </div>
  )
}
}
