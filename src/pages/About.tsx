import Header from "../components/Header";
import Footer from "../components/Footer";

function TeamSection({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; image: string }[];
}) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content with centered alignment */}
            <div className="p-6 flex-grow flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-[#005BA9] text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const About = () => {
  return (
    <main className="relative overflow-hidden bg-[#F6F6F6]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 pt-28">
        {/* About Header */}
        <div className="text-center flex flex-col items-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
            About Us
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 w-[700px]">
            India’s Collaborative AI Ecosystem for Social Good, Research &
            Innovation
          </h1>
        </div>
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750244957/about_img_1_b5biqp.png"
            alt="About CAiRL"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
        {/* Our Journey Section */}
        <div className="text-center flex flex-col items-center my-12 mt-24">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
            Our Journery
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 w-[700px]">
            Bridging Innovation and Impact
          </h1>
          <p className="about-text text-justify w-full">
            The Collaborative AI Research Labs Foundation (CAiRL) was founded
            with a clear and focused mission: to harness the transformative
            power of artificial intelligence (AI) to drive meaningful change
            across industries and communities. Established in Hyderabad, India,
            CAiRL serves as a hub for collaboration, innovation, and ethical
            development in the AI space, uniting key stakeholders from academia,
            industry, and government to address some of the world’s most
            pressing challenges.
          </p>
          <p className="about-text text-justify w-full">
            At CAiRL, we believe that AI has the potential to create a positive
            societal impact when developed responsibly and inclusively. Our
            foundation is committed to advancing AI technologies that are not
            only cutting-edge but also scalable, ethical, and aligned with the
            betterment of society. We work across a wide range of sectors
            including healthcare, agriculture, biopharma, education, and more,
            driving forward AI solutions that make a tangible difference in the
            world.
          </p>
        </div>
      </div>
      {/* Mission Section */}
      <div className="relative bg-white">
        {/* Top wavy border */}
        <div className="absolute top-0 left-0 right-0 w-full h-12 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750247250/wavy-bottom-white_qen5uh.svg"
            alt="Wavy bottom border"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="py-16 pt-24 px-4 z-10 w-full max-w-7xl mx-auto">
          {/* Mission Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
              Our Mission
            </div>

            {/* Mission Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Building an Ecosystem of
              <br />
              Innovation and Responsibility
            </h1>

            {/* Mission Description */}
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Our mission is to lead the charge in AI innovation by creating an
              ecosystem that fosters collaboration and drives impactful change.
              We focus on developing AI technologies that are both ethical and
              practical, and we aim to make AI accessible and impactful across
              diverse sectors.
            </p>
          </div>

          {/* Two-column layout for diagram and points */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left column - Diagram */}
            <div className="w-full md:w-1/2">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245473/about_img_2_jtyhwv.png"
                alt="CAiRL Center of Excellence for AI"
                className="w-full h-auto"
              />
            </div>

            {/* Right column - Points */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                {/* First point */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#005BA9] mb-2">
                    Advance AI research and development
                  </h3>
                  <p className="text-gray-600">
                    in domains like healthcare, agriculture, and biopharma,
                    leveraging AI to solve real-world problems.
                  </p>
                </div>

                {/* Second point */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#005BA9] mb-2">
                    Build an inclusive AI ecosystem
                  </h3>
                  <p className="text-gray-600">
                    that promotes interdisciplinary collaboration and fosters
                    diverse perspectives.
                  </p>
                </div>

                {/* Third point */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#005BA9] mb-2">
                    Champion ethical AI development
                  </h3>
                  <p className="text-gray-600">
                    ensuring that our work is responsible, transparent, and
                    aligned with societal values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="relative bg-transparent text-center flex flex-col items-center mb-12 pt-10">
        {/* Bottom wavy border */}
        <div className="absolute top-0 left-0 right-0 w-full h-12 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750247127/wavy-top-gray_rkk6ly.png"
            alt="Wavy top border"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center flex flex-col items-center my-12 mt-24 px-4 z-10 w-full max-w-4xl">
          {/* Vision Header */}
          <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
            Our Vision
          </div>

          {/* Vision Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            A World Empowered by AI
          </h1>

          {/* Vision Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Our vision is to create a future where AI is seamlessly integrated
            into every aspect of life, improving human welfare, enabling
            sustainable development, and empowering communities around the
            world. At CAiRL, we aim to be a leader in the global AI ecosystem,
            driving responsible AI innovation that benefits humanity.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col justify-center items-center mb-16">
        {/* Vision Header */}
        <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
          Advisory Team
        </div>
        {/* Strategic Advisors */}
        <TeamSection
          title="Strategic Advisors"
          members={[
            {
              name: "Prof. Pallu Reddanna",
              role: "President - FABA",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245473/Prof._Pallu_Reddanna_q6htli.png",
            },
            {
              name: "Dr. Ratnakar Palakodeti",
              role: "Secretary General - FABA",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Dr._Ratnakar_Palakodeti_eqbgsd.png",
            },
            {
              name: "Mr. Rahul Palth",
              role: "CEO-MATH (T-Hub)",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245471/Mr._Rahul_Paith_ohpxmc.png",
            },
          ]}
        />

        {/* Academic Advisors */}
        <TeamSection
          title="Academic Advisors"
          members={[
            {
              name: "Mr. Neil Gogte",
              role: "Founder & Director of Knitt, NGIT, KNEC, KSJC",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Neil_Gogte_h1wvou.png",
            },
            {
              name: "Dr. Prasad Null",
              role: "Physician Entrepreneur",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Dr._Prasad_Nuli_xdu6ew.png",
            },
            {
              name: "Dr. Ravi Guijula",
              role: "PhD from IIT Hyderabad",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245470/Dr._Ravi_Gujjula_gtafxt.png",
            },
          ]}
        />

        {/* Industry Advisors */}
        <TeamSection
          title="Industry Advisors"
          members={[
            {
              name: "Dr. Suhit Anantula",
              role: "Founder - The Helix Lab",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245471/Dr._Suhit_Anantula_vhfzlk.png",
            },
            {
              name: "Mr. Anurag Garg",
              role: "Global Engineering Executive & General Manager",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245470/Mr._Anurag_Garg_ldm2kn.png",
            },
            {
              name: "Dr. Suraj Bhansali",
              role: "Experienced Leader at GCC & CRO",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245473/Dr._Suraj_Bhansali_witjs7.png",
            },
          ]}
        />

        {/* Technology Advisors */}
        <TeamSection
          title="Technology Advisors"
          members={[
            {
              name: "Mr. Sharath Doddla",
              role: "Founder, CTO at ADQ Services",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245472/Mr._Sharath_Doddla_fleimj.png",
            },
            {
              name: "Mr. Aswani Kumar Iraganaboina",
              role: "Founder & CEO of RunCode",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Aswani_Kumar_Iraganaboina_hx6afk.png",
            },
            {
              name: "Dr. Meenakshi S",
              role: "AUVNLP, Product Manager",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245470/Dr._Meenakshi_S_fnucbc.png",
            },
          ]}
        />

        <div className="w-full flex flex-col items-center justify-center mt-24">
          <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
            Our Team
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Board Members & Management Team
          </h1>
        </div>

        {/* Technology Advisors */}
        <TeamSection
          title=""
          members={[
            {
              name: "Mr. Rammohan Manamasa",
              role: "Founder & Chairman",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Rammohan_Manamasa_gqn4cl.png",
            },
            {
              name: "Mr. Ram Katamaraja",
              role: "Co-Founder",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Ram_Katamaraja_tj5jfe.png",
            },
            {
              name: "Mr. Sarvesh Singh",
              role: "Director General",
              image:
                "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245472/Mr._Sarvesh_Singh_rnmoam.png",
            },
          ]}
        />
      </div>

      {/* MOU Section */}
      <div className="relative bg-white py-16">
        {/* Top wavy border - same as previous sections */}
        <div className="absolute top-0 left-0 right-0 w-full h-12 overflow-hidden mb-16">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750247250/wavy-bottom-white_qen5uh.svg"
            alt="Wavy bottom border"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mt-28">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
              MOUs and Strategic Partnerships
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">MOUs</h2>
            <p className="text-gray-600 mb-8 text-lg">
              At CAIRL, we understand that collaboration is key to driving
              innovation and creating impactful AI solutions. We are proud to
              have formed several strategic partnerships and signed Memorandums
              of Understanding (MoUs) with leading organizations, institutions,
              and corporations to advance AI research, development, and
              application.
            </p>
            <button className="bg-[#005BA9] text-white px-6 py-3 rounded-lg hover:bg-[#004080] transition-colors">
              Know more
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245474/about_mou_img_ekci19.png"
              alt="MOU Partnerships"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/* FAQs Section */}
      <div className="relative bg-white py-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
              FAQs
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-1");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    1
                  </div>
                  <span className="text-lg font-medium">
                    What is CAiRL's mission?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-1" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  CAiRL's mission is to advance AI research and innovation in
                  India through collaborative partnerships, cutting-edge
                  research, and practical applications that address real-world
                  challenges. We aim to position India as a global leader in
                  responsible AI development.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-2");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    2
                  </div>
                  <span className="text-lg font-medium">
                    How does CAiRL collaborate with startups?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-2" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  CAiRL partners with startups through incubators like T-Hub,
                  where we offer mentorship and connections with industry
                  leaders. We help AI startups scale their solutions and
                  facilitate AI adoption across various industries, ensuring
                  that innovation leads to tangible societal benefits.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-3");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    3
                  </div>
                  <span className="text-lg font-medium">
                    What sectors does CAiRL focus on?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-3" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  CAiRL focuses on multiple sectors including healthcare,
                  agriculture, education, manufacturing, and public services.
                  Our interdisciplinary approach allows us to develop AI
                  solutions that address specific challenges in each sector
                  while promoting cross-sector innovation.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-4");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    4
                  </div>
                  <span className="text-lg font-medium">
                    How can I collaborate with CAiRL?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-4" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  You can collaborate with CAiRL as a research partner, industry
                  collaborator, startup, academic institution, or individual
                  researcher. Visit our Contact page to reach out with your
                  proposal or inquiry, and our team will guide you through the
                  collaboration process.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-5");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    5
                  </div>
                  <span className="text-lg font-medium">
                    Does CAiRL provide AI education or training programs?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-5" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  Yes, CAiRL offers various educational initiatives including
                  workshops, bootcamps, certificate programs, and specialized
                  courses in AI and related technologies. We collaborate with
                  academic institutions to develop curriculum and provide
                  hands-on training opportunities for students and
                  professionals.
                </p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-6");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    6
                  </div>
                  <span className="text-lg font-medium">
                    How does CAiRL ensure ethical AI development?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-6" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  CAiRL has established an Ethics Committee that oversees all
                  research and development activities. We adhere to strict
                  ethical guidelines, promote transparency in AI systems,
                  address bias and fairness concerns, and regularly conduct
                  ethical impact assessments of our projects.
                </p>
              </div>
            </div>

            {/* FAQ Item 7 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-7");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    7
                  </div>
                  <span className="text-lg font-medium">
                    How can I apply for grants or funding at CAiRL?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-7" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  CAiRL offers various funding opportunities through our grant
                  programs. Visit our website's Funding section for information
                  on current grant cycles, eligibility criteria, and application
                  procedures. We also provide guidance on proposal development
                  for potential applicants.
                </p>
              </div>
            </div>

            {/* FAQ Item 8 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-8");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    8
                  </div>
                  <span className="text-lg font-medium">
                    What are CAiRL's future goals for AI in India?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-8" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  CAiRL aims to establish India as a global AI innovation hub,
                  develop indigenous AI technologies that address local
                  challenges, create a robust AI talent pipeline, promote
                  responsible AI governance frameworks, and foster an ecosystem
                  that supports AI entrepreneurship and research excellence.
                </p>
              </div>
            </div>

            {/* FAQ Item 9 */}
            <div className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => {
                  const elem = document.getElementById("faq-9");
                  if (elem) {
                    elem.classList.toggle("hidden");
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#005BA9] flex items-center justify-center text-white mr-3">
                    9
                  </div>
                  <span className="text-lg font-medium">
                    How can I stay updated with CAiRL's initiatives?
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-[#005BA9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div id="faq-9" className="hidden mt-4 pl-9 pr-4 text-gray-600">
                <p>
                  You can stay updated with CAiRL's initiatives by subscribing
                  to our newsletter, following us on social media platforms,
                  attending our events and webinars, and regularly visiting our
                  website for the latest news and announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
