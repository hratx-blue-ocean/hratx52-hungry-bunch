import React from 'react';

const Loading = () => {

  const loadingImg = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

  return (
    <div >
      <img className="spinner" src={loadingImg} alt="Loading..." />
    </div>
  );
};

export default Loading;