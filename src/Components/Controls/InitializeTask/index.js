import React, { Component } from "react";

class InitializeTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-info btn--local"
        onClick = {() => {this.props._generateData()}}
      >
        <i className="fa fa-pencil-square-o" />
        Lấy Task Từ Local
      </button>
    );
  }
}

export default InitializeTask;
