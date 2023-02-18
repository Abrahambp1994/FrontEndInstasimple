export const getAllPostsService = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}`,);
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };

  export const getMyDataService = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
      headers: {
        Authorization: token,
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };


  export const registerUserService = async ({ name,email, password }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  };

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

  export const postLikeOrDislike = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/:id/like`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };
