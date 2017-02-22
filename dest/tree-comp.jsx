import React from 'react';

let getProperty = function (data, propertyStr) {
  let properties = propertyStr.split('.');
  let currentdata = data;
  for(let i = 0, len = properties.length; i < len; i += 1) {
    if(!currentdata[properties[i]] || Array.isArray(currentdata)) {
      return {
        data: currentdata,
        accessKeys: properties.splice(i).join('.')
      };
    }
    currentdata = currentdata[properties[i]];
  }
  return {
    data: currentdata,
    accessKeys: ''
  };
};

class TreeNode extends React.Component {
  constructor() {
    super();
    this.state = {
      opened: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    event.preventDefault();
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    let nodes;
    let dataProps = this.props.data;
    let title = <li className="title">
      <a href="#" onClick={this.toggle} ><span className={"glyphicon " + (this.state.opened? "glyphicon-minus": "glyphicon-plus")}></span> {dataProps.label}</a>
    </li>;
    let {data, accessKeys} = getProperty(dataProps, this.props.accessKeys);
    if(Array.isArray(data) && this.state.opened) {
      nodes = <li className="list">
        {data.map((item, index) => <TreeNode data={item} accessKeys={accessKeys} key={index}/>)}
      </li>;
    }
    return (
      <ul className="list-unstyled">
        {title}
        {nodes}
      </ul>
    );
  }
}

export default TreeNode;
