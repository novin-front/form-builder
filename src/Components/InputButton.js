import React from 'react'

export default function InputButton({type,text,icon,funndata}) {
    const clickbtn=(e,type)=>{
        
        funndata(type,text);
    }
    return (
        < li className = "nav-item nav-link" >
         <button data-name={type}
         className="btn btn-primary text-right col-12 btn-style" 
         type="button" onClick={e => { clickbtn(e,type,text) }}>{text}<i className={icon}></i></button>
         </ li>
    )
}
