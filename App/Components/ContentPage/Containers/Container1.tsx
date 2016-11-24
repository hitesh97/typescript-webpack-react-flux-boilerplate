import * as React from "react";
import BaseComponent from "./../../BaseComponent";

// import bird from "./../../../Images/bird.jpg";

/* tslint:disable:no-any */
// const styles: any = require("./Container1.module.less");
/* tslint:enable:no-any */

interface IContentContainer1Props {
    isActive: boolean;
};

export default class ContentContainer1 extends BaseComponent<IContentContainer1Props, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return <div></div>;
    }
};