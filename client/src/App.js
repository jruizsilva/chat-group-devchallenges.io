import { Aside } from './components/Aside'
import { AsideChannel } from './components/AsideChannel'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { Modal } from './components/Modal'

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Main />
        <Modal />
        <Routes>
          <Route path='/' element={<Aside />} />
          <Route path='/channel/:id' element={<AsideChannel />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
