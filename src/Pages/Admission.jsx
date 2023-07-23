import { Helmet } from "react-helmet-async";
import useCollege from "../Hooks/useCollege";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, loading] = useCollege();
  return (
    <div className="md:h-screen">
      <Helmet>
        <title>Admission | Academiclandia</title>
      </Helmet>
      <div className="pageBackground bg-no-repeat bg-cover bg-center w-full h-48 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Admission</h1>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center my-10">
        Admission Going On
      </h1>
      <div className="my-10 container mx-auto justify-items-center">
        {loading ? (
          <div className="flex items-center justify-center">
            <InfinitySpin width="200" color="#131D4E" />
          </div>
        ) : (
          <div className="flex flex-col gap-10 md:w-2/3 mx-auto p-2 md:p-0 ">
            {colleges.map((college) => (
              <div key={college._id}>
                <Link to="#">
                  <p className="flex justify-between border-t last:border-b border-[#131D4E] py-3">
                    <span className="font-semibold">
                      {college.college_name}
                    </span>
                    <span>
                      Last Date:{" "}
                      <small className="bg-red-500 p-2 text-white font-semibold">
                        {college.admission_date}
                      </small>
                    </span>
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admission;
