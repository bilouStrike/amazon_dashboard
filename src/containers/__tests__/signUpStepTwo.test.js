import React from "react";
import "@testing-library/jest-dom/extend-expect";
import '../../util/testConfig';
import { render, fireEvent, cleanup } from '../../util/test-util';

import SignUpStepTwo from '../steps/SignUpStepTwo';

afterEach(cleanup);

it("should render signinstepTwo component", () => {
    
  const mockStepOneValues = {};
  const mockSetStepOneValues = jest.fn();
  const mockSetStep = jest.fn();
  const mockStepTwoValues = {};
  const mockSetStepTwoValues = jest.fn();
  const { asFragment } = render(
    <SignUpStepTwo 
        stepOneValues={mockStepOneValues}
        setStepOneValues={mockSetStepOneValues}
        setStep={mockSetStep}
        stepTwoValues={mockStepTwoValues}
        setStepTwoValues={mockSetStepTwoValues}
    />
    );
  expect(asFragment()).toMatchSnapshot();
});
