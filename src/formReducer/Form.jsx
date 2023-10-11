import { useContext } from "react";
import { createContext, useReducer } from "react";

export const INITS_STATE = {
  surname: "",
  OtherName: "",
  EmailAddress: "",
  Password: "",
  Gender: "",
  Phone: "",
  RepeatPassword: "",
  Loading: false,
  Error: false,
};

export function Form(state, action) {
  switch (action.type) {
    case "START_FETCH":
      return {
        Loading: true,
        Error: false,
        surname: "",
        OtherName: "",
        EmailAddress: "",
        Password: "",
        Gender: "",
      };
      break;

    case "DATA_FETCHED":
      return {
        ...state,
        [action.field]: action.payload,
        Loading: false,
      };
      break;

    case "ERROR":
      return {
        Loading: false,
        Error: true,
        surname: "",
        OtherName: "",
        EmailAddress: "",
        Password: "",
        Gender: "",
      };
      break;

    default:
      return state;
  }
}

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(Form, INITS_STATE);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}