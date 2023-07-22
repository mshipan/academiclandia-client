import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#131D4E]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-5">
        <p className="text-white flex flex-col md:flex-row items-center">
          <small className="mr-1">Copyright 2023 Academiclandia </small> |
          <small className="ml-1"> Design By Shipan Mallik</small>
        </p>
        <div>
          <Link to="/">
            <h1 className="text-white">Academiclandia</h1>
          </Link>
        </div>
        <div>
          <p>
            <span className="text-[#ff4838]">
              <Link to="#" className="text-white">
                Terms & Condition
              </Link>{" "}
              |{" "}
              <Link to="#" className="text-white">
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
