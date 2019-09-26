import React from 'react'

export default function InsertForm({ func}) {
    const save =()=>{
        let formSaveData = document.querySelector("#form-save-data");

        let data ={
            FormTitle: formSaveData.form_title.value,
            FormuserId: formSaveData.user_Id.value,
        }
        func (data)
    }
    return (
        <div>
            <form action="" id="form-save-data">
                <label htmlFor="form_title">عنوان فرم</label>
                <input type="text" className="form-control" placeholder="عنوان فرم" id="form_title" name="form_title" />
            <input type="hidden" id="user_Id" name="user_Id" value="2" />
            <button type="button"
                className="btn btn-success btn-save-form"
                onClick={e => save()}>ذخیره فرم</button>
            </form>
        </div>
    )
}
