import { IoMdSend } from 'react-icons/io'
import { IconContext } from 'react-icons'

export const FormSendMessage = () => {
  return (
    <form className='chat__form'>
      <div className='chat__box'>
        <input className='chat__input' placeholder='Type a message here' />
        <button className='btn btn-primary chat__submit' type='submit'>
          <IconContext.Provider value={{ className: 'btn__icon' }}>
            <IoMdSend />
          </IconContext.Provider>
        </button>
      </div>
    </form>
  )
}
