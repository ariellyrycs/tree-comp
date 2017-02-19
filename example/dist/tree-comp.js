import React from 'react';

let getProperty = function (data, propertyStr) {
  let properties = propertyStr.split('.');
  let currentdata = data;
  while (properties.length) {
    if(properties.length === 0 || !currentdata[properties[0]] || Array.isArray(currentdata)) {
      return {
        data: currentdata,
        accessKeys: properties.join('.')
      };
    }
    currentdata = currentdata[properties.shift()];
  }
};



class TreeComp extends React.Component {
  render() {
    debugger;
    let {data, accessKeys} = this.props;
    return (
        <TreeNode data={data} accessKeys={accessKeys}/>
    );
  }
}

class TreeNode extends React.Component {
  render() {
    debugger;
    let nodes;
    let dataProps = this.props.data;
    let title = <li className="title"><span>{dataProps.label}</span></li>;
    let {data, accessKeys} = getProperty(dataProps, this.props.accessKeys);
    if(Array.isArray(data)) {
      nodes = <li className="list">
        {data.dataArray.map((item, index) => <TreeComp data={item} accessKeys={accessKeys} key={index}/>)}
      </li>;
    }
    return (
      <ul className="unstyled">
        {title}
        {nodes}
      </ul>
    );
  }
}

export default TreeComp;


/*
<ul>
  <li>
    <span>title</span>
    <div>
      <ul>
        <li><span></span></li>
      </ul>
    </div>
  </li>
</ul>


li>li+li
*/
