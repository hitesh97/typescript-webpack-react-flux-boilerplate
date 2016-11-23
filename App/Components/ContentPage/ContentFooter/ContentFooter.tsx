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

        return <footer className="container-fluid bg-4 text-center">
  <p>Bootstrap Theme Made By <a href="http://www.w3schools.com">www.w3schools.com</a></p> 
</footer>;
    }
};