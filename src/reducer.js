
export const initialState = {
  user: null,
  lumps: null,
  sources: null,
}

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_LUMPS: "SET_LUMPS",
  SET_SOURCES: "SET_SOURCES",
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type)
  {
    case actionTypes.SET_USER:
      return {
        ...state,
        user:action.user,
      }
      case actionTypes.SET_LUMPS:
        return {
          ...state,
          lumps:action.lumps,
        }
        case actionTypes.SET_SOURCES:
          return {
            ...state,
            sources:action.sources,
          }
    default:
      return state;
  }
}

export default reducer;