import { useEffect } from "react";
import TeamSection from "./TeamSection";

const Team = () => {
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
    <section className="flex flex-col justify-center items-center mb-16 z-20">
      {/* Vision Header */}
      <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
        Advisory Team
      </div>
      {/* Strategic Advisors */}
      <div id="strategic-advisors">
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
      </div>

      {/* Academic Advisors */}
      <div id="academic-advisors">
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
      </div>

      {/* Industry Advisors */}
      <div id="industry-advisors">
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
      </div>

      {/* Technology Advisors */}
      <div id="technology-advisors">
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
      </div>

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
    </section>
  );
};

export default Team;
