import React , {useEffect,useState} from 'react';
import httpHandler from '../httpHandler';
import FormItems from './formItems';
import formItems from './formItems';
export default function FormList({history,match,location}) {
    const http = new httpHandler();
    const query = new URLSearchParams(location.search);
    const [Formlist, setFormlist] = useState([]);
    useEffect(() => {
        http.get('http://localhost:1900/api/v1/formbuilder/')
        .then(response =>{
            
            let { forms} = response.data;
           
            setFormlist(forms)
        })
        .catch(error =>{
            console.log("This is Axios Error", error)
        })
        .finally(()=>{

        })
    }, [])
    const deleteForm = (fid) => {
       
        http.get(`http://localhost:1900/api/v1/formbuilder/delete/${fid}`)
            .then(response => {
              
                // handle success
                setFormlist(
                    Formlist.filter(itme => {
                        return itme.id !== fid
                    }));

            })
            .catch(function (error) {
                // handle error
                console.log("delete error",error);
            })
            .finally(function () {
                // always executed
            });
    }
   const setList=()=>{
       return(
             Formlist.map((itme, index) => {
                return <FormItems data={itme} key={index} deleteById={deleteForm} cunter={index} />
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
