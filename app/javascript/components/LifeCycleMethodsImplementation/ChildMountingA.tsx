import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';

export class ChildMountingA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Child Component - State',
    };
    console.log('ChildMountingA :: Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    logger.info('ChildMountingA :: getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    logger.info('ChildMountingA :: componentDidMount');
  }

  render() {
    logger.info('ChildMountingA :: render');
    return <div>ChildMoutingA Component Rendered</div>;
  }
}
