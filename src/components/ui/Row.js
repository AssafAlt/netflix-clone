import React, { useRef } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, movies }) => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollLeft += 500;
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />

        <div
          ref={sliderRef}
          className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default React.memo(Row);
