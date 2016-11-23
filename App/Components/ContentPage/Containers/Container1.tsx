import * as React from "react";
import BaseComponent from "./../../BaseComponent";

// import bird from "./../../../Images/bird.jpg";

/* tslint:disable:no-any */
const styles: any = require("./Container1.module.less");
/* tslint:enable:no-any */

interface IContentContainer1Props {
    isActive: boolean;
};

export default class ContentContainer1 extends BaseComponent<IContentContainer1Props, {}> {
    doRender(): React.ReactElement<{}> {
        if (!this.props.isActive) {
            return null;
        }

        return <div className="container-fluid bg-1 text-center">
  <h3 className="margin">Who Am I?</h3>
  <img src="images/bird.jpg" className="img-responsive img-circle margin" 
  style={styles.ingInline} alt="Bird" width="350" height="350" />
  <h3>I'm an adventurer</h3>
</div>;
    }
};