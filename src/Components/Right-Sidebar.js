import React,{useState} from 'react'
import InputButton from './InputButton';
import ContextMenu from './ThemeContext/ContextMenu'
export default function RightSidebar({dataInput,classValue}) {
    const [inputData, setinputData] = useState({
        text: {
            text: "متن تک خطی",
            iconClassname: 'fas fa-text-width'
        },
        number: {
            text: "مقدار عددی",
            iconClassname: 'fas fa-sort-numeric-down'
        },
        email: {
            text: "ایمیل",
            iconClassname: 'fas fa-envelope'
        },
        password: {
            text: "پسورد",
            iconClassname: 'fas fa-lock'
        },
        checkbox: {
            text: "چک باکس",
            iconClassname: 'fas fa-check-circle'
        },
        radio: {
            text: "دکمه رادیویی",
            iconClassname: 'fas fa-dot-circle'
        },
        file: {
            text: "آپلود فایل",
            iconClassname: 'fas fa-file-upload'
        },
        Hidden: {
            text: "مقدار مخفی",
            iconClassname: 'fas fa-eye-slash'
        },
        image: {
            text: "مقدار تصویری",
            iconClassname: 'far fa-image'
        },
        submit: {
            text: "دکمه",
            iconClassname: 'fas fa-object-ungroup'
        },
        range : {
            text :"بازه",
            iconClassname:'fas fa-exchange-alt'
        },

    });
    const updata =(data,text)=>{
        dataInput(data, text);
    }
    const createInput =()=>{
        return (
            Object.keys(inputData).map((input , index) => {
                return ( <
                    InputButton type={input} text = {
                        inputData[input].text
                    }
                    icon = {
                        inputData[input].iconClassname
                    }
                    key={index}
                    funndata={updata}
                    />
                )
            })
        )
        
        
    }

    return (
        
    <nav className ={`col-md-2 bg-light sidebar ${classValue}`}>
                        <div className="sidebar-sticky">
                          <ul className="nav flex-column nav-padding">
                            <li className="nav-item nav-link">
                                <span data-feather="home"></span>
                                پنل ابزار ها <span className="sr-only">(current)</span>
                             
                            </li>
                            
                               {
                                   createInput()
                               }
                           
                          </ul>
            
                        </div>
                      </nav>
    )
}
