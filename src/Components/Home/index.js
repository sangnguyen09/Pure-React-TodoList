import React, { Component } from "react";
import ModalPopup from "../ModalPopup";

import TaskItems from "../TaskItems";
import listOfTask from "../../Models/getData";
import Controls from "../Controls";
import randomId from "random-id";
import Search from "../Search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      dataEdit: null,
      isEdit: false,
      filterType: "",
      valueFilter: ""
    };
  }


  componentDidMount() {
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks"))
    });
  }

  render() {
    let { tasks, filterType, valueFilter } = this.state;
    return (
      <>
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls
                _generateData={this._generateData}
                _showAddNew={this._showAddNew}
                _fiterTasks={this._fiterTasks}
              />
              {/* DISPLAY */}
              <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                  <div className="row header header--right d-flex align-items-center mx-0">
                    <div className="col-md-6">
                      <div className=" d-flex justify-content-between">
                        <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                     <Search _fiterTasks ={this._fiterTasks}/>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <TaskItems
                    listItem={tasks}
                    _editTask={this._editTask}
                    _changeStatus={this._changeStatus}
                    filterTask ={{filterType, valueFilter} }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* The Modal */}
          <ModalPopup
            _addNewTask={this._addNewTask}
            isEdit={this.state.isEdit}
            dataEdit={this.state.dataEdit}
            _onEdit={this._onEdit}
          />
        </div>
      </>
    );
  }
  _generateData = () => {
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
    this.setState({
      tasks: listOfTask.list
    });
  };

  _addNewTask = data => {
    if (!this.state.isEdit) {
      data.id = randomId(5, "aA0");
      let  objTask = {...data,status:1}

      let dataLocal = JSON.parse(localStorage.getItem("tasks"));
      dataLocal = [...dataLocal, objTask];
      this.setState({
        tasks: dataLocal
      });
      localStorage.setItem("tasks", JSON.stringify(dataLocal));
    }
  };
  _editTask = task => {
    this.setState({
      dataEdit: task,
      isEdit: true
    });
  };
  _onEdit = task => {
    if (this.state.isEdit) {
      let dataLocal = JSON.parse(localStorage.getItem("tasks"));
      let index = dataLocal.findIndex(item => item.id === task.id);
      this.setState(
        prev => {
          return (prev.tasks[index] = task), (prev.dataEdit = task);
        },
        () => {
          localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
      );
    }
  };
  _showAddNew = () => {
    // show form add
    this.setState({
      isEdit: false,
      dataEdit: null
    });
  };
  _changeStatus = (status, id) => {
    let dataLocal = JSON.parse(localStorage.getItem("tasks"));
    let index = dataLocal.findIndex(item => item.id === id);
    this.setState(
      prev => {
        return (prev.tasks[index].status = +status);
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };
  _fiterTasks = (type, value) => {
    this.setState({
        filterType : type,
        valueFilter : value
    })
 
  };
}

export default Home;
