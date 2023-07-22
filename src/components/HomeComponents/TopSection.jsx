import { useNavigate } from "react-router-dom";

const TopSection = () => {
  const navigate = useNavigate();
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;

    const searchResultUrl = `/search-result?query=${encodeURIComponent(
      searchTerm
    )}`;
    navigate(searchResultUrl);
  };
  return (
    <div className="topSectionBackground bg-no-repeat bg-cover h-96 md:h-screen bg-fixed">
      <div className="flex flex-col items-center justify-center h-full bg-gray-500 bg-opacity-30">
        <h1 className="text-4xl md:text-7xl font-semibold">
          Creating Your <span className="text-white">Future</span>{" "}
        </h1>
        <p className="max-w-4xl text-center my-5 text-white">
          Together with our university&apos;s and academics, you can create the
          future for yourself. It means obtaining necessary skills and knowledge
          to make everything you learned here work for you in the future.
        </p>
        <div className="w-full px-3 md:px-0 md:w-1/3">
          <form onSubmit={handleSubmitSearch}>
            <input
              type="search"
              name="search"
              placeholder="Search By College Name ..."
              className="p-2 w-full outline-none border border-sky-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
