import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from 'antd';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';

const Home = ({match}) => {
    return (
        <div className="gx-main-content-wrapper" style={{marginTop:'80px'}}>
            <Row>
                <Col lg={14} md={14} sm={24} xs={24}>
                    <img alt="" src={require("assets/images/home.PNG")} style={{float:'right'}}/>
                </Col>
                <Col lg={10} md={10} sm={24} xs={24}>
                    <Switch>
                        <Route path={`${match.url}/signin`} component={SignIn}/>
                        <Route path={`${match.url}/signup`} component={SignUp}/>
                    </Switch>
                </Col>
            </Row>
        </div>
    ) 
};

export default Home;
