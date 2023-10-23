import { globalStore } from '@/store/global-store';
import { ApiErrorObject } from "@/types/interface";

export const authHeader = () => {
  const state = globalStore.getState();
  const header = {
    headers: {
      // 'Authorization': `Bearer: ${state.app.idToken}`
    }
  };

  return header;
};

export const jsonHeaderWithAuth = () => {
  const jsonHeaders = jsonHeader();
  const authHeaders = authHeader();
  
  return {
    headers: {
      ...jsonHeaders.headers,
      ...authHeaders.headers,
    }
  }
};

export const jsonHeader = () => {
  return {
    headers: {
      'Accept': 'application/json, */*',
      'Content-type': 'application/json',
    },
  }
}


export const handleErrorFunction = (res: Response | ApiErrorObject) => {
  if (res.ok) {
    return true;
  }
  const err = res as ApiErrorObject;

  // const router = useRouter();
  console.error(`${JSON.stringify(err.message)}`);
  // router.replace('/error');

  return false;
}

export const fetchApi = async (input: RequestInfo, init?: RequestInit): Promise<Response | ApiErrorObject> => {
  const state = globalStore.getState();
  const res = fetch(input, init);
  return res.then(res => {
    if (!res.ok) {
      // throw new Error(state.message.messages.ERROR_MESSAGE_KEY_UNKNOWN_REASON);
      throw new Error('');
    }
    return res as Response;
  })

  .catch(err => {
    return {
      message: err.message,
      stack: err.stack,
      ok: false,
    };
  });
}