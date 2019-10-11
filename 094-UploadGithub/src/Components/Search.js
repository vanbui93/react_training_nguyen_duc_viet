import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
  // this.props.checkConnectProps
  hienThiNut = () => {
    if(this.props.hienThiForm1 === true){
      return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Close</div>
    } else {
      return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>
    }
  }

  constructor(props) {
    super(props);
    this.state ={
      tempValue : '',
      userObj : {}
    }
  }

  // this.props.changeEditUserStatus

  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({
      tempValue : event.target.value
    })
    this.props.checkConnectProps(this.state.tempValue)
  }

  getUserEditInfo = (info) => {
    this.setState({
      userObj:info
    })
    this.props.getUserEditInfoApp(info);
  }

  isShowEditForm = () => {
    if(this.props.editUserStatus === true){
      return <EditUser 
      getUserEditInfo={(info)=> this.getUserEditInfo(info)}
      changeEditUserStatus={()=> this.props.changeEditUserStatus()} 
      userEditObject = {this.props.userEditObject}
      />
    }
  }

  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group">
            <input type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm" onChange={(event) => this.isChange(event)}/>
            <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
          </div>
          <div className="btn-group1 mt-2">
            {this.hienThiNut()}
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}
