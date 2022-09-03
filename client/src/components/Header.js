import { useDispatch } from 'react-redux'
import { openMenu } from '../store/slices/ui/uiSlice'

export const Header = () => {
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    dispatch(openMenu())
  }

  return (
    <header className='header'>
      <button className='header__button' onClick={handleToggleMenu}>
        <span className='material-symbols-rounded header__icon'>menu</span>
      </button>
      <h1 className='header__h1'>Front-end developers</h1>
    </header>
  )
}
