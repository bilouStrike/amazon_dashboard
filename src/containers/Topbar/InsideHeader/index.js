import React,{useEffect, useState} from "react";
import { Layout, Popover, List, Select, Menu, Dropdown } from 'antd';
import {connect, useDispatch, useSelector} from "react-redux";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import HorizontalNav from "../HorizontalNav";
import CustomScrollbars from "util/CustomScrollbars";
import {Link} from "react-router-dom";
import {switchLanguage, toggleCollapsedSideNav} from "../../../appRedux/actions/Setting";
import { getCompaniesAgency } from 'services/company';
import { setCurrentCompany } from 'appRedux/actions/Companies';
import { DownOutlined } from '@ant-design/icons';


const {Header} = Layout;
const { Option } = Select;

const InsideHeader = () => {

  const { user } = useSelector(state => state.auth);
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
      link: '/users',
    },
    {
      title: 'Manage roles',
      link: '/roles',
    },
    {
      title: 'Manage Permissions',
      link: '/permissions',
    }
  ];
  const dispatch = useDispatch();

  const navCollapsed = useSelector(({settings}) => settings.navCollapsed);
  const [companies, setcompanies] = useState([]);
  const { agencyId } = useSelector(state => state.auth);

  useEffect(() => {
    const getCompanies = async () => {
      const { data } = await getCompaniesAgency(agencyId);
      setcompanies(data);
      if (data[0]) {
        dispatch(setCurrentCompany(data[0].name))
      }
    }
    getCompanies();
  }, []);

  const { currentCompany } = useSelector(state => state.companies);
  const menu = (
    <Menu>
       { companies.map(company =>
          <Menu.Item className="gx-media gx-pointer" key={company.id} onClick={(e) =>
            dispatch(setCurrentCompany(company.name))
          }>
            {company.name}
          </Menu.Item>
        )}
    </Menu>
  );
  console.log(companies);

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
                    { currentCompany ? currentCompany : <span> No company </span> } <DownOutlined />
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
