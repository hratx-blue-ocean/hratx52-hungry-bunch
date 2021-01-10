
import React from 'react';

const Loading = () => {

  const loadingImg = 'https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/5d/be/5dbea324-78c4-4cf7-aa21-4a91fc18d1a2/9746350e-4b12-4492-8c4c-fd54bfb1fb8b.gif';
  // const loadingImg = 'https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif';

  return (
    <div >
      <img className="spinner" src={loadingImg} alt="Loading..." />
    </div>
  );
};

export default Loading;