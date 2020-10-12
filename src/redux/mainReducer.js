import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp12140316Reducer from '../features/SignUp12140316/redux/reducers'
import SignIn43140315Reducer from '../features/SignIn43140315/redux/reducers'
import Dashboard25140313Reducer from '../features/Dashboard25140313/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp12140316: SignUp12140316Reducer,
SignIn43140315: SignIn43140315Reducer,
Dashboard25140313: Dashboard25140313Reducer,

});