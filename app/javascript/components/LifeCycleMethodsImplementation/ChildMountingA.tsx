/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';

export class ChildMountingA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Child Component - State',
    };
    logger.info('ChildMountingA :: Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    logger.info('ChildMountingA :: getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    logger.info('ChildMountingA :: componentDidMount');
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    logger.info('ChildMountingA :: shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    logger.info('ChildMountingA :: getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    logger.info('ChildMountingA :: componentDidUpdate');
  }

  render() {
    logger.info('ChildMountingA :: render');
    return <div>ChildMoutingA Component Rendered</div>;
  }
}
