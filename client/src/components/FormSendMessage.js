import React from 'react';
import { IoMdSend } from 'react-icons/io';
import { IconContext } from 'react-icons';

export const FormSendMessage = () => {
  return (
    <form className='form'>
      <div className='form__box box'>
        <input className='box__input' placeholder='Type a message here' />
        <button className='btn box__submit' type='submit'>
          <IconContext.Provider value={{ className: 'btn__icon' }}>
            <IoMdSend />
          </IconContext.Provider>
        </button>
      </div>
    </form>
  );
};
