import { useQuery } from "@tanstack/react-query";
import { getJob } from "../api/job";

export const useJob = () => {
    return useQuery({
        queryKey: ["job"],
        queryFn: getJob,
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: false, // Disable retry on failure
        refetchOnWindowFocus: false, // Disable refetch on window focus
    })
}
