import Footer from "../components/Footer";
import Header from "../components/Header";

const Bootcamps = () => {
  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 pt-28">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#005BA9] mb-4">
            AI Bootcamps & Workshops
          </h1>
        </div>

        {/* Bootcamp Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Machine Learning Bootcamp */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#005BA9] mb-4">
                AI Machine Learning Bootcamp
              </h2>
              <p className="text-gray-600 mb-6">
                Innovation: AI and Machine Learning Bootcamp. Exceeding Natural
                Resources, LLC, Asia Common Vision, Customer to Vehicle,
                Precipitation, Table Programming Knowledge.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                  <span>Jan 11, 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-[#005BA9] bg-[#005BA9] rounded mr-3 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>10:30 AM - 01:30 PM (EST)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                  <span>Friday</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="font-bold text-lg">Rs 4,500</span>
                <a
                  href="#"
                  className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>

          {/* AI Product Design Lab */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#005BA9] mb-4">
                AI Product Design Lab
              </h2>
              <p className="text-gray-600 mb-6">
                User Experience Design Bootcamp Focusing On-Aid-Server Product
                Design, User Service Provider, AI Prototyping, Duration, 10
                Weeks, Precipitation, Design Thinking Logo.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                  <span>Jan 11, 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-[#005BA9] bg-[#005BA9] rounded mr-3 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>10:30 AM - 01:30 PM (EST)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                  <span>Friday</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="font-bold text-lg">Rs 4,500</span>
                <a
                  href="#"
                  className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>

          {/* Data Science Bootcamp */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#005BA9] mb-4">
                Data Science Bootcamp
              </h2>
              <p className="text-gray-600 mb-6">
                Correspondence to the Science-Mathematics-Focusing-On-Machine
                Training Data Analysis. Any Presentation for AI Applications,
                Customer to Vehicle, Precipitation, Solution, And Programming
                Fundamentals.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-[#005BA9] bg-[#005BA9] rounded mr-3 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>Jan 11, 2025</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-[#005BA9] bg-[#005BA9] rounded mr-3 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <span>10:30 AM - 01:30 PM (EST)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
                  <span>Friday</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <span className="font-bold text-lg">Rs 4,500</span>
                <a
                  href="#"
                  className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#005BA9] mb-6">
            Watch Past Events On-Demand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
              <span>Chat Event</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
              <span>Chat Event</span>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* AI & Healthcare */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#005BA9] mb-4">
              AI & Healthcare
            </h3>
            <p className="text-gray-600 mb-4">
              Transforming patient care with AI.
            </p>
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
              <span>Generative AI & Ethics</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 border-2 border-gray-300 rounded mr-3"></div>
              <span>Responsible AI selection concepts</span>
            </div>
          </div>

          {/* AI In FinTech */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#005BA9] mb-4">
              AI In FinTech
            </h3>
            <p className="text-gray-600">
              How AI is mobilizing financial services.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#005BA9] text-white rounded-xl shadow-md p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to make an impact with CAIRL?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Explore how you can get involved as a student, executive, partner,
            or operator.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white text-[#005BA9] rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Advance on Network
            </button>
            <button className="px-6 py-3 bg-white text-[#005BA9] rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Downloads of Response
            </button>
            <button className="px-6 py-3 bg-white text-[#005BA9] rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Close at Performance
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-[#005BA9] mb-2">CAIRL</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Select the true expressions of tokens as shown in any details in it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005BA9]"
            />
            <button className="px-6 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Bootcamps;
