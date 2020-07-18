import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select, Alert } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { addPermission } from 'services/permissions';
import { addPermissionSuccess } from '../../appRedux/actions/Permissions';

const FormItem = Form.Item;
const { Option } = Select;

const AddPermission = () =>  {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { services } = useSelector(state => state.services)
  const [ loading, setLoading ] = useState(false);
  const [ responseData, setResponseData ] = useState({
    status: null,
    message: null
  });

  const showModal = () => {
    setVisible(true);
  };
  
  const handleOk = (e) => {
    setVisible(false);
    setResponseData({status: null,
        message: null});
  };

  const handleCancel = (e) => {
    setVisible(false);
    setResponseData({status: null,
        message: null});
  };

  const handleAddRole = async (values) => {
    setLoading(true);
    const { status, message, data } = await addPermission(values);
    setLoading(false);
    setResponseData({...responseData, status, message });
    if ( status === 'success') {
      dispatch(addPermissionSuccess(data));
      return;
    }
  }

  return (
    <>
        <Button type="primary" onClick={showModal}>Add new permission</Button>
        <Modal
            title="New permission"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form 
                initialValues={{ remember: true }}
                name="Add Permission"
                onFinish={handleAddRole}
            >
                <Form.Item
                    name="name"
                    label="Permission Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the permission name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="service" label="Service:">
                <Select>
                    {services ? services.map(service => (
                        <Option 
                            key={service.id}
                            value={service.name} // temporary send name
                        >
                            {service.name}
                        </Option>
                        )) : null
                    }
                </Select>
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
            { responseData.status !== null  ? <Alert
                message={responseData.status}
                description={responseData.message}
                type={responseData.status}
                showIcon
              /> : null }
        </Modal>
    </>
    );
}

export default AddPermission;
