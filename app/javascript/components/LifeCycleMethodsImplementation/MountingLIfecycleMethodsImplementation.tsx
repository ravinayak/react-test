import React, { Component } from 'react';
import { ParentMountingA } from './ParentMountingA';

export class MountingLifecycleMethodsImplementation extends Component {
  render() {
    return (
      <center style={{ marginTop: '250px' }}>
        <div>MountingLifeCycleMethodsImplementation Component Rendered</div>
        <ParentMountingA />
      </center>
    );
  }
}
