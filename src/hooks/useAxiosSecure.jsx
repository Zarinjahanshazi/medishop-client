import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://medishop-server.vercel.app'
})

const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;