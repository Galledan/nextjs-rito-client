import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useGames = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/downloadedgames", fetcher);

  return { data, error, isLoading, mutate };
};

export default useGames;