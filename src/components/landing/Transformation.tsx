import React from "react";

const Transformation: React.FC = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden px-2 my-16">
      {/* Background Image with Overlay and Rounded Borders */}
      <div className="absolute inset-0 z-0 mx-auto max-w-7xl rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl" />
        <img
          src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176571/landing_img_2_a1n9no.png"
          alt="AI technology background"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Centered Content */}
      <div className="container mx-auto relative z-10 py-16 text-center max-w-4xl">
        <div className="px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Driving Responsible AI Transformation
          </h2>
          <p className="text-xl text-white mb-8 opacity-90 mx-auto max-w-3xl">
            Our research focuses on developing AI technologies that are ethical,
            transparent, and beneficial to society. We work with partners across
            industries to implement responsible AI solutions.
          </p>
          <div className="cta-container">
            <a
              href="#learn-more"
              className="inline-block bg-white text-blue-800 font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
