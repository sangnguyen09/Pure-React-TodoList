import React, { Component } from "react";

export default class FilterProgess extends Component {


  render() {
    return (
      <ul className="list-unstyled text-left">
        Lọc
        <li className="py-1 display-5 lead" onClick={()=>{this.props._fiterTasks('progess',0)}}>
          Tất cả
        </li>
        <li className="py-1 display-5 lead"  onClick={()=>{this.props._fiterTasks('progess',1)}}>
          <i className="fa fa-play mr-2" />
          Chưa bắt đầu
        </li>
        <li className="py-1 display-5 lead"  onClick={()=>{this.props._fiterTasks('progess',2)}}>
          <i className="fa fa-spinner mr-2" />
          Đang tiến hành
        </li>
        <li className="py-1 display-5 lead"  onClick={()=>{this.props._fiterTasks('progess',3)}}>
          <i className="fa fa-check-square-o mr-2" />
          Hoàn thành
        </li>
        <li className="py-1 display-5 lead"  onClick={()=>{this.props._fiterTasks('progess',4)}}>
          <i className="fa fa-trash-o mr-2" />
          Hủy bỏ
        </li>
      </ul>
    );
  }
}
