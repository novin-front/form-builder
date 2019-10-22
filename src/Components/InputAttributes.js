import React from 'react'
import attributes from './AttributesObject';
import {connect} from 'react-redux'
    let count = 0;
function Attributes({inputkey,attrData,updateAttr}) {

    count++;
    const getAttr = (e, AttributesData, AttributesId) => {
    let valueInput = (AttributesData === "readonly" || AttributesData === "required") ? e.target.checked : e.target.value
    
        updateAttr({
            valueInput,
            AttributesData,
            AttributesId
        })
    }
    const setAttr =()=>{
        if (inputkey === "readonly" || inputkey === "required") {
            return (
                < input type ="checkbox"
                        className = "form-check-input"
                        id = {`id_${attrData.type}_0${count}`}
                        onChange={e=>{getAttr(e,inputkey,attrData.id )}}
                        />
            )
        } else if (inputkey === "type" || inputkey === 'id') {
             return (
             <input type ="text"
                        className = "form-control"
                        id = {`id_${attrData.type}_0${count}`}
                        placeholder = {attrData[inputkey]} readOnly="true"/>
             )
         }
        return (
                <input type ="text"
                        className = "form-control"
                        id = {`id_${attrData.type}_0${count}`}
                        placeholder = {attrData[inputkey]} onChange={e=>{
                            getAttr(e,inputkey,attrData.id )
                        }}/>
            )
        
    }
    return (
        <div className={`form-group ${(inputkey === "readonly" || inputkey === "required") ? "checkbox-group" : ""}`}>
       
            <label htmlFor={`id_${attrData.type}_0${count}`}>{attributes[inputkey]}</label>
            {setAttr()}
        </div>
    )
}
const mapToDispatch =(dispatch)=>{
    return{
        updateAttr : (payload)=>{
            dispatch({
                type: 'UPDATE_INPUT_ATTRIBUTE_DATA',
                payload
            })
        }
    }
}
export default connect(null,mapToDispatch)(Attributes)