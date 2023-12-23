// SidebarOption.js
import React from 'react';


const SidebarOption = ({ title, icon, isSelected, onClick }) => {
  return (
    <div className={`sidebar-option ${isSelected ? 'selected' : ''}`}
    onClick={onClick}>
      <img alt="icons"  src={icon} />
      <span>{title}</span>
    </div>
  );
};

export default SidebarOption;
