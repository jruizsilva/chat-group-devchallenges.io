import React from 'react';

export const Aside = () => {
  return (
    <aside className='aside'>
      <header className='aside__header'>
        <h2 className='aside__h2'>Channels</h2>
        <button className='aside__button'>
          <span class='material-symbols-rounded'>add</span>
        </button>
      </header>
    </aside>
  );
};
