import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { useParams } from "react-router-dom";


const useCategory = (category) => {
    const axiosPublic = useAxiosPublic();

    // const category = useParams();
    
    const { data:categories = [], isPending:loading, refetch} = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/categories/${category}`);
            return res.data;

        }
    })
    return [categories,loading,refetch]
};

export default useCategory;

// /categories?${category)