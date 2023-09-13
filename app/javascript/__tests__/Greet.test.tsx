// Although not required this is imported here to avoid TS errors that show up in VSCode
// TODO: Find how we can disable these errors for TS
import React from 'react';
// import { render, screen, queryByRole, logRoles } from '@testing-library/react';
import { render, screen, queryByRole, logRoles, renderHook, act } from '@app/tests/test-utils';
import user from '@testing-library/user-event';
import { Greet } from '../components/GreetTest/Greet';
import { ScreenExplanation } from '@app/components/GreetTest/ScreenExplanation';
// import { ScreenGrandParentContainer } from '@app/components/GreetTest/ScreenGrandParentContainer';
// import { ScreenParentContainer } from '@app/components/GreetTest/ScreenParentContainer';
// import { ScreenChild } from '@app/components/GreetTest/ScreenChild';
// import { App } from '../src/App';
import { Counter } from '@app/components/GreetTest/Counter';
import { InputAmount } from '@app/components/GreetTest/InputAmount';
import { SelectOptions } from '@app/components/GreetTest/SelectOptions';
import { FileUploader } from '@app/components/GreetTest/FileUploader';
import { CopyCutPasteKeyboardPress } from '@app/components/GreetTest/CopyCutPasteKeyboardPress';
// import { ProviderWrapper } from '@app/components/GreetTest/ProviderWapper';
import { ProviderWrappedComponent } from '@app/components/GreetTest/ProviderWrappedComponent';
// import { ParentCounterWithProps } from '@app/components/RenderHooksTest/ParentCounterWithProps';
import { useCounterWithProps } from '@app/hooks/useCounterWithProps';
import { CounterWithProps } from '@app/components/RenderHooksTest/CounterWithProps';
import { UsersApi } from '@app/components/MockingHttpRequests/UsersApi';
import { USERS_JSON } from '@app/shared/Constants';

describe('Greet', () => {
  test('Tests for rendering correctly with props', () => {
    render(<Greet name='Vishwas' />);
    const labelText = screen.getByLabelText('Vishwas');
    expect(labelText).toBeInTheDocument();
  });
  test('Tests for rendering correctly without props', () => {
    render(<Greet />);
    const labelText = screen.getByLabelText('Hello');
    expect(labelText).toBeInTheDocument();
  });
  test('Tests for label text without htmlFor attribute', () => {
    render(<Greet />);
    const labelText = screen.getByLabelText('I agree to the terms and conditions');
    expect(labelText).toBeInTheDocument();
  });
  test('Tests for select box', () => {
    render(<Greet />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });
  test('Tests for select checked box', () => {
    render(<Greet />);
    const checkedElement = screen.getByRole('option', {
      selected: true,
    });
    expect(checkedElement).toHaveValue('AU');
  });
  test('Tests for hidden element', () => {
    render(<Greet />);
    const mainHiddenElement = screen.getByRole('main', {
      hidden: true,
    });
    const paragraphElement = screen.getByText('Open Dialog');
    expect(mainHiddenElement).toContainElement(paragraphElement);
  });

  test('Tests for button element', () => {
    render(<Greet />);
    const buttonElement = screen.getByRole('button', {
      name: 'Close button',
    });
    const dialogElement = screen.getByRole('dialog');
    expect(dialogElement).toContainElement(buttonElement);
  });

  test('Tests for heading elements with levels for role', () => {
    render(<Greet />);
    const h1Element = screen.getByRole('heading', {
      level: 1,
    });
    const h2Element = screen.getByRole('heading', {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
    expect(h1Element).toHaveValue('This is an h1 tag');
  });

  test('Tests for Anchor Element with Link', () => {
    render(<Greet />);
    const anchorElement = screen.getByRole('link', {
      name: 'Google Link',
    });
    expect(anchorElement).toBeInTheDocument();
  });

  test('Tests for list elements', () => {
    render(<Greet />);
    const listElement = screen.getByRole('list');
    // const listItemElement = screen.getByRole("listitem", {
    //   name: "first item",
    // });
    expect(listElement).toBeInTheDocument();
  });

  // To print any element, use screen.debug(<element>)
  //
  test('Test for slider element', () => {
    render(<Greet />);
    const sliderElement = screen.getByRole('slider');
    const labelElement = screen.getByLabelText('Slider');
    expect(labelElement).toContainElement(sliderElement);
    // screen.debug(sliderElement);
    expect(sliderElement).toBeInTheDocument();
  });

  test('Test for paragraph, span elements in section', () => {
    render(<Greet />);
    const paragraphElement = screen.getByText(/.*is a paragraph$/);
    const spanElement = screen.getByText(/.*span.*/);
    expect(paragraphElement).toBeInTheDocument();
    expect(spanElement).toHaveValue('This is a span tag');
  });

  test('Test for Placeholder text,and displayValue', () => {
    render(<Greet />);
    const placeholderElement = screen.getByPlaceholderText('firstName');
    expect(placeholderElement).toHaveAttribute('disabled');

    const displayValueElement = screen.getByDisplayValue('ValueInput');
    expect(displayValueElement).toBeInTheDocument();
  });

  test('Test for testid', () => {
    render(<Greet />);
    const testidElement = screen.getByTestId('button-submit');
    expect(testidElement).toHaveValue('Submit');
  });

  test('Test for h3 not being present in the document', () => {
    render(<Greet />);
    const h3Element = screen.queryByRole('heading', {
      level: 3,
    });
    expect(h3Element).not.toBeInTheDocument();
  });

  test('Test for h2 being present in the document using queryBy', () => {
    render(<Greet />);
    const h2Element = screen.queryByRole('heading', {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test('Test for type of screen, container, manualQuery and how to use these in BaseQueries', () => {
    const { container, baseElement } = render(<ScreenExplanation />);
    const manualSelectedContainer = document.querySelector('#ScreenExplanation');
    // const { container } = render(<ScreenGrandParentContainer />);
    // screen.debug(container);
    // screen.debug(document);
    // console.log(screen);
    // screen.debug(container);
    // screen.debug(document.body);
    // screen.debug(document);
    // screen.debug(baseElement);
    // screen.debug(manualSelectedContainer);
    const manuallySelectedSkillsElement = manualSelectedContainer.querySelector('#Skills');
    // console.log('manualSelectedContainer :: ', Object.prototype.toString.call(c));
    // console.log(manualSelectedContainer);
    // screen.debug(container);
    // const h2Element1 = container.querySelector('#Skills');
    // console.log(h2Element1);
    // console.log('Screen :: ', Object.prototype.toString.call(screen));
    // console.log('Container :: ', Object.prototype.toString.call(container));
    // console.log(h2Element);
    // console.log('h2 element :: ', Object.prototype.toString.call(h2Element));
    // console.log('Container ::', Object.prototype.toString.call(container));
    // expect(h2Element).toBeInTheDocument();
    const buttonElement = queryByRole(container, 'button', {
      name: 'ScreenExplanation',
    });
    expect(buttonElement).toBeInTheDocument();
    expect(manuallySelectedSkillsElement).toBeInTheDocument();
  });

  test('Test for Start learning React being present in the document using findyby', async () => {
    render(<Greet />);
    const startLearningElement = await screen.findByText(
      /Start learning\.*/i,
      {},
      {
        timeout: 2000,
      },
    );
    expect(startLearningElement).toBeInTheDocument();
  });

  test('Test - logRoles method to see available roles in DOM tree', () => {
    const view = render(<Greet />);
    logRoles(view.container);
  });

  test('Test - user click event on button', async () => {
    user.setup();
    render(<Counter />);
    // name given to getByRole Base Query is also a TextMatch - It can be a regex as shown below
    const incrementButton = screen.getByRole('button', { name: /Increment/i });
    await user.click(incrementButton);
    const counterDiv = screen.getByText(/counter/i);
    expect(counterDiv).toHaveValue('1');
    await user.dblClick(incrementButton);
    expect(counterDiv).toHaveValue('3');
  });

  test('Test - User types in Input text box and value is set in a div element', async () => {
    user.setup();
    render(<InputAmount />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const inputElement = screen.getByRole('spinbutton');
    const setElement = screen.getByRole('button', { name: /set/i });
    const countElement = screen.getByTestId('count');
    // InputElement shows the amount set in component, initially set to a value of 0. When user clicks increment button
    // amount increases to 1, and this value shows up in the input element
    await user.click(incrementButton);
    expect(inputElement).toHaveValue(1);
    // If we do not clear input element, it will continue to have a value of 1, and when user types any data, it will be
    // appended to the existing value of 1, so typing 10 will cause the value in input element to become 110
    // So, we must clear the input element
    await user.clear(inputElement);
    // User types in value in input element, and when clicks set button, the div with data-test-id of count, gets this value
    await user.type(inputElement, '10');
    expect(inputElement).toHaveValue(10);
    await user.click(setElement);
    expect(countElement).toHaveValue('10');
  });

  test('Test - Tab focus on HTML Elements in InputComponent', async () => {
    user.setup();
    render(<InputAmount />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const inputElement = screen.getByRole('spinbutton');
    const setElement = screen.getByRole('button', { name: /set/i });
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setElement).toHaveFocus();
  });

  test('Test - Select Options', async () => {
    user.setup();
    render(<SelectOptions />);
    const selectElement = screen.getByRole('listbox', { name: /Select\.*/i });
    expect(selectElement).toBeInTheDocument();
    await user.selectOptions(selectElement, ['1', 'Psychology']);
    const optionWithValue: HTMLOptionElement = screen.getByRole('option', { name: /maths/i });
    expect(optionWithValue.selected).toBe(true);
    const optionWithLabel: HTMLOptionElement = screen.getByRole('option', { name: /maths/i });
    expect(optionWithLabel.selected).toBe(true);
    await user.deselectOptions(selectElement, '1');
    expect(optionWithLabel.selected).toBe(false);
  });

  test('Test - Upload a file', async () => {
    // input element of type file does not have any aria role defined for it
    // Use label text to get element
    user.setup();
    const view = render(<FileUploader />);
    logRoles(view.container);
    const fileUploadElement: HTMLInputElement = screen.getByLabelText(/upload\.*/i);
    expect(fileUploadElement).toBeInTheDocument();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    await user.upload(fileUploadElement, file);
    expect(fileUploadElement.files).toHaveLength(1);
    expect(fileUploadElement.files[0]).toBe(file);
    expect(fileUploadElement.files.item(0)).toBe(file);
  });

  test('Test - Cut Copy Paste from one input element to another', async () => {
    user.setup({ writeToClipboard: true });
    render(<CopyCutPasteKeyboardPress />);
    const content = 'I am going to be cut';
    // Not very clear about cut/copy/paste
    // Clipboard APIs need more research
    // expectations which are not working are commented out
    // TODO: Fix the test
    const inputTextCopyCutElement: HTMLInputElement = screen.getByRole('textbox', {
      name: /type.*/i,
    });
    const inputTextPasteElement: HTMLInputElement = screen.getByRole('textbox', {
      name: /.*input from.*/i,
    });
    expect(inputTextCopyCutElement).toBeInTheDocument();
    await user.type(inputTextCopyCutElement, content);
    expect(inputTextCopyCutElement).toHaveValue(content);
    await user.click(inputTextCopyCutElement);
    await user.cut();
    //expect(inputTextCopyCutElement).toHaveValue('');
    await user.click(inputTextPasteElement);
    await user.copy();
    await user.click(inputTextPasteElement);
    await user.paste();
    // expect(inputTextPasteElement).toHaveValue(content);
    await user.clear(inputTextPasteElement);
    await user.click(inputTextPasteElement);
    await user.paste(content);
    expect(inputTextPasteElement).toHaveValue(content);
    await user.clear(inputTextPasteElement);
    await user.click(inputTextPasteElement);
    await user.keyboard('foo');
    expect(inputTextPasteElement).toHaveValue('foo');
  });

  test('Test - App Provider which contains theme wrapped around a component', () => {
    // wrapper is used to wrap the component being rendered
    // In most cases, the wrapper wraps the entire application, this would require us to
    // wrap every component with the wrapper option, this can be avoided by using custom render
    // function
    render(<ProviderWrappedComponent />);
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toHaveTextContent(/.*dark.*/i);
  });

  test('Test - Render Hook', () => {
    const initialCounter = 0;
    // renderHook returns result object which contains object returned by hook, becasue a hook does not
    // return JSX, it cannot be called with render function
    // renderHook function returns an Object with the following properties
    //      {
    //        result: { current: <Object returned from hook> },
    //        rerender: [Function: rerender],
    //        unmount: [Function: unmount]
    //      }
    // const res = renderHook(useCounterWithProps, {
    //   initialProps: {
    //     counter: initialCounter,
    //   },
    // });
    // console.log(res);
    const { result } = renderHook(useCounterWithProps, {
      initialProps: {
        counter: initialCounter,
      },
    });
    // console.log(result.current);
    expect(result.current.counter).toBe(initialCounter);
    // Activities like rendering, data fetching, user actions are considered as units of interaction with UserInterface
    // We must wrap the state changes caused by any of these actions in act before making any assertions. This is to ensure
    // that the state changes are processed and applied to DOM. If we make assertions before state changes are processed and
    // applied to DOM, tests will fail
    // renderHook unlike render method is not wrapped in act
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(initialCounter + 1);
  });

  test('Test - Mock functions', async () => {
    const counter = 0;
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();
    user.setup();
    render(
      <CounterWithProps
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />,
    );
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(incrementButton);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    await user.click(decrementButton);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });

  test.only('Test - Mock HTTP Request using MSW', async () => {
    render(<UsersApi />);
    const usersList = await screen.findByRole('list');
    expect(usersList).toBeInTheDocument();
    const usersListItems = await screen.findAllByRole('listitem');
    expect(usersListItems).toHaveLength(USERS_JSON.length);
  });
});
