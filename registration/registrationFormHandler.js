import {
  StatusBuilderAnnotationFactory, 
  RuleFactory,  
  FormElementsStatusHelper,
  WithName
} from 'rules-config/rules';

const filter = RuleFactory('54770224-0e87-4528-b270-a8189259df4d', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEnrolment', 'formElement');
const WithRegistrationStatusBuilder = StatusBuilderAnnotationFactory('individual', 'formElement');

@filter('279c3c48-7d6c-11ea-bc55-0242ac130003', 'CovidEnrolmentFormHandlerHP', 100.0)
class CovidEnrolmentFormHandlerHP {
  static exec(programEnrolment, formElementGroup, today) {
      return FormElementsStatusHelper
          .getFormElementsStatusesWithoutDefaults(new CovidEnrolmentFormHandlerHP(), programEnrolment, formElementGroup, today);
  }       

  @WithName('Date of arrival in India')
  @WithName('Name of the country')
  @WithStatusBuilder
  h1([], statusBuilder) {
          statusBuilder.show().when.valueInEnrolment('Any foreign travel history in last 28 days?')
          .containsAnswerConceptName("Yes");
  }

  @WithName('Date of arrival in Himachal')
  @WithName('Name of the Indian State')
  @WithStatusBuilder
  h2([], statusBuilder) {
          statusBuilder.show().when.valueInEnrolment('Any travel history from other state in India in last 28 days?')
          .containsAnswerConceptName("Yes");
  }
  

}




module.exports = {CovidEnrolmentFormHandlerHP};