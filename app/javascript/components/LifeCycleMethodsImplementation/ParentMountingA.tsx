import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';
import { ChildMountingA } from './ChildMountingA';

export class ParentMountingA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Test Constructor Lifecycle - ParentMounting Component State in constructor',
    };
    logger.info('ParentMountingA :: Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    logger.info('ParentMountingA :: getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    logger.info('ParentMountingA :: componentDidMount');
  }

  render() {
    logger.info('ParentMountingA :: render');
    return (
      <div>
        <div>ParentMountingA Component Rendered</div>
        <ChildMountingA />
      </div>
    );
  }
}
