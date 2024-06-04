import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data:user = [], isPending:loading, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            // const res = await axiosPublic.get('/users');
            // return res.data;
            const res = await axiosSecure.get('/users');
            return res.data;

        }
    })
    return [user,loading,refetch]
   
};

export default useUsers;