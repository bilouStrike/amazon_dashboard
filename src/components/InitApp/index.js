import React from 'react';
import { Spin, Space } from 'antd';

const INITAPP = () => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
        <h3> Initializing the application </h3>
        <Space size="middle" spinning={true}>
            <Spin size="large" />
        </Space>
    </div> 
);
export default INITAPP;