import axios from "axios";

export const unsplashApi = axios.create({
  baseURL: `https://api.unsplash.com/photos/random?client_id=${
    import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  }`,
});
