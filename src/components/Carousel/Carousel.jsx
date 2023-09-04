import React, { useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { NextIcon, PrevIcon } from "../../assets";
import { projects } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./Carousel.scss";
const Carousel = () => {
  const swiperRef = useRef();
  return (
    <div className="carousel ">
      <div className="btn-wrapper ">
        <PrevIcon
          className="arrow-btn"
          onClick={() => swiperRef.current.slidePrev()}
        />
      </div>

      <div className="carousel-wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="slider"
        >
          {projects.map((project) => {
            const { title, subtitle, desc_full, gitHub, demo, image } = project;
            return (
              <SwiperSlide className="" key={title}>
                <ProjectCard
                  title={title}
                  subtitle={subtitle}
                  image={image}
                  gitHub={gitHub}
                  demo={demo}
                  desc_full={desc_full}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="btn-wrapper ">
        <NextIcon
          className="arrow-btn"
          onClick={() => swiperRef.current.slideNext()}
        />
      </div>
    </div>
  );
};

export default Carousel;
