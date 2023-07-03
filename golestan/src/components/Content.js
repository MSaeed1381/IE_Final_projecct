import React, {useState} from 'react';
import './Content.css';
import ItemBox from "./ItemBox";
import StudentModal from "../components/modals/StudentModal";
import * as XLSX from 'xlsx';



const Content = ({selected}) => {
    const students = [{name: "سعید زارع"},{name: "اصغر مرادی"},{name: "اکبر"},{name: "اکبری"},{name: "سعید زارع"},{name: "سعید زارع"},{name: "سعید زارع"},{name: "سعید زارع"},{name: "سعید زارع"}];
    const teachers = [{name: "Ali"},{name: "Ali"},{name: "Ali"},{name: "Ali"},{name: "Ali"},{name: "Ali"},{name: "Saeed"},{name: "Saeed"},{name: "Saeed"},{name: "Saeed"},{name: "Saeed"},{name: "Saeed"},{name: "Saeed"}];
    const managers = [{name: "Ali"},{name: "Saeed"},{name: "Saeed"},{name: "Saeed"}];

    let items;
    let type_string;
    const [searchInput, setSearchInput] = useState("");
    const [more, setMore] = useState("مشاهده بیشتر");
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);

    let handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, {type: "binary"});
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setData(parsedData);
        }
    }

    if (data.length > 0) {
        console.log(data); // TODO create a request for excel
    }

    if (selected === "2") {
        items = managers.slice(0, 9);
        type_string = "مدیر";
    } else if (selected === "1") {
        items = teachers.slice(0, 9);
        type_string = "استاد";
    } else {
        items = students.slice(0, 9);
        type_string = "دانشجوی";
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        setMore("");
    };

    return (
        <main className="content">
            <div className="header-content">
                <p>مشاهده  {type_string}ان</p>
                <p className="add-person" onClick={() => setModal(!modal)}> + اضافه کردن {type_string}ان </p>
            </div>
            <hr />
            <div className="searchbar-wrapper">
                <input className="searchbar" placeholder={"جستجوی " + type_string}  onChange={handleChange}
                       value={searchInput}/>
                <input className="custom-file-input" type="file" accept=".xls, .xlsx" onChange={handleFileUpload} name="file"/>
            </div>
            <div className="flex-container-wrapper">
                <div className="flex-container">
                    {items.filter((item) => {
                        return item.name.match(searchInput);
                    }).map((item, index) =>
                        <ItemBox name={item.name} text="حذف" index={index} items={items}/>
                    )}
                </div>
                <p>{more}</p>
            </div>

            {modal &&
                    (
                        <StudentModal modal={modal} setModal={setModal} type_string="دانشجو" type="student"/>
                    )
            }

        </main>
    );
};

export default Content;
