export const UseStateImplementation = () => {
  let index = 0;

  const state = [];

  const useState = (initialValue) => {
    const localIndex = index;
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
