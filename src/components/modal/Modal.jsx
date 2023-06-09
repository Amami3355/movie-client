import './modalStyle.css';
const Modal = ({ isVisible, onClose, message }) => {
  return !isVisible ? null : (
    <div class='modal-component'>
      <div
        class='cookiesContent'
        id='cookiesPopup'
      >
        {/* <img id='validation-img' src={require('../../images/check.png')} alt="cookies-img" /> */}
        <img
          src='data:image/png;base64,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'
          alt=''
        />
        <p>{message}</p>
        <button
          class='accept'
          onClick={onClose}
        >
          That's fine!
        </button>
      </div>
    </div>
  );

  // return <h1>hhhh</h1>
};

export default Modal;
