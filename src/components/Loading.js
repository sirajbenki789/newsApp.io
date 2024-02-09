import React, { Component } from 'react'
import './loading.css'
export default class Loading extends Component {
  render() {
    return (
      <div style={{width:' fit-content',
        margin: 'auto'}}>
    <h2>Loading Spiner</h2>
        <div className="box">
        </div>
      </div>
    )
  }
}
