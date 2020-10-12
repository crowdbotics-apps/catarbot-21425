import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn43140315Reducer from '../features/SignIn43140315/redux/reducers'
import Dashboard25140313Reducer from '../features/Dashboard25140313/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn43140315: SignIn43140315Reducer,
Dashboard25140313: Dashboard25140313Reducer,

});