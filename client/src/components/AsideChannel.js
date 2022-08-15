import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  closeMenu,
  openModal,
  toggleDropdownMenu,
  closeDropdownMenu,
} from '../store/slices/ui/uiSlice';
import { DropdownMenu } from './DropdownMenu';

let channelDesc = document.querySelector('.aside__p--channel');

const calcHeightMembers = (channelDescHeight = 0) => {
  return window.innerHeight - (249 + channelDescHeight);
};

export const AsideChannel = () => {
  const [membersHeight, setMembersHeight] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const { isOpenMenu } = ui;

  const handleBackClick = () => {
    navigate('/');
    dispatch(closeDropdownMenu());
  };
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleOpenDropdownMenu = () => {
    dispatch(toggleDropdownMenu());
  };

  useEffect(() => {
    channelDesc = document.querySelector('.aside__p--channel');
    if (channelDesc?.clientHeight) {
      setMembersHeight(calcHeightMembers(channelDesc.clientHeight));
    }
  }, [membersHeight]);

  useEffect(() => {
    const handleMembersHeightOnResize = () => {
      setMembersHeight(calcHeightMembers(channelDesc?.offsetHeight));
    };
    window.addEventListener('resize', handleMembersHeightOnResize);
    return () => {
      window.removeEventListener('resize', handleMembersHeightOnResize);
    };
  }, []);

  return (
    <aside className={`aside ${isOpenMenu && 'aside--active'}`}>
      <header className='aside__header'>
        <button className='aside__button--back' onClick={handleBackClick}>
          <span className='material-symbols-rounded aside__icon--back'>
            arrow_back_ios
          </span>
        </button>
        <h2 className='aside__h2'>All channels</h2>
        <button className='aside__button' onClick={handleOpenModal}>
          <span className='material-symbols-rounded'>add</span>
        </button>
      </header>
      <div className='aside__main'>
        <div className='aside__div--channel'>
          <h3 className='aside__h3 aside__h3--channel'>Front-end developers</h3>
          <p className='aside__p--channel'>
            Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan
            quis. In gravida mollis purus, at interdum arcu tempor non
          </p>
        </div>
        <div className='aside__div--members'>
          <h3 className='aside__h3 aside__h3--members'>Members</h3>
          <ul className='aside__ul' style={{ height: membersHeight }}>
            <li className='aside__li'>
              <div className='aside__icon--item btn btn-secondary btn-lg'></div>
              <h4 className='aside__h4'>Xanthe Neal</h4>
            </li>
            <li className='aside__li'>
              <div className='aside__icon--item btn btn-secondary btn-lg'></div>
              <h4 className='aside__h4'>Nellie Francis</h4>
            </li>
            <li className='aside__li'>
              <div className='aside__icon--item btn btn-secondary btn-lg'></div>
              <h4 className='aside__h4'>Denzel Barrett</h4>
            </li>
            <li className='aside__li'>
              <div className='aside__icon--item btn btn-secondary btn-lg'></div>
              <h4 className='aside__h4'>Shaunna Firth</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className='aside__footer'>
        <div className='aside__icon--profile btn btn-secondary btn-lg'>Me</div>
        <h4 className='aside__h4'>Xanthe Neal</h4>
        <button className='aside__button--dropdown-menu'>
          <span
            className='material-symbols-rounded aside__icon--menu'
            onClick={handleOpenDropdownMenu}
          >
            keyboard_arrow_down
          </span>
          <DropdownMenu />
        </button>
      </div>
      <button className='aside__button--close' onClick={handleCloseMenu}>
        <span className='material-symbols-rounded aside__icon--close'>
          close
        </span>
      </button>
    </aside>
  );
};
