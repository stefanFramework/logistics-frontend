import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Logo from './logo-troca.png';

function Header() {
  return (
    <div>
      <A href="https://www.trocafone.com">
        <Img src={Logo} alt="react-boilerplate - Logo" className="logo" />
      </A>
      <NavBar>
       {/*  <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink> */}
       
      </NavBar>
    </div>
  );
}

export default Header;
