import React, {useState} from 'react';
import { Button, Form, Input, Checkbox, Row, Col, Alert } from 'antd';
import { useSelector } from 'react-redux';
import { addUser } from 'services/users';
import FullScreenModel from 'components/FullScreenModel';
import PopNotification from 'util/PopNotification';

const FormItem = Form.Item;

const AddUser = ({path, updateList}) =>  {
  const [ loading, setLoading ] = useState(false);
  const { roles } = useSelector(state => state.roles);
  const { currentCompany } = useSelector(state => state.companies);
  const { agencyId, companyId } = useSelector(state => state.auth);
  let rolesList;

  if( path === '/company/users' ) {
    rolesList = roles && currentCompany ? roles.filter((role) => role.companyId === currentCompany.id) : [];
  } else {
    rolesList = roles;
  }
  const handleAddUser = async (values) => {
    const userCompany = path === '/company/users' ? currentCompany.id : null;
    const roleType =  path === '/company/users' ? 'company' : 'agency';
    const userRoles = values.roles ? values.roles.map((role) => {
        return {
            roleId: role.id,
            companyId: role.companyId,
            type: roleType,
            name: role.name,
            companyName: role.companyName
        } // This is only for no-sql purpose, we should modified later in relational database
    }) : [];
    setLoading(true);
    const user = { ...values, agencyId, companyId: userCompany, roles: userRoles };
    const { status, message, data } = await addUser(user);
    setLoading(false);
    updateList();
    PopNotification(status, message);
  }

  return (
    <>
        <FullScreenModel
           buttonType="primary"
           buttonTitle="New user"
           title="Add new user"
        >
            <Form 
                initialValues={{ remember: true }}
                name="Add user"
                onFinish={handleAddUser}
            >
                <Form.Item rules={[
                    { required: true, message: 'Please input your First Name!'},
                    { pattern: new RegExp(/^[A-Za-z ]+$/), message: 'First Name should be alphabetic'}]
                  } 
                    name="FirstName"
                >
                  <Input placeholder="First Name"/>
                </Form.Item>
                <Form.Item rules={[
                    { required: true, message: 'Please input your Last Name!'},
                    { pattern: new RegExp(/^[A-Za-z ]+$/), message: 'Last Name should be alphabetic'}]
                  } 
                    name="LastName"
                >
                  <Input placeholder="Last Name"/>
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'This is not valid email!' }]} name="email">
                  <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item rules={[
                    { required: true, message: 'Please chose your username!'},
                    { min: 3, message: 'Username should be at least 4 characters!'},
                    { max: 15, message: 'Username should be maximun of 15 characters!'},
                    { pattern: new RegExp(/^[a-zA-Z0-9]+$/), message: 'Characters allowed a-z and 0-9.'}]}
                    name="username"
                >
                  <Input placeholder="Username"/>
                </Form.Item>
                <Form.Item
                  name="password"
                  rules= {[
                    { required: true, message: 'Please input your Password!'},
                    { min: 8 , message: 'The string must contain at least 8 numeric character'}]}  
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>
                <Form.Item name="roles" label="Roles:">
                    <Checkbox.Group style={{width:'100%'}}>
                    <Row>
                        { rolesList != null ? rolesList.map(role => (
                            <Col span={24} key={role.id}>
                                <Checkbox
                                    value={role}
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
        </FullScreenModel>
    </>
    );
}

export default AddUser;
