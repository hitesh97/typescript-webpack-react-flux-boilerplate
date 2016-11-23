import * as React from "react";
import BaseComponent from "./../../BaseComponent";

/* tslint:disable:no-any */
// const styles: any = require("./ContentHeader.module.less");
/* tslint:enable:no-any */

interface IContentHeaderProps {
    isActive: boolean;
    title: string;
};

export default class ContentHeader extends BaseComponent<IContentHeaderProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return <nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Me</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">WHO</a></li>
        <li><a href="#">WHAT</a></li>
        <li><a href="#">WHERE</a></li>
      </ul>
    </div>
  </div>
</nav>;
    }
};