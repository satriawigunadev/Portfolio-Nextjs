"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-white">
        Kinds words from statisfied <br />
        <span className="text-cyan-300">client</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ClientReviewCard
            image="/images/c1.jpg"
            name="Adam Smith"
            role="CEO Adam Smith Technology"
          />
          <ClientReviewCard
            image="/images/c2.jpg"
            name="Jhon Doe"
            role="UI UX Designer"
          />
          <ClientReviewCard
            image="/images/c3.jpg"
            name="Jesica Anna"
            role="CEO Gojek Indonesi"
          />
          <ClientReviewCard
            image="/images/c4.jpg"
            name="Antonio Conte"
            role="Tech Cyber Security"
          />
          <ClientReviewCard
            image="/images/c5.jpg"
            name="Lukas Podolski"
            role="Editor Profesional"
          />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default ClientReview;
