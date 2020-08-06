import React, {useState} from 'react';
import { Button, Form, Input, Checkbox, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addRole } from 'services/roles';
import { addRoleSuccess } from '../../appRedux/actions/Roles';
import FullScreenModel from 'components/FullScreenModel';
import PopNotification from 'util/PopNotification';
import { slugify } from 'helpers';

const FormItem = Form.Item;

const AddRole = ({path, updateList}) =>  {
  const dispatch = useDispatch();
  const { permissions } = useSelector(state => state.permissions);
  const { agencyId } = useSelector(state => state.auth);
  const { currentCompany } = useSelector(state => state.companies);
  const [ loading, setLoading ] = useState(false);
  //const [ slug, setSlug ] = useState(null);
 
  const handleAddRole = async (values) => {
    setLoading(true);
    const slug = slugify(values.name);   
    const companyId = path === '/company/roles' ? currentCompany.id : 0;
    const companyName = path === '/company/roles' ? currentCompany.name : null;
    const role = {...values, slug, agencyId, companyId, companyName};
    const { status, message, data } = await addRole(role);
    
    setLoading(false);
    if ( status === 'success') {
      updateList();
      dispatch(addRoleSuccess(data));
    }
    PopNotification(status, message);
  }

 /* const generate_slug = (e) => {
    let slug_value = slugify(e.target.value);   
    setSlug(slug_value);
  }*/

  return (
    <>
        <FullScreenModel
            buttonType="primary"
            buttonTitle="New role"
            title="Add new role"
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
                        { required: true, message: 'Please input the role name!' },
                        { pattern: new RegExp(/^[a-zA-Z0-9 ]+$/), message: 'Characters allowed a-z and 0-9.'}
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description:">
                    <Input.TextArea />
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
        </FullScreenModel>
    </>
    );
}

export default AddRole;
