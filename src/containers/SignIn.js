import React, { useState } from "react";
import { Button, Input, Checkbox, Form } from "antd";

import IntlMessages from "util/IntlMessages";
import { signInSuccess } from 'appRedux/actions/Auth';
import { setCurrentCompany } from 'appRedux/actions/Companies';
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'services/auth';
import PopNotification from 'util/PopNotification';

const SignIn = () => {
    const dispatch = useDispatch();
    const [ loadStart, setLoadStart ] = useState(false);
    const { isAuthenticated } = useSelector(state => state.auth);

    const onSignIn = async (values) => {
      setLoadStart(true);
      const { status, message, data } = await signIn(values);
      setLoadStart(false);
      if ( status == 'success') {
        if( data[0].companyId != null ) {
          dispatch(setCurrentCompany({id:data[0].companyId, name:data[0].companyName }));
        }
        dispatch(signInSuccess(data));

        console.log(data[0].companyId);
       
        // dispatch(signInSuccess(data)); get companies of current user 
        return;
      } 
      console.log(status +' : ' + message)    ;
      PopNotification(status, message)
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
                <h1>Hello! <br/> Welcome back.</h1>
              </div>
              <Form
                onFinish={onSignIn}
                initialValues={{ remember: true }}
                name="basic"
                className="gx-signin-form gx-form-row0 amz-top-margin-10">
                <Form.Item
                  rules={[{ required: true, message: 'Please enter your username' }]} name="username">
                  <Input placeholder="Username or email" className="amazon-tool-home-input"/>
                </Form.Item>
                <Form.Item
                  rules= {[{required: true, message: 'Please input your Password!'}]}  name="password">
                    <Input type="password" placeholder="Password" className="amazon-tool-home-input"/>
                </Form.Item>
                <Form.Item  name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                  <Link className="gx-login-form-forgot" to="#" style={{float:'right'}}>Forgot password</Link>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="gx-mb-12" style={{height:'48px'}} size="large" block  loading={loadStart} htmlType="submit">
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