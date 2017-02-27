'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
};
var title = createElement('h1', { id: "Title", className: 'header', style: style }, 'Hello World');

// broken because I need to use babel to transpile
render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: style },
  'Hello World'
), document.getElementById('react-container'));
