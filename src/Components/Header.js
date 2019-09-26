import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Header() {
    return (
         < nav className ="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" id="form-builder-nav-bar" >
                    < a className = "navbar-brand col-sm-3 col-md-2 mr-0 text-white" > پنل ابزار ها </a>
                    < ul className = "navbar-nav ul-nav-bar" >
                        <li  className="nav-item text-nowrap p-2">
                            
                            <Link to="/"  className="btn btn-outline-info">داشبورد</Link>
                        </li>
                        < li className = "nav-item text-nowrap p-2" >
                            
                            <Link to="/formlist/"  className="btn btn-outline-info">لیست فرم ها</Link>
                        </li>
                        < li className = "nav-item text-nowrap p-2" >
                            <Link to="/addform/" className="btn btn-outline-info">اضافه کردن فرم جدید</Link>
                        </li>
                    </ul>
                    < ul className = "navbar-nav px-3" >
                      <li className="nav-item text-nowrap">
                        < button className ="btn btn-danger" > خروج </button>
                      </li>
                    </ul>
                  </nav>
    )
}
