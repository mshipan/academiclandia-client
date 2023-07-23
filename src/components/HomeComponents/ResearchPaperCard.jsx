import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const ResearchPaperCard = ({ researchPaper }) => {
  const { image, title, link, description } = researchPaper;
  return (
    <div className="w-full border border-[#131D4E] border-opacity-20">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt="Card Image"
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-2">
        <div>
          <h1 className="font-bold my-2">{title.slice(0, 25)}...</h1>
          <p className="mb-2">{description.slice(0, 100)}...</p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4">
        <Link to={link}>
          <button className="py-2 px-5 bg-[#131D4E] text-white inline-flex items-center gap-3">
            View Details <FaExternalLinkAlt />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResearchPaperCard;
