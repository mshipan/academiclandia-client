import { InfinitySpin } from "react-loader-spinner";
import useCollege from "../../Hooks/useCollege";
import OurClassCard from "./OurClassCard";

const OurClasses = () => {
  const [colleges, loading] = useCollege();

  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Featured Colleges
        </h1>
        <p className="max-w-5xl text-center">
          Explore diverse courses with passionate instructors in our Classes
          section. Enjoy personalized learning with small class sizes,
          interactive discussions, and hands-on projects. Register easily
          through our college booking facilities. Empower yourself with a
          comprehensive skill set for success in a rapidly evolving world. Join
          us for an inspiring educational journey!
        </p>
      </div>
      <div className="container mx-auto mt-10 p-2 md:p-0">
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <InfinitySpin width="200" color="#131D4E" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
              {colleges.slice(0, 3).map((college) => (
                <OurClassCard
                  key={college._id}
                  college={college}
                ></OurClassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
