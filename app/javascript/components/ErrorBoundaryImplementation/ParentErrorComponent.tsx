import React, { Component } from 'react';
import { ErrorComponentA } from './ErrorComponentA';
import { ErrorComponentB } from './ErrorComponentB';
import { ErrorBoundary } from '@app/lib/ErrorBoundary';

export class ParentErrorComponent extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ErrorComponentA />
        <ErrorComponentB />
      </ErrorBoundary>
    );
  }
}
