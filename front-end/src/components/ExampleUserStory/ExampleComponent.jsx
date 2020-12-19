// a react component
// maybe it looks like this...
import React, {useState} from 'react';

const ExampleComponent = () => {
  const [count, setCount] = (0);
  const handleClick = () => (setCount(count++));
  return (
    <>
      <button onClick={handClick}>I AM EXAMPLECOMPONENT! here is my count: {count}</button>
    </>
  );
};

export default ExampleComponent;