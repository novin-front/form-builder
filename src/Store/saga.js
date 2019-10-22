import {takeEvery,put,call,all} from 'redux-saga/effects';
import httpHandler from '../httpHandler';
const http = new httpHandler();
function* SaveFormDataWorker(action) {
    console.log('saga =====>',action)

    try {
        const forms = yield call(()=>{
            return(
                http.post('http://localhost:1900/api/v1/formbuilder/', action.payload)
                    .then(response => {

                        // handle success
                        console.log('response######', response.data)
                        return (response.data)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    })
            );
        });
        yield put({
            type : "SAVE_FORM_IN_DB_SUCCESS",
            payload: forms,
        });

    } catch (error) {
        console.log('Error @@@',error)
        yield put({
            type: "SAVE_FORM_IN_DB_ERROR",
            payload: error,
        });
    }
}
function* SaveFormDataWatcher(){

    yield takeEvery('SAVE_FORM_SAGA', SaveFormDataWorker)
}


function* fetchFormListWorker(action) {
    console.log('saga =====>', action)

    try {
        const formsList = yield call(() => {
            return (
                http.get('http://localhost:1900/api/v1/formbuilder/')
                    .then(response => {

                        let {
                            forms
                        } = response.data;

                       return forms;
                    })
                    .catch(error => {
                        console.log("This is Axios Error", error)
                    })
                    .finally(() => {

                    })
            );
        });
        yield put({
            type: "FETCH_FORM_LIST_SUCCESS",
            payload: formsList,
        });

    } catch (error) {
        console.log('Error @@@', error)
        yield put({
            type: "FETCH_FORM_LIST_ERROR",
            payload: error,
        });
    }
}

function* fetchFormListWatcher() {

    yield takeEvery('FETCH_FORM_SAGA', fetchFormListWorker)
}


function* deleteFormListWorker(action) {
    console.log('saga =====>', action)

    try {
        const deleteforms = yield call(() => {
            return (
                http.get(`http://localhost:1900/api/v1/formbuilder/delete/${action.payload}`)
                .then(response => {
                    return (response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log("delete error",error);
                })
                .finally(function () {
                    // always executed
                })
            );
        });
        yield put({
            type: "DELETE_FORM_ITME_SUCCESS",
            payload: deleteforms,
        });

    } catch (error) {
        console.log('Error @@@', error)
        yield put({
            type: "DELETE_FORM_ITME_ERROR",
            payload: error,
        });
    }
}

function* deleteFormListWatcher() {

    yield takeEvery('DELETE_FORM_ITME_SAGA', deleteFormListWorker)
}

export default function* SagaApi(){
    yield all([
        SaveFormDataWatcher(),
        fetchFormListWatcher(),
        deleteFormListWatcher(),
    ])
}