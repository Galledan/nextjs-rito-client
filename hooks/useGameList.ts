import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGameList = () => {
    const { data,error, isLoading } = useSWR('/api/games', fetcher)


    return {
        data,
        error,
        isLoading
    }
}

export default useGameList;