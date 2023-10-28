/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ErrorBoundary } from '@app/lib/ErrorBoundary';
import { ErrorComponentA } from './ErrorComponentA';
import { ErrorComponentB } from './ErrorComponentB';

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
