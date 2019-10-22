import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch,Link } from 'react-router-dom';
import {connect} from 'react-redux'
import EditForm from './EditForm'
 function formItems({ data, deleteForm ,cunter}) {

const location = {
  pathname: '/edit',
  state: { fromData: data }
}
const location2 = {
        pathname: '/formview',
        state: {
            fromData: data
        }
    }

    return (
        <tr>
            <th scope="row">{++cunter}</th>
            <td>{data.title}</td>
            <td>{data.user_id}</td>
            <td>
                <Link className="btn btn btn-primary m-1"  to={location2}>مشاهده فرم</Link>
                <Link className="btn btn-outline-secondary m-1"  to={location}>ویرایش</Link>
                <button type="button" onClick={e=> deleteForm(data.id)} 
                className="btn btn-outline-danger m-1">حذف</button>
                
            </td>
        </tr>
    )
}
// const mapStateToProps =(state)=>{
//     return
// }
const mapToDispatch = (dispatch)=>{
       return {
           deleteForm : (payload) => {
               dispatch({
                   type: 'DELETE_FORM_ITME_SAGA',
                   payload
               })
           }
       }
}
export default connect(null,mapToDispatch)(formItems)