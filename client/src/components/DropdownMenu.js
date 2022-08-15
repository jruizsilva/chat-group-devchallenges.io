import React from 'react';
import { useSelector } from 'react-redux';

export const DropdownMenu = () => {
  const { ui } = useSelector((state) => state);
  const { isOpenDropdownMenu } = ui;

  return (
    <ul
      className={`dropdown-menu ${
        isOpenDropdownMenu && 'dropdown-menu--active'
      }`}
    >
      <li className='dropdown-menu__li dropdown-menu__li--active'>
        <span className='material-symbols-rounded dropdown__icon'>home</span>
        <p className='dropdown-menu__p'>Home</p>
      </li>
      <li className='dropdown-menu__li'>
        <span className='material-symbols-rounded dropdown__icon'>
          account_circle
        </span>
        <p className='dropdown-menu__p'>My profile</p>
      </li>
      <li className='dropdown-menu__li'>
        <span className='material-symbols-rounded dropdown__icon'>logout</span>
        <p className='dropdown-menu__p'>Logout</p>
      </li>
    </ul>
  );
};
