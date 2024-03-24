import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useGame = (id?: string) => {
    const { data,error, isLoading } = useSWR(id ? `/api/games/${id}` : null, fetcher)


    return {
        data,
        error,
        isLoading
    }
}

export default useGame;