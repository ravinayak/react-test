/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error) {
    // This method catches error and sets errorState for the component
    // which decides to render fallback UI in error or children components
    // if there is no error
    //
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    logger.info(error);
    logger.info(info);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return <div>Error Boundary Fallback UI</div>;
    }
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}
