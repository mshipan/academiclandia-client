import { useQuery } from "@tanstack/react-query";
const useCollege = () => {
  const { data: colleges = [], isLoading: loading } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await fetch(
        "https://academiclandia-server.vercel.app/colleges"
      );
      return res.json();
    },
  });
  return [colleges, loading];
};

export default useCollege;
