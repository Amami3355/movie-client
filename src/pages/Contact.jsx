import React, { useState } from "react";
import Modal from "../components/modal/Modal";
function Contact() {
    const [isModal, setModal] = useState(false);
    return (
        <div>
            <button onClick={() => { setModal(true) }}>Click Here</button>
            <Modal
                isVisible={isModal}


                onClose={() => { setModal(false) }}
            />

        </div>

    )
}

export default Contact;

// content={<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="0" y="0" width="100" height="100" rx="50%" fill="blue" />
//                     <path d="M5 50 L40 85 L95 10" stroke="green" stroke-width="10" fill="none" />
//                 </svg>
//                 }