import React, {useState} from "react";
import { Button, Checkbox, Upload, Input, Form } from "antd";
import { UploadOutlined } from '@ant-design/icons';

import IntlMessages from "util/IntlMessages";
import { signUp } from 'services/auth';
import { randomInteger } from 'helpers';
import PopNotification from 'util/PopNotification';
import { BASE_API_URL } from 'constants/Common';

const SignUpStepTwo = ({stepOneValues, setStepOneValues, stepTwoValues, setStepTwoValues,  setStep}) => {

    const [load, setLoad] = useState(false);
    const prevStep = () => {
        setStepOneValues(stepOneValues);
        setStep(1);
    }

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };


    const fieldChange = async (values) => {
        const data = {};
        const name = values[0] && values[0].name[0];
        const value = values[0] && values[0].value;
        if( name && value ) {
            data[name] = value ;
            setStepTwoValues({...stepTwoValues, ...data })
        }
    }

    const onSignUp = async (values) => {
        const agencyId = randomInteger(9999, 9999999); // agencyId should generte from the server
        const userData = { 
          ...stepOneValues,
          ...values,
          'agencyId':agencyId,
          'companyId': null,
          roles:[{
            companyId: 0,
            name: "agency_owner",
            roleId: 1,
            type: "agency"}] 
        }
        setLoad(true);
        const { status, message } = await signUp(userData);
        setLoad(false);
        PopNotification(status, message)
    }

    return (
        <Form
            onFinish={onSignUp}
            name="basic"
            onFieldsChange={fieldChange}
            className="gx-signin-form gx-form-row0"
            initialValues={{ 
                agencyName: stepTwoValues.agencyName,
                phone: stepTwoValues.phone,
                address: stepTwoValues.address
            }}
        >
            <Form.Item rules={[
                    { required: true, message: 'Please input the agency name!'},
                    { pattern: new RegExp(/^[A-Za-z ]+$/), message: 'Agency Name should be alphabetic'}]
                  } 
                    name="agencyName"
                >
                  <Input placeholder="Agency name" className="amazon-tool-home-input"/>
            </Form.Item>

            <Form.Item rules={[
                    { required: true, message: 'Please input the agency name!'}]}
                    name="address"
                >
                  <Input placeholder="Address" className="amazon-tool-home-input"/>
            </Form.Item>

            <Form.Item rules={[
                    { required: true, message: 'Please input the agency phone!'},
                    { pattern: new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g), message: 'Enter valid phone number'}]
                  } 
                    name="phone"
                >
                  <Input placeholder="Phone" className="amazon-tool-home-input"/>
            </Form.Item>

            <Form.Item
                name="Agency Logo"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="Logo format: JPG,PNG"
            >
                <Upload name="logo" action={`${BASE_API_URL}/upload`} listType='picture'> 
                    <Button>
                        <UploadOutlined /> Click to upload
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item>
                  <Button type="primary" className="gx-mb-0" style={{height:'48px'}} size="large" block htmlType="submit">
                    <IntlMessages id="app.userAuth.NextStepStartTrial"/>
                  </Button>
            </Form.Item>
        </Form>
    )
            
}
export default SignUpStepTwo;