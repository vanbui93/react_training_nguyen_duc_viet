import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'



const uuidv1 = require('uuid/v1');

export default class App extends Component {
  
  // checkTrangThai = () => { alert('ket noi thanh cong');}
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      seachText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }

  componentWillMount() {
    // kiem tra xem co localStorage chua ?
    if(localStorage.getItem("userData") === null){
      localStorage.setItem("userData",JSON.stringify(DataUser))
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      })
    }
    console.log();
    
  }
  

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  changeTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      seachText: dl
    });
  }

  editUser = (user) => {
    console.log("Đã ok");
    console.log(user);
    this.setState({
      userEditObject: user
    })
  }

  getNewUserData = (name,tel,Permission) => {
    // console.log('ket noi ok')
    var item ={}
    item.id= uuidv1();
    item.name= name;
    item.tel= tel;
    item.Permission= Permission

    var items = this.state.data;
    items.push(item);
    
    console.log(items)

    this.setState({
      data: items
    })

    // day du lieu vao bang sau khi tạo mới
    localStorage.setItem("userData",JSON.stringify(items))

    // console.log(name)
    // console.log(tel)
    // console.log(Permission)

    // console.log(item)
  }

  
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    // day du lieu vao bang sau khi tạo mới
    localStorage.setItem("userData",JSON.stringify(this.state.data))
    })
  }
  
  
  deleteUser = (idUser) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    
    this.setState({
      data: tempData
    })

    // day du lieu vao bang sau khi xóa
    localStorage.setItem("userData",JSON.stringify(tempData))
  }

  render() {
    // localStorage.setItem('userData',JSON.stringify(DataUser))

    var ketqua =[];
    this.state.data.forEach((item) => {
      // kiem tra xem data co du lieu khong
      // indexOf là kiểm tra xem giá trị nhập vào có ko, nếu không có trả về -1, nếu có thì !== -1
      // item.name.indexOf(this.state.seachText) !== -1) là kiểm tra xem giá trị nhập vào trùng với field name không ?
      if(item.name.indexOf(this.state.seachText) !== -1){
        ketqua.push(item)
      }
    })
    // console.log(ketqua);

    
    return (
      <div>
        <div>
          <Header />
          <div className="search-form">
            <div className="container">
              <div className="row">
                <Search 
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                userEditObject = {this.state.userEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)} 
                ketNoi = {()=> this.changeTrangThai()} 
                hienThiForm1={this.state.hienThiForm} 
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus ={() => this.changeEditUserStatus()}
                />
                <TableData editFunc={(user)=> this.editUser(user)} dataUserProps={ketqua}
                changeEditUserStatus ={() => this.changeEditUserStatus()}
                deleteUser = {(idUser) => this.deleteUser(idUser)}
                />
                <AddUser hienThiForm1 = {this.state.hienThiForm} add ={(name,tel,Permission) => this.getNewUserData(name,tel,Permission)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}