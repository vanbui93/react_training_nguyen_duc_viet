import React, { Component } from 'react'

export default class TableDataRow extends Component {
  permissionShow = () => {
    if(this.props.userPermis === 1){
      return "Admin";
    } else if (this.props.userPermis === 2){
      return "Moderator";
    } else {
      return "Normal User";
    }
  }

editClick = ()=>{
  this.props.editUserClick();
  this.props.changeEditUserStatus();
}

deleteButtonClick = (idUser) => {
  this.props.deleteButtonClick(idUser);
  
}

  render() {
    return (
      <tr>
        <td>{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.userTel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning" 
            onClick={() => this.editClick()}>
            <i className="fa fa-edit">Sửa</i>
            </div>
            <div className="btn btn-danger" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>
              <i className="fa fa-edit">Xóa</i>
            </div>
          </div>
        </td>
      </tr>
    )
  }
}
