/* eslint-disable react-hooks/rules-of-hooks */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetMe = (email) => {
    const { data: meData = {}, isPending: loading, refetch } = useQuery({
        queryKey: ['me'],
        queryFn: async () => {
            if (email) {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/me?email=${email}`, {
                    headers: { Authorization: localStorage.getItem('accessToken') }
                });
                console.log(res);
                return res.data;
            }

        },
        enabled: !!email
    })
    return [meData, loading, refetch]
};

export default useGetMe;