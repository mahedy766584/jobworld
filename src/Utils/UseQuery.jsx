import { useQuery } from "@tanstack/react-query";

const UseQuery = () => {

    const { data, isLoading, isError, isFetching, refetch } = useQuery({
        queryKey: ['usersPost'],
        queryFn: async () => {
            const data = await fetch('http://localhost:5001/addJob');
            return await data.json();
        }
    })

    return { data, isLoading, isError, isFetching, refetch };
};

export default UseQuery;