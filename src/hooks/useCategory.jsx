import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { useParams } from "react-router-dom";


const useCategory = () => {
    const axiosPublic = useAxiosPublic();
    // const category = useParams();
    
    const { data:category = [], isPending:loading, refetch} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/categories?${category}`);
            return res.data;

        }
    })
    return [category,loading,refetch]
};

export default useCategory;

// /categories?${category)