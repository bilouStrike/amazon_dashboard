import React from 'react';
import { Card, Form, Input, Button } from "antd";
import { ApiOutlined } from "@ant-design/icons";
const FormItem = Form.Item;

const AddChannelForm = ({params}) => {
    return (
        <>
            <Card className="gx-card">
                <h3> <ApiOutlined /> Api key : </h3>
                <Form
                    name="basic"
                    className="gx-login-form gx-form-row0"
                >
                    <FormItem 
                        rules={[{ required: true, message: 'Please input the API key' }]}
                        name="apikey"
                    >
                        <Input placeholder="Enter the Api Key"/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">
                        Activate
                    </Button>
                </Form>
            </Card>
        </>
    )
};

export default AddChannelForm;