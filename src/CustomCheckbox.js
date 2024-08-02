import React from 'react';
import './PageSelector.css';

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className={`custom-checkbox ${checked ? 'checked' : ''}`}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
      />
      <span className="checkbox-box">
        <span className="checkmark">&#10003;</span>
      </span>
    </label>
  );
};

export default CustomCheckbox;
