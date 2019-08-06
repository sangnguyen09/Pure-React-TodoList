import React, { Component } from "react";
import InitializeTask from "./InitializeTask";
import AddNewTask from "./AddNewTask";
import FilterProgess from "./FilterProgess";
import FilterLabel from "./FilterLabel";
import FilterPriority from "./FilterPriority";
import Sort from "./Sort";
export default class Controls extends Component {
  render() {
      let {_fiterTasks} = this.props
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_4.jpg" className="ml-2 user" alt="ds" />
          <h3 className="text-white d-inline font-weight-light ml-2">
           Nguyễn Thanh Sang
          </h3>
        </div>
        <AddNewTask _showAddNew={this.props._showAddNew}/>
        <InitializeTask _generateData ={this.props._generateData}/>
        {/* Filter */}
        <div className="px-3">
          <div className="filter filter--progress">
            <FilterProgess  _fiterTasks ={_fiterTasks}/>
          </div>
          <div className="filter filter--label">
            <FilterLabel _fiterTasks ={_fiterTasks}/>
          </div>
          <div className="form-group text-left">
            <label>Độ ưu tiên</label>
            <FilterPriority _fiterTasks ={_fiterTasks}/>
          </div>
          <div className="form-group text-left">
            <label>Sắp xếp theo công việc</label>
            <Sort _fiterTasks ={_fiterTasks}/>
          </div>
        </div>
      </div>
    );
  }
}
