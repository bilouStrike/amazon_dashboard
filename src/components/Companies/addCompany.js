import React, {useState} from 'react';
import { Button, Modal, Form, Input, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { addCompany } from 'services/company';
import { useSelector } from 'react-redux';
import { do_signal } from 'appRedux/actions/Common';
import PopNotification from 'util/PopNotification';

const FormItem = Form.Item;

const AddCompany = ({updateList}) =>  {
  const { agencyId } = useSelector(state => state.auth);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);


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
    if ( status === 'success') {
      updateList();
      dispatch(do_signal());
    }
    PopNotification(status, message);
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
        </Modal>
    </>
    );
}

export default AddCompany;
