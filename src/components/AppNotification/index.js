import React from "react";
import NotificationItem from "./NotificationItem";
import {notifications} from "./data";
import CustomScrollbars from "util/CustomScrollbars";
import Auxiliary from "util/Auxiliary";

const AppNotification = () => {
  return (
    <Auxiliary>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification, index) => <NotificationItem key={index}
                                                                        notification={notification}/>)
          }
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  )
};

export default AppNotification;

