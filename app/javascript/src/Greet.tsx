import React from "react";
import { logger } from "@app/lib/Logger";

interface IProps {
  name?: string;
}

export function Greet({ name }: IProps) {
  const nameValue: string = name || "Hello";
  return (
    <>
      <h1>This is an h1 tag</h1>
      <h2>This is an h2 tag</h2>
      <main aria-hidden="true">
        <p>Open Dialog</p>
      </main>
      <div role="dialog">
        <button type="button">Close button</button>
      </div>
      <div>
        <div>
          <label htmlFor="name">{nameValue}</label>
          <input id="name" type="textbox" />
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <input type="checkbox" />I agree to the terms and conditions
          </label>
        </div>
        <div>
          /
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location" defaultValue="AU">
            <option value="">Select a country</option>
            <option value="AU">Australia</option>
            <option value="GB">Great Britain</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
          </select>
        </div>
        <div>
          <a href="www.google.com" target="_blank">
            Google Link
          </a>
        </div>
        <ol>
          # For list items, name attribute or text does not work # To select a
          specific list item, we have to provide # an aria-label attribute and
          assign it that value
          <li aria-label="first item">first item</li>
          <li aria-label="second item">second item</li>
          <li aria-label="third item">third item</li>
        </ol>
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="slider-element">Slider</label>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          id="slider-element"
          onChange={() => logger.info("Hi")}
        />
      </div>
      <div>
        <p>This is a paragraph</p>
        <span>This is a span tag</span>
      </div>
      <section>
        Section Element
        <p>This is a section paragraph</p>
        <input
          type="textbox"
          placeholder="firstName"
          onChange={() => logger.info("Hello")}
          disabled
        />
        <input
          type="textbox"
          value="ValueInput"
          onChange={() => logger.info("Hello")}
        />
        <button data-testid="button-submit" type="submit">
          Submit
        </button>
      </section>
    </>
  );
}
Greet.defaultProps = {
  name: "",
};
