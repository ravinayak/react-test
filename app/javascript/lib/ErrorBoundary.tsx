import React, { Component } from 'react';
import { logger } from '@app/lib/Logger';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
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
    if (this.state.hasError) {
      return <div>Error Boundary Fallback UI</div>;
    } else {
      return this.props.children;
    }
  }
}
