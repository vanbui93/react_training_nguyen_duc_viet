import React, { Component } from 'react'
import { connect } from 'react-redux';


class NoteForm extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      noteTitle: '',
      noteContent: '',
      id: ''
    }
  }

  UNSAFE_componentWillMount() {
    if(this.props.editItem){
      this.setState({
        noteTitle: this.props.editItem.title,
        noteContent: this.props.editItem.content,
        id: this.props.editItem.id
      });
    }
  }
  


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })

  }

  addData= (title,content) => {
    // this.props.getData(item)
    
    // TH sửa dữ liệu gom dữ liệu vào 1 biến editObject
    if(this.state.id){
      console.log('dang sua du lieu');
      var editObject = {};
      editObject.id = this.state.id;
      editObject.content = this.state.noteContent;
      editObject.title = this.state.noteTitle;
      this.props.editDataStore(editObject);
      this.props.changeEditState(); // Tắt form đi
      this.props.alertOn("Đã sửa thành công","success");
      
    } else {
      var item ={};
      item.title = title;
      item.content = content;
      this.props.addDataStore(item);
      this.props.alertOn("Đã thêm mới thành công","warning");
    }
  }
  printTitle = () => {
    if(this.props.addState){
      return <h3>Thêm mới ghi chú</h3>
    } else {
      return <h3>Sửa ghi chú</h3>
    }
  }
  
  render() {
    // in thử editItem ra xem dc chưa
    console.log(this.props.editItem);
    
    return (
      <div className="col-4">
        {this.printTitle()}
        <form>
          <div className="form-group">
            <label>Tiêu đề note</label>
            <input defaultValue={this.props.editItem.title} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Tiêu đề note" aria-describedby="helpIdNoteTitle" onChange={(event) => this.isChange(event)} />
            <small id="helpIdNoteTitle" className="text-muted">Điền nội dung vào đây</small>
          </div>
          <div className="form-group">
            <label>Nội dung note</label>
            <textarea defaultValue={this.props.editItem.content} type="text" name="noteContent" id="noteContent" className="form-control" placeholder="nội dung note" aria-describedby="helpIdNoteContent" onChange={(event) => this.isChange(event)}/>
            <small id="helpIdNoteContent" className="text-muted">Điền nội dung vào đây</small>
          </div>
          <button type="reset" onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Lưu lại</button>
        </form>
      </div>
    )
  }
}


// Lấy ra được this.props.editItem trong Store.js
const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    addState: state.isAdd
  }
}
// this.props.testNhe

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type: "ADD_DATA",getItem})
    },
    editDataStore: (getItem) => {
      dispatch({type: "EDIT_OBJECT",getItem})
    },
    changeEditState: () => {
      dispatch({
        type: "change_isEdit"
      })
    },
    alertOn: (alertContent,alertType) => {
      dispatch({
        type: "ALERT_ON",alertContent,alertType
      })
    },
    alertOff: () => {
      dispatch({
        type: "ALERT_OFF"
      })
    }
  }
}
// this.props.addDataStore

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
