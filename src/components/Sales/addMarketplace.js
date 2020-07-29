import React from 'react';
import { Button, Form, Input } from 'antd';
import FullScreenModel from 'components/FullScreenModel';

const FormItem = Form.Item;

const AddMarketplace = () =>  {

  const handle = async (values) => {
    
  }

  return (
    <>
        <FullScreenModel
            buttonType="primary"
            buttonTitle="+ Add Marketplace"
            title="Add Marketplace"
        >
            <Form 
                initialValues={{ remember: true }}
                name="Add Marketplace"
                onFinish={handle}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the marketplace name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <FormItem>
                    <Button className="gx-mb-0"
                        type="primary"
                        htmlType="submit"
                    >
                        ADD
                    </Button>
                </FormItem>
            </Form>
        </FullScreenModel>
    </>
    );
}
export default AddMarketplace;
