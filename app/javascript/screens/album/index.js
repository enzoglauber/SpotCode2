import React, { Fragment, useState } from 'react';

import NavbarFooter from '../../components/common/navbar_footer';
import Albums from '../../components/albums';

const AlbumScreen = () => {
  return (
    <Fragment>
      <div>Album Screen</div>
      <Albums />
      <NavbarFooter />
    </Fragment>
  );
}
export default AlbumScreen;