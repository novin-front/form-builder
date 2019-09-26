import React,{useEffect} from 'react'
import attributes from './AttributesObject'
    let count = 0;
export default function Attributes({inputkey,attrData,updateAttr}) {
    useEffect(() => {
        
    }, [])
    count++;
    const getAttr =(e,data,attId)=>{
        updateAttr(e,data,attId)
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
                        placeholder = {attrData[inputkey]} onChange={e=>{getAttr(e,inputkey,attrData.id )}}/>
            )
        
    }
    return (
        <div className={`form-group ${(inputkey === "readonly" || inputkey === "required") ? "checkbox-group" : ""}`}>
       
            <label htmlFor={`id_${attrData.type}_0${count}`}>{attributes[inputkey]}</label>
            {setAttr()}
        </div>
    )
}
