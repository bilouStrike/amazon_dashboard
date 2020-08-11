import React from "react";
import "@testing-library/jest-dom/extend-expect";
import '../../util/testConfig';
import { render, fireEvent, cleanup } from '../../util/test-util';

import SignUpStepOne from '../steps/SignUpStepOne';

afterEach(cleanup);

it("should render signinstepOne component", () => {
    
  const mockStepOneValues = {};
  const mockSetStepOneValues = jest.fn();
  const mockSetStep = jest.fn();

  const { asFragment } = render(
    <SignUpStepOne 
        stepOneValues={mockStepOneValues}
        setStepOneValues={mockSetStepOneValues}
        setStep={mockSetStep}/>
    );
  expect(asFragment()).toMatchSnapshot();
});
