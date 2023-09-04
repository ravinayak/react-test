/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true
  });
}

// logOnDifferentValues:
//    Normally, only re-renders that are caused by equal values in props / state trigger notifications. This is default
//    behavior because we only want logs about component re-renders when they could have been avoided.
//    But, With this option, it is possible to track all re-renders.