import React from 'react';
import { HlLogo } from 'Utilities/imageService';
import LazyImageLoader from 'Hoc/lazyImgLoader';
import { DesktopHomeMakover } from 'Hoc/mobDesktop';
import { isDeviceMobile } from 'Utilities/helperUtils';
import 'Styles/homePage.scss';
import DealsAmount from './DealsAmount';
import DealsGroup from './DealsGroup';

const Homepage = () => {
  return (
    <DesktopHomeMakover>
      <div className="homepage">
        <div className="section-logo">
          <div
            className={`logo-container ${isDeviceMobile() ? '' : 'hideHeader'}`}
          >
            {LazyImageLoader(HlLogo)}
          </div>
          <div className="section-half">
            <div className="top">
              <div className="text">
                <div className="textType1 openSans color3">Hi</div>
              </div>
            </div>
          </div>
        </div>
        <div className="expert-section">
          <div className="text helvetica">
            <div className="textType2 color2">
              user should be able to filter the results by a searchTerm
            </div>{' '}
          </div>
        </div>
        {/*  Advanced Section */}
        <div className="advanced-section-sideout">
          <div>
            <DealsAmount />
          </div>
          <div>
            <DealsGroup />
          </div>
        </div>
      </div>
    </DesktopHomeMakover>
  );
};

export default Homepage;
