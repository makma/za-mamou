import React from 'react'
import StepWizard from 'react-step-wizard';


const onStepChange = (stats) => {
  console.log(stats);
};

class Wizard extends React.Component {

  render() {
    return (
      <StepWizard
        onStepChange={onStepChange}
        isHashEnabled
      >
        <Question1 hashKey={'FirstStep'} />
        <Question2 hashKey={'TheEnd!'} />
    </StepWizard>
    );
  }
}

const Question1 = props => {
    return (
        <div>
            <h3 className='text-center'>Bla bla?</h3>
            <button className={'btn btn-secondary'} onClick={lastStep}>Next Step</button>
        </div>
    );
};

const Question2 = props => {
  return (
      <div>
          <h3 className='text-center'>Bla bla?</h3>
          <button className={'btn btn-secondary'} onClick={firstStep}>Previous Step</button>
      </div>
  );
};

export default Wizard