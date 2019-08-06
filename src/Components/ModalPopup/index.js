import React, { Component } from "react";
import CheckboxGroup from "react-checkbox-group";
class ModalPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      priority: "",
      labelArr: [],
      memberArr: [],
      status: "",
      description: ""
    };
  }
  componentWillReceiveProps(nextProps) {
	   if ( !nextProps.isEdit) {
		   this.setState({
			id: "",
			name: "",
			priority: "",
			labelArr: [],
			memberArr: [],
			status: "",
			description: ""
		   })
		   return
	   }
    if (nextProps.dataEdit) {
      this.setState({
        id: nextProps.dataEdit.id,
        name: nextProps.dataEdit.name,
        priority: nextProps.dataEdit.priority,
        labelArr: nextProps.dataEdit.labelArr,
        memberArr: nextProps.dataEdit.memberArr,
        status: nextProps.dataEdit.status,
        description: nextProps.dataEdit.description
      });
    }
  }

  render() {
    let { isEdit } = this.props;
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {isEdit ? "Sửa Task" : " Thêm Task"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <form onSubmit={this._onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
					name="name"
					value={this.state.name}
                    onChange={this._onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
					name="description"
					value={this.state.description}
                    onChange={this._onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    id="priority"
					name="priority"
					value={this.state.priority}
					
                    onChange={this._onChange}
                  >
                    <option value={0}>Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <label>Người thực hiện:</label>
                <br />
                <CheckboxGroup
                  name="memberArr"
                  value={this.state.memberArr}
                  onChange={this._onChangeMember}
                >
                  {Checkbox => (
                    <>
                      <label>
                        <Checkbox value="user_1" />Thủy Tiên
                      </label>
                      <label>
                        <Checkbox value="user_2" /> Huỳnh Hoa
                      </label>
                      <label>
                        <Checkbox value="user_3" /> Như Quỳnh
                      </label>
                      <label>
                        <Checkbox value="user_4" /> Admin
                      </label>
                    </>
                  )}
                </CheckboxGroup>

                <br />
                <br />
                <label>Nhãn:</label>
                <CheckboxGroup
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this._onChangeLabel}
                >
                  {Checkbox => (
                    <>
                      <label className="form-check-label">
                        <Checkbox value="Frontend" /> Frontend
                      </label>
                      <label className="form-check-label">
                        <Checkbox value="Backend" /> Backend
                      </label>
                      <label className="form-check-label">
                        <Checkbox value="API" /> API
                      </label>
                      <label className="form-check-label">
                        <Checkbox value="Issue" /> Issue
                      </label>
                    </>
                  )}
                </CheckboxGroup>
                <br />
              </div>
              {/* Modal footer */}

              <div className="modal-footer">
                <button type="submit" className="btn btn-success"  data-toggle="modal"
        data-target="#modalTask">
                  {isEdit ? "Sửa Task" : " Thêm Task"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  _onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  _onChangeMember = event => {
    this.setState({
      memberArr: event
    });
  };
  _onChangeLabel = event => {
    this.setState({
      labelArr: event
    });
  };

  _onSubmit = event => {
    event.preventDefault();
    this.props._addNewTask(this.state);
    this.props._onEdit(this.state);
  };
}

export default ModalPopup;
