import { SET_BREADCRUMB } from 'actions/navbar'

export const navbar = (state = {}, action) => {
  switch(action.type) {
    case SET_BREADCRUMB:
      return { ...state, breadcrumb: action.breadcrumb }
    default:
      return state
  }
}
