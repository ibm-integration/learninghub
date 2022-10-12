import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud-data.jpg';

const FirstLeftText = () => <p>This Cookbook is designed to be a single point of access for all Demo Assets about IBM Cloud Pak for Pak_Name</p>;

const FirstRightText = () => (
  <p>
    Are you aware that you can have a Cloud Pak for Pak_Name on ROKS only for you? Here you will see how to request your environment and explore other assets to support your sales opportunity
  </p>
);

const SecondLeftText = () => <p>IBM Cloud Paks</p>;

const SecondRightText = () => (
  <p>
    IBM Cloud™ Paks are enterprise-ready, containerized software solutions that give clients an open, faster and more secure way to move core business applications to any cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const BannerText = () => <h1>IBM Cloud Pak for Pak_Name</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
