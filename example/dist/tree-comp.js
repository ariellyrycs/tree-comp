import React from 'react';

class TreeComp extends React.Component {
  render() {
    let nodes;
    if(data.array) {
      nodes = data.array.map(item => <TreeNode data={item}>);
    }

    return <div>
      <ul className="unstyled">
        <li>data.label</li>
      </ul>
    </div>;

  }
}

class TreeNode extends React.component {
    constructor() {

    }
    render() {

    }
}

export default TreeComp;
