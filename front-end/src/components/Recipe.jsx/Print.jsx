import { Button } from '@material-ui/core';

const Print = () => {

  return (

    <Button onClick={() => { window.print(); }}>
      Print This Recipe
    </Button>
  );
};

export default Print;