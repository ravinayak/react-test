import React from 'react';
import { ProviderWrapper } from './ProviderWapper';
import { ThemedComponent } from './ThemedComponent';

export function ProviderWrappedComponent() {
  // ThemedComponent is provided as children to ProviderWrapper Component which contains
  // ThemeProvider that contains theme set through theme prop
  return (
    <ProviderWrapper>
      <ThemedComponent />
    </ProviderWrapper>
  );
}
