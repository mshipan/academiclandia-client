import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import useGallery from "../../Hooks/useGallery";
import { InfinitySpin } from "react-loader-spinner";

const Gallery = () => {
  const [galleries, loading] = useGallery();

  return (
    <div className="mb-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Our College Graduates
        </h1>
        <p className="max-w-5xl text-center">
          Welcome to our galleries section! Immerse yourself in the vibrant
          campus life through a captivating collection of images and videos.
          Explore state-of-the-art facilities, bustling student events, and
          inspiring academic spaces. Get a glimpse of the exciting experiences
          awaiting you at our college. Discover your future here!
        </p>
      </div>
      <div className="container mx-auto mt-10">
        {loading ? (
          <div className="flex items-center justify-center">
            <InfinitySpin width="200" color="#131D4E" />
          </div>
        ) : (
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center p-2 md:p-0">
              {galleries[0].gallery_images.map((gallery, index) => (
                <img key={index} alt="img1" src={gallery} />
              ))}
            </div>
          </LightGallery>
        )}
      </div>
    </div>
  );
};

export default Gallery;
