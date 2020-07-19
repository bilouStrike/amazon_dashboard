import React, {useState} from "react";
import {Button, Input, Alert, Form} from "antd";
import IntlMessages from "util/IntlMessages";
import { signInSuccess } from 'appRedux/actions/Auth';
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'services/auth';

const SignIn =()=> {
    const dispatch = useDispatch();
    const [ loadStart, setLoadStart ] = useState(false);
    const [ responseData, setResponseData ] = useState({
      status: null,
      message: null
    });
    const { isAuthenticated } = useSelector(state => state.auth)
    const onSignIn = async (values) => {
      setLoadStart(true);
      const { status, message, data } = await signIn(values);
      setLoadStart(false);
      if ( status == 'success') {
        dispatch(signInSuccess(data));
        return;
      }
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
                <h1><IntlMessages id="app.userAuth.signIn"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form
                onFinish={onSignIn}
                initialValues={{ remember: true }}
                name="basic"
                className="gx-signin-form gx-form-row0">
                <Form.Item
                  initialValue="joseph"
                  rules={[{ required: true, message: 'Please enter your username' }]} name="username">
                  <Input placeholder="Username"/>
                </Form.Item>
                <Form.Item
                  initialValue="demo#123"
                  rules= {[{required: true, message: 'Please input your Password!'}]}  name="password">
                    <Input type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="gx-mb-0" loading={loadStart} htmlType="submit">
                    <IntlMessages id="app.userAuth.signIn"/>
                  </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                  id="app.userAuth.signUp"/></Link>
                </Form.Item>
              </Form>
              { responseData.status == 'error' ? <Alert
                message="Failed"
                description={responseData.message}
                type="error"
                showIcon
              /> : null }
              
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SignIn;
