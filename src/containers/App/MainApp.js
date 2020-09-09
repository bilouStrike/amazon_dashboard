import React,{ useEffect } from "react";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { footerText } from "util/config";
import App from "routes/index";

// Initialise roles, permission and services of the system
import { getRolesStart } from 'appRedux/actions/Roles';
import { getPermissionsStart } from 'appRedux/actions/Permissions';
import { getServicesStart } from 'appRedux/actions/Services';
import { getCompaniesStart } from 'appRedux/actions/Companies';

const { Footer, Content } = Layout;

const MainApp = (props) => {

  const dispatch = useDispatch();
  const { agencyId, companyId } = useSelector(state => state.auth);
  const { match } = props;  
  
  useEffect(() => {
    dispatch(getRolesStart(agencyId));
    dispatch(getPermissionsStart());
    dispatch(getServicesStart());
    dispatch(getCompaniesStart(agencyId, companyId));
  }, []);

  return (
    <>
      <Content className={`gx-layout-content gx-container-wrap`}>
        <App match={match}/>
      </Content>
    </>
  )
};

export default MainApp;

