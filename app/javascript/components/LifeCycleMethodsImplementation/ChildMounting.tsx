import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';

export class ChildMounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Child Component - State',
    };
    console.log('ChildMounting - Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    logger.info('ChildMounting - getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    logger.info('ChildMounting - componentDidMount');
  }

  render() {
    logger.info('ChildMounting - render');
    return <div>ChildMouting Component Rendered</div>;
  }
}
