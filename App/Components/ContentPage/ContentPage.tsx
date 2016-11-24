import * as React from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import ContentFooter from "./ContentFooter/ContentFooter";
import Container1 from "./Containers/Container1";
import CommonStore from "../../Stores/CommonStore";
// import  * as CommonActionCreators from "../../ActionCreators/CommonActionCreators";
import SmartComponent from "./../SmartComponent";

/* tslint:disable:no-any */
// const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

interface IContentPageState {
   bodyTitle: string;
   bodySummary: string;
   sayHelloCount: number;
}

export default class ContentPage extends SmartComponent<{}, IContentPageState> {
    constructor() {
        super(CommonStore);
    }

    doRender(): React.ReactElement<{}> {
        const headerTitle: string = "Welcome to Lorem Ipsum";

        return <div>
                   <ContentHeader isActive={true} title={headerTitle} />
                   <ContentBody ref="contentBodyRef" title={this.state.bodyTitle} summary={this.state.bodySummary}>
                       <Container1 isActive={true} />
                   </ContentBody>
                   <ContentFooter isActive={true} title={headerTitle} />
               </div>;
    }

    protected getState(): IContentPageState {
        return {
            bodyTitle: CommonStore.getBodyTitle(),
            bodySummary: CommonStore.getBodySummary(),
            sayHelloCount: CommonStore.getSayHelloCount()
        };
    }

}