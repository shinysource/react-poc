import React from 'react';

const NewOrderStep2Component = (props) => {
  const { activeStep } = props;
  return (
    <div className="card">
      <div className="card-header">Title Step {activeStep}</div>
      <div className="card-block">
        Step {activeStep} Content
        </div>
    </div>
  );
}

export default NewOrderStep2Component;