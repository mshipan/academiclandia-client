import { InfinitySpin } from "react-loader-spinner";
import useResearchPaper from "../../Hooks/useResearchPaper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import ResearchPaperCard from "./ResearchPaperCard";

const ResearchPaper = () => {
  const [researchPapers, loading] = useResearchPaper();
  const swiperBreakpoints = {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="mb-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Our Student&apos;s Research Paper
        </h1>
        <p className="max-w-5xl text-center">
          Discover exceptional student research papers at our college booking
          facilities website. Our student&apos;s research showcases
          groundbreaking work across diverse disciplines, from scientific
          breakthroughs to insightful social analyses. Be inspired by their
          intellectual curiosity and contributions to the academic community.
        </p>
      </div>
      <div className="container mx-auto mt-10 p-2 md:p-0">
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <InfinitySpin width="200" color="#131D4E" />
            </div>
          ) : (
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              breakpoints={swiperBreakpoints}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {researchPapers.map((researchPaper) => (
                <SwiperSlide key={researchPaper._id}>
                  <ResearchPaperCard
                    researchPaper={researchPaper}
                  ></ResearchPaperCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
