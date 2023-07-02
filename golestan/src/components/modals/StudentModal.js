import React from 'react';
import './StudentModal.css';


const StudentModal = ({modal, setModal, type_string, type}) => {
    const fields = ["حقوق" ,"رواشناسی" ,"ادبیات" ,"زمین شناسی" , "مهندسی کامپیوتر"]
    const colleges = ["حقوق" ,"رواشناسی" ,"ادبیات" ,"زمین شناسی" , "مهندسی کامپیوتر"]

    return (
        <div className="modal-wrapper">

            <div className="modal-content">
                <div className="student-model-header">
                    <p className="student-model-title"> ثبت/تغییر اطلاعات {type_string}ی جدید </p>
                    <p className="student-model-cross" onClick={() => {setModal(!modal)}}> ✖ </p>
                </div>

                <form action="/submit" method="POST" className="student-model-form">
                    <div className="student-model-item">
                        <label htmlFor="name">نام</label>
                        <input type="text" id="name" name="name" required className="student-model-item" />

                        <label htmlFor="family">نام خانوادگی</label>
                        <input type="text" id="family" name="family" required className="student-model-item" />

                        <label htmlFor="user_id">شماره پرسنلی</label>
                        <input type="text" id="user_id" name="user_id" required className="student-model-item" />

                        <label htmlFor="id">کدملی</label>
                        <input type="text" id="id" name="id" required className="student-model-item" />

                        <label htmlFor="college">دانشکده</label>
                        <select id="college" name="college" className="student-model-item-box">
                            {colleges.map( (item) =>
                                <option value={item}>{item}</option>
                            )}
                        </select>
                        <label htmlFor="field">رشته تحصیلی</label>
                        <select id="field" name="field" className="student-model-item-box">
                            {fields.map( (item) =>
                                <option value={item}>{item}</option>
                            )}
                        </select>

                        <label htmlFor="date">سال ورود</label>
                        <input type="text" id="date" name="date" required className="student-model-item"/>

                        <label htmlFor="level">سطح</label>
                        <input type="text" id="level" name="level" required className="student-model-item"/>
                    </div>

                    <input type="submit" value="ثبت" className="student-model-submit" onClick={() => {
                        const $ = document
                        let name = $.getElementById("name").value;
                        let family = $.getElementById("family").value;
                        let user_id = $.getElementById("user_id").value;
                        let id = $.getElementById("id").value;
                        let college = $.getElementById("college").value;
                        let field = $.getElementById("field").value;
                        let date = $.getElementById("date").value;
                        let level = $.getElementById("level").value;

                        let person = {
                            name, family, user_id, id, college, field, date, level
                        }
                        console.log(person);

                        setModal(!modal);
                    }} />
                </form>
            </div>
        </div>
    )
};



export default StudentModal;
