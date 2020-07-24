import React, { useState } from "react";
import { Button, Checkbox, Input, Alert, Form } from "antd";
import IntlMessages from "util/IntlMessages";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { signUp } from 'services/auth';
import { randomInteger } from 'helpers';

const SignUp = () => {

    const { isAuthenticated } = useSelector(state => state.auth)  
    const [ loadStart, setLoadStart ] = useState(false);

    const [ responseData, setResponseData ] = useState({
      status: null,
      message: null
    });

    const onSignUp = async (values) => {
      const agencyId = randomInteger(9999, 9999999); // agencyId should generte from the server
      const userData = { 
        ...values,
        'agencyId':agencyId,
        'companyId': null,
        roles:[{
          companyId: 0,
          name: "agency_owner",
          roleId: 1,
          type: "agency"}] 
      }
      setLoadStart(true);
      const { status, message } = await signUp(userData);
      setLoadStart(false);
      setResponseData({...responseData, status, message });
    }

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
              <Form
                onFinish={onSignUp}
                initialValues={{ remember: true }}
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
                  rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'This is not valid email!' }]} name="email">
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
                    <Input.Password placeholder="Password" className="amazon-tool-home-input"/>
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
                  <Input.Password placeholder="Confirm password" className="amazon-tool-home-input"/>
                </Form.Item>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    { validator:(_, value) => value ? Promise.resolve() : Promise.reject('You should accept agreement') },
                  ]}
                >
                   <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                </Form.Item>
                <div className="ant-row ant-form-item">
                    <span className="gx-signup-form-forgot gx-link"><IntlMessages
                    id="appModule.termAndCondition"/></span>
                    </div>
                <Form.Item>
                  <Button type="primary" className="gx-mb-0" style={{height:'48px'}} size="large" block loading={loadStart} htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp"/>
                  </Button>
                </Form.Item>
              </Form>
              { responseData.status !== null ? <Alert
                message={responseData.status}
                description={responseData.message}
                type={responseData.status}
                showIcon
              /> : null }
            </div>
          </div>
        </div>
      </div>
    );
  };
export default SignUp;
