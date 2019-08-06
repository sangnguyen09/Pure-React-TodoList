import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div className="form-group text-left my-0">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm công việc"
          onChange={(event)=>{this.props._fiterTasks('search',event.target.value)}}
        />
      </div>
    )
  }
}
