import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const FocusGroups = () => {
  return (
    <main className="relative min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="relative w-full">
        {/* Background Element - Now covers header to form */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-55 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750554423/Topology-1_bphtdf.png"
            alt="Background Element"
            className="absolute top-0 left-0 min-w-[400px] min-h-[400px] object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 pt-28">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h4 className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
              Focus Groups
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Driving AI Adoption Through
              <br />
              Collaboration
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At CAiRL, we bring together industry leaders and world-class
              experts to tackle real-world challenges through targeted,
              cross-sector collaboration. Our Focus Groups are the heart of our
              mission to accelerate responsible AI adoption and build a
              future-ready ecosystem.
            </p>
          </section>

          {/* Enterprise AI Adoption Section */}
          <section
            id="enterprise-ai-adoption"
            className="grid lg:grid-cols-2 gap-12 items-center mt-28"
          >
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-semibold text-[#0C2B33] mb-4">
                Enterprise AI Adoption
              </h2>
              <p className="text-gray-700 mb-6 max-w-xl leading-relaxed">
                We help organizations navigate AI transformation and strategy.
                This group connects research with real-world industry needs by:
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#005BA9] rounded-full flex-shrink-0" />
                  <span className="text-gray-800">
                    Bridging the gap between research and implementation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#005BA9] rounded-full flex-shrink-0" />
                  <span className="text-gray-800">
                    Co-creating frameworks, toolkits, and adoption roadmaps
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#005BA9] rounded-full flex-shrink-0" />
                  <span className="text-gray-800">
                    Driving domain-specific AI innovation for:
                  </span>
                </li>
              </ul>

              {/* Domain Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Lifesciences",
                  "Healthcare",
                  "Agriculture",
                  "Education",
                  "Finance",
                  "Energy",
                  "AI Infrastructure",
                ].map((domain, idx) => (
                  <span
                    key={idx}
                    className="border bg-[#F2F8FF] border-gray-400 text-gray-800 px-4 py-1 rounded-full text-sm"
                  >
                    {domain}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-6" />

              {/* CTA */}
              <p className="text-[#00AEEF] font-semibold">Join Us:</p>
              <p className="text-gray-800 font-semibold">
                Corporate leaders, researchers, and innovators are invited to
                lead or contribute to sub-projects, with outputs ranging from
                research reports to deployable AI solutions.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750554814/focus-group-img-1_ku3uqw.png"
                alt="AI adoption"
                className="rounded-xl shadow-lg w-full h-full m-w-[350px] m-h-[350px] object-cover"
              />
            </div>
          </section>
        </div>

        <div className="relative w-full">
          {/* Background Element - Now covers header to form */}
          <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750188690/Element_hvtzp4.png"
              alt="Background Element"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            {/* Capacity Building Section */}
            <section
              id="capacity-building"
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750554814/focus-group-img-2_jla6ub.png"
                  alt="Capacity Building"
                  className="rounded-xl shadow-lg w-full h-full m-w-[350px] m-h-[350px] object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Capacity Building & Knowledge Management
                </h2>
                <p className="text-gray-600 mb-8">
                  We believe education leads innovation. This group focuses on:
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Interactive Learning Environment
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Language Translation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Contents Generation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Personalized Recommendations
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Virtual Assistance & Chatting
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Unwanted</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-6" />

                {/* Deliverables Box */}
                <div className="bg-[#F2F8FF] rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Deliverables Column */}
                    <div className="flex flex-col items-center">
                      <h4 className="font-semibold text-gray-900 mb-2 text-center">
                        Deliverables Include:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1 text-center">
                        <li className="text-center">Certification programs</li>
                        <li className="text-center">
                          Open-access AI resources
                        </li>
                        <li className="text-center">Learning opportunities</li>
                      </ul>
                    </div>

                    {/* Get Involved Column */}
                    <div className="flex flex-col items-center">
                      <h4 className="font-semibold text-gray-900 mb-2 text-center">
                        Get Involved:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1 text-center">
                        <li className="text-center">Academics and trainers</li>
                        <li className="text-center">
                          Educational institutions
                        </li>
                        <li className="text-center">AI professionals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Partner With CAiRL Section */}
            <section
              id="partner"
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              {/* Left Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Partner With CAiRL
                </h2>
                <p className="text-gray-600 mb-8">We collaborate with:</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Government for policy-related AI initiatives
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Corporates & Start-ups for AI research digital
                      transformation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#005BA9] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      Research Institutes and Individuals to contribute
                      knowledge and tools
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-6" />

                {/* Percentage Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#E5F5FC] p-4 rounded-2xl flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-[#0C2B33]">100%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="bg-[#E5F5FC] p-4 rounded-2xl flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-[#0C2B33]">90%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="bg-[#E5F5FC] p-4 rounded-2xl flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-[#0C2B33]">30%</p>
                    <p className="text-sm text-gray-600">Cost Reduction</p>
                  </div>
                  <div className="bg-[#E5F5FC] p-4 rounded-2xl flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-[#0C2B33]">20%</p>
                    <p className="text-sm text-gray-600">Efficiency Gain</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750554814/focus-group-img-3_cnirid.png"
                  alt="Partner With CAiRL"
                  className="rounded-xl shadow-lg w-full h-full m-w-[350px] m-h-[350px] object-cover"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto relative z-10 mt-16 py-28 sm:px-6 lg:px-8">
          <CTA />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FocusGroups;
