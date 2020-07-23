import React from "react";
import { Avatar, Popover } from "antd";
import { signOut } from 'appRedux/actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { setCurrentCompany } from 'appRedux/actions/Companies';

const UserInfo = () => {

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(signOut());
  }

  const { user } = useSelector(state => state.auth);
  
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li onClick={onLogout}>Logout</li>
    </ul>
  );

  return (
    <Popover 
        overlayClassName="gx-popover-horizantal"
        placement="bottomRight"
        content={userMenuOptions}
        trigger="click"
    >
      <span style={{fontSize:'18px', cursor:'pointer'}}> {user} </span>
      <DownOutlined style={{fontSize:'12px', cursor:'pointer'}} />
    </Popover>
  )
};

export default UserInfo;
