import { FaQuoteLeft } from "react-icons/fa";
import StarRatingComponent from "react-star-rating-component";
const ReviewCard = ({ review, index }) => {
  const { user_image, college_name, reviewer_name, rating, feedback } = review;
  return (
    <div className="flex flex-col items-center gap-5 w-full h-full bg-white p-5">
      <div className="flex items-center justify-between gap-10">
        <FaQuoteLeft className="text-3xl opacity-20" />
        <img
          src={user_image}
          alt="user image"
          className="w-20 h-20 rounded-full border-2 border-white"
        />
        <h1 className="text-3xl font-bold opacity-20">{index + 1}</h1>
      </div>
      <h1 className="text-xl font-semibold">{reviewer_name}</h1>
      <p className=" max-w-xl text-center text-sm">
        {feedback.slice(0, 90)}...
      </p>
      <div className="flex items-center justify-between gap-32">
        <h1 className=" text-base md:text-xl font-bold">
          {college_name.slice(0, 20)}...
        </h1>
        <StarRatingComponent starCount={5} value={rating} />
      </div>
    </div>
  );
};

export default ReviewCard;
