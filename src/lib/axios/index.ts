import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Adding access token to each request header
instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //extracting response and config objects
    const { response, config } = error;
    //checking if error is Unauthorized error
    console.log(error);
    if (response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        //if refresh token exists in local storage proceed
        try {
          //try refreshing token
          const data = await instance.post("/auth/refresh-tokens", {
            refresh: refreshToken,
          });
          const accessToken = data.data.tokens.access.token;
          if (accessToken) {
            localStorage.setItem("token", accessToken);
            config.headers["Authorization"] = accessToken;
            return instance(config);
          }
        } catch (e) {
          console.log(e);
        }
      }
    } else if (response.status == 400) {
      // bad request
    }
    //if none above worked clear local storage and log user out
    localStorage.removeItem("token");
    return error;
  }
);

export default instance;
