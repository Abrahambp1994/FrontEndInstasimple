
// TODOS LOS POSTS PUBLICADOS POR ORDEN CRONOLÓGICO

export const getAllPostsService = async () => {
  
    const response = await fetch(`${process.env.REACT_APP_BACKEND}`,);
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
};

// POSTS SEGÚN LA DESCRIPCIÓN DADA POR EL USUARIO

export const getPostsByDescriptionService = async (searchResults) => {

  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts?description=${searchResults}`);

  const json = await response.json();
  
  if (!response.ok) {
    throw new Error(json.message);
  }
  
  return json.data;

};

// USUARIO CUALQUIERA

export const getUserDataService = async (id) => {

  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  
  return json.data;

};

// OBTENER LA INFORMACIÓN DE UN USARIO

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    }
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// INICIAR SESIÓN DE UN USUARIO

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};