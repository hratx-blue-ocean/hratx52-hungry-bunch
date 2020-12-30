import { Button } from '@material-ui/core';
import React from 'react';

const Print = () => {

  return (

    <Button onClick={() => { window.print(); }}>
      Print Recipe
    </Button>
  );
};

export default Print;

//TODO: only print the <Recipe /> component, button styling - print icon?