import React from 'react';
import { Aside } from './components/Aside';
import { AsideChannel } from './components/AsideChannel';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Aside /> */}
      <AsideChannel />
    </>
  );
};
