import React , {useEffect,useState} from 'react';
import httpHandler from '../httpHandler';
import FormItems from './formItems';
import {connect} from 'react-redux'
function FormList({history,match,location,formlist,fetchFormList}) {
    const http = new httpHandler();
    const query = new URLSearchParams(location.search);
    useEffect(() => {
        fetchFormList()
        
    },[])
   const setList=()=>{
       return(
             formlist.map((itme, index) => {
                return <FormItems data={itme} key={index} 
                 cunter={index} />
            })
       )
   }
    return (
<div>
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                          <ul className="nav flex-column nav-padding">
                            <li className="nav-item nav-link">
                                <span data-feather="home"></span>
                                پنل ابزار ها <span className="sr-only">(current)</span>
                             
                            </li>
                           
                          </ul>
            
                        </div>
                      </nav>

                       <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="row justify-content-end">
                <div className="col-md-12 mt--20">
                    <h1 className="h2 d-block">فرم ساز </h1>
                </div>
                <div className="alert alert-secondary col-12 " role="alert">
                    لیست تمامی فرم های شما
                          </div>

            </div>
            <div id="alldata" className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            عنوان فرم
                                            </div>
                        <div className="card-body">
                                        <table className="table table-striped table-bordered">
                                            <thead>
                                                <tr className="table-active">
                                                    <th scope="col">ردیف</th>
                                                    <th scope="col">عنوان فرم</th>
                                                    <th scope="col">ایدی کاربر</th>
                                                    <th scope="col">عملیات</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    setList()
                                                }
                                            </tbody>
                                        </table>
                        </div>
                    </div>
                </div>

            </div>
                      </main >
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        formlist: state.Formlist
    }
}
const mapToDispatch = (dispatch) => {
    return {
        fetchFormList: (payload) => {
            dispatch({
                type: 'FETCH_FORM_SAGA',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapToDispatch)(FormList);