import React from "react";
import { Layout } from "antd";
import { useHistory, Redirect  } from "react-router-dom";
import { useSelector } from "react-redux";
import { footerText } from "util/config";
import App from "routes/index";

const { Footer } = Layout;

const MainApp = (props) => {
  const { match } = props;  

  return (
    <>
        <App match={match}/>
        <Footer>
          <div className="gx-layout-footer-content">
            {footerText}
          </div>
        </Footer>
    </>
  )
};

export default MainApp;

