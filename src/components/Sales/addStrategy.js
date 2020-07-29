import React,{useState} from 'react';
import { Button, Input, Col, Row, Form, Card } from 'antd';
import FullScreenModel from 'components/FullScreenModel';

const AddStrategy = () =>  {

    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
  
    const getFields = () => {
      const count = 12;
      const children = [];
      for (let i = 0; i < count; i++) {
        children.push(
          <Col lg={8} md={8} sm={12} xs={24} key={i} style={{display: i < count ? 'block' : 'none'}}>
            <div className="gx-form-row0">
              <Form.Item
                name={`field-${i}`}
                label={`Field ${i}`}
                rules={[
                  {
                    required: true,
                    message: 'Input something!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </div>
          </Col>,
        );
      }
      return children;
    };
  
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };

  return (
    <>
        <FullScreenModel
            buttonType="primary"
            buttonTitle="+ New Strategy"
            title="New Strategy"
        >
           <Card className="gx-card" title="New Strategy">
                <Form
                    form={form}
                    name="New Strategy"
                    className="ant-advanced-search-form"
                    onFinish={onFinish}
                >
                    <Row gutter={24}>{getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            onClick={() => {
                            form.resetFields();
                            }}
                        >
                            Clear
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </FullScreenModel>
    </>
    );
}
export default AddStrategy;
