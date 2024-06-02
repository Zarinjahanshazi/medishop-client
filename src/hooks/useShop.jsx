import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useShop = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data:shop = [], isPending:loading, refetch} = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories');
            return res.data;

        }
    })
    return [shop,loading,refetch]
   
};

export default useShop;