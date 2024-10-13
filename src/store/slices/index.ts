import { combineReducers } from 'redux'
import { labelTagReducers, labelTagActions } from '@app-store/slices/labelTag'
export const rootReducer = combineReducers({
  labelTag: labelTagReducers
})

export const rootActions = {
    labelTag: labelTagActions
 }