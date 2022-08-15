import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/slices/ui/uiSlice';

export const Modal = () => {
  const { ui } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { isOpenModal } = ui;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${isOpenModal && 'modal--active'}`}
      onClick={handleCloseModal}
    >
      <div className='modal__wrapper' onClick={stopPropagation}>
        <h4 className='modal__h4'>New Channel</h4>
        <form className='modal__form'>
          <div className='modal__box'>
            <input
              type='text'
              className='modal__input'
              placeholder='Channel name'
            />
          </div>
          <div className='modal__box modal__box--textarea'>
            <textarea
              className='modal__textarea'
              placeholder='Channel Description'
            ></textarea>
          </div>
          <div className='btn-primary modal__box--submit '>
            <button type='submit' className='modal__button--submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
