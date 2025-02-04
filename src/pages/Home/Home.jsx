import Banner from "../../components/HomeComs/banner";
import Contact_Support from "../../components/HomeComs/Contact_Support";
import DonationNeeds from "../../components/HomeComs/DonationNeeds";
import HowItWorks from "../../components/HomeComs/HowItWor";
import SuccessStories from "../../components/HomeComs/SuccessStories";
import TopDonors from "../../components/HomeComs/TopDonors";

const Home = () => {
  return (
    <div>
      <Banner />
      <DonationNeeds />
      <TopDonors />
      <HowItWorks />
      <SuccessStories />
      <Contact_Support />
    </div>
  );
};

export default Home;
