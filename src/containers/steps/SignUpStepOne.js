import React from "react";
import { Button, Input, Form } from "antd";
import IntlMessages from "util/IntlMessages";

const SignUpStepOne = ({ setStep, setStepOneValues, stepOneValues }) => {

    const nextStep = async (values) => {
        await setStepOneValues(values);
        setStep(2);
    }

    return (
            <Form
                onFinish={nextStep}
                initialValues={{ 
                    FirstName: stepOneValues.FirstName,
                    LastName: stepOneValues.LastName,
                    email: stepOneValues.email,
                    username: stepOneValues.username,
                    password: stepOneValues.password,
                    confirm: stepOneValues.confirm,
                }}
                name="basic"
                className="gx-signin-form gx-form-row0">
                <Form.Item rules={[
                    { required: true, message: 'Please input your First Name!'},
                    { pattern: new RegExp(/^[A-Za-z ]+$/), message: 'First Name should be alphabetic'}]
                  } 
                    name="FirstName"
                >
                  <Input placeholder="First Name" className="amazon-tool-home-input"/>
                </Form.Item>

                <Form.Item rules={[
                    { required: true, message: 'Please input your Last Name!'},
                    { pattern: new RegExp(/^[A-Za-z ]+$/), message: 'Last Name should be alphabetic'}]
                  } 
                    name="LastName"
                >
                  <Input placeholder="Last Name" className="amazon-tool-home-input"/>
                </Form.Item>

                <Form.Item
                    rules={[{ required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'This is not valid email!' }]}
                    name="email"
                >
                    <Input placeholder="Email" className="amazon-tool-home-input"/>
                </Form.Item>

                <Form.Item rules={[
                    { required: true, message: 'Please chose your username!'},
                    { min: 3, message: 'Username should be at least 4 characters!'},
                    { max: 15, message: 'Username should be maximun of 15 characters!'},
                    { pattern: new RegExp(/^[a-zA-Z0-9]+$/), message: 'Characters allowed a-z and 0-9.'}]}
                    name="username"
                >
                  <Input placeholder="Username" className="amazon-tool-home-input"/>
                </Form.Item>
                
                <Form.Item
                  name="password"
                  rules= {[
                    { required: true, message: 'Please input your Password!'},
                    { min: 8 , message: 'The string must contain at least 8 numeric character'}]}  
                >
                    <Input type="password" placeholder="Password" className="amazon-tool-home-input"/>
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                      },
                    }),
                  ]}
                >
                  <Input type="password" placeholder="Confirm password" className="amazon-tool-home-input"/>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" className="gx-mb-0" style={{height:'48px'}} size="large" block htmlType="submit">
                    <IntlMessages id="app.userAuth.NextStep"/>
                  </Button>
                </Form.Item>
            </Form>
    )
}
export default SignUpStepOne;