import { useQuery } from "@tanstack/react-query";

const useResearchPaper = () => {
  const { data: researchPapers = [], isLoading: loading } = useQuery({
    queryKey: ["researchPapers"],
    queryFn: async () => {
      const res = await fetch(
        "https://academiclandia-server.vercel.app/research-papers"
      );
      return res.json();
    },
  });
  return [researchPapers, loading];
};

export default useResearchPaper;
