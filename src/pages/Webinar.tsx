import Footer from "../components/Footer";
import Header from "../components/Header";

const Webinar = () => {
  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 pt-28">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#005BA9] mb-4">
            Grow Your Networks & Skills with Our Events
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Monitor Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-[#005BA9] mb-4">
                AI Monitor
              </h2>
              <div className="flex space-x-4 mb-6">
                <button className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium">
                  Upcoming Webinar
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium">
                  Past Webinar
                </button>
              </div>
              <div className="border-t border-gray-200 pt-6">
                {/* Bootcamp Cards */}
                <div className="space-y-6">
                  {/* AI & Machine Learning Bootcamp */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#005BA9] mb-2">
                      AI & Machine Learning Bootcamp
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Immersive AI And Machine Learning Program Covering Neural
                      Networks, NLP, And Computer Vision, Dashboard, 12 Weeks,
                      Prerequisite: Basic Programming Knowledge.
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-gray-500">Jan 11, 2025</span>
                      <span className="text-gray-500">
                        09:00 AM - 01:00 PM (IST)
                      </span>
                      <span className="text-gray-500">Friday</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Rs 4,500</span>
                      <button className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium">
                        Email Now
                      </button>
                    </div>
                  </div>

                  {/* AI Product Design Lab */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#005BA9] mb-2">
                      AI Product Design Lab
                    </h3>
                    <p className="text-gray-600 mb-4">
                      More Experience Design Bootcamp Focusing On AI Driven
                      Product Design, User Research, And AI Prototyping,
                      Duration 10 Weeks, Prerequisite: Design Thinking Basics.
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-gray-500">Jan 11, 2025</span>
                      <span className="text-gray-500">
                        09:00 AM - 01:00 PM (IST)
                      </span>
                      <span className="text-gray-500">Friday</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Rs 4,500</span>
                      <button className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium">
                        Email Now
                      </button>
                    </div>
                  </div>

                  {/* Data Science Bootcamp */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#005BA9] mb-2">
                      Data Science Bootcamp
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive Data Science Bootcamp Focusing On Machine
                      Learning, Data Analysis, And Visualization, and AI
                      Applications, Datasets, 16 Weeks, Prerequisite: Statistics
                      And Programming Fundamentals.
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-gray-500">Jan 11, 2025</span>
                      <span className="text-gray-500">
                        09:00 AM - 01:00 PM (IST)
                      </span>
                      <span className="text-gray-500">Friday</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Rs 4,500</span>
                      <button className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium">
                        Email Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Calendar Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#005BA9] mb-4">
                Schedule
              </h3>
              <table className="w-full">
                <thead>
                  <tr>
                    {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                      <th
                        key={day}
                        className="text-center py-2 text-gray-500 font-normal"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [30, 1, 2, 3, 4, 5, 6],
                    [7, 8, 9, 10, 11, 12, 13],
                    [14, 15, 16, 17, 18, 19, 20],
                    [21, 22, 23, 24, 25, 26, 27],
                    [28, 29, 30, 31, 1, 2, 3],
                  ].map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => (
                        <td
                          key={dayIndex}
                          className={`text-center py-2 ${
                            day === 10
                              ? "bg-blue-100 rounded-full text-[#005BA9] font-bold"
                              : ""
                          }`}
                        >
                          {day}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Selected Bootcamp */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#005BA9] mb-4">
                Selected Bootcamp
              </h3>
              <p className="text-gray-600 mb-4">Wed, Jul 10</p>

              {/* UI/UX Bootcamp */}
              <div className="border border-gray-200 rounded-xl p-4">
                <h4 className="font-bold text-[#005BA9] mb-2">
                  UI/UX Bootcamp
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Design UI/UX, Membership Designs Preparation Data
                  Settermplans.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Rs 4,500</span>
                  <button className="px-4 py-2 bg-[#005BA9] text-white rounded-lg text-sm font-medium">
                    Email Now
                  </button>
                </div>
              </div>
            </div>

            {/* Past Webinars */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-[#005BA9] mb-4">
                Watch Past Webinars On-Demand
              </h3>
              <div className="space-y-4">
                {/* AI & Healthcare */}
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-[#005BA9]">AI & Healthcare</h4>
                  <p className="text-gray-600 text-sm">
                    Transforming patient care with AI.
                  </p>
                </div>

                {/* Generative AI & Ethics */}
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-[#005BA9]">
                    Generative AI & Ethics
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Responsible AI adoption strategies.
                  </p>
                </div>

                {/* AI in FinTech */}
                <div className="pb-2">
                  <h4 className="font-bold text-[#005BA9]">AI in FinTech</h4>
                  <p className="text-gray-600 text-sm">
                    How AI is redefining financial services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Webinar;
