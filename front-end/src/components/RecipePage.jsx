import React from 'react';
import Recipe from './Recipe/Recipe';
import TopToolbar from './MainPage/TopToolbar.js';

export default function RecipePage() {
  return (
    <>
      <TopToolbar />
      <div className='recipe-page-component'>
        <Recipe />
      </div>
    </>
  );
}