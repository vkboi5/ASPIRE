import axios from "./axios.js";

const AuthApi = {
  signIn: ({ email, password, userType }) => {
    return axios.post(`/login`, { email, password, userType });
  },
  incubatorSignUp: ({ email, password, name, description }) => {
    return axios.post(`/incubator/register`, {
      email,
      password,
      name,
      description,
    });
  },
  companySignUp: ({ email, password, name, description }) => {
    return axios.post(`/company/register`, {
      email,
      password,
      name,
      description,
    });
  },
  userSignUp: ({ email, password, name, description, role }) => {
    return axios.post(`/user/register`, {
      email,
      password,
      name,
      description,
      role,
    });
  },
  logout: () => {
    const token = JSON.parse(localStorage.getItem('userInfo'))?.token;
    return axios.post('https://aspirebackend-gywyy55s.b4a.run/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
};

export default AuthApi;