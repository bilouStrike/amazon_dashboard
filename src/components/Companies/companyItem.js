import React from 'react';
import Widget from "components/Widget/index";

const CompanyItem = ({name, address, phone}) => {

    return(
    <Widget styleName="gx-card-profile">
        <div className="gx-pt-md-3">
            <div className="gx-media gx-featured-item">
              <div className="gx-media-body gx-featured-content">
                <div className="gx-featured-content-left">
                    <h3 className="gx-mb-2"><a>{name}</a></h3>
                    <div className="ant-row-flex amz-top-margin-30">
                    <div className="gx-media gx-text-grey gx-mb-1">
                      <i className={`icon icon-location gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle`}/>
                      <span className="gx-media-body gx-ml-1">{address}</span>
                    </div>
                    </div>
                    <div className="ant-row-flex amz-top-margin-10">
                        <div className="gx-media gx-text-grey gx-mb-1">
                        <i className={`icon icon-phone gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle`}/>
                        <span className="gx-media-body gx-ml-1">{phone}</span>
                        </div>
                    </div>
                </div>
                <div className="gx-featured-content-right gx-profile-content-right amz-text-align-right">
                  <p className="gx-text-primary gx-text-truncate gx-mt-sm-auto gx-mb-0 gx-pointer">Check in detail <i
                    className={`icon icon-long-arrow-right gx-fs-xxl gx-ml-1 gx-ml-sm-2 gx-d-inline-flex gx-vertical-align-middle`}/>
                  </p>
                </div>
              </div>
            </div>
        </div>
    </Widget>
)}
export default CompanyItem;

