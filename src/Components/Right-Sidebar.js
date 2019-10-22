import React,{useState} from 'react'
import InputButton from './InputButton';
import ContextMenu from './ThemeContext/ContextMenu';
import {connect} from 'react-redux'
function RightSidebar({dataInput,classValue,AllInputData}) {
let counter = 0;
    const updata =(data,text)=>{
        dataInput({
            input :data,
            textinput :text,
            counter,
        });
        counter++;
    }
    const createInput =()=>{
        return (
            Object.keys(AllInputData).map((input, index) => {
                return ( <InputButton type={input} text = {
                        AllInputData[input].text
                    }
                    icon = {
                        AllInputData[input].iconClassname
                    }
                    key={index}
                    funndata={updata}/>
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
const mapStateToProps =(state)=>{
    return{
        AllInputData: state.inputsData
    }
}
const mapDispatch =(dispatch)=>{
    return{
        dataInput: function (payload) {
            dispatch({
                type: 'ADD_INPUT_TO_FORM',
                payload,
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatch)(RightSidebar);