import { Button } from '@material-ui/core';
import React from 'react';

const Print = () => {

  return (

    <Button onClick={() => { window.print(); }}>
      Print!
    </Button>
  );
};

export default Print;