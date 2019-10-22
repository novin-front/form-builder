import React,{useState} from 'react'
import Attributes from './InputAttributes'
import {connect} from 'react-redux'
function FormCreator({ dataform, deleteprops, updateState}) {
    const setDataInputAttributes =()=>{
           return(
               Object.keys(dataform).map((input, index) => {
                   if (input !== "type" || input !=='id'){
                   
                       return (
                           <Attributes inputkey={input} attrData={dataform} key={index} updateAttr={updateState} />
                       )
                   }
                   
               })
           )
  
    }

    const deletegroup =(e,data)=>{
        console.log("this is forms components data layer 1",data)
        deleteprops(data);
    }
    return (
        <div className="card card-group-space">
            <div className="card-header" id={dataform.id}>
                <h2 className="mb-0">
                    <button className="btn btn-link heading-btn" 
                            type="button" data-toggle="collapse" 
                        data-target={`#target_${dataform.id}`} aria-expanded="false" 
                        aria-controls={`target_${dataform.id}`}>
                        {dataform.placeholder} 
                        <i className="fas fa-chevron-circle-down"></i>
                    </button>
                    <button className="btn btn-link delete-btn"
                        type="button" onClick={e => { deletegroup(e, dataform.id) }} data-id={dataform.id} ><i className="fas fa-trash"></i></button>
                </h2>
            </div>

            <div id={`target_${dataform.id}`} className="collapse" 
                aria-labelledby={dataform.id} data-parent="#accordionExample">
                <div className="card-body">
                    {setDataInputAttributes()}
                </div>
            </div>
        </div>
        
    )
}
const mapToDispatch=(dispatch)=>{
    return{
        deleteprops : (payload)=>{
            dispatch({
                type: 'DELETE_INPUT_ATTRIBUTE_DATA',
                payload
            })
        }

    }
}
export default connect(null,mapToDispatch)(FormCreator);