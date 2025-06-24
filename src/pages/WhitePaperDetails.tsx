import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WhitePaperDetails = () => {
  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-transparent flex flex-col justify-center items-center text-white py-20 mt-16">
        <h4 className="inline-block bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-8">
          White Papers
        </h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-[#0D2E37] font-bold mb-8">
            Toward Universally Ethical AI
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            A manifesto about our transition from a software world to an Ethical
            AI one, and the important considerations to keep in mind along the
            way
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        {/* Article Content */}
        <div className="lg:w-2/3">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#0D2E37] mb-6">
              Introduction
            </h2>
            <p className="text-gray-700 mb-8">
              As we approach an era where artificial intelligence governed by
              ethical AI principles will direct international commerce, the
              intertwining of human and artificial intelligence is imminent. We
              stand at a pivotal juncture of immense potential and peril. This
              document aspires to guide us toward harnessing AI's promise, while
              ensuring it remains bound within ethical parameters.
            </p>

            <h2 className="text-2xl font-bold text-[#0D2E37] mb-6">
              The Promise of Ethical AI
            </h2>

            <h3 className="text-xl font-semibold text-[#005BA9] mb-4">
              1. AI in International Commerce:
            </h3>
            <p className="text-gray-700 mb-6">
              Embracing a future where AI governs international commerce can
              drive sustainable and equitable growth, ensuring ethical practices
              remain at the forefront of global business.
            </p>

            <h3 className="text-xl font-semibold text-[#005BA9] mb-4">
              2. AI in Law and Medicine:
            </h3>
            <p className="text-gray-700 mb-6">
              Ethical AI can redefine law and medicine, offering unbiased and
              comprehensive assistance, ensuring fairness and quality.
            </p>

            <h3 className="text-xl font-semibold text-[#005BA9] mb-4">
              3. AI in Education:
            </h3>
            <p className="text-gray-700 mb-6">
              Ethical AI has the potential to reshape classrooms, offering
              personalized learning experiences that can unlock the full
              potential of every student.
            </p>

            <h3 className="text-xl font-semibold text-[#005BA9] mb-4">
              4. AI in Food Supply:
            </h3>
            <p className="text-gray-700 mb-6">
              With the integration of AI in the production and distribution of
              our food supply, it becomes a vital tool to ensure global food
              security and sustainability.
            </p>

            <h3 className="text-xl font-semibold text-[#005BA9] mb-4">
              5. AI in Global Challenges:
            </h3>
            <p className="text-gray-700 mb-6">
              From preventing future pandemics to devising strategies to control
              climate change, ethical AI stands as our ally in addressing global
              crises.
            </p>

            <h2 className="text-2xl font-bold text-[#0D2E37] mb-6">
              Conclusion:
            </h2>
            <p className="text-gray-700 mb-6">
              Travelling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and clicks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </p>

            <h3 className="text-xl font-semibold text-[#005BA9] mb-4">
              Pack Lightly and Smartly
            </h3>
            <p className="text-gray-700 mb-6">
              Embarking on a journey toward universally ethical AI is both
              challenging and vital. As AI becomes more integrated into our
              daily lives, understanding its implications, as highlighted in
              MIT's Technology Review, becomes critical. Moreover, collaborative
              efforts, such as those proposed by the Partnership on AI,
              emphasize the importance of writing organizations to address AI's
              global challenges. Let this manifesto serve as both a call to
              action and a guiding star, ensuring AI benefits all of humanity
              now and for generations to follow.
            </p>
          </div>
        </div>

        {/* Download Form */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
            <h3 className="text-2xl font-bold text-[#005BA9] mb-6 text-center">
              Download White Paper
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005BA9]"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005BA9]"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005BA9]"
                  placeholder="+370 Phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005BA9]"
                  placeholder="New York, United States"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 pb-28">
        <CTA />
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#F0F7FF] py-24 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#005BA9] mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter or follow us online to stay ahead in AI.
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

export default WhitePaperDetails;
