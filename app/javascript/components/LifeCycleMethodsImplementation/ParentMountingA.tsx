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

  // For deciding whether a component should update or not, it must have latest props and state
  // Latest props and state is represented by nextProps, nextState
  // For a component to update, this method must return true
  //
  shouldComponentUpdate(nextProps, nextState) {
    logger.info('ParentMountingA :: shouldComponentUpdate');
    return true;
  }

  // To get snapshot of previous state of a component before update, method must have handle of
  // previous props and previous state before it gets updated to new props and new state
  // This method must return null or value
  //
  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    logger.info('ParentMountingA :: getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    logger.info('ParentMountingA :: componentDidUpdate');
  }

  componentDidMount() {
    logger.info('ParentMountingA :: componentDidMount');
  }

  changeState = () => {
    this.setState({
      name: 'ParentMounting Component State has been updated upon button click ',
    });
  };

  render() {
    logger.info('ParentMountingA :: render');
    return (
      <div>
        <br />
        <div>ParentMountingA Component Rendered</div>
        <br />
        <br />
        <button onClick={this.changeState}>Click Me to Update State!!</button>
        <br />
        <br />
        <ChildMountingA />
      </div>
    );
  }
}
