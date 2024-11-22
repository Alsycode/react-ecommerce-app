import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    Authorization: "bearer c1d357cfc40139e651c7bcdb66f59c9db04d4a78edfd29f03b23486e7eb0d9d50f6083de0ce7622cafd2786a42ca7d0013aac62311df888412af89690c503ae146a6a283357b02b3022282fe6ba71a4443cadaebd61a830508d35df0f88139b67646ff6dca51aa2bca1b215f9e0fcefedc82c14b80bb9ee41ae374e32979df5f",
  },
});
