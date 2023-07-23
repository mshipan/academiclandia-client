import { useQuery } from "@tanstack/react-query";

const useGallery = () => {
  const { data: galleries = [], isLoading: loading } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => {
      const res = await fetch(
        "https://academiclandia-server.vercel.app/galleries"
      );
      return res.json();
    },
  });
  return [galleries, loading];
};

export default useGallery;
