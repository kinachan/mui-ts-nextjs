import { AnyAction, EnhancedStore, MiddlewareArray, ThunkMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { globalReducer } from '@/reducers/reducer';
import { Action, State } from "@/types/interface";

export const createInitState = (): State => {
  return {
    app: {
      // darkMode: false,
      // logined: false,
    }
  }
}

class GlobalStore {
  private store: EnhancedStore<State, Action, MiddlewareArray<[ThunkMiddleware<State, AnyAction, undefined>]>>;
  constructor() {
    const store = configureStore({
      reducer: globalReducer,
      devTools: false,
      middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });
    this.store = store;
  }

  getState() {
    return this.store.getState();
  }

  getStore() {
    return this.store;
  }
}

export const globalStore = new GlobalStore();