import React from 'react'

export default function FormInputItme({ inputData}) {
    return (
        
            
        <div className={(inputData.type !== "checkbox") ? "form-group" : "form-check"}>
                <label htmlFor={inputData.id}>{inputData.placeholder}</label>
            {console.log(inputData.type !== "checkbox" || inputData.type !== "radio")}
            <input  {...inputData}/>
        </div>
    )
}
