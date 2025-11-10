import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-white">
        My lates
        <span className="text-cyan-300"> blog</span>
      </h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
        className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center pt-16"
      >
        <BlogCard
          image="/images/b1.jpg"
          title="Learn how to build an amazing portfolio using Next.js"
          date="6 July 2025"
          topic="React"
        />
        <BlogCard
          image="/images/b2.jpg"
          title="Learn how to build an amazing website using Next.js"
          date="4 March 2025"
          topic="NextJs"
        />
        <BlogCard
          image="/images/b3.jpg"
          title="Learn how to build an amazing social media using Next.js"
          date="14 October 2025"
          topic="TypeScript"
        />
      </div>
    </div>
  );
};

export default Blog;
