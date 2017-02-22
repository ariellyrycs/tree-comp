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

  hasContent() {

  }

  render() {
    let nodes;
    let dataProps = this.props.data;
    debugger;
    let iconClass = (this.state.opened ? "glyphicon-minus": "glyphicon-plus");
    let title;
    let {data, accessKeys} = getProperty(dataProps, this.props.accessKeys);
    let list;
    if(Array.isArray(data)) {
      title = <a href="#" onClick={this.toggle} ><span className={"glyphicon " + iconClass}></span> {dataProps.label}</a>;
      if(this.state.opened) {
        nodes = <li className="list">
          {data.map((item, index) => <TreeNode data={item} accessKeys={accessKeys} key={index}/>)}
        </li>;
      }
    } else {
      title = <a href="#" onClick={this.toggle} >&nbsp;&nbsp;&nbsp;&nbsp;{dataProps.label}</a>;
    }
    return <ul className="list-unstyled">
        <li className="title">
          {title}
        </li>
        {nodes}
      </ul>;
  }
}

export default TreeNode;
