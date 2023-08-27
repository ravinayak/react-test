export const UseStateImplementation = () => {
  let index = 0;

  let state = [];

  const useState = (initialValue) => {
    let localIndex = index;
    index++;

    if (state[localIndex] === undefined) {
      state[localIndex] = initialValue;
    }

    const setState = (value) => {
      state[localIndex] = value;
    };
    return [state[localIndex], setState];
  };

  const resetIndex = () => {
    index = 0;
  };

  return {
    resetIndex,
    useState,
  };
};
