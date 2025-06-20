import { useEffect } from "react";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Services = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const elementId = window.location.hash.substring(1);
      // Find the element by ID
      const element = document.getElementById(elementId);

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jumping (optional)
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.hash
        );
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="relative overflow-hidden bg-[#F6F6F6]">
      <Header />

      <div className="max-w-7xl mx-auto relative z-10 pt-28 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h4 className="inline-block bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-4">
            Our Services
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Driving responsible AI transformation through education, innovation,
            and collaboration.
          </h1>
        </div>

        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750332593/services-landing-img_vubko6.jpg"
            alt="CAiRL Services"
            className="w-full h-[450px] object-cover rounded-2xl"
          />
        </div>

        {/* Services Section */}
        <section className="space-y-20 mt-24">
          {/* Capacity Building & Knowledge Empowerment */}
          <div id="knowledge-empowerment">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002D3C] mb-10 text-center">
              Capacity Building & Knowledge Empowerment
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "AI Bootcamps & Workshops",
                  desc: "Fast-paced, hands-on learning programs designed to build foundational and advanced AI skills across domains.",
                  image:
                    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=160&fit=crop&crop=center",
                },
                {
                  title: "Courses",
                  desc: "Custom-designed training sessions on cutting-edge AI topics delivered by expert practitioners and researchers.",
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=160&fit=crop&crop=center",
                },
                {
                  title: "Center of Excellence",
                  desc: "Guidance and strategic support to set up AI-focused Centers of Excellence in research institutions and enterprises.",
                  image:
                    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750333388/services-card-img-2_ixty21.jpg",
                },
                {
                  title: "AI Tech Conferences & Summits",
                  desc: "Annual flagship events that bring together AI thinkers, makers, and leaders to shape the future of responsible innovation.",
                  image:
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=160&fit=crop&crop=center",
                },
              ].map((item, idx) => (
                <ServiceCard
                  key={idx}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          {/* Innovation & Startup Support */}
          <div id="innovation">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002D3C] mb-10 text-center">
              Innovation & Startup Support
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Hackathons & Innovation Challenges",
                  desc: "Solve real-world challenges through domain-specific AI hackathons and competitions co-hosted with partners.",
                  image:
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=160&fit=crop&crop=center",
                },
                {
                  title: "Startup Incubators & Innovation Hubs",
                  desc: "Structured support for early-stage AI startups with mentorship, infrastructure, access to compute, and industry networks.",
                  image:
                    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=160&fit=crop&crop=center",
                },
                {
                  title: "Joint Research Collaborations",
                  desc: "Collaborate with CAiRL to co-develop research, whitepapers, and deployable AI solutions across sectors.",
                  image:
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=160&fit=crop&crop=center",
                },
              ].map((item, idx) => (
                <ServiceCard
                  key={idx}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          {/* Ecosystem Building & Social Impact */}
          <div id="eco-system">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002D3C] mb-10 text-center">
              Ecosystem Building & Social Impact
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "AI for Social Good & Rural Outreach",
                  desc: "Bringing AI to underserved communities by supporting initiatives in agriculture, public health, and education that create real social impact.",
                  image:
                    "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750332115/services-card-img-1_te3dtp.jpg",
                },
                {
                  title: "Liaising & Policy Engagement",
                  desc: "Connecting corporates, startups, academia, and policymakers to co-create AI frameworks, influence policy, and build sustainable ecosystems.",
                  image:
                    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=160&fit=crop&crop=center",
                },
              ].map((item, idx) => (
                <ServiceCard
                  key={idx}
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="my-28">
          <CTA />
        </div>
      </div>

      <Footer />
    </main>
  );
};

const ServiceCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
    <div className="h-40 bg-gray-200 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{desc}</p>
      <button className="bg-[#0071CE] hover:bg-[#005BA9] text-white text-sm px-4 py-2 rounded-full font-medium">
        Know more
      </button>
    </div>
  </div>
);

export default Services;
