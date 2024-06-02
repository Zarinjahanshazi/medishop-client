import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useUsers = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data:user = [], isPending:loading, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;

        }
    })
    return [user,loading,refetch]
   
};

export default useUsers;