import { Link } from "react-router-dom";

const OurClassCard = ({ college }) => {
  const {
    _id,
    college_image,
    college_name,
    admission_date,
    events,
    research_history,
    sports,
  } = college;
  return (
    <div className="w-full border border-[#131D4E] border-opacity-20">
      <div className="relative overflow-hidden">
        <img
          src={college_image}
          alt="Card Image"
          className="transition duration-300 ease-in-out hover:scale-110"
        />
        <div className="absolute bottom-0 right-0">
          <h1 className="font-semibold text-white">Admission</h1>
          <div className="flex items-start">
            <h1 className="p-2 bg-red-500 text-white">{admission_date}</h1>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div>
          <h1 className="font-bold my-2">{college_name}</h1>
          <p className="mb-2">
            <span className="font-semibold">Events:</span>{" "}
            {events.slice(0, 100)}...
          </p>
          <p>
            <span className="font-semibold">Research History:</span>{" "}
            {research_history.slice(0, 100)}...
          </p>

          <p className="my-2">
            <span className="font-semibold">Sports:</span>{" "}
            {sports.map((sport, index) => (
              <span key={index} className="p-1 border border-red-500 mr-2">
                {sport.sport_name}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4">
        <Link to={`/college-details/${_id}`}>
          <button className="py-2 px-5 bg-[#131D4E] text-white">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default OurClassCard;
