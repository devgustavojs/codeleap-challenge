import Modal from 'react-modal';

import './styles.scss';

interface DeletePostModalProps{
  isOpen: boolean,
  onRequestClose: () => void,
  handleInputDelete: () => void,
}

export function DeletePostModal({isOpen, onRequestClose, handleInputDelete}:DeletePostModalProps){

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <div className="deletePostModal">
      <p>Are you sure you want to delete this item?</p>
      <div className="deleteOptions">
        <button onClick={handleInputDelete}>Ok</button>
        <button onClick={onRequestClose}>Cancel</button>
      </div>
      </div>
    </Modal>
  )
}