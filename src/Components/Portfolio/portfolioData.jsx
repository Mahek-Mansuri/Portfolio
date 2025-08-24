
import img3 from "../../Assets/portfolio-3.jpg";
// HADAF
import hadafMain from "../../Assets/Hadaf/hadaf-main.jpg"
import hadafMain1 from "../../Assets/Hadaf/hadaf-main1.jpg"
import hadafMain2 from "../../Assets/Hadaf/hadaf-main2.jpg"
import hadafMain3 from "../../Assets/Hadaf/hadaf-main3.jpg"
import hadafMain4 from "../../Assets/Hadaf/hadaf-main4.jpg"
import hadafMain5 from "../../Assets/Hadaf/hadaf-main5.jpg"
import hadafMain6 from "../../Assets/Hadaf/hadaf-main6.jpg"
import hadafMain7 from "../../Assets/Hadaf/hadaf-main7.jpg"
// CCTV
import cctvMian from "../../Assets/CCTV/CCTV-MAIN.jpg"
import cctvMian1 from "../../Assets/CCTV/cctv1.jpg"
import cctvMian2 from "../../Assets/CCTV/cctv2.jpg"
import cctvMian3 from "../../Assets/CCTV/cctv3.jpg"
import cctvMian4 from "../../Assets/CCTV/cctv4.jpg"
// telvas
import telvasMain from "../../Assets/telvas-library/telvasMain.jpg"
import telvasMain1 from "../../Assets/telvas-library/telvasMain1.jpg"
import telvasMain2 from "../../Assets/telvas-library/telvasMain2.jpg"
// VS-Capital
import vsMain from "../../Assets/vs-capital/vsMain.jpg"
import vsMain1 from "../../Assets/vs-capital/vsMain1.jpg"
import vsMain2 from "../../Assets/vs-capital/vsMain2.jpg"
// Team-24
import team from "../../Assets/team-24/team.jpg"
import team1 from "../../Assets/team-24/team1.jpg"
import team2 from "../../Assets/team-24/team2.jpg"
import team3 from "../../Assets/team-24/team3.jpg"
import team4 from "../../Assets/team-24/team4.jpg"
import team5 from "../../Assets/team-24/team5.jpg"
import team6 from "../../Assets/team-24/team6.jpg"
import team7 from "../../Assets/team-24/team7.jpg"
import team8 from "../../Assets/team-24/team8.jpg"






export const cards = [
  {
    id: 1,
    title: "Hadaf Green Energy",
    subtitle: "Design, Development",
    images: [hadafMain,hadafMain1,hadafMain2,hadafMain3,hadafMain4,hadafMain5, hadafMain6, hadafMain7 ],  // 👈 array of images
    alt: "App Landing",
    category: "Web Development",
    date: "01-01-2024",
    description: "Hadaf Green Energy’s website provides solar energy solutions across India, featuring a clean user interface with interactive inquiry and consultation forms. It highlights solar technology benefits, service availability in major cities, and easy navigation for users interested in renewable energy. The site’s visually appealing design and intuitive layout make it simple for customers to connect and learn more about sustainable options."
  },
  {
    id: 2,
    title: "Xconnect",
    subtitle: "Design, Development",
    images: [cctvMian ,cctvMian1, cctvMian2 , cctvMian3 , cctvMian4], // can still be a single item
    alt: "Medical Concept",
    category: "Web Development",
    description: "This website showcases XCONNECT's advanced AI-driven surveillance solutions tailored for modern security needs such as smart cities, border security, and marine protection. It features a wide range of specialized CCTV camera products including network cameras, speed dome, thermal, and night vision technologies. The site also provides detailed product information, technical specifications, and a contact section for inquiries, emphasizing innovation and reliability in surveillance technology."

  },
  {
    id: 3,
    title: "Telvas Library",
    subtitle:  "Design, Development",
    images: [telvasMain , telvasMain1 , telvasMain2],
    alt: "Marketing Dashboard",
    category: "Web Development",
    description:
"This website, Telvas Library, provides a curated collection of educational cardiology videos, featuring expert talks on topics like the management of asymptomatic severe aortic stenosis. Users can browse and view multiple video lectures from renowned professionals, making it a valuable resource for medical knowledge sharing. The site offers an easy-to-navigate layout with direct access to archived and featured video content."  
  },

{
    id: 4,
    title: "VS Capital",
    subtitle:  "Design, Development",
    images: [vsMain , vsMain1 , vsMain2],
    alt: "E-commerce Platform",
    category: "Web Development",
    description:
    "This website, VS Capital, is a Surat-based financial firm specializing in providing unsecured and secured loans up to ₹50,000 quickly within the city limits. It offers tailored loan solutions with clear eligibility criteria based on collateral assets, empowering individuals with financial support for various needs like business, education, or expenses. The site highlights transparency, integrity, and personalized assistance, featuring an enquiry form for easy customer interaction."
  },
  {
    id: 5,
    title: "Team 24",
    subtitle:  "Design, Development",
    images: [team ,team1 ,team2 ,team3 ,team4 , team5 ,team6 ,team7 ,team8],
    alt: "Brand Identity",
    category: "Web Development",
    description:
    "This website belongs to Team24, a company based in Surat that produces a wide range of beverages, foods, nutraceuticals, cosmetics, and health care products. With over 20 years of experience, Team24 offers diverse product categories including snacks, carbonated and still drinks, beauty care, and health supplements. The site features easy navigation for exploring product ranges, brands, distribution partners, and customer testimonials, highlighting their commitment to innovation and quality."
  },
  {
    id: 6,
    title: "Social Campaign",
    subtitle:  "Design, Development",
    images: [img3],
    alt: "Social Media Campaign",
    category:  "Web Development"
  },
];
