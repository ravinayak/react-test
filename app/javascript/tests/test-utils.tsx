import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ProviderWrapper } from '@app/components/GreetTest/ProviderWapper';

// customRender function here returns render with the same configuration as render would normally take except that
// it takes wrapper option which is ProviderWrapper component. As a result of this wrapper being provided to the render
// function, all components which are rendered through the render function in react tests are wrapped with this wrapper
// Hence all components have access to the Theme set by ThemeProvider

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: ProviderWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
