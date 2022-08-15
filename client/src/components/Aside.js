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

const calcHeightChannels = () => {
  return window.innerHeight - 237;
};

export const Aside = () => {
  const [channelsHeight, setChannelsHeight] = useState(calcHeightChannels());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const { isOpenMenu } = ui;

  const handleChannelClick = () => {
    navigate('/channel/1');
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
    const handleChannelsHeightOnResize = () => {
      setChannelsHeight(calcHeightChannels());
    };
    window.addEventListener('resize', handleChannelsHeightOnResize);
    return () => {
      window.removeEventListener('resize', handleChannelsHeightOnResize);
    };
  }, []);

  return (
    <aside className={`aside ${isOpenMenu && 'aside--active'}`}>
      <header className='aside__header'>
        <h2 className='aside__h2'>Channels</h2>
        <button className='aside__button' onClick={handleOpenModal}>
          <span className='material-symbols-rounded'>add</span>
        </button>
      </header>
      <div className='aside__main'>
        <form className='aside__form'>
          <div className='aside__box'>
            <span className='material-symbols-rounded aside__icon'>search</span>
            <input type='text' className='aside__input' placeholder='Search' />
          </div>
        </form>
        <ul className='aside__ul' style={{ height: channelsHeight }}>
          <li className='aside__li' onClick={handleChannelClick}>
            <div className='aside__icon--item btn btn-secondary btn-lg'>FD</div>
            <div className='aside__h3'>Front-end developers</div>
          </li>
          <li className='aside__li' onClick={handleChannelClick}>
            <div className='aside__icon--item btn btn-secondary btn-lg'>R</div>
            <div className='aside__h3'>random</div>
          </li>
          <li className='aside__li' onClick={handleChannelClick}>
            <div className='aside__icon--item btn btn-secondary btn-lg'>B</div>
            <div className='aside__h3'>BACK-END</div>
          </li>
          <li className='aside__li' onClick={handleChannelClick}>
            <div className='aside__icon--item btn btn-secondary btn-lg'>CA</div>
            <div className='aside__h3'>CATS AND DOGS</div>
          </li>
          <li className='aside__li' onClick={handleChannelClick}>
            <div className='aside__icon--item btn btn-secondary btn-lg'>w</div>
            <div className='aside__h3'>Welcome</div>
          </li>
        </ul>
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
