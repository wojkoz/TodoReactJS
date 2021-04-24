const BASE_URL = "https://localhost:5001/api/";
const TOKEN = "TOKEN";

export const login = async (email, password) => {
  //TODO: save token
  return [null, null];
};

export const register = async (email, username, password) => {
  const data = {
    password: password,
    email: email,
    userName: username,
  };

  const response = await fetchData(
    BASE_URL + "Authenticate/register",
    data,
    "POST",
    false
  );

  if (!response.ok) {
    const awaitedRes = JSON.parse(await response.text());
    return [false, { message: awaitedRes.message, errors: awaitedRes.errors }];
  }

  return [true, null];
};

const fetchData = async (url, data, method = "Get", addToken = true) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (addToken) {
    const token = localStorage.getItem(TOKEN);
    headers = { ...headers, Authorization: "Bearer " + token };
  }
  //Todo: method below doesn't work
  const response = await fetch(url, {
    method: method,
    headers: JSON.stringify(headers),
    body: JSON.stringify(data),
  });

  return response;
};
