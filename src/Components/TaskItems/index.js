import React, { Component } from "react";
import Thead from "./THead";
import TaskItem from "./taskitem";
import {orderBy} from 'lodash'

export default class TaskItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }
  
  componentWillReceiveProps(nextProps) {
	if (nextProps.filterTask.valueFilter === 0) {
		this.setState({
		  taskList: nextProps.listItem
		});
		return;
	  }
	  let arrFilter =[]
    switch (nextProps.filterTask.filterType) {
      case "progess":
			arrFilter = nextProps.listItem.filter(item => item.status === nextProps.filterTask.valueFilter );
        this.setState(prev => {
          return (prev.taskList = arrFilter);
        });
        break;
      case "label":
        	arrFilter = nextProps.listItem.filter(item =>  item.labelArr.indexOf(nextProps.filterTask.valueFilter) >-1 );
        this.setState(prev => {
          return (prev.taskList = arrFilter);
        });
        break;
      case "priority":
        	arrFilter = nextProps.listItem.filter(item =>  item.priority === +nextProps.filterTask.valueFilter );
        this.setState(prev => {
          return (prev.taskList = arrFilter);
        });
        break;
      case "sort":
			
        	arrFilter = orderBy(nextProps.listItem, ['name'],[nextProps.filterTask.valueFilter])  
        this.setState(prev => {
          return (prev.taskList = arrFilter);
        });
        break;
      case "search":
        	arrFilter = nextProps.listItem.filter(item =>  item.name.toLowerCase().indexOf(nextProps.filterTask.valueFilter.toLowerCase()) >-1 );
        this.setState(prev => {
          return (prev.taskList = arrFilter);
        });
        break;

      default:
			this.setState({
				taskList: nextProps.listItem
			  });
        break;
    }
  }
  render() {
    let itemTask = this.state.taskList.map((item, index) => {
      return (
        <TaskItem
          key={index}
          item={item}
          index={index}
          _editTask={this.props._editTask}
          _changeStatus={this.props._changeStatus}
        />
      );
    });
    return (
      <table className="table table-hover">
        <Thead />
        <tbody>{itemTask}</tbody>
      </table>
    );
  }
 
}
