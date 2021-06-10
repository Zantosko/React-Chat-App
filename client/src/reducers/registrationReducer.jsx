import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_EMAIL,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_REPASSWORD,
  SUBMIT
} from '../action-types/registration-action-types'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  rePassword: "",
}

const registration = (state = initialState, action) => {
  switch (action.type) {
    
    
    
    default:
      return state;
  }
}