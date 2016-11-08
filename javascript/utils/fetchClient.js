
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const fetchWrapper = (resource, method, body) => {
  let options = {
    credentials: 'include',
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };
  if (body) {
    options = { ...options, body: JSON.stringify(body) };
  }
  return fetch(`${resource}`, options)
    .then(checkStatus)
    .then(res => res.json());
};

export const post = (resource, body) => fetchWrapper(resource, 'POST', body);
export const get = (resource) => fetchWrapper(resource, 'GET');
export const put = (resource, body) => fetchWrapper(resource, 'PUT', body);
export const del = (resource) => fetchWrapper(resource, 'DELETE');
