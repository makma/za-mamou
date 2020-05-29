import React from 'react'
import StepWizard from 'react-step-wizard';


class Wizard extends React.Component {

  render() {
    return (
      <StepWizard
        isHashEnabled
      >
       
    </StepWizard>
    ); <Question1 hashKey={'Question1'} />
        <Question2 hashKey={'Question2'} />
  }
}

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