import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

const SalesChannels = () => {
    
    return (
        <>
            <h2> Choose sales channel : </h2>
            <Card title="Availables Sales channels" className="gx-card">
                <Row className="glyphs css-mapping">
                    <Col xl={6} lg={6} md={6} sm={8} xs={12}>
                        <Link to='/salesChannels/add/@amazon'>
                            <div className="gx-icon-views" style={{border: "1px solid #ddd"}}>
                                <i className="icon icon-chart"/>
                                <span className="gx-icon-text" style={{fontSize: "18px"}}>Amazon</span>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={8} xs={12}>
                        <Link to='/salesChannels/add/@amazon'>
                            <div className="gx-icon-views" style={{border: "1px solid #ddd"}}>
                                <i className="icon icon-chart"/>
                                <span className="gx-icon-text" style={{fontSize: "18px"}}>eBay</span>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={8} xs={12}>
                        <Link to='/salesChannels/add/@amazon'>
                            <div className="gx-icon-views" style={{border: "1px solid #ddd"}}>
                                <i className="icon icon-chart"/>
                                <span className="gx-icon-text" style={{fontSize: "18px"}}>AliExpress</span>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={8} xs={12}>
                        <Link to='/salesChannels/add/@amazon'>
                            <div className="gx-icon-views" style={{border: "1px solid #ddd"}}>
                                <i className="icon icon-chart"/>
                                <span className="gx-icon-text" style={{fontSize: "18px"}}>Amazon</span>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default SalesChannels;