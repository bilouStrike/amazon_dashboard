import React from "react";

const NotificationItem = ({notification}) => {
  const {icon, title, time} = notification;
  return (
    <li className="gx-media">
      <div className="gx-media-body gx-align-self-center">
        <p className="gx-fs-sm gx-mb-0">{title}</p>
        <i className={`icon icon-${icon} gx-pr-2`}/> <span className="gx-meta-date"><small>{time}</small></span>
      </div>
    </li>
  );
};

export default NotificationItem;
