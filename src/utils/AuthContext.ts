import { Dispatch, createContext } from 'react';

export const AuthContext = createContext(undefined);
export const AuthDispatchContext = createContext<Dispatch<any> | undefined>(undefined);;

export function authReducer(auth: any, action: any): any {
  console.log(auth, action)
  return {};
}