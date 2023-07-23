import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();
  const [singleUser] = useUser(user?.email);
  const {
    country,
    dob,
    email,
    gender,
    name,
    phone,
    photo,
    address,
    university,
  } = singleUser;
  const isProfileIncomplete =
    !phone || !gender || !dob || !country || !address || !university;
  return (
    <div className="md:h-screen">
      <Helmet>
        <title>Profile | Travlerz</title>
      </Helmet>
      <div className="pageBackground bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText  text-4xl font-bold text-white drop-shadow-2xl">
          My Profile
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full my-20">
        <div>
          <img src={photo} alt="User Photo" className="w-56" />
        </div>
        <div className="md:w-1/3 relative">
          {isProfileIncomplete && (
            <div className="w-full h-full bg-white/30 bg-opacity-60 backdrop-blur-sm absolute top-0 z-10 flex flex-col items-center justify-center gap-3">
              <h1 className=" text-xl text-red-500 font-bold">
                Your Profile is Incomplete
              </h1>
              <h3 className="text-center p-2 md:p-0">
                Please Update Your Profile First to see your Details.
              </h3>
              <Link to="/update-profile">
                <button className="bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E]  font-semibold px-5 py-2 border border-[#131D4E] duration-500">
                  Update Profile
                </button>
              </Link>
            </div>
          )}

          <table className="table border border-black">
            <tr>
              <td>Name</td>
              <td>
                : <span className="ml-3">{name}</span>
              </td>
              <td>
                <Link to="/update-profile" title="Update Profile">
                  <FaUserEdit />
                </Link>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                : <span className="ml-3">{email}</span>
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                : <span className="ml-3">{phone}</span>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                : <span className="ml-3">{gender}</span>
              </td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>
                : <span className="ml-3">{dob}</span>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                : <span className="ml-3">{address}</span>
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                : <span className="ml-3">{country}</span>
              </td>
            </tr>
            <tr>
              <td>University</td>
              <td>
                : <span className="ml-3">{university}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
