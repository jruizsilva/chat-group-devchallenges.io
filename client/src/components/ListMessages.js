import React from 'react';
import { Message } from './Message';

export const ListMessages = () => {
  return (
    <ul className='chat__ul'>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </ul>
  );
};
