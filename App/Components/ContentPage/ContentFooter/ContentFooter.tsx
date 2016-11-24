import * as React from "react";
import BaseComponent from "./../../BaseComponent";

/* tslint:disable:no-any */
// const styles: any = require("./ContentFooter.module.less");
/* tslint:enable:no-any */

interface IContentFooterProps {
    isActive: boolean;
    title: string;
};

export default class ContentFooter extends BaseComponent<IContentFooterProps, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return <footer className="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span className="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Bootstrap Theme Made By <a href="http://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
</footer>
;
    }
};