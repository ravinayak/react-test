import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';
import { ChildMounting } from './ChildMounting';

export class ParentMounting extends Component {
  constructor(props) {
    super(props);
    logger.info('ParentMounting Component :: Because super(props) has been called, we now have access to this.state');
    this.state = {
      name: 'Test Constructor Lifecycle - ParentMounting Component State in constructor',
    };
    logger.info(this.state);
    logger.info('ParentMounting - Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    logger.info(
      'ParentMounting Component :: Because this is a static method, we can only return state as a new object, we do not have access to this keyword',
    );
    logger.info('ParentMounting - getDerivedStateFromProps');
    return {
      name: 'Test Constructor Lifecycle - ParentMounting state has been updated in getDerivedStateFromProps method',
    };
  }

  componentDidMount() {
    logger.info('ParentMounting - componentDidMount');
    logger.info('Verify if state was updatated - State in ParentMounting Component :: ', this.state);
  }

  render() {
    logger.info('ParentMounting - Render');
    return (
      <div>
        <div>ParentMounting Component Rendered</div>
        <ChildMounting />
      </div>
    );
  }
}
