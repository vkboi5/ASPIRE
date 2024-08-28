import axios from "./axios.js";

const AuthApi = {
	signIn: ({ email, password, userType }) => {
		return axios.post(`/login`, { email, password,userType });
	},
	incubatorSignUp: ({ email, password, name, description}) => {
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
	userSignUp: ({ email, password, name, description,role }) => {
		return axios.post(`/user/register`, {
			email,
			password,
			name,
			description,
			role
		});
	},
	logout: () => {
		// Optional: You can include a request to your backend to handle token invalidation
		return axios.post('/logout'); // Ensure you have this endpoint on your backend
	}
};

export default AuthApi;
