import React, { Component } from 'react'
import {noteDulieu} from './firebaseConnect'
import NoteItems from './NoteItems';

export default class NoteList extends Component {

  // phải set state thì mới in được dữ liệu ra ngoài html, vì nó chỉ in được trong hàm On thôi
  constructor(props) {
    super(props);
    this.state={
      inDulieuRaNgoai: []
    }
  }
  
  // ham cwm la ham được thực hiện trước khi render
  UNSAFE_componentWillMount() {
    noteDulieu.on('value',(ghichu) => {

      // chuyen element riêng biệt thành 1 mảng
      var arrayDulieu = [];

      ghichu.forEach(element => {
        const key = element.key;
        const noteTitlte = element.val().title;
        const noteContent = element.val().content;
        // console.log(key);
        // console.log(noteTitlte);

        // sau khi duyet qua cac element riêng biệt => chuyển chúng thành mảng []
        arrayDulieu.push({
          id: key,
          title:noteTitlte,
          content: noteContent
        })
      });

      // chi in duoc trong ham On thoi
      // console.log(arrayDulieu);

      // set lai state để in data ra ngoài
      this.setState({
        inDulieuRaNgoai: arrayDulieu
      });
    })
  }
  

  // ham lay du lieu bằng callback, thay vì dùng once('value').then(function){...}
  getDulieu = () => {
    if(this.state.inDulieuRaNgoai){
      return this.state.inDulieuRaNgoai.map((value,key) =>{
        return(
          <NoteItems 
          key={key}
          idItem ={key}
          noteTitlte={value.title}
          noteContent={value.content}
          noteEdit = {value}
          />
        )
      })
    } 
  }

  render() {
    return (
       
       <div className="col">
          <div id="noteList" role="tablist" aria-multiselectable="true">
            {this.getDulieu()}
          </div>
        </div>
    )
  }
}
