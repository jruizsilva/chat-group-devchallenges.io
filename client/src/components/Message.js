import React from 'react';

export const Message = () => {
  return (
    <li className='message'>
      <div className='message__image'></div>
      <div className='message__wrapper'>
        <div className='message__info'>
          <div className='message__author'>Shaunna Firth</div>
          <div className='message__date'>today at 1:29 PM</div>
        </div>
        <p className='message__content'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          explicabo!
        </p>
      </div>
    </li>
  );
};
