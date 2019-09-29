import React, { Component } from "react";
import {Button} from 'antd';

import './content.less';

class Content extends Component {

  render(){
    return (
      <div className="content-container">
        <p>Content here!!!</p>
        <Button>Click me!!!</Button>
      </div>
    );

  }
  
};

export default Content;

