
export const isPromise = (v) => 
  v !== null &&
    typeof v === 'object' &&
    typeof v.then === 'function' &&
    typeof v.catch === 'function';
