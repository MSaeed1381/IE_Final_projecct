import React from 'react';
import './StudentModal.css';

const StudentModal = ({modal, setModal}) => {
    return (
        <div className="modal-wrapper" onClick={() => {setModal(!modal)}}>
            <div className="modal-content">
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
            </div>
        </div>
    )
};



export default StudentModal;
