import React, { useState,useEffect } from 'react'
import FormCreator from './Forms';
import Sidebar from './Right-Sidebar';
import generateHash from 'random-hash';
import { join } from 'path';
import InsertForm from './InsertForm';
import ContextMenu from './ThemeContext/ContextMenu'
import {connect} from 'react-redux'
let counter = 0;
// const http = new httpHandler();
 function Containers({  deleteState,formData,saveFormData}) {

    const [classListmenu, setclassListmenu] = useState('')
    const createFormGroup = (props) => {
        return (
            formData.map((input, index) => {

                return ( <FormCreator dataform = {input}
                    key = {
                        index
                    }
                    />
                )
            })
        )
    }

    const CreateFormData = ()=>{
        return (
            <InsertForm func={saveForm}/>
        )
    }

    const saveForm =(data)=>{
        let AllDataForm ={
            title: data.FormTitle,
            hData: generateHash(),
            userId: data.FormuserId,
            formdata: JSON.stringify(formData),
        }
        saveFormData(AllDataForm);
        
    }
    const togleClass =()=>{
       
        if(classListmenu === ""){
            setclassListmenu('sidebar-mobile')
           
        }
        else{
            setclassListmenu('')

        }
    }
    return (
         <div className= "row">
                 <Sidebar classValue={classListmenu}/>
            
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="row justify-content-end">
                <div className="col-md-12 mt--20">
                    <h1 className="h2 d-block">فرم ساز </h1>
                </div>
                <div className="alert alert-secondary col-12 " role="alert">
                    ابزاری ساده و کاربردی برای ساخت فرم های شما
                          </div>

            </div>
            <div id="alldata" className="row justify-content-center">
                 <button className="sidebar-btn-mobile" onClick={e=>togleClass()}><span></span></button>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            عنوان فرم
                                            </div>
                        <div className="card-body">
                            <form className="bd-example" action="" id="form-id">
                                <div className="accordion" id="accordionExample">
                                    {createFormGroup()}
                                </div>
                                {formData.length > 0 && CreateFormData()}
                            </form>
                        </div>
                    </div>
                </div>

            </div>
                      </main >
        </div>
       
    )
}
const mapStateToProps=(state)=>{
    return{
        formData : state.formData
    }
}
const mapToDispatch = (dispatch)=>{
    return{
        saveFormData : (payload)=>{
            dispatch({
                type : 'SAVE_FORM_SAGA',
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapToDispatch)(Containers)