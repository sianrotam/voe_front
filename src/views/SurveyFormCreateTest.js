import { Component, Fragment } from "react";
import { SurveyCreatorComponent, SurveyCreator, editorLocalization } from "survey-creator-react";
// Import CSS files for SurveyJS (survey-core) and Survey Creator
import Header from "components/Headers/EmptyHeader.js";
import "survey-core/defaultV2.min.css";
import "survey-creator-react/survey-creator-react.min.css";

editorLocalization.currentLocale="ko";
editorLocalization.getLocale("").ed.testSurvey="미리보기";

const SurveyFormCreateTest = () => {
  var creator = new SurveyCreator({ showLogicTab: false, showJSONEditorTab: false, questionTypes:["boolean","checkbox","dropdown","radiogroup","text","rating"] });
  // Enable auto save
  creator.isAutoSave = true;
  // Show notifications before and after a survey definition JSON is saved
  creator.showState = true;
  return (
    <>
    <Header />
    <Fragment>
        <SurveyCreatorComponent creator={creator} />
      </Fragment>
      </>
  );
};

export default SurveyFormCreateTest;
