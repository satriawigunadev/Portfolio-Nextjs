import React from "react";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* text contact */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-300">
            Schedule a call with me to see if i can help
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            quam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
