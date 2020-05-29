import React from 'react';
import StepWizard from 'react-step-wizard';
import { useStaticQuery, graphql } from 'gatsby';
import Question from './Question';
import Result from './Result';


export const Wizard = () => {
  const allQuestionsAndResults  = useStaticQuery(
    graphql`
      query {
          allKontentItemQuestion {
            nodes {
              elements {
                title {
                  value
                }
                text {
                  value
                }
                description {
                  value
                }
                answers {
                  value {
                    name
                  }
                }
              }
              system {
                codename
              }
            }
          }
          allKontentItemResult {
            nodes {
              elements {
                description {
                  value
                }
                title {
                  value
                }
              }
              system {
                codename
              }
            }
          }
      }
    `
  );
  
  const questions = allQuestionsAndResults.allKontentItemQuestion.nodes;
  const results = allQuestionsAndResults.allKontentItemResult.nodes;

  const duration = questions.filter(question => question.system.codename === 'duration')[0];
  const citizenship = questions.filter(questions => questions.system.codename === 'citizenship')[0];
  const residence = questions.filter(questions => questions.system.codename === 'permanent_or_temporary_residence')[0];
  const return_in_48 = questions.filter(questions => questions.system.codename === 'return_in_48_hours')[0];
  const foreigner_1 = questions.filter(questions => questions.system.codename === 'foreigner_1')[0];
  const foreigner_2 = questions.filter(questions => questions.system.codename === 'foreigner_2')[0];
  const foreigner_3 = questions.filter(questions => questions.system.codename === 'foreigner_3')[0];
  const foreigner_4 = questions.filter(questions => questions.system.codename === 'foreigner_4')[0];
  const foreigner_5 = questions.filter(questions => questions.system.codename === 'foreigner_5')[0];
  const foreigner_6 = questions.filter(questions => questions.system.codename === 'foreigner_6')[0];
  const foreigner_7 = questions.filter(questions => questions.system.codename === 'foreigner_7')[0];
  const foreigner_8 = questions.filter(questions => questions.system.codename === 'foreigner_8')[0];
  const foreigner_9 = questions.filter(questions => questions.system.codename === 'foreigner_9')[0];
  const foreigner_10 = questions.filter(questions => questions.system.codename === 'foreigner_1')[0];
  const no_limitations = results.filter(result => result.system.codename === 'no_limitations')[0];
  const quarantine = results.filter(result => result.system.codename === 'limitations_quarantine')[0];
  const unable_to_enter = results.filter(result => result.system.codename === 'unable_to_enter')[0];

  return (
    <div className="wizard">
      <StepWizard isHashEnabled={true}>
        <Question hashKey={'1'} question={duration} target={{yes: 2, no: 3}} />
        <Question hashKey={'2'} question={citizenship} target={{yes: 4, no: 5}} />
        <Question hashKey={'3'} question={residence} target={{yes: 15, no: 2}} />
        <Question hashKey={'4'} question={return_in_48} target={{yes: 15, no: 16}} />
        <Question hashKey={'5'} question={foreigner_1} target={{yes: 4, no: 6}} />
        <Question hashKey={'6'} question={foreigner_2} target={{yes: 4, no: 7}} />
        <Question hashKey={'7'} question={foreigner_3} target={{yes: 4, no: 8}} />
        <Question hashKey={'8'} question={foreigner_4} target={{yes: 4, no: 9}} />
        <Question hashKey={'9'} question={foreigner_5} target={{yes: 4, no: 10}} />
        <Question hashKey={'10'} question={foreigner_6} target={{yes: 4, no: 11}} />
        <Question hashKey={'11'} question={foreigner_7} target={{yes: 4, no: 12}} />
        <Question hashKey={'12'} question={foreigner_8} target={{yes: 4, no: 13}} />
        <Question hashKey={'13'} question={foreigner_9} target={{yes: 4, no: 14}} />
        <Question hashKey={'14'} question={foreigner_10} target={{yes: 4, no: 17}} />
        <Result hashKey={'15'} result={no_limitations} />
        <Result hashKey={'16'} result={quarantine} />
        <Result hashKey={'17'} result={unable_to_enter} />
      </StepWizard>
    </div>
  )};

export default Wizard
