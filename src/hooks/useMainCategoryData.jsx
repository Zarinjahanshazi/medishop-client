import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMainCategoryData = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data:mcategory = [], isPending:loading, refetch} = useQuery({
        queryKey: ['mcategory'],
        queryFn: async () => {
            const res = await axiosPublic.get('/maincategory');
            return res.data;

        }
    })
    return [mcategory,loading,refetch]
};

export default useMainCategoryData;