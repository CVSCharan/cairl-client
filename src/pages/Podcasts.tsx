import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { Play } from "lucide-react";

interface PodcastCardProps {
  id: string;
  title: string;
  type: string;
  duration: string;
  imageUrl: string;
  views: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  id,
  title,
  type,
  duration,
  imageUrl,
  views,
}) => {
  return (
    <div
      id={`podcast-${id}`}
      className="group relative overflow-hidden rounded-lg"
    >
      {/* Podcast Image with Duration Overlay */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      {/* Podcast Info */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs uppercase font-medium text-[#005BA9]">
            {type}
          </span>
        </div>
        <h3 className="font-medium text-[#0D2E37] group-hover:text-[#005BA9] transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <span>{views} views</span>
        </div>
      </div>

      {/* Play Button Overlay (appears on hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-[#005BA9] rounded-full p-3 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

interface TopChartItemProps {
  rank: number;
  title: string;
  type: string;
  isActive?: boolean;
  thumbnail?: string;
}

const TopChartItem: React.FC<TopChartItemProps> = ({
  rank,
  title,
  type,
  isActive = false,
  thumbnail,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
        isActive ? "bg-[#E5F5FC]" : "hover:bg-gray-50"
      }`}
    >
      {/* Left: Rank + Thumbnail + Text */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="text-base font-semibold text-gray-500 w-4">{rank}.</div>
        <div className="w-10 h-10 bg-gray-300 rounded-md shrink-0 overflow-hidden">
          {/* Optional thumbnail */}
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-gray-900 truncate">
            {title}
          </h4>
          <p className="text-xs text-[#005BA9] font-normal truncate">{type}</p>
        </div>
      </div>

      {/* Right: Play Button */}
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#005BA9] text-white hover:opacity-90 transition">
        <Play className="w-4 h-4 fill-current" />
      </button>
    </div>
  );
};

const Podcasts = () => {
  const [activeTab, setActiveTab] = useState<"all" | "featured" | "recent">(
    "all"
  );

  const topCharts = [
    { rank: 1, title: "The Art of Storytelling", type: "MAY 8 & Literature" },
    { rank: 2, title: "Tech Talk Daily", type: "IT technology" },
    { rank: 3, title: "Finance Unplugged", type: "Business & Finance" },
  ];

  const podcasts = [
    {
      id: "pod1",
      title: "Everyday is Chance to Learn New Things",
      type: "AI & FUTURE",
      duration: "17:45",
      views: "5k",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    },
    {
      id: "pod2",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "22:33",
      views: "4.8k",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189053/events-img-2_nreecn.jpg",
    },
    {
      id: "pod3",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "19:22",
      views: "3.5k",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189047/events-img-3_sm4l4r.jpg",
    },
    {
      id: "pod4",
      title: "Everyday is Chance to Learn New Things",
      type: "AI & FUTURE",
      duration: "27:04",
      views: "6.2k",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    },
    {
      id: "pod5",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "15:35",
      views: "2.9k",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189053/events-img-2_nreecn.jpg",
    },
    {
      id: "pod6",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "31:08",
      views: "7.1k",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189047/events-img-3_sm4l4r.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-block bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-4">
                Podcasts
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D2E37] mb-4 max-w-xl">
                Everyday is Chance to Learn New Things
              </h1>
              <p className="text-gray-600 mb-6 max-w-lg">
                Lorem ipsum dolor sit et amet, consectetur adipiscing elit.
                Viverra tempor nunc dolor aliquam placerat porttitor.
              </p>
            </div>

            {/* Right Column - Top Chart */}
            <div className="lg:w-1/2 w-full bg-white rounded-xl shadow-sm p-6 flex justify-center">
              <div className="w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Top Chart</h2>
                <div className="space-y-2">
                  {topCharts.map((item, index) => (
                    <TopChartItem
                      key={index}
                      rank={item.rank}
                      title={item.title}
                      type={item.type}
                      isActive={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "all"
                  ? "bg-[#005BA9] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              All Podcasts
            </button>
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "featured"
                  ? "bg-[#005BA9] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab("recent")}
              className={`px-4 py-2 rounded-full ${
                activeTab === "recent"
                  ? "bg-[#005BA9] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Recently Added
            </button>
          </div>

          {/* Podcasts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id}
                id={podcast.id}
                title={podcast.title}
                type={podcast.type}
                duration={podcast.duration}
                imageUrl={podcast.imageUrl}
                views={podcast.views}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 pb-28">
        <CTA />
      </div>

      <Footer />
    </main>
  );
};

export default Podcasts;
