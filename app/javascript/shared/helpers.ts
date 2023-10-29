export const negZeroNumberCheck = (element: any): string => {
  let elementStr: string = '';
  if (Object.is(element, -0)) {
    elementStr += '-';
  } else if (typeof element === 'number' && !Number.isNaN(element)) {
    elementStr += 'Number ';
  }
  return elementStr + element;
};

export const displayArray = (arr: any[]): string => {
  let str = '[';
  arr.forEach((element) => {
    if (element === null) {
      str += 'null, ';
    }
    if (element === undefined) {
      str += 'undefined, ';
    }
    if (typeof element === 'string') {
      str += `"${element}", `;
    }
    if (Object.is(element, true)) {
      str += `true, `;
    }
    if (Object.is(element, false)) {
      str += `false, `;
    }
    if (Object.is(element, NaN)) {
      str += `NaN, `;
    }
    if (Object.is(element, -0)) {
      str += `-0, `;
    }
    if (typeof element === 'number' && !Object.is(element, -0) && !Object.is(element, NaN)) {
      str += `${element}, `;
    }
    if (typeof element === 'object' && !element === null) {
      str += `${element}, `;
    }
  });
  str = str.replace(/,\s*$/, '');
  str += ']';
  return str;
};

export const formatForDisplay = (element: any): any => {
  if (typeof element === 'string') {
    return `"${element}"`;
  }
  if (Object.is(element, -0)) {
    return '-0';
  }
  if (Array.isArray(element)) {
    return displayArray(element);
  }
  return element;
};

export const keyGenerator = (num: number): string => `abc-key-${num}`;

export const getNestedRoute = (currentRoute: string, locationPath): string | null => {
  // /\/modern_react_with_router\/?(.*)/
  const pattern = new RegExp(`${currentRoute}/?(.*)`);
  const match = locationPath.pathname.match(pattern);
  if (match && match[1]) {
    return match[1];
  }
  return null;
};
