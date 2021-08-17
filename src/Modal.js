import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const { is_modal_open, close_modal } = useGlobalContext();
  
  return (
    <div className={`modal-overlay ${is_modal_open ? 'show-modal' : ''}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={close_modal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
