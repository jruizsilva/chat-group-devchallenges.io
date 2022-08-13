import React from 'react';

export const Aside = () => {
  return (
    <aside className='aside'>
      <header className='aside__header'>
        <h2 className='aside__h2'>Channels</h2>
        <button className='aside__button'>
          <span className='material-symbols-rounded'>add</span>
        </button>
      </header>
      <div className='aside__main'>
        <form className='aside__form'>
          <div className='aside__box'>
            <input type='text' className='aside__input' />
          </div>
        </form>
      </div>
      <div className='aside__footer'></div>
    </aside>
  );
};
