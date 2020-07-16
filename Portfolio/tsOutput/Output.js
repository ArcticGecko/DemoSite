export * from '@babel/polyfill';
export * from './Header/index';
export * from './Footer/index';
export * from './Pages/index';
import { Variables } from './Variables';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDom from 'react-dom';
window.$ = $;
window.React = React;
window.ReactDom = ReactDom;
window.variables = new Variables();
window.variables.gradientStart = "#00F260";
window.variables.gradientEnd = "#0575E6";
//# sourceMappingURL=Output.js.map