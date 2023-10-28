/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';
import { ChildMounting } from './ChildMounting';

export class ParentMounting extends Component {
  constructor(props) {
    super(props);
    logger.info(
      'ParentMounting Component :: Because super(props) has been called, we now have access to this.state',
    );
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
    logger.info(
      'Verify if state was updatated - State in ParentMounting Component :: ',
      this.state,
    );
  }

  // For deciding whether a component should update or not, it must have latest props and state
  // Latest props and state is represented by nextProps, nextState
  // For a component to update, this method must return true
  //
  shouldComponentUpdate(nextProps, nextState) {
    logger.info('ParentMounting :: shouldComponentUpdate');
    return true;
  }

  // To get snapshot of previous state of a component before update, method must have handle of
  // previous props and previous state before it gets updated to new props and new state
  // This method must return null or value
  //
  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    logger.info('ParentMounting :: getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    logger.info('ParentMounting :: componentDidUpdate');
  }

  changeState() {
    this.setState({
      name: 'ParentMounting Component State has been updated upon button click ',
    });
  }

  render() {
    logger.info('ParentMounting - Render');
    return (
      <div>
        <div>ParentMounting Component Rendered</div>
        <br />
        <br />
        <button type='submit' onClick={this.changeState}>
          Click Me to Update State!!
        </button>
        <br />
        <br />
        <ChildMounting />
      </div>
    );
  }
}
