import React, { Component } from 'react';
import TableDataRow from './TableDataRow'

export default class TableData extends Component {

  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser)
    
  }


  mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
    <TableDataRow 
    deleteButtonClick ={(idUser) => this.deleteButtonClick(idUser)}
    editUserClick={(user) =>this.props.editFunc(value)} 
    key={key} stt={key} 
    id = {value.id}
    userName={value.name} 
    userTel={value.tel} 
    userPermis={value.Permission}
    editUserStatus ={() => this.editUserStatus()}
    changeEditUserStatus ={() => this.props.changeEditUserStatus()}
    />
  ))
  render() {
    // console.log(this.props.dataUserProps);
    
    
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    )
  }
}
