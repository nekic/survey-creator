import { Base, SurveyModel } from "survey-core";
import { ActionBar, ReactElementFactory, Survey, SurveyElementBase } from "survey-react-ui";
import { CreatorBase, SurveySimulatorComponent, TabTestPlugin, TestSurveyTabViewModel } from "@survey/creator";
import React from "react";

export class SurveySimulator extends SurveyElementBase<any, any> {
  private model: SurveySimulatorComponent;

  constructor(props) {
    super(props);
    const plugin: TabTestPlugin = this.props.data;
    this.model = new SurveySimulatorComponent(this.props.options);
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if(!this.model.survey) {
      return (<div className="svd-simulator-main"></div>);
    }
    if(this.model.hasFrame) {
      return (
        <div className="svd-simulator-main">
          <div
            className="svd-simulator-wrapper"
            style={{ width: this.model.simulatorFrame.frameWidth + 'px', height: this.model.simulatorFrame.frameHeight + 'px' }}
          >
            <div
              className={"svd-simulator-frame " + this.model.simulatorFrame.cssClass}
              style={{ width: (this.model.landscapeOrientation ? this.model.simulatorFrame.frameHeight: this.model.simulatorFrame.frameWidth) + 'px', height: (this.model.landscapeOrientation ? this.model.simulatorFrame.frameWidth : this.model.simulatorFrame.frameHeight) + 'px' }}
              ></div>
            <div
              className="svd-simulator"
              style={{ width: this.model.simulatorFrame.width / this.model.simulatorFrame.scale + 'px', height: this.model.simulatorFrame.height / this.model.simulatorFrame.scale + 'px', transform: 'scale(' + this.model.simulatorFrame.scale + ') translate(-50%, -50%)' }}
            >
          <Survey
            className="svd-simulator-content"
            model={this.model.survey}
          ></Survey>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="svd-simulator-main">
          <Survey
            className="svd-simulator-content"
            model={this.model.survey}
          ></Survey>
        </div>
      );
    }
  }
}
