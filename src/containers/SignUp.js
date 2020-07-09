import React, { useState } from "react";
import { Button, Checkbox, Input, Alert, Form } from "antd";
import IntlMessages from "util/IntlMessages";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { signUp } from 'services/auth';

const SignUp = () => {

    const { isAuthenticated } = useSelector(state => state.auth)  
    const [ loadStart, setLoadStart ] = useState(false);
    const [ responseData, setResponseData ] = useState({
        status: null,
        message: null
    });

    const onSignUp = async (values) => {
        setLoadStart(true);
        const { status, message } = await signUp(values);
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
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src={"https://via.placeholder.com/272x395"} alt='Neature'/>
              </div>
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signUp"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form
                onFinish={onSignUp}
                initialValues={{ remember: true }}
                name="basic"
                className="gx-signin-form gx-form-row0">
                <Form.Item rules={[{required: true, message: 'Please input your username!'}]} name="Username">
                  <Input placeholder="Username"/>
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'The input is not valid E-mail!' }, { type: 'email', message: 'This is not valid email!' }]} name="email">
                  <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item
                  rules= {[{required: true, message: 'Please input your Password!'}]}  name="password">
                    <Input type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                  <span className="gx-signup-form-forgot gx-link"><IntlMessages
                    id="appModule.termAndCondition"/></span>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="gx-mb-0" loading={loadStart} htmlType="submit">
                    <IntlMessages id="app.userAuth.signIn"/>
                  </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signin"><IntlMessages
                id="app.userAuth.signIn"/></Link>
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
