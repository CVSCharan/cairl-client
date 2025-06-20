import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-[#F6F6F6] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#E5F5FC] opacity-50"></div>
        <div className="absolute -right-32 -bottom-32 w-80 h-80 rounded-full bg-[#E5F5FC] opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-[#005BA9] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center justify-center text-center">
        {/* 404 Number */}
        <div className="relative mb-12">
          <span className="text-[#005BA9] text-9xl font-bold opacity-10">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-64 h-64 text-[#005BA9]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          The page you're looking for doesn't exist or has been moved. Don't
          worry - let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-white border border-[#005BA9] text-[#005BA9] rounded-lg font-medium hover:bg-[#005BA9] hover:text-white transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004A8F] transition-colors"
          >
            Return Home
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-16 p-6 bg-white rounded-xl shadow-sm max-w-2xl w-full">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Need more help?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact our support team or browse our frequently asked questions.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-2 text-[#005BA9] border border-[#005BA9] rounded-lg hover:bg-[#E5F5FC] transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="px-6 py-2 text-[#005BA9] border border-[#005BA9] rounded-lg hover:bg-[#E5F5FC] transition-colors"
            >
              Visit FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Floating AI elements */}
      <div className="hidden md:block">
        <div className="absolute left-20 bottom-1/4 w-12 h-12 rounded-full bg-[#005BA9] opacity-10"></div>
        <div className="absolute right-32 top-1/3 w-16 h-16 rounded-full bg-[#005BA9] opacity-10"></div>
        <div className="absolute left-1/3 top-1/4 w-8 h-8 rounded-full bg-[#005BA9] opacity-10"></div>
      </div>
    </main>
  );
};

export default NotFound;
