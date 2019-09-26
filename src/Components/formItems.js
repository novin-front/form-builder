import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch,Link } from 'react-router-dom';
import EditForm from './EditForm'
export default function formItems({ data, deleteById ,cunter}) {
const deleteForm = (id)=>{
    deleteById(id)
}

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
            {console.log("data ========",data)}
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
