import React, { Component } from 'react'
import { connect } from 'react-redux';

class noteItems extends Component {
  onClickAction = () => {
    this.props.changeEditState() //action 1

    // ham lay nội dung truyền vào trong store, để store update vào dữ liệu 
    // console.log(this.props.noteEdit);  //--> action 2
    this.props.getEditData(this.props.noteEdit);
    

  }

  getDeleteData =() => {
    this.props.getDeleteData(this.props.noteEdit.id);
    this.props.alertOn("Xóa thành công ghi chú  '"+ this.props.noteEdit.title + "'","danger"); 
    
  }

  render() {
    return (
      <div className="card">
        <div className="card-header" role="tab" id="note01">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.idItem} aria-expanded="true" aria-controls="section1ContentId">
              {this.props.noteTitlte}
            </a>
            <div className="btn-group float-right">
              <button className="btn btn-outline-info" onClick={() => this.onClickAction()}>Sửa</button>
              <button className="btn btn-outline-secondary" onClick={() => this.getDeleteData()}>Xóa</button>
            </div>
          </h5>
        </div>
        <div id={"number" + this.props.idItem} className="collapse in" role="tabpanel" aria-labelledby="note01">
          <div className="card-body">
            {this.props.noteContent}
          </div>
        </div>
      </div>
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
    getEditData: (editObject) => {
      dispatch({
        type: "GET_EDIT_DATA", editObject
      })
    },
    getDeleteData: (deleteId) => {
      dispatch({
        type: "DELETE_OBJECT", deleteId
      })
    },
    alertOn: (alertContent,alertType) => {
      dispatch({
        type: "ALERT_ON",alertContent,alertType
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(noteItems);