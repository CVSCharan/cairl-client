import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

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
    <div className="group relative overflow-hidden rounded-lg">
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
          <span className="text-xs uppercase font-medium text-[#005BA9]">{type}</span>
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
}

const TopChartItem: React.FC<TopChartItemProps> = ({ rank, title, type, isActive = false }) => {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${isActive ? 'bg-[#E5F5FC]' : 'hover:bg-gray-50'}`}>
      <div className="text-xl font-bold text-gray-400">{rank}</div>
      <div className="flex-1">
        <h4 className="font-medium text-[#0D2E37]">{title}</h4>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <div className={`rounded-full p-2 ${isActive ? 'bg-[#005BA9] text-white' : 'bg-gray-100'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </div>
  );
};

const Podcasts = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'recent'>('all');

  const topCharts = [
    { rank: 1, title: "The Art of Storytelling", type: "AI & Creativity" },
    { rank: 2, title: "Tech Talk Daily", type: "Technology" },
    { rank: 3, title: "Science Unplugged", type: "Research" },
    { rank: 4, title: "Future of Work", type: "Business & AI" },
    { rank: 5, title: "Ethics in AI", type: "Ethics & Society" },
  ];

  const podcasts = [
    {
      id: "pod1",
      title: "Everyday is Chance to Learn New Things",
      type: "AI & FUTURE",
      duration: "17:45",
      views: "5k",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    },
    {
      id: "pod2",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "22:33",
      views: "4.8k",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189053/events-img-2_nreecn.jpg",
    },
    {
      id: "pod3",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "19:22",
      views: "3.5k",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189047/events-img-3_sm4l4r.jpg",
    },
    {
      id: "pod4",
      title: "Everyday is Chance to Learn New Things",
      type: "AI & FUTURE",
      duration: "27:04",
      views: "6.2k",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189052/events-img-1_jargc1.jpg",
    },
    {
      id: "pod5",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "15:35",
      views: "2.9k",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189053/events-img-2_nreecn.jpg",
    },
    {
      id: "pod6",
      title: "Everyday is Chance to Learn New Things",
      type: "SECTIONAL REPORT",
      duration: "31:08",
      views: "7.1k",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750189047/events-img-3_sm4l4r.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Hero Content */}
            <div className="md:w-1/2">
              <div className="inline-block bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-4">
                Podcast
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D2E37] mb-4">
                Everyday is Chance to Learn New Things
              </h1>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit et amet, consectetur adipiscing elit. Viverra
                tempor nunc dolor aliquam placerat porttitor.
              </p>
            </div>
            
            {/* Right Column - Top Chart */}
            <div className="md:w-1/2 bg-white rounded-xl shadow-sm p-6">
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
      </section>

      {/* Podcasts Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full ${activeTab === 'all' ? 'bg-[#005BA9] text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              All Podcasts
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-full ${activeTab === 'featured' ? 'bg-[#005BA9] text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-4 py-2 rounded-full ${activeTab === 'recent' ? 'bg-[#005BA9] text-white' : 'bg-gray-100 text-gray-700'}`}
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
      <CTA />
      
      <Footer />
    </main>
  );
};

export default Podcasts;
