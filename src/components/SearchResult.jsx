import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import useCollege from "../Hooks/useCollege";
import { InfinitySpin } from "react-loader-spinner";
import OurClassCard from "./HomeComponents/OurClassCard";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [colleges, loading] = useCollege();
  const query = searchParams.get("query") || "";
  const filteredColleges = colleges.filter((college) => {
    return college.college_name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="h-full">
      <Helmet>
        <title>Search Results | Academiclandia</title>
      </Helmet>
      <div className="pageBackground bg-no-repeat bg-cover bg-center w-full h-48 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Search Results</h1>
        </div>
      </div>
      <div className="mb-10 mt-5 container mx-auto justify-items-center p-2 md:p-0">
        <h2>Search Results for &quot;{query}&ldquo;</h2>
        <div className="divider"></div>
        <div className="my-10 container mx-auto justify-items-center">
          {loading ? (
            <div className="flex items-center justify-center">
              <InfinitySpin width="200" color="#131D4E" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 p-2 md:p-0">
              {filteredColleges.length === 0 ? (
                <p className="text-red-500 h-screen">
                  No results found for your search.
                </p>
              ) : (
                filteredColleges.map((college) => (
                  <OurClassCard key={college._id} college={college} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
