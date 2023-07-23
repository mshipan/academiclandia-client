import { Helmet } from "react-helmet-async";
import useCollege from "../Hooks/useCollege";
import { InfinitySpin } from "react-loader-spinner";
import OurClassCard from "../components/HomeComponents/OurClassCard";

const Colleges = () => {
  const [colleges, loading] = useCollege();
  return (
    <div>
      <Helmet>
        <title>Colleges | Academiclandia</title>
      </Helmet>
      <div className="pageBackground bg-no-repeat bg-cover bg-center w-full h-48 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Colleges</h1>
        </div>
      </div>
      <div className="my-20 container mx-auto justify-items-center">
        {loading ? (
          <div className="flex items-center justify-center">
            <InfinitySpin width="200" color="#131D4E" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 p-2 md:p-0">
            {colleges.map((college) => (
              <OurClassCard key={college._id} college={college}></OurClassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;
