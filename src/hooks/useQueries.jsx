import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useQueries = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data:query = [], isPending:loading, refetch} = useQuery({
        queryKey: ['query'],
        queryFn: async () => {
            const res = await axiosPublic.get('/queries');
            return res.data;

        }
    })
    return [query,loading,refetch]
};

export default useQueries;