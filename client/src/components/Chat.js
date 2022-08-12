import React from 'react';
import { FormSendMessage } from './FormSendMessage';
import { ListMessages } from './ListMessages';

export const Chat = () => {
  return (
    <div className='chat'>
      <ListMessages />
      <FormSendMessage />
    </div>
  );
};
