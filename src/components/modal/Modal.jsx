import { propTypes } from 'react-bootstrap/esm/Image';
import './modalStyle.css'
const Modal = ({ isVisible, onClose, message }) => {


    return (!isVisible) ? null : (
        <div class="modal-component">
            <div class="cookiesContent" id="cookiesPopup">
                <img id='validation-img' src={require('../../images/check.png')} alt="cookies-img" />
                <p>{message}</p>
                <button class="accept" onClick={onClose}>That's fine!</button>
            </div>
        </div>
    );

    // return <h1>hhhh</h1>
};

export default Modal