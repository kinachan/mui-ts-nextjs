import { createInitState } from "@/store/global-store"
import { Action, State } from "@/types/interface";

export const globalReducer = (state: State | undefined, action: Action) => {
  if (state == null) {
    return createInitState();
  }

  // switch (action.area) {
  //   // case 'app':
  //   //   return appReducer(state, action);
  // }
  return {
    ...state,
  }
}