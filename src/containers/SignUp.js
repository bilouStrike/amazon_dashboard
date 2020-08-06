import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import SignUpStepOne from 'containers/steps/SignUpStepOne';
import SignUpStepTwo from 'containers/steps/SignUpStepTwo';

const SignUp = () => {

    const { isAuthenticated } = useSelector(state => state.auth)  
    const [ stepOneValues, setStepOneValues ] = useState({});
    const [ stepTwoValues, setStepTwoValues ] = useState({});
    const [ step, setStep ] = useState(1);

    if (isAuthenticated) {
      return <Redirect to='/' />;
    }

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <div className="amazon-tool-login-title">
                <h1>Hello! <br/> Start Now.</h1>
              </div>
              { step === 1 && 
                  <SignUpStepOne 
                    stepOneValues={stepOneValues}
                    setStepOneValues={setStepOneValues}
                    setStep={setStep}
                  />
              }
              { step === 2 && 
                  <SignUpStepTwo 
                    stepTwoValues={stepTwoValues}
                    stepOneValues={stepOneValues}
                    setStepOneValues={setStepOneValues}
                    setStepTwoValues={setStepTwoValues}
                    setStep={setStep}
                  />
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
export default SignUp;
