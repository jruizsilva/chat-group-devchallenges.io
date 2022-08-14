import React, { useState } from 'react';
import { useEffect } from 'react';
import { Message } from './Message';

const calcHeightChat = () => {
  return window.innerHeight - 120;
};

export const ListMessages = () => {
  const [chatHeight, setChatHeight] = useState(calcHeightChat());

  const handleChatHeightOnResize = () => {
    setChatHeight(calcHeightChat());
  };

  useEffect(() => {
    window.addEventListener('resize', handleChatHeightOnResize);
    return () => {
      window.removeEventListener('resize', handleChatHeightOnResize);
    };
  }, [handleChatHeightOnResize, calcHeightChat]);

  return (
    <ul className='chat__ul' style={{ height: chatHeight }}>
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
