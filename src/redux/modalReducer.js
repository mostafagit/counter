import { MODAL_OPEN,MODAL_CLOSE } from "./action";

const defaulState ={
    isOpen : false,
    name : "",
    text : ""
}

export const modalReducer = (state = defaulState, action) => {
  switch (action.type) {
      case MODAL_OPEN:
        return {
          ...state,
          isOpen: true,
          name : action.payload.name,
          text : action.payload.text
        }
        case MODAL_CLOSE:
          return {
            ...state,
            isOpen: false,
            name : "",
            text : ""
          }
    default:
      return state;
  }
};
