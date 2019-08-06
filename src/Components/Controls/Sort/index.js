import React, { Component } from 'react'

export default class Sort extends Component {
  render() {
    return (
        <select className="form-control"  onChange={(event)=>{this.props._fiterTasks('sort',event.target.value)}}>
        <option value={'asc'}>Từ A đến Z</option>
        <option  value={'desc'}>Từ Z đến A</option>
      </select>
    )
  }
}