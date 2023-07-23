import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const CollegeDetails = () => {
  const college = useLoaderData();
  const {
    college_image,
    college_name,
    admission_date,
    events,
    research_history,
    sports,
    college_rating,
    number_of_research,
  } = college;
  return (
    <div>
      <Helmet>
        <title>College Details | Academiclandia</title>
      </Helmet>
      <div className="pageBackground bg-no-repeat bg-cover bg-center w-full h-48 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">College Details</h1>
        </div>
      </div>
      <div className="my-20 container mx-auto flex flex-col items-center">
        <img
          src={college_image}
          alt="College Image"
          className="md:w-1/2 p-2 md:p-0"
        />
        <div className="flex items-center justify-between w-full md:w-1/2 my-5 p-2 md:p-0">
          <h1 className="text-xl md:text-3xl font-bold">{college_name}</h1>
          <div className="flex items-center gap-2 md:gap-5">
            <h1 className="font-semibold">Admission:</h1>
            <div className="flex items-start">
              <h1 className="p-2 bg-red-500 text-white">{admission_date}</h1>
            </div>
          </div>
        </div>
        <div className="divider w-full md:w-1/2 mx-auto m-0 p-2 md:p-0"></div>
        <div className="flex flex-col md:flex-row items-center md:justify-between justify-center w-full md:w-1/2 my-5 p-2 md:p-0 gap-2 md:gap-0">
          <p className="flex items-center gap-5">
            <span className="font-semibold">Sports:</span>{" "}
            {sports.map((sport, index) => (
              <span key={index} className="p-[1px] border border-red-500 mr-2">
                {sport.sport_name}
              </span>
            ))}
          </p>
          <p className="flex gap-5">
            <span className="font-semibold">Rating:</span>
            <span>
              <StarRatingComponent starCount={5} value={college_rating} />
            </span>
          </p>
          <p className="flex gap-5">
            <span className="font-semibold">Number of Research:</span>
            <span>{number_of_research}</span>
          </p>
        </div>
        <div className="w-full md:w-1/2 mx-auto p-2 md:p-0">
          <p>
            <span className="font-semibold">Events:</span> <span>{events}</span>
          </p>
          <p className="mt-5">
            <span className="font-semibold">Research History:</span>{" "}
            <span>{research_history}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
