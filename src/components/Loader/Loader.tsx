import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
