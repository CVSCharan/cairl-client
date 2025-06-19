

import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const ResearchAndInnovation = () => {
  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="relative bg-transparent overflow-hidden my-8">
            {/* Hero Background with Overlay */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0 rounded-[20px]" />
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176578/research_hero_bg_hvbbeq.png"
                alt="Research and Innovation"
                className="w-full h-full object-cover min-h-[500px] rounded-[20px]"
              />

              {/* Main Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
                    Research & <span className="text-[#85D1F1]">Innovation</span>
                  </h1>
                  <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
                    Pioneering AI research and innovation to address real-world challenges
                    and create positive societal impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Research Areas Section */}
          <section className="section py-16">
            <div className="text-center mb-12">
              <h4 className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full inline-block mb-4">
                Our Research Focus
              </h4>
              <h2 className="text-3xl font-bold mb-6">Key Research Areas</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our research spans multiple domains of artificial intelligence, focusing on
                developing innovative solutions with real-world applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Research Area 1 */}
              <div className="card hover:shadow-xl transition-all">
                <div className="bg-[#E5F5FC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#005BA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Developing advanced NLP models for language understanding, generation, and
                  translation with applications in healthcare, education, and customer service.
                </p>
              </div>

              {/* Research Area 2 */}
              <div className="card hover:shadow-xl transition-all">
                <div className="bg-[#E5F5FC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#005BA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
                <p className="text-gray-600">
                  Creating innovative computer vision algorithms for object detection, image
                  recognition, and scene understanding with applications in autonomous
                  vehicles, healthcare diagnostics, and agriculture.
                </p>
              </div>

              {/* Research Area 3 */}
              <div className="card hover:shadow-xl transition-all">
                <div className="bg-[#E5F5FC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#005BA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Reinforcement Learning</h3>
                <p className="text-gray-600">
                  Advancing reinforcement learning techniques for decision-making systems,
                  robotics control, and optimization problems in manufacturing, logistics,
                  and resource management.
                </p>
              </div>

              {/* Research Area 4 */}
              <div className="card hover:shadow-xl transition-all">
                <div className="bg-[#E5F5FC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#005BA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Multimodal AI</h3>
                <p className="text-gray-600">
                  Developing systems that can process and understand multiple types of data
                  (text, images, audio) simultaneously for more comprehensive AI solutions
                  in education, entertainment, and accessibility.
                </p>
              </div>

              {/* Research Area 5 */}
              <div className="card hover:shadow-xl transition-all">
                <div className="bg-[#E5F5FC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#005BA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ethical AI & Governance</h3>
                <p className="text-gray-600">
                  Researching frameworks for responsible AI development, fairness in
                  machine learning, privacy-preserving techniques, and policy recommendations
                  for AI governance.
                </p>
              </div>

              {/* Research Area 6 */}
              <div className="card hover:shadow-xl transition-all">
                <div className="bg-[#E5F5FC] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#005BA9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI for Healthcare</h3>
                <p className="text-gray-600">
                  Creating AI solutions for medical diagnosis, treatment planning, drug
                  discovery, and healthcare management to improve patient outcomes and
                  healthcare efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Current Projects Section */}
          <section className="section py-16 bg-white rounded-xl my-8">
            <div className="text-center mb-12">
              <h4 className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full inline-block mb-4">
                Ongoing Research
              </h4>
              <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our current research initiatives that are pushing the boundaries of AI
                technology and creating positive impact.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              {/* Project 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="md:w-1/3">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176580/project_1_img_hvbbeq.png"
                    alt="AI for Agriculture"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">AI for Sustainable Agriculture</h3>
                  <p className="text-gray-600 mb-4">
                    Developing AI-powered solutions to optimize crop yields, reduce resource usage,
                    and enhance sustainable farming practices. Our systems use computer vision and
                    machine learning to monitor crop health, predict disease outbreaks, and provide
                    actionable insights to farmers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Computer Vision
                    </span>
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      IoT Integration
                    </span>
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Predictive Analytics
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="md:w-1/3">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176581/project_2_img_hvbbeq.png"
                    alt="Healthcare AI"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Early Disease Detection System</h3>
                  <p className="text-gray-600 mb-4">
                    Creating an AI-powered diagnostic tool that can detect early signs of chronic
                    diseases from medical imaging and patient data. This project aims to improve
                    early intervention, reduce healthcare costs, and save lives through more
                    accurate and timely diagnosis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Medical Imaging
                    </span>
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Deep Learning
                    </span>
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Healthcare Analytics
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="md:w-1/3">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176582/project_3_img_hvbbeq.png"
                    alt="Natural Language Education"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Personalized Education Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Building an adaptive learning system that personalizes educational content
                    based on individual learning styles, pace, and interests. This AI-driven
                    platform aims to make quality education more accessible and effective for
                    learners of all backgrounds.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Natural Language Processing
                    </span>
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Adaptive Learning
                    </span>
                    <span className="bg-[#E5F5FC] text-[#005BA9] px-3 py-1 rounded-full text-sm">
                      Educational Technology
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section className="section py-16">
            <div className="text-center mb-12">
              <h4 className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full inline-block mb-4">
                Research Output
              </h4>
              <h2 className="text-3xl font-bold mb-6">Recent Publications</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our team regularly publishes research findings in top-tier academic journals and
                conferences, contributing to the global AI knowledge base.
              </p>
            </div>

            <div className="space-y-6 mt-12">
              {/* Publication 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">
                  "Advancing Fairness in Machine Learning: A New Framework for Bias Detection and Mitigation"
                </h3>
                <p className="text-gray-500 mb-3">Published in Journal of Artificial Intelligence Research, 2023</p>
                <p className="text-gray-600 mb-4">
                  This paper introduces a novel framework for identifying and addressing bias in
                  machine learning models, with particular focus on applications in hiring,
                  lending, and criminal justice systems.
                </p>
                <a href="#" className="text-[#005BA9] hover:underline">Read the paper →</a>
              </div>

              {/* Publication 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">
                  "Multi-modal Learning for Medical Diagnosis: Integrating Imaging, Clinical Notes, and Lab Results"
                </h3>
                <p className="text-gray-500 mb-3">Presented at International Conference on Medical Image Computing, 2023</p>
                <p className="text-gray-600 mb-4">
                  This research demonstrates how combining multiple data modalities can significantly
                  improve diagnostic accuracy for complex medical conditions, outperforming
                  single-modality approaches by 23%.
                </p>
                <a href="#" className="text-[#005BA9] hover:underline">Read the paper →</a>
              </div>

              {/* Publication 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2">
                  "Explainable AI for Critical Infrastructure: Balancing Performance and Interpretability"
                </h3>
                <p className="text-gray-500 mb-3">Published in IEEE Transactions on Reliable Computing, 2022</p>
                <p className="text-gray-600 mb-4">
                  This paper addresses the crucial balance between model performance and
                  interpretability in AI systems deployed for critical infrastructure, proposing
                  a hybrid approach that maintains high accuracy while enabling human oversight.
                </p>
                <a href="#" className="text-[#005BA9] hover:underline">Read the paper →</a>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="#"
                className="bg-[#005BA9] text-white hover:text-white px-6 py-3 rounded-full inline-block"
              >
                View All Publications
              </a>
            </div>
          </section>

          {/* Research Partnerships */}
          <section className="section py-16 bg-white rounded-xl my-8">
            <div className="text-center mb-12">
              <h4 className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full inline-block mb-4">
                Collaborations
              </h4>
              <h2 className="text-3xl font-bold mb-6">Research Partnerships</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We collaborate with leading academic institutions, industry partners, and government
                agencies to advance AI research and applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {/* Partner logos - replace with actual partner logos */}
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_4_nfar9d.png"
                  alt="Partner 1"
                  className="max-h-16"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176557/scroll_img_3_ttadxy.png"
                  alt="Partner 2"
                  className="max-h-16"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/scroll_img_2_rc4chz.png"
                  alt="Partner 3"
                  className="max-h-16"
                />
              </div>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_1_opp3ip.png"
                  alt="Partner 4"
                  className="max-h-16"
                />
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <CTA />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ResearchAndInnovation;
