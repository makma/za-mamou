import React from 'react'
import StepWizard from 'react-step-wizard';
import { useStaticQuery } from "gatsby"


export const Wizard = () => {

  const allQuestions  = useStaticQuery(
    graphql`
      query MyQuery {
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
      }
    `
  );
  
    const questions = allQuestions.allKontentItemQuestion.nodes
    const durationQuestion = questions.filter(question => question.system.codename === 'duration')[0]

    return (
      <>
      	{durationQuestion.elements.title.value}
        {durationQuestion.elements.text.value}
        {durationQuestion.elements.description.value}
        <StepWizard
          isHashEnabled
        >
          <Question1 hashKey={'Question1'} />
          <Question2 hashKey={'Question2'} />
        </StepWizard>
      </>
    )};

const Question1 = props => {
    return (
        <div>
            <h3 className='text-center'>Bla bla?</h3>
            <button className={'btn btn-secondary'} onClick={props.lastStep}>Next Step</button>
        </div>
    );
};

const Question2 = props => {
  return (
      <div>
          <h3 className='text-center'>Bla bla?</h3>
          <button className={'btn btn-secondary'} onClick={props.firstStep}>Previous Step</button>
      </div>
  );
};

export default Wizard