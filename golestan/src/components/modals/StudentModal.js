import React from 'react';
import './StudentModal.css';

const StudentModal = ({modal, setModal}) => {
    return (
        <div className="modal-wrapper">

            <div className="modal-content">
                <div className="student-model-header">
                    <p className="student-model-title"> ثبت/تغییر اطلاعات دانشجوی جدید </p>
                    <p className="student-model-cross" onClick={() => {setModal(!modal)}}> ✖ </p>
                </div>
                <div></div>
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
