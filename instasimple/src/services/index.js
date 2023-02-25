  export const getAllPostsService = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}`,);
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;
  };

  export const getMyDataService = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
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

  export const postLikeOrDislike = async ({token, userId, postId}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/${postId}/like`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({ postId, userId }),
    });
  
    const json = await response.json();
  console.log(json);
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.data;

  };


  export const uploadPostService = async ({ data, token }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/post`, {
      method: "POST",
      body: data,
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