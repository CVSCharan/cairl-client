import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorImage: string;
  imageUrl: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  category,
//   date,
//   author,
//   authorImage,
  imageUrl,
  featured = false,
}) => {
  return (
    <div
      id={`blog-${id}`}
      className={`group relative overflow-hidden rounded-lg ${
        featured ? "col-span-full" : ""
      }`}
    >
      {/* Blog Image */}
      <div
        className={`relative overflow-hidden rounded-lg ${
          featured ? "aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#005BA9] text-white text-xs font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Blog Info */}
      {/* <div
        className={`${
          featured
            ? "absolute bottom-0 left-0 right-0 bg-white p-6 m-4 rounded-lg"
            : "mt-4"
        }`}
      >
        <h3
          className={`font-bold text-[#0D2E37] group-hover:text-[#005BA9] transition-colors ${
            featured ? "text-xl mb-3" : "text-lg mb-2"
          }`}
        >
          {title}
        </h3>

        <div className="flex items-center gap-3">
          <img
            src={authorImage}
            alt={author}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-gray-600">{author}</span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </div> */}
    </div>
  );
};

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const featuredBlog = {
    id: "blog1",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    date: "August 23, 2023",
    author: "James Peterson",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750830314/blogs-main-img_irp2bd.png",
    featured: true,
  };

  const blogs = [
    {
      id: "blog2",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "James Peterson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      imageUrl: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506",
    },
    {
      id: "blog3",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "Sarah Wilson",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624",
    },
    {
      id: "blog4",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "Michael Brown",
      authorImage: "https://randomuser.me/api/portraits/men/46.jpg",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    {
      id: "blog5",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "Emily Davis",
      authorImage: "https://randomuser.me/api/portraits/women/67.jpg",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750830264/blogs-img-2_vp7vn0.png",
    },
    {
      id: "blog6",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "David Miller",
      authorImage: "https://randomuser.me/api/portraits/men/75.jpg",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750830275/blogs-imgs-1_buosgc.png",
    },
    {
      id: "blog7",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "Lisa Taylor",
      authorImage: "https://randomuser.me/api/portraits/women/63.jpg",
      imageUrl: "https://images.unsplash.com/photo-1581092787765-e31bd9665b6f",
    },
    {
      id: "blog8",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "Robert Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    },
    {
      id: "blog9",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      date: "August 23, 2023",
      author: "Jennifer White",
      authorImage: "https://randomuser.me/api/portraits/women/29.jpg",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "technology", name: "Technology" },
    { id: "ai", name: "AI" },
    { id: "research", name: "Research" },
    { id: "innovation", name: "Innovation" },
  ];

  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />

      {/* Featured Blog Section */}
      <section className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <BlogCard {...featuredBlog} />
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.id
                    ? "bg-[#005BA9] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-white text-[#005BA9] border border-[#005BA9] px-6 py-2 rounded-full hover:bg-[#005BA9] hover:text-white transition-colors">
              Load More
            </button>
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

export default Blogs;
