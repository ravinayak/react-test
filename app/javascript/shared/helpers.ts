export const negZeroNumberCheck = (element: any): string => {
  let elementStr: string = '';
  if (Object.is(element, -0)) {
    elementStr += '-';
  } else if (typeof element === 'number' && !Number.isNaN(element)) {
    elementStr += 'Number ';
  }
  return elementStr + element;
};

export const formatForDisplay = (element: any): any => {
  if (typeof element === 'string') {
    return `"${element}"`;
  }
  if (Object.is(element, -0)) {
    return '-0';
  }
  if (Array.isArray(element)) {
    return `[${element}]`;
  }
  return element;
};
