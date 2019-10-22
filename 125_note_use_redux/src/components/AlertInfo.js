import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import { timeout } from 'q';

class AlertInfo extends Component {
  handleDismiss = () => {
    this.props.alertOff();
    
  }
  render() {
    if(this.props.AlertShow === false) return null;
    return (
      <AlertContainer position="bottom-right">
          <Alert type={this.props.AlertType} onDismiss ={() => this.handleDismiss()}  timeout={500}>{this.props.AlertContent}</Alert>
      </AlertContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    AlertShow: state.alertShow,
    AlertContent: state.AlertContent,
    AlertType: state.AlertType
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    alertOff: () => {
      dispatch({
        type: "ALERT_OFF"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)