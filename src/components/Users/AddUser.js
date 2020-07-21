import React, {useState} from 'react';
import { Button, Modal, Form, Input, Checkbox, Row, Col, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'services/users';

const FormItem = Form.Item;

const AddUser = () =>  {
  const [visible, setVisible] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ responseData, setResponseData ] = useState({
    status: null,
    message: null
  });

  const { roles } = useSelector(state => state.roles);
  const { agencyId, companyId } = useSelector(state => state.auth);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleAddUser = async (values) => {
    setLoading(true);
    const user = { ...values, agencyId, companyId };
    const { status, message, data } = await addUser(user);
    setLoading(false);
    setResponseData({...responseData, status, message });
    
  }

  return (
    <>
        <Button type="primary" onClick={showModal}>New User</Button>
        <Modal
            title="New User"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form 
                initialValues={{ remember: true }}
                name="Add user"
                onFinish={handleAddUser}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="roles" label="Roles:">
                    <Checkbox.Group style={{width:'100%'}}>
                    <Row>
                        { roles != null ? roles.map(role => (
                            <Col span={24} key={role.id}>
                                <Checkbox
                                    value={role.name}
                                    style={{
                                    lineHeight: '32px',
                                    }}
                                >
                                    {role.name}
                                </Checkbox>
                            </Col>
                        )) : null}
                    </Row>
                    </Checkbox.Group>
                </Form.Item>
                <FormItem>
                    <Button className="gx-mb-0"
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                    >
                        ADD
                    </Button>
                </FormItem>
            </Form>
            { responseData.status !== null ? <Alert
                message={responseData.status}
                description={responseData.message}
                type={responseData.status}
                showIcon
              /> : null }
        </Modal>
    </>
    );
}

export default AddUser;
