import React from "react";

const Hero: React.FC = () => {
  const featureCards = [
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/landing_banners_icon_1_qzbtcb.png",
      alt: "Innovation icon",
      text: "Fostering innovation through collaborative research initiatives.",
    },
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176560/landing_banners_icon_2_kciapm.png",
      alt: "Education icon",
      text: "Empowering communities with AI education and training.",
    },
    {
      icon: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176561/landing_banners_icon_3_ymi0p8.png",
      alt: "Ethics icon",
      text: "Promoting ethical AI practices and advocacy.",
    },
  ];

  const partnerLogos = [
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_4_nfar9d.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176557/scroll_img_3_ttadxy.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/scroll_img_2_rc4chz.png",
    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_1_opp3ip.png",
  ];

  return (
    <section className="relative bg-transparent overflow-hidden">
      {/* Hero Background with Overlay */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-b-[20px]" />
        <img
          src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176578/landing_img_1_hvbbeq.png"
          alt="City skyline at night"
          className="w-full h-full object-cover min-h-[700px] rounded-b-[20px]"
        />

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
              Advancing <span className="text-[#85D1F1]">AI</span> for
              <br />
              Social Good
              <br />
              Together
            </h1>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              Collaborative research, innovation, and education in artificial
              intelligence.
            </p>
          </div>
        </div>

        {/* Feature Cards - Reduced Size */}
        <div className="absolute -bottom-10 -right-3 z-30 flex flex-col space-y-3 w-72">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center border border-white/20"
            >
              <div className="bg-gray-100 rounded-full p-2 mr-3 flex-shrink-0">
                <img src={card.icon} alt={card.alt} className="w-5 h-5" />
              </div>
              <p className="text-[#444444] text-xs font-medium leading-snug">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Logos Marquee */}
      <div className="bg-white bg-opacity-5 py-8 overflow-hidden mt-10">
        <div className="flex animate-scroll space-x-12 whitespace-nowrap">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map(
            (logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner logo ${(index % partnerLogos.length) + 1}`}
                className="h-12"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
