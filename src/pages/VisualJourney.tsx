import Footer from "../components/Footer";
import Header from "../components/Header";

const VisualJourney = () => {
  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 pt-28">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#005BA9] mb-4">
            Awards & Recognitions
          </h1>
          <p className="text-xl text-gray-600">
            Honouring our contributions to AI Innovation.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          {/* Excellence Awards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Repeat 3 times as per the image */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#005BA9] mb-4">
                  Excellence in Ethical AI Practices
                </h2>
                <p className="text-gray-600">
                  This award is not just a testament to CAIRL's resilience as a
                  set for modern sustainability and the impact of changing
                  individual and inclusive use globally for applied and ethical
                  AI.
                </p>
              </div>
            ))}
          </div>

          {/* Hackathon Winner Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#005BA9] mb-6">
              Hackathon Winner
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">Acepture 2022</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">TechHunt Winner</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">1st Place</span>
              </li>
            </ul>
          </div>

          {/* Current Projects Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Repeat 3 times as per the image */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#005BA9] mb-4">
                  Current
                </h2>
                <p className="text-gray-600">
                  A career guidance platform for teenagers and parents. It
                  provides up-to-date information about the future, changes,
                  strengths, and practice opportunities, as well as a qualified
                  approach to help with current choice.
                </p>
              </div>
            ))}
          </div>

          {/* Event Highlight Section */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#005BA9] mb-6">
              Event Highlight
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">Pocket Policy About Us</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">Pocket Policy About Us</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">Pocket Policy About Us</span>
              </li>
              <li className="flex items-center">
                <span className="bg-[#005BA9] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  •
                </span>
                <span className="font-medium">HelpSpell.org v3/9/20120391</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default VisualJourney;
