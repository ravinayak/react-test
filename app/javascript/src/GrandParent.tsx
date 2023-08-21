import React, { useState } from "react";
import { logger } from "@app/lib/Logger";
import { Parent } from "./Parent";
import { Child } from "./Child";

export function GrandParent() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    return counter;
  };
  logger.info("Grand Parent Rendered");
  return (
    <>
      <div>Grand Parent Counter :: {counter} </div>
      <button id="counter" onClick={() => increment()} type="button">
        GrandParent Increment
      </button>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}
