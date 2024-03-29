import React, {useState} from 'react';
import { Button, Modal, Form, Checkbox, Row, Col, Alert, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';
import { updateRole } from 'services/roles';
import { editRoleSuccess } from 'appRedux/actions/Roles';
import { InfoCircleOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

const UpdateUserRoles = ({userId, userName, rolesList}) =>  {
  const [visible, setVisible] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const { roles } = useSelector(state => state.roles)
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleUpdate = async (values) => {
     // console.log(values);
    /*const roleData = await {
        name: roleName,
        permissions: values.permissions
    }
    setLoading(true);
    const { status, message, data } = await updateRole(roleData, roleId);*/
    setLoading(false);
    //setResponseData({...responseData, status, message });
  }

  return (
    <>
        <Button 
            type="primary"
            onClick={showModal}
            icon={<SettingOutlined />}
        > 
            Update Roles
        </Button>
        <Modal
            title={`Update Roles For: ${userName}`}
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Form 
                initialValues={{
                    remember: true,
                    ['roles']: rolesList,
                }}
                name="Add role"
                onFinish={handleUpdate}
            >
                <Form.Item name="roles" label="Roles:">
                    <Checkbox.Group style={{width:'100%'}}>
                    <Row>
                        { roles != null ? roles.map(role => (
                            <>
                                <Col span={24} key={role.id}>
                                    <Checkbox
                                        value={role.name}
                                        style={{
                                        lineHeight: '32px',
                                        }}
                                    >
                                        {role.name}
                                    </Checkbox>
                                    <Popover content={role.description} trigger="hover">
                                        <InfoCircleOutlined />
                                    </Popover>
                                </Col>
                            </>
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
        </Modal>
    </>
    );
}

export default UpdateUserRoles;
