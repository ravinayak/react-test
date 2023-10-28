/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

export class ErrorComponentB extends Component {
  constructor(props) {
    super(props);
    // Line below throws an error which is caught by ErrorBoundary
    // and it renders fallback UI
    //
    this.state.toString();
  }

  render() {
    return <div> ErrorComponentB rendered</div>;
  }
}
