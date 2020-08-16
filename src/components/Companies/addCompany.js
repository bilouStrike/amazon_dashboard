import React, {useState} from 'react';
import { Button, Modal, Form, Input, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { addCompany } from 'services/company';
import { useSelector } from 'react-redux';
import PopNotification from 'util/PopNotification';
import FullScreenModel from 'components/FullScreenModel';

const FormItem = Form.Item;

const AddCompany = ({updateList}) =>  {
  const { agencyId } = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);

  const handleAddRole = async (values) => {
    setLoading(true);
    const companyData = agencyId != 0 ? {...values, agencyId:agencyId } : null ;
    const { status, message, data } = await addCompany(companyData);
    setLoading(false);
    if ( status === 'success') {
      updateList();
    }
    PopNotification(status, message);
  }

  return (
    <>
        <FullScreenModel
            buttonType="primary"
            buttonTitle="+ Add Company"
            title="Add New Company"
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
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the company phone!',
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
        </FullScreenModel>
    </>
    );
}

export default AddCompany;
