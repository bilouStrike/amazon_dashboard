import React, {useState} from 'react';
import { Button, Modal, Form, Input, Checkbox, Row, Col, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';
import { updateRole } from 'services/roles';
import { editRoleSuccess } from 'appRedux/actions/Roles';

const FormItem = Form.Item;

const UpdateRolePermissions = ({roleId, roleName, permissionsList}) =>  {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { permissions } = useSelector(state => state.permissions);
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

  const { agencyId, companyId } = useSelector(state => state.auth);

  const handleUpdate = async (values) => {
    const roleData = await {
        name: roleName,
        permissions: values.permissions,
        agencyId: agencyId,
        comapnyId: companyId
    }
    setLoading(true);
    const { status, message, data } = await updateRole(roleData, roleId);
    setLoading(false);
    setResponseData({...responseData, status, message });
  }

  return (
    <>
        <Button 
            type="primary"
            onClick={showModal}
            icon={<SettingOutlined />}
        > 
            Update permissions
        </Button>
        <Modal
            title={`Update Permissions For: ${roleName}`}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form 
                initialValues={{
                    remember: true,
                    ['permissions']: permissionsList,
                }}
                name="Add role"
                onFinish={handleUpdate}
            >
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
                        UPDATE
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

export default UpdateRolePermissions;
