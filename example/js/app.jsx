import React from 'react';
import ReactDOM from 'react-dom';
import TreeComp from '../dist/tree-comp.js';

let i =
  {
    label: '1',
    dataArray: [
      {
        label: '2',
        dataArray2: [
          {
            label: 4
          }
        ]
      },
      {
        label: '3'
      }
    ],

  }

class AppRoot extends React.Component {
  constructor()  {
    super();
  }

  render() {
    return <TreeComp data={i} accessKeys="dataArray.dataArray2"/>
  }
}
var appRootElement = React.createElement(AppRoot, {});

ReactDOM.render(appRootElement, document.getElementById('here'));
