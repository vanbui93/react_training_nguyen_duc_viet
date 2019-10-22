import {noteDulieu} from './firebaseConnect'



var redux = require('redux');

// khởi tạo state
const noteInitialState = {
  isEdit : false,
  editItem: {},
  isAdd: false,
  alertShow: false,
  AlertContent: '',
  AlertType: ''
}


// thực thi dispatch
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {

    // dưới là reducer (thuc thi) cach su dung giống như hàm
    case "ADD_DATA":
      noteDulieu.push(action.getItem);
      // console.log('them du lieu thanh cong tham so truyen vao la' + JSON.stringify(action.getItem));
      break
    case "change_isEdit":
      return {...state,isEdit:!state.isEdit}
    case "change_isAdd":
      return {...state,isAdd:!state.isAdd}
    case "GET_EDIT_DATA":
    return {...state,editItem:action.editObject}
    case "EDIT_OBJECT":
      // child là hàm lấy ra phần tử có id tương ứng, sau đó update
      noteDulieu.child(action.getItem.id).update({
        title: action.getItem.title,
        content: action.getItem.content
      })
      // console.log('Đã kết nối dữ liệu' + JSON.stringify(action.getItem) + 'thành công');
    return {...state,editItem:{}}
    case "DELETE_OBJECT":
      // child là hàm lấy ra phần tử có id tương ứng, sau đó update
      // console.log(action.deleteId);
      noteDulieu.child(action.deleteId).remove();
    case "ALERT_ON":
      return {...state,alertShow:true,AlertContent:action.alertContent,AlertType:action.alertType}
    case "ALERT_OFF":
      return {...state,alertShow:false}
    default:
      return state
  }
}
var store1 = redux.createStore(allReducer);
store1.subscribe(function(){
  console.log(JSON.stringify(store1.getState()));
  
})

export default store1;