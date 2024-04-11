import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

import { InlineNotification } from 'gatsby-theme-carbon/src/components/inline-notification';

const CustomHeader = props => (
  <Header {...props}>
    <span>Integration &nbsp;</span> Learning Hub
  </Header>
);

export default CustomHeader;
