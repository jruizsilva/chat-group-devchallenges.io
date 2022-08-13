import React from 'react';

export const Message = () => {
  return (
    <li className='chat__message'>
      <div className='chat__message__image'></div>
      <div className='chat__message__wrapper'>
        <div className='chat__message__info'>
          <div className='chat__message__author'>Shaunna Firth</div>
          <div className='chat__message__date'>today at 1:29 PM</div>
        </div>
        <p className='chat__message__content'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          explicabo!
        </p>
      </div>
    </li>
  );
};
