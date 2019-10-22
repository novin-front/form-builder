import React, { useState, useEffect } from 'react'
import FormCreator from './Forms';
import Sidebar from './Right-Sidebar';
import httpHandler from '../httpHandler';
import generateHash from 'random-hash';
import { HashRouter, Switch, Link,match,location } from 'react-router-dom';

import InsertForm from './updateInsertform';

let counter = 0;
const http = new httpHandler();
export default function EditForm(props) {
    const dataform = props.location.state.fromData;
    const inputs = JSON.parse(dataform.form_input)
    const [formData, setformData] = useState(inputs)
    console.log(dataform);
    const createFormGroup = () => {

        console.log("create Form Group ===> State", formData)
        return (
            formData.map((input, index) => {

                return (<FormCreator dataform={input}
                    key={
                        index
                    }
                    deleteprops={
                        getDelete
                    }
                    updateState={
                        updateDataState
                    }
                />
                )
            })
        )
    }
    const updateDataState = (e, update, stateId) => {

        let valueInput = (update === "readonly" || update === "required") ? e.target.checked : e.target.value
        setformData(formData.map(input => {
            return (input.id === stateId) ? { ...input, [update]: valueInput } : input

        }
        )
        )
    }
    const setInputAttrebute = async (input, textinput) => {
        console.log("app state ===> ", formData);

        await setformData(
            [...formData,
            {
                type: input,
                name: input,
                value: '',
                placeholder: textinput,
                readonly: false,
                required: false,
                className: [],
                id: `${input}_${counter}`
            }
            ]
        )
        counter++;

    }
    const getDelete = (deleteinput) => {
        // deleteState(deleteinput);
        setformData(formData.filter(input => input.id !== deleteinput))
    }
    const CreateFormData = () => {
        return (
            <InsertForm func={saveForm} title={dataform.title} userId={dataform.user_id} formId={dataform.id}/>
        )
    }

    const saveForm = (data) => {
        let AllDataForm = {
            id: data.FormId,
            title: data.FormTitle,
            userId: data.FormuserId,
            formdata: JSON.stringify(formData),
        }
        console.log("save*****************", AllDataForm)
        http.put('http://localhost:1900/api/v1/formbuilder/', AllDataForm)
            .then(response => {
                console.log("this is response", response)
                // handle success
                // setformData([]);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    return (
        <div className="row">
            <Sidebar dataInput={setInputAttrebute} />
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
                    <div className="col-md-8">
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
