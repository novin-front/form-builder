import React,{useState} from 'react'
import { HashRouter, Switch, Link, match, location } from 'react-router-dom';
import FormInputItme from './FormInputItme';
export default function FormView(props) {
    const dataform = props.location.state.fromData;
    const inputs = JSON.parse(dataform.form_input)
    const [formData, setformData] = useState(inputs)
    console.log(dataform,formData);
    const CreateForm =()=>{
        return(
            formData.map(itme => <FormInputItme inputData={itme} />)
        )
    }
    return (
        <div>
            <section id="form-view" className="clearfix">
            </section>
            <div className="container">
                <div id="form-container">
                    <h2>{dataform.title}</h2>
                    <form>
                    {CreateForm()}
                    </form>
                </div>

            </div>
        </div>
    )
}
