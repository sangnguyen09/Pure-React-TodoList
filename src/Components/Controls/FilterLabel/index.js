import React, { Component } from "react";

export default class FilterLabel extends Component {
  render() {
    return (
      <ul className="list-unstyled text-left">
        Nhãn
        <li className="py-1 display-5 " onClick={()=>{this.props._fiterTasks('label',0)}}>
          Tất cả
        </li>
        <li className="py-1 display-5 lead" onClick={()=>{this.props._fiterTasks('label','Frontend')}}>
          <i className="fa fa-circle mr-2" />
          Frontend
        </li>
        <li className="py-1 display-5 lead" onClick={()=>{this.props._fiterTasks('label','Backend')}}>
          <i className="fa fa-circle mr-2" />
          Backend
        </li>
        <li className="py-1 display-5 lead" onClick={()=>{this.props._fiterTasks('label','API')}}>
          <i className="fa fa-circle mr-2" />
          API
        </li>
        <li className="py-1 display-5 lead" onClick={()=>{this.props._fiterTasks('label','Issue')}}>
          <i className="fa fa-circle mr-2" />
          Issue
        </li>
      </ul>
    );
  }
}
