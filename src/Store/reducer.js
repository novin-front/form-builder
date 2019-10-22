import actions from './actions'
const initState ={
    Formlist: [],
    inputsData: {
        text: {
            text: "متن تک خطی",
            iconClassname: 'fas fa-text-width'
        },
        number: {
            text: "مقدار عددی",
            iconClassname: 'fas fa-sort-numeric-down'
        },
        email: {
            text: "ایمیل",
            iconClassname: 'fas fa-envelope'
        },
        password: {
            text: "پسورد",
            iconClassname: 'fas fa-lock'
        },
        checkbox: {
            text: "چک باکس",
            iconClassname: 'fas fa-check-circle'
        },
        radio: {
            text: "دکمه رادیویی",
            iconClassname: 'fas fa-dot-circle'
        },
        file: {
            text: "آپلود فایل",
            iconClassname: 'fas fa-file-upload'
        },
        Hidden: {
            text: "مقدار مخفی",
            iconClassname: 'fas fa-eye-slash'
        },
        image: {
            text: "مقدار تصویری",
            iconClassname: 'far fa-image'
        },
        submit: {
            text: "دکمه",
            iconClassname: 'fas fa-object-ungroup'
        },
        range: {
            text: "بازه",
            iconClassname: 'fas fa-exchange-alt'
        },

    },
    formData : [],
    
}

const reducer = (state = initState, action) => {
    let newState = state;
    switch (action.type) {
        case 'ADD_INPUT_TO_FORM':
            newState ={
                ...state,
                formData :[
                    ...state.formData, {
                        type: action.payload.input,
                        name: action.payload.input,
                        value: '',
                        placeholder: action.payload.textinput,
                        readonly: false,
                        required: false,
                        className: 'form-control',
                        id: `${action.payload.input}_${action.payload.counter}`
                    }
                ]
            }
            break;
        case 'DELETE_INPUT_ATTRIBUTE_DATA' :{
             newState = {
                 ...state,
                 formData: state.formData.filter(input => {
                     return input.id !== action.payload
                 })
             }
             break;
        }
        case 'SAVE_FORM_IN_DB_SUCCESS':
            console.log('SAVE_FORM_IN_DB_SUCCESS',action)
            newState = {
                ...state,
                formData: []
            }
            break;
        case 'SAVE_FORM_IN_DB_ERROR' :
            console.log('SAVE_FORM_IN_DB_ERROR',action);
            break;
        case 'FETCH_FORM_LIST_SUCCESS':
            console.log('FETCH_FORM_LIST_SUCCESS', action)
               newState = {
                   ...state,
                   Formlist: action.payload
               }
            break;
        case 'FETCH_FORM_LIST_ERROR':
             console.log('FETCH_FORM_LIST_ERROR', action);
             break;
        case 'DELETE_FORM_ITME_SUCCESS':
        console.log('DELETE_FORM_ITME_SUCCESS', action)
        newState = {
            ...state,
            Formlist: state.Formlist.filter(input => {
                return input.id !== action.payload.formId
            })
        }
        break;
        case 'DELETE_FORM_ITME_ERROR':
        console.log('DELETE_FORM_ITME_ERROR', action);
        break;
        case 'UPDATE_INPUT_ATTRIBUTE_DATA':{
             console.log(action.payload.AttributesData);
             newState = {
                 ...state,
                 formData: state.formData.map(input => {
                     return (input.id === action.payload.AttributesId) ? {
                         ...input,
                         [action.payload.AttributesData]: action.payload.valueInput
                     } : input

                 })
             }
             break;
        }
        default:
            newState = state;
            break;
    }
    return newState;
}
export default reducer;