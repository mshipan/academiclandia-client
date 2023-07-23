import { Helmet } from "react-helmet-async";
import useBooking from "../Hooks/useBooking";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const MyCollege = () => {
  const [bookings, loading] = useBooking();
  return (
    <div className="md:h-screen">
      <Helmet>
        <title>My College | Academiclandia</title>
      </Helmet>
      <div className="pageBackground bg-no-repeat bg-cover bg-center w-full h-48 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">My College</h1>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center my-10">
        Colleges I Admitted
      </h1>
      <div className="my-10 container mx-auto justify-items-center">
        {loading ? (
          <div className="flex items-center justify-center">
            <InfinitySpin width="200" color="#131D4E" />
          </div>
        ) : (
          <div className="flex flex-col gap-10 md:w-2/3 mx-auto p-2 md:p-0 ">
            {bookings.map((booking) => (
              <div key={booking._id}>
                <div className="flex items-center justify-between border-t last:border-b border-[#131D4E] py-3">
                  <p className="font-semibold">{booking.collegeName}</p>
                  <div>
                    <Link to={`/my-college-details/${booking._id}`}>
                      <button className="bg-red-500 p-2 text-white font-semibold">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCollege;
