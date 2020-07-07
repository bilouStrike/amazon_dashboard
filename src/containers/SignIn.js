import React from "react";
import {Button, Checkbox, Input, Form} from "antd";
import IntlMessages from "util/IntlMessages";

const SignIn =()=> {
    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src={"https://via.placeholder.com/272x395"} alt='Neature'/>
              </div>
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signIn"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form
                initialValues={{ remember: true }}
                name="basic"
                className="gx-signin-form gx-form-row0">
                <Form.Item
                  initialValue="demo@example.com"
                  rules={[{ required: true, message: 'The input is not valid E-mail!' }]} name="email">
                  <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item
                  initialValue="demo#123"
                  rules= {[{required: true, message: 'Please input your Password!'}]}  name="password">
                    <Input type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                  <span className="gx-signup-form-forgot gx-link"><IntlMessages
                    id="appModule.termAndCondition"/></span>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signIn"/>
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SignIn;
