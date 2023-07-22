import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  return (
    <div>
      <h2>Search Results for &quot;{query}&ldquo;</h2>
    </div>
  );
};

export default SearchResult;
