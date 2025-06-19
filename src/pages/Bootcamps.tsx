import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bootcamps = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 6, 10)); // July 10, 2025
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6, 1)); // July 2025

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    const totalDays = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    // Previous month days
    const prevMonthDays = daysInMonth(month - 1, year);
    const prevMonthDaysToShow = firstDay;

    // Next month days
    const totalCells = Math.ceil((totalDays + firstDay) / 7) * 7;
    const nextMonthDaysToShow = totalCells - (totalDays + firstDay);

    const days = [];

    // Previous month
    for (
      let i = prevMonthDays - prevMonthDaysToShow + 1;
      i <= prevMonthDays;
      i++
    ) {
      days.push(
        <td key={`prev-${i}`} className="py-2 text-gray-400">
          {i}
        </td>
      );
    }

    // Current month
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      const isSelected =
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      days.push(
        <td
          key={`curr-${i}`}
          className={`py-2 ${
            isSelected
              ? "text-white bg-[#005BA9] rounded-full mx-auto w-8 h-8 flex items-center justify-center"
              : ""
          }`}
          onClick={() => setSelectedDate(date)}
        >
          {i}
        </td>
      );
    }

    // Next month
    for (let i = 1; i <= nextMonthDaysToShow; i++) {
      days.push(
        <td key={`next-${i}`} className="py-2 text-gray-400">
          {i}
        </td>
      );
    }

    // Split into weeks
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(<tr key={`week-${i}`}>{days.slice(i, i + 7)}</tr>);
    }

    return weeks;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const bootcamps = [
    {
      title: "AI & Machine Learning Bootcamp",
      description:
        "Immersive AI And Machine Learning Program Covering Neural Networks, NLP, And Computer Vision. Duration: 12 Weeks. Prerequisites: Basic Programming Knowledge.",
      date: "June 11, 2025",
      time: "09:30 AM - 10:30 AM (IST)",
      location: "T-Hub",
      price: "Rs 4,500",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750264297/Bootcamp-img-1_t1icqv.png",
    },
    {
      title: "AI Product Design Lab",
      description:
        "User Experience Design Bootcamp Focusing On AI-Driven Product Design, User Research, And AI Prototyping. Duration: 10 Weeks. Prerequisites: Design Thinking Basics.",
      date: "June 11, 2025",
      time: "09:30 AM - 10:30 AM (IST)",
      location: "T-Hub",
      price: "Rs 4,500",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750264297/Bootcamp-img-3_zp4g0e.png",
    },
    {
      title: "Data Science Bootcamp",
      description:
        "Comprehensive Data Science Bootcamp Focusing On Machine Learning, Data Analysis, And Visualization With AI Applications. Duration: 16 Weeks. Prerequisites: Statistics And Programming Fundamentals.",
      date: "June 11, 2025",
      time: "09:30 AM - 10:30 AM (IST)",
      location: "T-Hub",
      price: "Rs 4,500",
      image:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750264297/Bootcamp-img-2_avjgse.png",
    },
  ];

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 pt-28">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h4 className="inline-block bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-4">
            Bootcamps
          </h4>
          <h1 className="text-4xl font-bold text-[#0D2E37] mb-4">
            AI Bootcamps & Workshops
          </h1>
          <div className="flex justify-center gap-4 mt-16 mb-4">
            <button className="px-4 py-2 bg-[#005BA9] text-white rounded-full font-medium">
              All Bootcamps
            </button>
            <button className="px-4 py-2 bg-white text-[#005BA9] border border-[#005BA9] rounded-full font-medium">
              Ongoing Bootcamps
            </button>
            <button className="px-4 py-2 bg-white text-[#005BA9] border border-[#005BA9] rounded-full font-medium">
              Upcoming Bootcamps
            </button>
            <button className="px-4 py-2 bg-white text-[#005BA9] border border-[#005BA9] rounded-full font-medium">
              Past Bootcamps
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left Column - Bootcamp Listings */}
          <div className="lg:w-2/3 space-y-6">
            {bootcamps.map((bootcamp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 relative">
                  <img
                    src={bootcamp.image}
                    alt={bootcamp.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h2 className="text-xl font-bold text-[#005BA9] mb-3">
                    {bootcamp.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {bootcamp.description}
                  </p>

                  <div className="space-y-2 mb-4 text-sm text-gray-700">
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-[#005BA9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{bootcamp.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-[#005BA9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{bootcamp.time}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-[#005BA9]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{bootcamp.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{bootcamp.price}</span>
                    <a
                      href="#"
                      className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Calendar */}
          <div className="lg:w-1/3 sticky top-8">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#005BA9]">Schedule</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth() - 1
                        )
                      )
                    }
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="font-medium">
                    {monthNames[currentMonth.getMonth()]}{" "}
                    {currentMonth.getFullYear()}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth() + 1
                        )
                      )
                    }
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <table className="w-full mb-6">
                <thead>
                  <tr className="text-gray-600">
                    {dayNames.map((day) => (
                      <th key={day} className="py-2 text-center">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-center">{renderCalendar()}</tbody>
              </table>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Selected Bootcamp</h3>
                <p className="text-[#005BA9] font-medium">
                  {formatSelectedDate(selectedDate)}
                </p>
              </div>
            </div>

            {/* Selected Bootcamp Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Selected Bootcamp</h3>
              <p className="text-[#005BA9] font-medium mb-4">
                {formatSelectedDate(selectedDate)}
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h4 className="text-lg font-semibold text-[#005BA9] mb-2">
                  UI/UX Bootcamp
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Desain UI/UX, Membekali Dengan Pengetahuan Dan Keteramplian.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Rs 4,500</span>
                  <a
                    href="#"
                    className="px-4 py-2 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
                  >
                    Enroll Now
                  </a>
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

export default Bootcamps;
