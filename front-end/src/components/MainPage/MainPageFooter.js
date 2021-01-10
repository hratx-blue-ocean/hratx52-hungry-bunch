import React from 'react';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';


const MainPageFooter = () => {

  return (
    <div className="main-footer-page">
      <div>
        Hungry Bunch Community Cookbook is part of Truffle Food Group, <CopyrightOutlinedIcon /> Copyright 2021 Truffle Corpotation. All Rights Reserved.
      </div>
      <div>
        Contacts:<br/>
        email: bunch.hungry@gmal.com<br/>
        phone: 331-867-5309
      </div>
    </div>

  );
};

export default MainPageFooter;