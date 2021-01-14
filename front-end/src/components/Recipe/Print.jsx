import { Button } from '@material-ui/core';
import React from 'react';

const Print = () => {

  return (

    <div className="button" onClick={() => { window.print(); }}>
      Print Recipe
    </div>
  );
};

export default Print;

//TODO: only print the <Recipe /> component, button styling - print icon?