import React from "react";
import {Avatar, Popover} from "antd";

const UserInfo = () => {

  const onLogout = () => {
    console.log('logout')
  }
  
  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li onClick={onLogout}>Logout</li>
    </ul>
  );

  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
             trigger="click">
      <Avatar src='https://via.placeholder.com/150x150'
              className="gx-avatar gx-pointer" alt=""/>
    </Popover>
  )
};

export default UserInfo;
