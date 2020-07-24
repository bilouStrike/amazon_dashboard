import React,{ useEffect, useState } from "react";
import { Layout, Popover, List, Menu, Dropdown } from 'antd';
import { connect, useDispatch, useSelector } from "react-redux";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import HorizontalNav from "../HorizontalNav";
import { Link } from "react-router-dom";
import { switchLanguage, toggleCollapsedSideNav } from "../../../appRedux/actions/Setting";
import { getCompaniesByAgency } from 'services/company';
import { setCurrentCompany } from 'appRedux/actions/Companies';
import { DownOutlined } from '@ant-design/icons';

const {Header} = Layout;

const InsideHeader = () => {

  const data = [
    {
      title: 'Manage companies',
      link: '/companies',
    },
    {
      title: 'Manage chanels',
      link: '/',
    },
    {
      title: 'Agency settings',
      link: '/',
    },
    {
      title: 'Manage Users',
      link: '/company/users',
    },
    {
      title: 'Manage roles',
      link: '/company/roles',
    },
    {
      title: 'Manage Permissions',
      link: '/permissions',
    }
  ];
  const dispatch = useDispatch();

  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);
  const [companies, setcompanies] = useState([]);
  const { currentCompany } = useSelector(state => state.companies);
  const { userRoles, companyId, agencyId } = useSelector(state => state.auth);
  
  useEffect(() => {
    if ( companyId === null ) {
      const getCompanies = async () => {
        const { data } = await getCompaniesByAgency(agencyId);
        setcompanies(data);
        if (data[0]) {
          dispatch(setCurrentCompany(data[0]))
        }
      }
      getCompanies();
    } else {
      dispatch(setCurrentCompany({id:userRoles[0].companyId, name:userRoles[0].companyName}));
    }
  }, []);

  const menu = (
    <Menu>
       {
        companyId === null ? 
        companies ? companies.map((company) => 
            <Menu.Item className="gx-media gx-pointer" key={company.id} onClick={(e) => {
                const comp = {id:company.id, name:company.name};
                dispatch(setCurrentCompany(comp))
            }
            }>
              {company.name}
            </Menu.Item>
          ) : null        
        :
        userRoles.map((role) => {
          return (
          <Menu.Item className="gx-media gx-pointer" key={role.companyId} onClick={(e) =>
            dispatch(setCurrentCompany({id:role.companyId, name:role.companyName}))
          }>
            {role.companyName}
          </Menu.Item>)
          }
        )
      }
    </Menu>
  );

  return (
    <div className="gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal">
      <Header
        className="gx-header-horizontal-main">
        <div className="gx-container gx-wide-width">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e">
              <i className="gx-icon-btn icon icon-menu"
                 onClick={() => {
                   dispatch(toggleCollapsedSideNav(!navCollapsed));
                 }}
              />
            </div>
            <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
              <img alt="" src={require("assets/images/w-logo.png")}/></Link>
            <Link to="/" className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo">
              <img alt="" src={require("assets/images/logo.png")}/></Link>

            <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
              <HorizontalNav/>
            </div>
            <ul className="gx-header-notifications gx-ml-auto">
              <li>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{fontSize: '16px'}}>
                    <span>{ currentCompany ? currentCompany.name : 'No company selcted'}</span>
                    <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              <li className="gx-notify gx-notify-search">
                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" 
                  content={
                    <div className="gx-popover-setting-scroll">
                        <List
                          itemLayout="horizontal"
                          dataSource={data}
                          renderItem={item => (
                            <Link to={item.link}>
                              <List.Item>
                                <List.Item.Meta title={item.title}/>
                              </List.Item>
                            </Link>
                          )}
                        />
                    </div>
                } trigger="click">
                  <span className="gx-pointer gx-d-block"><i className="icon icon-setting"/></span>
                </Popover>
              </li>
              <li className="gx-notify">
                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification/>}
                         trigger="click">
                  <span className="gx-pointer gx-d-block"><i className="icon icon-notification"/></span>
                </Popover>
              </li>
              <li className="gx-user-nav"><UserInfo/></li>
            </ul>
          </div>
        </div>
      </Header>
    </div>
  );
};

const mapStateToProps = ({settings}) => {
  const {locale, navCollapsed} = settings;
  return {locale, navCollapsed}
};
export default connect(mapStateToProps, {toggleCollapsedSideNav, switchLanguage})(InsideHeader);
