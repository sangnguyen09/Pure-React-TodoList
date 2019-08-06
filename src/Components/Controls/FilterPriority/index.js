import React, { Component } from 'react'

export default class FilterPriority extends Component {
  render() {
    return (
        <select className="form-control" onChange={(event)=>{this.props._fiterTasks('priority',event.target.value)}}>
        <option className="font-weight-bold" value={0} >Tất cả</option>
        <option className="text-info font-weight-bold" value={3}>
          Thấp
        </option>
        <option className="text-success font-weight-bold" value={2}>
          Trung bình
        </option>
        <option className="text-danger font-weight-bold" value={1}>
          Cao
        </option>
      </select>
    )
  }
}
