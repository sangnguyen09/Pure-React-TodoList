import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStatus: ""
    };
  }
 
  componentDidMount() {
    this.setState({
      selectedStatus: this.props.item.status
    });
  }
  componentWillReceiveProps(nextProps){

    this.setState({
      selectedStatus: nextProps.item.status
    });
  }
 

  render() {
    let { item, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{this._elmLabel(item)}</td>
        <td
          className={`${
            this._getPriority(item).className
          } font-weight-bold text-center`}
        >
          {this._getPriority(item).name}
        </td>
        <td className="text-center">{this._getImgUser(item.memberArr)}</td>
        <td className="text-center d-flex">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-toggle="modal"
            data-target="#modalTask"
            onClick={() => {
              this.props._editTask(item);
            }}
          >
            Sửa
          </button>
          <select
            className="form-control"
            name="selectedStatus"
            value={this.state.selectedStatus}
            onChange={this._changeStatus}
          >
            <option value={1}>Chưa bắt đầu</option>
            <option value={2}> Đang tiến hành</option>
            <option value={3}>Hoàn thành</option>
            <option value={4}>Hủy bỏ</option>
          </select>
        </td>
        <td className="text-center">{this._getStatus(item.status)}</td>
      </tr>
    );
  }
  _elmLabel = item => {
    return item.labelArr.map((label, index) => {
      return (
        <i
          className="fa fa-circle"
          style={{ color: this._getColorLabel(label) }}
          key={index}
        />
      );
    });
  };

  _getColorLabel = label => {
    let labelColor;
    switch (label) {
      case "Frontend":
        return (labelColor = "#389E0D");

      case "Backend":
        return (labelColor = "#722ED1");

      case "API":
        return (labelColor = "#13c2c2");

      case "Issue":
        return (labelColor = "#CF1322");

      default:
        labelColor = "";
        break;
    }
    return labelColor;
  };
  _getPriority = item => {
    let obj = {
      name: "",
      className: ""
    };
    switch (+item.priority) {
      case 1:
        obj.name = "Cao";
        obj.className = "text-danger";
        break;
      case 2:
        obj.name = "Trung bình";
        obj.className = "text-warning";
        break;
      case 3:
        obj.name = "Thấp";
        obj.className = "text-primary";
        break;

      default:
        break;
    }
    return obj;
  };
  _getImgUser = users => {
    return users.map((user, i) => {
      return (
        <img src={`./img/${user}.jpg`} className="user" alt="ds" key={i} />
      );
    });
  };
  _getStatus = status => {
    switch (status) {
      case 1:
        return <i className="fa fa-play" />;
      case 2:
        return <i className="fa fa-spinner" />;

      case 3:
        return <i className="fa fa-check-square-o  " />;
      case 4:
        return <i className="fa fa-trash"></i>;
      default:
        break;
    }
  };
  _changeStatus = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props._changeStatus(event.target.value, this.props.item.id);
  };
}
