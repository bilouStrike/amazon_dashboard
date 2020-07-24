import React, {useState} from 'react';
import { Button, Modal, Form, Input, Checkbox, Row, Col, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addRole } from 'services/roles';
import { addRoleSuccess } from '../../appRedux/actions/Roles';

const FormItem = Form.Item;

const AddRole = ({path}) =>  {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { permissions } = useSelector(state => state.permissions);
  const { agencyId } = useSelector(state => state.auth);
  const { currentCompany } = useSelector(state => state.companies);
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
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleAddRole = async (values) => {
    setLoading(true);
    const companyId = path === '/company/roles' ? currentCompany.id : 0;
    const companyName = path === '/company/roles' ? currentCompany.name : null;
    const role = {...values, agencyId, companyId, companyName};
    const { status, message, data } = await addRole(role);
    setLoading(false);
    setResponseData({...responseData, status, message });
    if ( status === 'success') {
      dispatch(addRoleSuccess(data));
      return;
    }
  }

  return (
    <>
        <Button type="primary" onClick={showModal}>Add new role</Button>
        <Modal
            title="Add new role"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form 
                initialValues={{ remember: true }}
                name="Add role"
                onFinish={handleAddRole}
            >
                <Form.Item
                    name="name"
                    label="Role Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the role name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="permissions" label="Permissions:">
                    <Checkbox.Group style={{width:'100%'}}>
                    <Row>
                        { permissions != null ? permissions.map(permission => (
                            <Col span={24} key={permission.id}>
                                <Checkbox
                                    value={permission.name}
                                    style={{
                                    lineHeight: '32px',
                                    }}
                                >
                                    {permission.name}
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

export default AddRole;
