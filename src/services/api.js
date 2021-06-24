const serverUrl = 'https://jsonplaceholder.typicode.com';

export default async (url, method, reqBody = null) => {
  try {
    let URL = serverUrl;
    URL += url;
    const body = reqBody && JSON.stringify(reqBody);

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const fetchParams = {method, headers};

    if ((method === 'POST' || method === 'PUT') && !body) {
      throw new Error('Request body required');
    }

    if (body && method !== 'GET') {
      fetchParams.body = body;
    }

    if (__DEV__) {
      console.log(URL, fetchParams);
    }

    return fetch(URL, fetchParams).then(res => res.json());
  } catch (err) {
    throw new Error(err);
  }
};
