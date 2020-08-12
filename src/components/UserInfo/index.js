import React from "react";
import { Popover } from "antd";
import { signOut } from 'appRedux/actions/Auth';
import { setCompanies } from 'appRedux/actions/Companies';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const UserInfo = () => {

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(setCompanies([]));
    dispatch(signOut());
  }

  const { user } = useSelector(state => state.auth);
  
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li><Link to='/users'>Agency users</Link></li>
      <li><Link to='/roles'>Agency roles</Link></li>
      <li><Link to='/settings'>Agency settinhg</Link></li>
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
