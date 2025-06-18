import React from "react";

const CTA: React.FC = () => {
  return (
    <section
      className="section cta py-20 px-4 relative overflow-hidden rounded-xl my-8"
      style={{
        background: `
          linear-gradient(95.35deg, #000000 0.77%, #051E1C 50.41%, #071A37 99.86%),
          url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/swatch_gtmpsh.png')
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to make an impact with CAiRL?
          </h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore how you can get involved as a student, researcher, partner,
            or
            <br />
            sponsor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#become-a-member"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
            >
              Become a Member
            </a>
            <a
              href="#sponsor-program"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
            >
              Sponsor a Program
            </a>
            <a
              href="#start-partnership"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
            >
              Start a Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
