import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  date: string;
  topic: string;
};

const BlogCard = ({ image, title, date, topic }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="blog"
        width={500}
        height={500}
        className="object-cover"
      />
      <p className="text-white pt-2">{date}</p>
      <h1 className="mt-5 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300">
        {title}
      </h1>
      <button className="px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full mt-5">
        {topic}
      </button>
    </div>
  );
};

export default BlogCard;
