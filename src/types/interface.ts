import { AppState } from "./app/app-state";

export type Area = 'app';

export interface Action {
  type: string;
  area?: Area;
  payload: any;
}


export interface State {
  app: AppState;
}

export interface ApiErrorObject {
  message: string;
  stack: string;
  ok: false;
}
