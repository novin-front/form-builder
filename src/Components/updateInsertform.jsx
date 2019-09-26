import React from 'react'

export default function InsertForm({ func, title, userId, formId }) {
    const save = () => {
        let formSaveData = document.querySelector("#form-save-data");

        let data = {
            FormTitle: formSaveData.form_title.value === "" ? title : formSaveData.form_title.value,
            FormuserId: formSaveData.user_Id.value,
            FormId: formSaveData.form_Id.value,
        }
        func(data)
    }
    return (
        <div>
            <form action="" id="form-save-data">
                <label htmlFor="form_title">عنوان فرم</label>
                <input type="text" className="form-control" placeholder={title} id="form_title" name="form_title" />
                <input type="hidden" id="user_Id" name="user_Id" value={userId} />
                <input type="hidden" id="form_Id" name="form_Id" value={formId} />
                <button type="button"
                    className="btn btn-success btn-save-form"
                    onClick={e => save()}>ذخیره فرم</button>
            </form>
        </div>
    )
}
