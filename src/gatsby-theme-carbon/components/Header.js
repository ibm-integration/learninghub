import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    Cookbook -&nbsp;<span>Cloud Pak for Pak_Name</span>
  </Header>
);

export default CustomHeader;
