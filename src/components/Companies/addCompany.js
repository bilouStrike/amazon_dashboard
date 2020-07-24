import React, {useState} from 'react';
import { Button, Modal, Form, Input, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { addCompany } from 'services/company';
import { useSelector } from 'react-redux';

const FormItem = Form.Item;

const AddCompany = () =>  {
  const { agencyId } = useSelector(state => state.auth);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ responseData, setResponseData ] = useState({
    status: null,
    message: null
  });

  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleAddRole = async (values) => {
    setLoading(true);
    const companyData = agencyId != 0 ? {...values, agencyId:agencyId } : null ;
    const { status, message, data } = await addCompany(companyData);
    setLoading(false);
    setResponseData({...responseData, status, message });
    /*if ( status === 'success') {
      dispatch(addRoleSuccess(data));
      return;
    } */
  }

  return (
    <>
        <Button type="primary" onClick={showModal}>New company</Button>
        <Modal
            title="Create new company"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form 
                initialValues={{ remember: true }}
                name="New company"
                onFinish={handleAddRole}
            >
                <Form.Item
                    name="name"
                    label="Company Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the company name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <FormItem>
                    <Button className="gx-mb-0"
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                    >
                        CREATE
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

export default AddCompany;
