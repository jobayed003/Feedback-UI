import React from 'react';
import spinner from '../components/assets/spinner.gif';

const Spinner = () => {
  return (
    <img src={spinner} alt='loading...' style={{ width: 100, margin: 'auto', display: 'block' }} />
  );
};

export default Spinner;
