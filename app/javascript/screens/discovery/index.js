import React, { Fragment } from 'react';

import Discovery from '../../components/discovery';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';

const DiscoveryScreen = () => {
  return (
    <Fragment>
      <SectionWrapper>
        <Discovery />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  );
}
export default DiscoveryScreen;