import React from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './AlertInfo';

class App extends React.Component {
  

  // noteDulieu.once('value').then(function(snapshot){
  //  console.log(snapshot.val());
// //  })

// ko dung redux
//   addDulieu = (item) => {
//     noteDulieu.push(item)
//   }

  hienThiFrom = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  render() {
  return (
    <div>
      <Nav></Nav>
      <AlertInfo />
      <div className="container">
        <div className="row">
        <NoteList />
        {this.hienThiFrom()}
        </div>
      </div>
    </div>
  );
}
}


const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App)
